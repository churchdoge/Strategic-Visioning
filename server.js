"use strict";
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const session = require("express-session");
const PgSession = require("connect-pg-simple")(session);
const helmet = require("helmet");
const bcrypt = require("bcryptjs");
const db = require("./db");
const { SYS, SHAPES } = require("./prompts");

const PORT = process.env.PORT || 3000;
const PROD = process.env.NODE_ENV === "production";
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

if (!process.env.DATABASE_URL) { console.error("DATABASE_URL is not set."); process.exit(1); }
if (!process.env.SESSION_SECRET) { console.error("SESSION_SECRET is not set."); process.exit(1); }

const app = express();
app.set("trust proxy", 1);
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"]
    }
  }
}));
app.use(express.json({ limit: "1mb" }));
app.use(session({
  store: new PgSession({ pool: db.pool, createTableIfMissing: true }),
  name: "csp.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: "lax", secure: PROD, maxAge: 1000 * 60 * 60 * 24 * 30 }
}));

/* ---------- helpers ---------- */
const newId = (p = "") => p + crypto.randomBytes(12).toString("base64url");
const isAdminEmail = e => ADMIN_EMAILS.includes(String(e || "").toLowerCase());
const PATH_RE = /^[A-Za-z0-9_\-]+(\/[A-Za-z0-9_\-]+){0,7}$/;
function bad(res, status, error, code) { return res.status(status).json({ error, code }); }

async function currentUser(req) {
  if (!req.session.uid) return null;
  if (req._user !== undefined) return req._user;
  const r = await db.pool.query("SELECT id,email,name FROM users WHERE id=$1", [req.session.uid]);
  const u = r.rows[0];
  req._user = u ? { id: u.id, email: u.email, name: u.name, isAdmin: isAdminEmail(u.email) } : null;
  return req._user;
}
function requireUser(handler) {
  return async (req, res) => {
    try {
      const user = await currentUser(req);
      if (!user) return bad(res, 401, "Sign in to continue.", "unauthenticated");
      await handler(req, res, user);
    } catch (e) {
      console.error(e);
      bad(res, 500, "Something went wrong on the server.", "unavailable");
    }
  };
}

/* simple in-memory rate limiter */
const buckets = new Map();
function limited(key, max, windowMs) {
  const now = Date.now();
  const b = (buckets.get(key) || []).filter(t => now - t < windowMs);
  b.push(now); buckets.set(key, b);
  return b.length > max;
}

/* ---------- access rules ---------- */
async function groupCtx(gid, user) {
  const g = await db.getDoc("groups/" + gid);
  if (!g) return null;
  const member = !!(await db.getDoc(`groups/${gid}/members/${user.id}`));
  const leader = g.leaderId === user.id || user.isAdmin;
  return { g, member, leader };
}
async function access(user, p) {
  const s = p.split("/");
  const none = { read: false, write: false };
  if (p === "config/fraternity") return { read: true, write: user.isAdmin };
  if (p === "groups") return { read: user.isAdmin, write: false };
  if (s[0] !== "groups" || s.length < 2) return none;
  const c = await groupCtx(s[1], user);
  if (!c) return none;
  const see = c.member || user.isAdmin;
  if (s.length === 2) return { read: see, write: c.leader };
  if (s[2] === "members") return { read: see, write: s.length === 4 && c.leader };
  if (s[2] === "subs") {
    if (s.length === 3) return { read: c.leader, write: false };
    return { read: c.leader || s[3] === user.id, write: s.length === 4 && s[3] === user.id && c.member };
  }
  if (s[2] === "work" && s.length === 4) {
    if (s[3] === "plan") return { read: c.leader || (c.member && !!c.g.planShared), write: c.leader };
    if (s[3] === "consolidated") return { read: c.leader, write: c.leader };
  }
  return none;
}
const GROUP_EDITABLE = ["name", "school", "cycle", "leaderId", "planShared"];

