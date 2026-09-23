"use strict";
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
  max: 10
});

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS docs (
      path TEXT PRIMARY KEY,
      parent TEXT NOT NULL,
      id TEXT NOT NULL,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS docs_parent_idx ON docs(parent);
    CREATE INDEX IF NOT EXISTS docs_id_idx ON docs(id);
  `);
}

function split(path) {
  const i = path.lastIndexOf("/");
  return { parent: path.slice(0, i), id: path.slice(i + 1) };
}

async function getDoc(path) {
  const r = await pool.query("SELECT data FROM docs WHERE path=$1", [path]);
  return r.rows[0] ? r.rows[0].data : null;
}
async function setDoc(path, data) {
  const { parent, id } = split(path);
  await pool.query(
    `INSERT INTO docs(path,parent,id,data,updated_at) VALUES($1,$2,$3,$4,now())
     ON CONFLICT(path) DO UPDATE SET data=EXCLUDED.data, updated_at=now()`,
    [path, parent, id, data]
  );
}
async function deleteDoc(path) {
  await pool.query("DELETE FROM docs WHERE path=$1", [path]);
}
async function listCol(parent) {
  const r = await pool.query("SELECT id, data FROM docs WHERE parent=$1 ORDER BY id", [parent]);
  return r.rows;
}

module.exports = { pool, init, getDoc, setDoc, deleteDoc, listCol };