/* ---------- auth ---------- */
app.post("/api/auth/signup", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim().slice(0, 80);
    const email = String(req.body.email || "").trim().toLowerCase().slice(0, 200);
    const password = String(req.body.password || "");
    if (limited("signup:" + req.ip, 10, 3600e3)) return bad(res, 429, "Too many sign-ups from this network. Try again later.");
    if (!name) return bad(res, 400, "Add your name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return bad(res, 400, "Enter a valid email address.");
    if (password.length < 8) return bad(res, 400, "Use a password of at least 8 characters.");
    const exists = await db.pool.query("SELECT 1 FROM users WHERE email=$1", [email]);
    if (exists.rowCount) return bad(res, 409, "An account with that email already exists. Sign in instead.");
    const id = newId("u_");
    await db.pool.query("INSERT INTO users(id,email,name,password_hash) VALUES($1,$2,$3,$4)", [id, email, name, await bcrypt.hash(password, 11)]);
    req.session.regenerate(err => {
      if (err) return bad(res, 500, "Couldn’t start your session.");
      req.session.uid = id;
      res.json({ ok: true });
    });
  } catch (e) { console.error(e); bad(res, 500, "Couldn’t create the account."); }
});
app.post("/api/auth/login", async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    if (limited("login:" + req.ip + ":" + email, 10, 15 * 60e3)) return bad(res, 429, "Too many attempts. Wait 15 minutes and try again.");
    const r = await db.pool.query("SELECT id,password_hash FROM users WHERE email=$1", [email]);
    const u = r.rows[0];
    if (!u || !(await bcrypt.compare(password, u.password_hash))) return bad(res, 401, "That email and password don’t match.");
    req.session.regenerate(err => {
      if (err) return bad(res, 500, "Couldn’t start your session.");
      req.session.uid = u.id;
      res.json({ ok: true });
    });
  } catch (e) { console.error(e); bad(res, 500, "Couldn’t sign in."); }
});
app.post("/api/auth/logout", (req, res) => { req.session.destroy(() => { res.clearCookie("csp.sid"); res.json({ ok: true }); }); });

app.get("/api/me", requireUser(async (req, res, user) => res.json({ user })));
app.post("/api/me/password", requireUser(async (req, res, user) => {
  const cur = String(req.body.current || ""), next = String(req.body.next || "");
  if (next.length < 8) return bad(res, 400, "Use a new password of at least 8 characters.");
  const r = await db.pool.query("SELECT password_hash FROM users WHERE id=$1", [user.id]);
  if (!(await bcrypt.compare(cur, r.rows[0].password_hash))) return bad(res, 401, "Your current password isn’t right.");
  await db.pool.query("UPDATE users SET password_hash=$1 WHERE id=$2", [await bcrypt.hash(next, 11), user.id]);
  res.json({ ok: true });
}));
app.get("/api/me/teams", requireUser(async (req, res, user) => {
  const r = await db.pool.query("SELECT parent FROM docs WHERE id=$1 AND parent LIKE 'groups/%/members'", [user.id]);
  const out = [];
  for (const row of r.rows) {
    const gid = row.parent.split("/")[1];
    const g = await db.getDoc("groups/" + gid);
    if (g) out.push({ id: gid, ...g });
  }
  res.json({ teams: out });
}));
app.get("/api/users", requireUser(async (req, res, user) => {
  const ids = String(req.query.ids || "").split(",").filter(Boolean).slice(0, 200);
  if (!ids.length) return res.json({ users: {} });
  let allowed = ids;
  if (!user.isAdmin) {
    const mine = await db.pool.query("SELECT parent FROM docs WHERE id=$1 AND parent LIKE 'groups/%/members'", [user.id]);
    const parents = mine.rows.map(r => r.parent);
    const r = parents.length ? await db.pool.query("SELECT DISTINCT id FROM docs WHERE parent = ANY($1) AND id = ANY($2)", [parents, ids]) : { rows: [] };
    allowed = [...new Set([user.id, ...r.rows.map(x => x.id)])].filter(i => ids.includes(i));
  }
  const r = await db.pool.query("SELECT id,name FROM users WHERE id = ANY($1)", [allowed]);
  const users = {};
  r.rows.forEach(u => { users[u.id] = { name: u.name }; });
  res.json({ users });
}));

/* ---------- teams ---------- */
function genCode() {
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from(crypto.randomBytes(6), b => A[b % A.length]).join("");
}
app.post("/api/teams", requireUser(async (req, res, user) => {
  const name = String(req.body.name || "").trim().slice(0, 120);
  if (!name) return bad(res, 400, "Add the chapter name.");
  if (limited("team:" + user.id, 10, 3600e3)) return bad(res, 429, "Too many teams created. Try again later.");
  let code;
  for (let i = 0; i < 8; i++) { code = genCode(); if (!(await db.getDoc("codes/" + code))) break; }
  const gid = newId("g_");
  await db.setDoc("groups/" + gid, {
    name, school: String(req.body.school || "").slice(0, 160), cycle: String(req.body.cycle || "").slice(0, 20),
    leaderId: user.id, code, createdAt: Date.now(), planShared: false
  });
  await db.setDoc("codes/" + code, { gid });
  await db.setDoc(`groups/${gid}/members/${user.id}`, { uid: user.id, role: String(req.body.role || "").slice(0, 80), joinedAt: Date.now() });
  res.json({ gid });
}));
app.post("/api/teams/join", requireUser(async (req, res, user) => {
  const code = String(req.body.code || "").trim().toUpperCase();
  if (limited("join:" + user.id, 20, 3600e3)) return bad(res, 429, "Too many attempts. Try again later.");
  const c = /^[A-Z0-9]{6}$/.test(code) ? await db.getDoc("codes/" + code) : null;
  if (!c) return bad(res, 404, "That code doesn’t match a team. Check it with your leader.");
  const mp = `groups/${c.gid}/members/${user.id}`;
  if (!(await db.getDoc(mp))) await db.setDoc(mp, { uid: user.id, role: String(req.body.role || "").slice(0, 80), joinedAt: Date.now() });
  res.json({ gid: c.gid });
}));
app.post("/api/groups/:gid/members/:uid/reset-password", requireUser(async (req, res, user) => {
  const c = await groupCtx(req.params.gid, user);
  if (!c || !c.leader) return bad(res, 403, "Only the team leader can do that.");
  if (!(await db.getDoc(`groups/${req.params.gid}/members/${req.params.uid}`))) return bad(res, 404, "That person isn’t on this team.");
  const r = await db.pool.query("SELECT email FROM users WHERE id=$1", [req.params.uid]);
  if (!r.rows[0]) return bad(res, 404, "Account not found.");
  if (isAdminEmail(r.rows[0].email) && !user.isAdmin) return bad(res, 403, "Facilitator passwords can’t be reset here.");
  const temp = Array.from(crypto.randomBytes(9), b => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");
  await db.pool.query("UPDATE users SET password_hash=$1 WHERE id=$2", [await bcrypt.hash(temp, 11), req.params.uid]);
  await db.pool.query("DELETE FROM session WHERE (sess->>'uid')=$1", [req.params.uid]).catch(() => {});
  res.json({ tempPassword: temp });
}));

/* ---------- Claude consolidation ---------- */
function parseJson(text) {
  const t = String(text || "").trim();
  try { return JSON.parse(t); } catch (e) {}
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) { try { return JSON.parse(fence[1]); } catch (e) {} }
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch (e) {} }
  return null;
}
app.post("/api/groups/:gid/consolidate", requireUser(async (req, res, user) => {
  const c = await groupCtx(req.params.gid, user);
  if (!c || !c.leader) return bad(res, 403, "Only the team leader can consolidate.", "not_granted");
  if (!process.env.ANTHROPIC_API_KEY) return bad(res, 503, "Claude isn’t configured on this server.", "not_granted");
  const m = String(req.body.m || "");
  if (!SHAPES[m]) return bad(res, 400, "Unknown step.");
  const input = JSON.stringify(req.body.input || {});
  if (input.length > 64000) return bad(res, 413, "Too much input to consolidate at once.");
  if (limited("claude:" + user.id, 30, 3600e3)) return bad(res, 429, "Consolidation limit reached. Try again in an hour.", "rate_limited");
  const prompt = `${SYS}\n\n${SHAPES[m]}\n\nParticipant input (JSON):\n${input}\n\nReply with only the JSON object, no other text.`;
  const r = await fetch((process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com") + "/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": process.env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: MODEL, max_tokens: 4096, messages: [{ role: "user", content: prompt }] })
  });
  if (!r.ok) {
    const body = await r.text();
    console.error("Anthropic error", r.status, body.slice(0, 500));
    return bad(res, 502, "Claude didn’t respond.", r.status === 429 ? "rate_limited" : "unavailable");
  }
  const j = await r.json();
  const text = (j.content || []).filter(b => b.type === "text").map(b => b.text).join("\n");
  const data = parseJson(text);
  if (!data || typeof data !== "object" || Array.isArray(data)) return bad(res, 502, "Claude’s reply couldn’t be read.", "invalid_json");
  res.json({ data });
}));

/* ---------- generic document API with access rules ---------- */
function checkPath(p, wantDoc) {
  if (!PATH_RE.test(p)) return false;
  const n = p.split("/").length;
  return wantDoc ? n % 2 === 0 : n % 2 === 1;
}
app.get("/api/doc", requireUser(async (req, res, user) => {
  const p = String(req.query.path || "");
  if (!checkPath(p, true)) return bad(res, 400, "Bad path.", "invalid_argument");
  const a = await access(user, p);
  res.json({ data: a.read ? await db.getDoc(p) : null });
}));
app.get("/api/col", requireUser(async (req, res, user) => {
  const p = String(req.query.path || "");
  if (!checkPath(p, false)) return bad(res, 400, "Bad path.", "invalid_argument");
  const a = await access(user, p);
  if (!a.read) return res.json({ docs: [] });
  let rows = await db.listCol(p);
  res.json({ docs: rows.map(r => ({ id: r.id, data: r.data })) });
}));
async function writeGuard(user, p, res, del) {
  if (!checkPath(p, true)) { bad(res, 400, "Bad path.", "invalid_argument"); return false; }
  if (!del && /^groups\/[^/]+\/members\//.test(p)) { bad(res, 403, "Team membership changes go through the join code.", "invalid_argument"); return false; }
  const a = await access(user, p);
  if (!a.write) { bad(res, 403, "You don’t have permission to change this.", "invalid_argument"); return false; }
  return true;
}
function mergeDeep(a, b) {
  const out = { ...(a || {}) };
  for (const [k, v] of Object.entries(b || {})) out[k] = v && typeof v === "object" && !Array.isArray(v) && out[k] && typeof out[k] === "object" && !Array.isArray(out[k]) ? mergeDeep(out[k], v) : v;
  return out;
}
async function sanitizeGroupWrite(p, next, user, res) {
  const s = p.split("/");
  if (s.length !== 2 || s[0] !== "groups") return next;
  const cur = await db.getDoc(p);
  const out = { ...cur };
  for (const k of GROUP_EDITABLE) if (k in next) out[k] = next[k];
  if (out.leaderId !== cur.leaderId && !(await db.getDoc(`groups/${s[1]}/members/${out.leaderId}`))) { bad(res, 400, "The new leader must be on the team.", "invalid_argument"); return null; }
  return out;
}
app.put("/api/doc", requireUser(async (req, res, user) => {
  const p = String(req.body.path || ""), data = req.body.data;
  if (!data || typeof data !== "object" || Array.isArray(data)) return bad(res, 400, "Body must be an object.", "invalid_argument");
  if (!(await writeGuard(user, p, res))) return;
  const out = await sanitizeGroupWrite(p, data, user, res); if (!out) return;
  await db.setDoc(p, out);
  res.json({ ok: true });
}));
app.patch("/api/doc", requireUser(async (req, res, user) => {
  const p = String(req.body.path || ""), data = req.body.data;
  if (!data || typeof data !== "object" || Array.isArray(data)) return bad(res, 400, "Body must be an object.", "invalid_argument");
  if (!(await writeGuard(user, p, res))) return;
  const cur = await db.getDoc(p);
  if (!cur) return bad(res, 400, "That document doesn’t exist.", "invalid_argument");
  const out = await sanitizeGroupWrite(p, mergeDeep(cur, data), user, res); if (!out) return;
  await db.setDoc(p, out);
  res.json({ ok: true });
}));
app.delete("/api/doc", requireUser(async (req, res, user) => {
  const p = String(req.query.path || "");
  if (!(await writeGuard(user, p, res, true))) return;
  if (/^groups\/[^/]+$/.test(p)) return bad(res, 400, "Teams can’t be deleted here.", "invalid_argument");
  await db.deleteDoc(p);
  res.json({ ok: true });
}));

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use(express.static(path.join(__dirname, "public"), { index: "index.html", maxAge: PROD ? "1h" : 0 }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

db.init().then(() => app.listen(PORT, () => console.log(`Chapter Strategic Planning listening on ${PORT}`)))
  .catch(e => { console.error("Database init failed:", e); process.exit(1); });
