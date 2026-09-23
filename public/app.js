"use strict";
const DEFAULT_CONFIG = {
 "schema": 2,
 "cycle": "2026–27",
 "coreValues": "Friendship, Justice, Learning",
 "vision": "To inspire and empower our brothers to positively impact the world.",
 "mission": "To foster a brotherhood of transformational leaders committed to Friendship, Justice, and Learning.",
 "planName": "Expect More",
 "requiredImperative": "We commit to protecting the physical and mental health and safety of our chapter brothers.",
 "requiredPillar": "hsw",
 "pillars": [
  {
   "id": "hsw",
   "title": "Health, Safety & Wellness",
   "tagline": "Develop practices and policies that instill a culture that promotes the life-long mental, emotional, and physical health, well-being and dignity of our members.",
   "goals": [
    {
     "title": "Culture of Accountability",
     "tagline": "Develop a culture that effectively promotes the dignity of our members through effective risk management practices that proactively address issues of health, safety and wellness."
    },
    {
     "title": "Mental Health",
     "tagline": "Promote the welfare of our members through effective mental health resources."
    },
    {
     "title": "Chapter Enhancement",
     "tagline": "Develop and implement an effective enhancement plan that ensures the long-term growth, success, and sustainability of our chapters and members."
    },
    {
     "title": "Housing",
     "tagline": "Improve and expand Sigma Chi housing facilities to ensure every housing environment for Sigma Chi members is conducive to personal development with the health, safety, and wellness of our members as the foremost objective."
    },
    {
     "title": "Risk Management",
     "tagline": "Infuse the fraternity with a risk management and harm reduction focus."
    }
   ],
   "targets": [
    "Reduce confirmed hazing violations by at least 10% this year, working toward zero",
    "Reduce confirmed alcohol and substance abuse violations by at least 10% this year",
    "Every member understands and respects consent; no chapter involvement in sexual misconduct",
    "Equip officers to connect brothers with mental health resources, using the Health & Wellness Index",
    "Chapter facility earns a passing grade on the Constantine Housing Initiative property inspection",
    "If in Chapter Enhancement, graduate from the program this year"
   ]
  },
  {
   "id": "eng",
   "title": "Engagement",
   "tagline": "Provide meaningful opportunities and experiences that inspire our members, their families, and our community of stakeholders to engage with Sigma Chi.",
   "goals": [
    {
     "title": "Community",
     "tagline": "Demonstrate character-in-action to ensure Sigma Chi is a recognized leader in communities around the world."
    },
    {
     "title": "Create a Culture of Giving Back",
     "tagline": "Create a culture where members feel inspired to give back in support of Sigma Chi."
    },
    {
     "title": "Events and Activities",
     "tagline": "Provide purposeful, fun, and meaningful activities and events which draw members together."
    },
    {
     "title": "Families",
     "tagline": "Demonstrate a deep understanding and commitment to the role that families play in the lives of our members."
    }
   ],
   "targets": [
    "At least one chapter member serves as an officer on the Interfraternity Council",
    "Every undergraduate completes at least 20 hours of community service this year",
    "Grow the chapter’s Huntsman Cancer Foundation giving toward the Fraternity’s $3MM annual goal",
    "Host an American Red Cross blood drive",
    "90% of members are involved in at least one other student organization",
    "Members serving in student government, up to Student Body President",
    "Submit a Chapter Balfour Award nominee",
    "Launch or sustain a chapter Parents’ Club",
    "An alumnus mentor for every undergraduate who wants one",
    "Every member activates a MemberHub account"
   ]
  },
  {
   "id": "dev",
   "title": "Development",
   "tagline": "Provide our members with a broad array of resources and opportunities that will continuously enhance their growth and wellbeing throughout life.",
   "goals": [
    {
     "title": "The Transformational Leader Program",
     "tagline": "Provide unparalleled and accredited educational opportunities enabling our brothers to reach their fullest potential."
    },
    {
     "title": "Ritual Training, Inspiration & Education",
     "tagline": "Connect our brothers to our values through deployment of ritualistic training, inspiration, and education."
    },
    {
     "title": "Officer Training",
     "tagline": "Offer impactful officer training education enabling chapters and officers to operate at the highest level."
    },
    {
     "title": "Volunteer Training",
     "tagline": "Create a high-quality volunteer development framework that advances the interests of the fraternity and our members."
    }
   ],
   "targets": [
    "100% of new members earn the Foundational Leadership Certificate",
    "50% of members earn at least one stackable certificate beyond the Foundational Leadership Certificate",
    "100% of undergraduates complete Ritual for Life",
    "The chapter is ritually certified",
    "At least two trained, certified, and active Ritual Peers, building toward two per class",
    "Every officer completes TransfORM online training within 30 days of taking office",
    "Chapter Advisor completes training within three months and attends the Krach Transformational Leaders Workshop"
   ]
  },
  {
   "id": "gro",
   "title": "Growth",
   "tagline": "Execute strategies based on Fraternity values that demonstrate an entrepreneurial spirit and empower the selection, growth and retention of individual members while improving the strength of the chapters.",
   "goals": [
    {
     "title": "Member Recruitment & Retention",
     "tagline": "Provide exceptional tools and resources to enable the Fraternity and its chapters to better identify, recruit, and retain men that meet the values and standards of the Fraternity."
    },
    {
     "title": "Undergraduate Chapters",
     "tagline": "Provide exceptional tools and resources to enable the chapters to meet optimal levels of success."
    },
    {
     "title": "Alumni Chapters",
     "tagline": "Implement a strategy to increase the number of alumni chapters (and associations/clubs) and increase the number of alumni involved with chapters."
    },
    {
     "title": "Expansion Process",
     "tagline": "Implement an innovative expansion process that enables the support and success of new and returning chapters."
    }
   ],
   "targets": [
    "Grow undergraduate membership by at least 3% this year",
    "Chapter GPA above the all-men’s average at our institution",
    "Chapter cumulative GPA at or above 2.75",
    "Develop a chapter strategic plan and execute it all year",
    "Involve alumni in recruitment",
    "Keep upperclassmen engaged through graduation",
    "Give legacies due consideration and prepare them for recruitment"
   ]
  },
  {
   "id": "digi",
   "title": "Digital Transformation",
   "tagline": "Modernize the technology, data, and digital experiences that connect members to Sigma Chi and to each other.",
   "goals": [
    {
     "title": "Technology",
     "tagline": "Implement innovative and intuitive tools that enable members to be connected to and engaged in Sigma Chi both internationally and locally."
    }
   ],
   "targets": [
    "Keep every member’s contact information current so all brothers stay informed",
    "Officers use toolbox.sigmachi.org and the Fraternity’s chapter tools to run chapter business"
   ]
  },
  {
   "id": "gov",
   "title": "Fraternity Stewardship",
   "tagline": "Safeguard the Fraternity's governance, financial oversight, and legal foundation while preserving its history, heritage, and traditions and supporting the Sweetheart program.",
   "goals": [
    {
     "title": "History, Heritage, and Traditions",
     "tagline": "Preserving and Advancing Sigma Chi’s rich history through forward-thinking and progressive strategies."
    },
    {
     "title": "Sweethearts",
     "tagline": "Support and elevate the role of Chapter and International Sweethearts within Sigma Chi."
    },
    {
     "title": "Financial Stewardship & Oversight",
     "tagline": "Strengthen financial oversight, investment stewardship, and fiscal accountability across the Fraternity."
    },
    {
     "title": "Governance and Legal",
     "tagline": "Modernize the Fraternity's governing framework and strengthen its legal and accountability infrastructure."
    }
   ],
   "targets": [
    "Preserve the chapter’s history, heritage, and traditions in a chapter archive",
    "Select and support a Chapter Sweetheart using the Fraternity’s selection process and best practices"
   ]
  }
 ]
};
const MODS = [
  {id:"m1",n:1,title:"Survey the landscape",short:"SPOT analysis",meet:"Strategy Meeting 1 reviews everyone’s SPOT analysis and the list of possible focus areas."},
  {id:"m2",n:2,title:"Identify principled priorities",short:"Imperatives and goals",meet:"Strategy Meeting 2 settles the chapter imperatives and sets SMART goals."},
  {id:"m3",n:3,title:"Communicate your why",short:"Why and buy-in",meet:"Strategy Meeting 3 builds the action plan and prepares the chapter buy-in meeting."},
  {id:"m4",n:4,title:"In-action review",short:"After buy-in",meet:"Strategy Meeting 4 reviews the buy-in meeting and folds revisions into the plan."},
  {id:"m5",n:5,title:"Check and reflect",short:"Reflection",meet:"Strategy Meetings 5 and 6 cover challenges, changes, and an action plan check-in."}
];
const BUYIN = [
  "Present the strategic recommendations to the chapter",
  "Choose the delivery format (in person or virtual, and any presentation support)",
  "Explain to the chapter how Goal Owners and Leaders were selected",
  "Collect and finalize strategic action plans",
  "Measure progress against goals and plans",
  "Communicate ongoing progress on goal achievement to the chapter",
  "Line up ongoing support from others to change chapter culture"
];
const S = {db:null,user:null,sample:null,dl:null,me:null,isOwner:false,canWrite:null,config:clone(DEFAULT_CONFIG),names:{},unsubs:[],bind:null,dash:{members:[],subs:[],cons:{},mod:"m1",running:{},raw:{}},autoRan:{}};

/* ---------- utilities ---------- */
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function clone(x){return x==null?x:JSON.parse(JSON.stringify(x))}
function getPath(o,p){return p.split(".").reduce((a,k)=>a==null?undefined:a[k],o)}
function setPath(o,p,v){const ks=p.split(".");let a=o;for(let i=0;i<ks.length-1;i++){const k=ks[i];if(a[k]==null||typeof a[k]!=="object")a[k]=/^\d+$/.test(ks[i+1])?[]:{};a=a[k]}a[ks[ks.length-1]]=v}
function norm(s){return String(s||"").toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}
function has(v){if(v==null)return false;if(typeof v==="string")return v.trim()!=="";if(Array.isArray(v))return v.some(has);if(typeof v==="object")return Object.values(v).some(has);return false}
function clean(arr){return (arr||[]).map(x=>String(x||"").trim()).filter(Boolean)}
function ago(t){if(!t)return "—";const d=(Date.now()-t)/1000;if(d<60)return "just now";if(d<3600)return Math.round(d/60)+" min ago";if(d<86400)return Math.round(d/3600)+" hr ago";return new Date(t).toLocaleDateString()}
function $(s,r=document){return r.querySelector(s)}
const main=()=>$("#main");
let toastT;
function toast(msg){let t=$("#toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";t.setAttribute("role","status");document.body.appendChild(t)}t.textContent=msg;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>{t.hidden=true},4200)}
function nm(id){if(!id)return "Someone";return S.names[id]||(id===S.me?"You":"Team member")}
async function resolveNames(ids){const need=[...new Set(ids)].filter(i=>i&&!(i in S.names));if(!need.length)return;try{const j=await API("GET","/api/users?ids="+encodeURIComponent(need.join(",")));for(const id of need)S.names[id]=(j.users[id]&&j.users[id].name)||""}catch(e){}}

/* ---------- server API and document-store client ---------- */
async function API(method,url,body){
  const r=await fetch(url,{method,headers:body?{"Content-Type":"application/json"}:{},body:body?JSON.stringify(body):undefined,credentials:"same-origin"});
  let j=null;try{j=await r.json()}catch(e){}
  if(!r.ok){const e=new Error((j&&j.error)||r.statusText||"Request failed");e.status=r.status;e.code=(j&&j.code)||(r.status===403?"invalid_argument":r.status===401?"unauthenticated":"unavailable");
    if(r.status===401&&!url.startsWith("/api/auth")&&url!=="/api/me"&&url!=="/api/me/password"){S.me=null;location.hash="#/signin"}throw e}
  return j||{};
}
function snapOf(path,data){return {id:path.split("/").pop(),exists:data!=null,data:()=>data==null?undefined:clone(data),metadata:{}}}
function poll(fn,next,err){let stop=false,last=null,t;const tick=async()=>{if(stop)return;try{const r=await fn();if(r.key!==last){last=r.key;next(r.val)}}catch(e){if(e.status===401){stop=true;err&&err({code:"revoked"});return}}if(!stop)t=setTimeout(tick,document.hidden?20000:5000)};tick();return()=>{stop=true;clearTimeout(t)}}
function newId(){const a=new Uint8Array(12);crypto.getRandomValues(a);return Array.from(a,b=>"abcdefghijklmnopqrstuvwxyz0123456789"[b%36]).join("")}
const StoreDB={
  doc(path){const q=()=>API("GET","/api/doc?path="+encodeURIComponent(path));return {id:path.split("/").pop(),path,
    get:async()=>snapOf(path,(await q()).data),
    set:async d=>{await API("PUT","/api/doc",{path,data:d})},
    update:async d=>{await API("PATCH","/api/doc",{path,data:d})},
    delete:async()=>{await API("DELETE","/api/doc?path="+encodeURIComponent(path))},
    onSnapshot(next,err){return poll(async()=>{const j=await q();return {key:JSON.stringify(j.data),val:snapOf(path,j.data)}},next,err)}}},
  collection(path){const list=async()=>{const j=await API("GET","/api/col?path="+encodeURIComponent(path));const docs=j.docs.map(d=>snapOf(path+"/"+d.id,d.data));return {docs,size:docs.length,empty:!docs.length,key:JSON.stringify(j.docs)}};
    return {path,doc:id=>StoreDB.doc(path+"/"+(id||newId())),get:list,onSnapshot(next,err){return poll(async()=>{const s=await list();return {key:s.key,val:s}},next,err)}}}
};
function unsubAll(){S.unsubs.forEach(u=>{try{u()}catch(e){}});S.unsubs=[]}

/* ---------- saver: one write at a time, debounced ---------- */
class Saver{
  constructor(ref,getBody){this.ref=ref;this.getBody=getBody;this.t=null;this.busy=false;this.dirty=false}
  touch(){this.dirty=true;clearTimeout(this.t);this.status("Saving…");this.t=setTimeout(()=>this.flush(),1000)}
  status(s){const el=$("#savestate");if(el)el.textContent=s}
  async flush(){
    if(this.busy){clearTimeout(this.t);this.t=setTimeout(()=>this.flush(),400);return}
    if(!this.dirty)return;
    this.busy=true;this.dirty=false;
    const body=clone(this.getBody());body.updatedAt=Date.now();
    try{await this.ref.set(body);this.status("Saved")}
    catch(e){
      if(e&&e.code==="unavailable"){this.dirty=true;setTimeout(()=>this.flush(),1500+Math.random()*1000)}
      else if(e&&e.code==="invalid_argument"){this.status("Not saved — you have view-only access");S.canWrite=false}
      else this.status("Not saved — "+(e&&e.message||"try again"));
    }
    this.busy=false;if(this.dirty)this.flush();
  }
}

/* ---------- form field builders (bound to S.bind.model) ---------- */
function M(){return S.bind.model()}
function fText(path,label,hint,rows){const v=getPath(M(),path)||"";return `<label class="field">${label?`<span class="lab">${esc(label)}</span>`:""}${hint?`<span class="hint">${esc(hint)}</span>`:""}<textarea data-bind="${path}" rows="${rows||4}">${esc(v)}</textarea></label>`}
function fInput(path,label,ph,list){const v=getPath(M(),path)||"";return `<label class="field">${label?`<span class="lab">${esc(label)}</span>`:""}<input type="text" data-bind="${path}" value="${esc(v)}" placeholder="${esc(ph||"")}" ${list?`list="${list}"`:""}></label>`}
function ensureArr(path,min,tpl){const m=M();let a=getPath(m,path);if(!Array.isArray(a)){a=[];setPath(m,path,a)}while(a.length<min)a.push(clone(tpl===undefined?"":tpl));return a}
function fList(path,o){o=o||{};const min=o.min??1,max=o.max??8;const a=ensureArr(path,min,"");
  return `<div class="field">${o.label?`<span class="lab">${esc(o.label)}</span>`:""}${o.hint?`<span class="hint">${esc(o.hint)}</span>`:""}<div class="list">${a.map((v,i)=>`<div class="row"><input type="text" data-bind="${path}.${i}" value="${esc(v)}" placeholder="${esc(o.ph||"")}" aria-label="${esc((o.label||"Item")+" "+(i+1))}">${a.length>min?`<button class="icon" data-del="${path}.${i}" aria-label="Remove">×</button>`:""}</div>`).join("")}</div>${a.length<max?`<button class="btn ghost sm" data-add="${path}">Add ${esc(o.add||"another")}</button>`:""}</div>`}
function fRows(path,o){const min=o.min??1,max=o.max??8;const tpl={};o.cols.forEach(c=>tpl[c.k]="");const a=ensureArr(path,min,tpl);
  return `<div class="field">${o.label?`<span class="lab">${esc(o.label)}</span>`:""}${o.hint?`<span class="hint">${esc(o.hint)}</span>`:""}<div class="list">${a.map((r,i)=>`<div class="row"><div style="flex:1;display:grid;gap:.35rem;grid-template-columns:${o.grid||"1fr"}">${o.cols.map(c=>c.area?`<textarea rows="2" data-bind="${path}.${i}.${c.k}" placeholder="${esc(c.ph)}" aria-label="${esc(c.ph)}">${esc(r[c.k]||"")}</textarea>`:`<input type="text" data-bind="${path}.${i}.${c.k}" value="${esc(r[c.k]||"")}" placeholder="${esc(c.ph)}" aria-label="${esc(c.ph)}">`).join("")}</div>${a.length>min?`<button class="icon" data-del="${path}.${i}" aria-label="Remove">×</button>`:""}</div>`).join("")}</div>${a.length<max?`<button class="btn ghost sm" data-add="${path}" data-tpl='${esc(JSON.stringify(tpl))}'>Add ${esc(o.add||"row")}</button>`:""}</div>`}

const ACT={};
/* Expect More alignment */
function pillar(id){return (S.config.pillars||[]).find(p=>p.id===id)}
function areaParts(a){const [pid,gi]=String(a||"").split(":");const p=pillar(pid);if(!p)return null;const g=gi!==undefined&&p.goals?p.goals[+gi]:null;return {p,g}}
function areaLabel(a){const x=areaParts(a);if(!x)return "";return x.p.title+(x.g?" › "+x.g.title:"")}
function areaPid(a){return String(a||"").split(":")[0]}
function areaOptions(cur){return `<option value="">Choose an Expect More area…</option>${(S.config.pillars||[]).map(p=>`<optgroup label="${esc(p.title)}"><option value="${esc(p.id)}" ${cur===p.id?"selected":""}>${esc(p.title)} (area overall)</option>${(p.goals||[]).map((g,i)=>`<option value="${esc(p.id)}:${i}" ${cur===p.id+":"+i?"selected":""}>${esc(g.title)}</option>`).join("")}</optgroup>`).join("")}`}
function fArea(path,label){const v=getPath(M(),path)||"";return `<label class="field">${label?`<span class="lab">${esc(label)}</span>`:""}<select data-bind="${path}" data-rerender="1">${areaOptions(v)}</select></label>`}
function fTargets(pid,goalsPath,o){const p=pillar(pid);if(!p||!(p.targets||[]).length)return "";o=o||{};
  return `<details class="targets"><summary>Fraternity targets your chapter can move in ${esc(p.title)}</summary><p class="hint">From the Expect More plan. Select one to use it as a goal starting point, then make it specific to your chapter.</p><div class="chips">${p.targets.map(t=>`<button type="button" class="chip" data-act="useTarget" data-goals="${goalsPath}" data-text="${esc(t)}" ${o.obj?'data-obj="1"':""} data-max="${o.max||4}">${esc(t)}</button>`).join("")}</div></details>`}
function expectMoreRef(open){const c=S.config;return `<details ${open?"open":""}><summary>The Fraternity’s ${esc(c.planName||"Expect More")} strategic plan</summary><p class="sm"><b>Core values:</b> ${esc(c.coreValues)}<br><b>Vision:</b> ${esc(c.vision)}<br><b>Mission:</b> ${esc(c.mission)}</p>${(c.pillars||[]).map(p=>`<p class="sm" style="margin:.5rem 0 .2rem"><b>${esc(p.title)}.</b> ${esc(p.tagline)}</p><p class="sm muted" style="margin:0">Goals: ${esc((p.goals||[]).map(g=>g.title).join("; "))}</p>`).join("")}</details>`}
ACT.useTarget=b=>{if(!S.bind)return;const path=b.dataset.goals,max=+b.dataset.max||4,t=b.dataset.text;let a=getPath(M(),path);if(!Array.isArray(a)){a=[];setPath(M(),path,a)}
  if(b.dataset.obj){const k=a.findIndex(x=>!has(x&&x.text));if(k<0){toast("All goal slots are filled. Clear one first.");return}a[k].text=t}
  else{if(a.some(x=>norm(x)===norm(t))){toast("That goal is already here.");return}const k=a.findIndex(x=>!has(x));if(k>=0)a[k]=t;else if(a.length<max)a.push(t);else{toast("All goal slots are filled. Clear one first.");return}}
  S.bind.saver.touch();S.bind.rerender();toast("Added. Now tailor it to your chapter.")};
document.addEventListener("change",e=>{const el=e.target.closest("[data-rerender]");if(!el||!S.bind)return;setPath(M(),el.dataset.bind,el.value);S.bind.saver.touch();S.bind.rerender()});

/* delegated events */
document.addEventListener("input",e=>{const el=e.target.closest("[data-bind]");if(!el||!S.bind)return;setPath(M(),el.dataset.bind,el.value);S.bind.saver.touch()});
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");
  if(add&&S.bind){const a=getPath(M(),add.dataset.add)||[];a.push(add.dataset.tpl?JSON.parse(add.dataset.tpl):"");setPath(M(),add.dataset.add,a);S.bind.saver.touch();S.bind.rerender();return}
  const del=e.target.closest("[data-del]");
  if(del&&S.bind){const p=del.dataset.del.split(".");const i=+p.pop();const a=getPath(M(),p.join("."));a.splice(i,1);S.bind.saver.touch();S.bind.rerender();return}
  const mv=e.target.closest("[data-move]");
  if(mv&&S.bind){const p=mv.dataset.move.split(".");const i=+p.pop();const a=getPath(M(),p.join("."));const j=i+(+mv.dataset.dir);if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];S.bind.saver.touch();S.bind.rerender();return}
  const act=e.target.closest("[data-act]");
  if(act&&ACT[act.dataset.act]){e.preventDefault();ACT[act.dataset.act](act)}
});
/* ---------- boot & routing ---------- */
async function boot(){
  main().innerHTML=`<p class="muted"><span class="spin"></span> Loading…</p>`;
  S.db=StoreDB;S.canWrite=true;
  window.addEventListener("hashchange",route);
  try{const j=await API("GET","/api/me");setMe(j.user)}catch(e){S.me=null}
  if(S.me)await loadConfig();
  route();
}
function setMe(u){S.me=u.id;S.meUser=u;S.isOwner=!!u.isAdmin;S.names[u.id]=u.name;$("#navAdmin").hidden=!S.isOwner;$("#navAccount").hidden=false;$("#navOut").hidden=false;$("#navTeams").hidden=false}
async function loadConfig(){try{const c=await S.db.doc("config/fraternity").get();if(c.exists&&c.data().schema===2)S.config=Object.assign(clone(DEFAULT_CONFIG),c.data())}catch(e){}}
function route(){
  if(S.bind&&S.bind.saver)S.bind.saver.flush();
  unsubAll();S.bind=null;S.view=null;S.rt=(S.rt||0)+1;window.scrollTo(0,0);
  const p=(location.hash||"#/").slice(2).split("/");
  if(!S.me)return viewSignin();
  if(p[0]==="signin"){location.hash="#/";return}
  if(p[0]==="account")return viewAccount();
  if(p[0]==="g"&&p[1])return viewGroup(p[1],p[2]||"work",p[3]);
  if(p[0]==="admin")return viewAdmin();
  viewHome();
}
function writeBanner(){return ""}

/* ---------- sign in / account ---------- */
function viewSignin(){
  const mode=S.authMode||"in";
  main().innerHTML=`<section class="panel" style="max-width:460px;margin:2rem auto;border-top:4px solid var(--gold)">
  <h1>${mode==="in"?"Sign in":"Create your account"}</h1>
  <p class="muted sm">${mode==="in"?"Use the email and password you set up for chapter strategic planning.":"Officers and team leaders each need their own account. Use an email you check."}</p>
  ${mode==="up"?`<label class="field"><span class="lab">Your name</span><input type="text" id="aName" autocomplete="name"></label>`:""}
  <label class="field"><span class="lab">Email</span><input type="email" id="aEmail" autocomplete="email"></label>
  <label class="field"><span class="lab">Password</span><input type="password" id="aPw" autocomplete="${mode==="in"?"current-password":"new-password"}"></label>
  ${mode==="up"?`<p class="hint" style="margin-top:-.8rem">At least 8 characters.</p>`:""}
  <div class="btns"><button class="btn gold" data-act="auth">${mode==="in"?"Sign in":"Create account"}</button><button class="btn ghost" data-act="authMode">${mode==="in"?"Create an account":"I already have an account"}</button></div>
  <p id="aMsg" class="sm" role="alert" style="margin-top:.7rem"></p>
  ${mode==="in"?`<p class="hint">Forgot your password? Ask your team leader to reset it from the team dashboard.</p>`:""}</section>`;
  $("#aPw").addEventListener("keydown",e=>{if(e.key==="Enter")ACT.auth($("[data-act=auth]"))});
}
ACT.authMode=()=>{S.authMode=S.authMode==="up"?"in":"up";viewSignin()};
ACT.auth=async btn=>{
  const up=S.authMode==="up";btn.disabled=true;$("#aMsg").textContent=up?"Creating your account…":"Signing in…";
  try{
    await API("POST",up?"/api/auth/signup":"/api/auth/login",{name:up?$("#aName").value:undefined,email:$("#aEmail").value,password:$("#aPw").value});
    const j=await API("GET","/api/me");setMe(j.user);await loadConfig();
    if(location.hash==="#/signin")location.hash="#/";else route();
  }catch(e){btn.disabled=false;$("#aMsg").textContent=e.message}
};
ACT.signout=async()=>{try{await API("POST","/api/auth/logout")}catch(e){}location.hash="#/";location.reload()};
function viewAccount(){
  main().innerHTML=`<section class="panel" style="max-width:520px"><h1>Your account</h1><p class="muted">${esc(S.meUser.name)}, ${esc(S.meUser.email)}${S.isOwner?". You have facilitator access.":""}</p>
  <h2>Change password</h2>
  <label class="field"><span class="lab">Current password</span><input type="password" id="pCur" autocomplete="current-password"></label>
  <label class="field"><span class="lab">New password</span><input type="password" id="pNew" autocomplete="new-password"></label>
  <button class="btn" data-act="changePw">Change password</button> <span id="pMsg" class="sm" role="alert"></span></section>`;
}
ACT.changePw=async b=>{b.disabled=true;try{await API("POST","/api/me/password",{current:$("#pCur").value,next:$("#pNew").value});$("#pMsg").textContent="Password changed.";$("#pCur").value=$("#pNew").value=""}catch(e){$("#pMsg").textContent=e.message}b.disabled=false};

/* ---------- home ---------- */

async function viewHome(){
  const rt=S.rt;const groups=await API("GET","/api/me/teams").then(j=>j.teams).catch(()=>[]);
  if(rt!==S.rt)return;const c=S.config;
  main().innerHTML=`${writeBanner()}
  <section class="panel" style="border-top:4px solid var(--gold)">
    <h1>Build your chapter’s strategic plan together</h1>
    <p>Each officer works through five short steps on their own. Your team leader sees everyone’s input in one place, merged into shared themes, and turns it into the chapter’s plan.</p>
    <p class="muted sm" style="margin:0">Every chapter plan advances the Fraternity’s ${esc(c.planName)} strategic plan: ${esc((c.pillars||[]).map(p=>p.title).join(", "))}.</p>
  </section>
  ${groups.length?`<section class="panel"><h2>Your teams</h2>${groups.map(g=>`<div class="theme"><div class="t"><b>${esc(g.name)}</b><div class="who">${esc(g.school||"")}${g.school?", ":""}${esc(g.cycle||"")} ${g.leaderId===S.me?`<span class="badge">You lead this team</span>`:""}</div></div><div class="btns"><a class="btn sm" href="#/g/${g.id}/work">My work</a>${g.leaderId===S.me||S.isOwner?`<a class="btn ghost sm" href="#/g/${g.id}/dashboard">Dashboard</a>`:""}</div></div>`).join("")}</section>`:""}
  <div class="grid2">
    <section class="panel"><h2>Join your team</h2><p class="muted sm">Your team leader has a six-character join code.</p>
      <label class="field"><span class="lab">Join code</span><input type="text" id="jCode" maxlength="6" autocomplete="off" style="text-transform:uppercase;letter-spacing:.15em"></label>
      <label class="field"><span class="lab">Your officer role</span><input type="text" id="jRole" placeholder="e.g. Pro Consul, Magister, Risk Manager"></label>
      <button class="btn" data-act="join">Join team</button> <span id="jMsg" class="sm" role="alert"></span></section>
    <section class="panel"><h2>Start a team</h2><p class="muted sm">For the team leader, usually the Consul. You’ll get a code to share with your executive team.</p>
      <label class="field"><span class="lab">Chapter name</span><input type="text" id="cName" placeholder="e.g. Alpha Chapter"></label>
      <label class="field"><span class="lab">Institution</span><input type="text" id="cSchool"></label>
      <div class="g2"><label class="field"><span class="lab">Planning year</span><input type="text" id="cCycle" value="${esc(c.cycle)}"></label>
      <label class="field"><span class="lab">Your role</span><input type="text" id="cRole" value="Consul"></label></div>
      <button class="btn gold" data-act="create">Create team</button> <span id="cMsg" class="sm" role="alert"></span></section>
  </div>`;
}
ACT.create=async btn=>{
  const name=$("#cName").value.trim();
  if(!name){$("#cMsg").textContent="Add the chapter name.";return}
  btn.disabled=true;$("#cMsg").textContent="Creating…";
  try{const j=await API("POST","/api/teams",{name,school:$("#cSchool").value.trim(),cycle:$("#cCycle").value.trim(),role:$("#cRole").value.trim()});location.hash=`#/g/${j.gid}/dashboard`}
  catch(e){btn.disabled=false;$("#cMsg").textContent=e.message}
};
ACT.join=async btn=>{
  const code=$("#jCode").value.trim().toUpperCase();
  if(code.length!==6){$("#jMsg").textContent="Enter the six-character code.";return}
  btn.disabled=true;$("#jMsg").textContent="Joining…";
  try{const j=await API("POST","/api/teams/join",{code,role:$("#jRole").value.trim()});location.hash=`#/g/${j.gid}/work`}
  catch(e){btn.disabled=false;$("#jMsg").textContent=e.message}
};

/* ---------- facilitator admin (owner) ---------- */
async function viewAdmin(){
  if(!S.isOwner){location.hash="#/";return}
  const rt=S.rt;const snap=await S.db.collection("groups").get();
  const groups=snap.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  await resolveNames(groups.map(g=>g.leaderId));if(rt!==S.rt)return;
  S.cfgEdit=clone(S.config);S.cfgEdit.schema=2;
  S.bind={model:()=>S.cfgEdit,saver:new Saver(S.db.doc("config/fraternity"),()=>{S.config=Object.assign(clone(DEFAULT_CONFIG),clone(S.cfgEdit));return S.cfgEdit}),rerender:viewAdminRender};
  S.adminGroups=groups;viewAdminRender();
}
function viewAdminRender(){
  const g=S.adminGroups;
  main().innerHTML=`<h1>Facilitator view</h1>
  <section class="panel"><div class="split"><h2 style="margin:0">All teams</h2><span class="muted sm">${g.length} team${g.length===1?"":"s"}</span></div>
  ${g.length?`<div class="scroll"><table><thead><tr><th>Chapter</th><th>Institution</th><th>Year</th><th>Leader</th><th>Code</th><th>Plan shared</th><th></th></tr></thead><tbody>${g.map(x=>`<tr><td><b>${esc(x.name)}</b></td><td>${esc(x.school||"")}</td><td>${esc(x.cycle||"")}</td><td>${esc(nm(x.leaderId))}</td><td><span class="code" style="font-size:.9rem">${esc(x.code)}</span></td><td>${x.planShared?"Yes":"No"}</td><td><a class="btn sm ghost" href="#/g/${x.id}/dashboard">Open</a></td></tr>`).join("")}</tbody></table></div>`:`<div class="empty">No teams yet. Share this site’s address with a team leader and have him select “Start a team.”</div>`}</section>
  <section class="panel"><div class="split"><h2 style="margin:0">Fraternity direction</h2><span id="savestate" class="savestate"></span></div>
  <p class="muted sm">Every team sees this text, and it appears on the cover of each chapter plan. Changes save automatically.</p>
  <div class="grid2">${fInput("planName","Strategic plan name")}${fInput("cycle","Default planning year")}</div>
  ${fInput("coreValues","Core values")}
  ${fText("vision","Vision","",2)}
  ${fText("mission","Mission","",2)}
  ${fText("requiredImperative","Chapter Imperative 1 (set by the Fraternity for every chapter)","Every team’s plan starts with this imperative. Officers propose goals under it.",2)}
  <label class="field"><span class="lab">Imperative 1 advances</span><select data-bind="requiredPillar" data-rerender="1">${(S.cfgEdit.pillars||[]).map(p=>`<option value="${esc(p.id)}" ${S.cfgEdit.requiredPillar===p.id?"selected":""}>${esc(p.title)}</option>`).join("")}</select></label>
  <h3>Strategic areas of focus</h3><p class="hint">Chapters align each imperative to an area or goal below. The targets appear as goal suggestions for officers and team leaders.</p>
  ${(S.cfgEdit.pillars||[]).map((p,i)=>`<details><summary>${esc(p.title)}</summary>${fInput(`pillars.${i}.title`,"Area name")}${fText(`pillars.${i}.tagline`,"Description","",2)}
    ${fRows(`pillars.${i}.goals`,{label:"Goals",min:1,max:10,add:"goal",grid:"1fr 2fr",cols:[{k:"title",ph:"Goal name"},{k:"tagline",ph:"Goal description",area:1}]})}
    ${fList(`pillars.${i}.targets`,{label:"Targets chapters can move",min:1,max:14,add:"target"})}</details>`).join("")}
  </section>`;
}
/* ---------- group shell ---------- */
async function viewGroup(gid,tab,mod){
  const rt=S.rt;
  const gs=await S.db.doc("groups/"+gid).get().catch(()=>null);
  if(!gs||!gs.exists){main().innerHTML=`<div class="panel"><h2>Team not found</h2><p><a href="#/">Back to your teams</a></p></div>`;return}
  S.gid=gid;S.group=gs.data();
  const mem=await S.db.doc(`groups/${gid}/members/${S.me}`).get();
  if(rt!==S.rt)return;S.isMember=mem.exists;S.isLeader=S.group.leaderId===S.me||S.isOwner;
  if(!S.isMember&&!S.isOwner){main().innerHTML=`<div class="panel"><h2>${esc(S.group.name)}</h2><p>This team doesn’t exist or you’re not on it. Join from <a href="#/">your teams</a> with the code from your leader.</p></div>`;return}
  if(!S.isLeader&&tab==="dashboard")tab="work";
  if(!S.isMember&&tab==="work")tab="dashboard";
  const t=(k,l)=>`<a href="#/g/${gid}/${k}" class="${tab===k?"on":""}">${l}</a>`;
  main().innerHTML=`${writeBanner()}<div class="split" style="margin-bottom:.3rem"><div><h1 style="margin:0">${esc(S.group.name)}</h1><div class="muted sm">${esc(S.group.school||"")}${S.group.school?", ":""}strategic plan ${esc(S.group.cycle||"")}</div></div><span id="savestate" class="savestate"></span></div>
  <nav class="tabs">${S.isMember?t("work","My work"):""}${S.isLeader?t("dashboard","Team dashboard"):""}${t("plan",S.isLeader?"Build the plan":"Chapter plan")}</nav><div id="view"></div>`;
  S.view=tab;
  if(tab==="work")return viewWork(mod||"m1");
  if(tab==="dashboard")return viewDash();
  return viewPlan();
}

/* ---------- participant work ---------- */
async function viewWork(mod){
  if(!MODS.find(m=>m.id===mod))mod="m1";
  const ref=S.db.doc(`groups/${S.gid}/subs/${S.me}`);
  if(!S.sub||S.sub._gid!==S.gid){
    const rt=S.rt;const d=await ref.get();if(rt!==S.rt)return;
    S.sub=d.exists?clone(d.data()):{uid:S.me,done:{}};S.sub._gid=S.gid;
  }
  S.sub.done=S.sub.done||{};
  S.bind={model:()=>S.sub,saver:new Saver(ref,()=>{const b=clone(S.sub);delete b._gid;return b}),rerender:()=>renderWork(mod)};
  renderWork(mod);
}
function renderWork(mod){
  if(S.view!=="work"||!$("#view"))return;
  const m=MODS.find(x=>x.id===mod),i=MODS.indexOf(m),done=S.sub.done;
  const next=MODS[i+1];
  const body={m1:formM1,m2:formM2,m3:formM3,m4:formM4,m5:formM5}[mod]();
  $("#view").innerHTML=`<div class="steps">${MODS.map(x=>`<a class="step ${x.id===mod?"on":""} ${done[x.id]?"done":""}" href="#/g/${S.gid}/work/${x.id}"><span class="n">${done[x.id]?"✓":x.n}</span><span><b>${esc(x.title)}</b><span class="s">${esc(x.short)}</span></span></a>`).join("")}</div>
  <section class="panel"><h2>Step ${m.n}: ${esc(m.title)}</h2><p class="muted">${esc(m.meet)} Your answers save as you type, and your team leader sees them on the team dashboard.</p>${body}
  <div class="btns" style="border-top:1px solid var(--line);padding-top:1rem;margin-top:.5rem">
    <button class="btn ${done[mod]?"ghost":"gold"}" data-act="toggleDone" data-m="${mod}">${done[mod]?"Reopen this step":"Mark step "+m.n+" complete"}</button>
    ${next?`<a class="btn ghost" href="#/g/${S.gid}/work/${next.id}">Go to step ${next.n}</a>`:""}
  </div></section>`;
}
ACT.toggleDone=b=>{const m=b.dataset.m;S.sub.done[m]=!S.sub.done[m];S.bind.saver.touch();S.bind.rerender();if(S.sub.done[m])toast("Step marked complete. Your leader can see it now.")};

function formM1(){
  const q=(k,L,title,hint)=>`<div class="q"><h3><span class="L">${L}</span>${title}</h3><p class="hint">${hint}</p>${fList("m1."+k,{min:1,max:8,add:"item",ph:"One point per line"})}</div>`;
  return `<details><summary>Before you start</summary><ul class="sm">
    <li>Review last year’s annual report and how well the chapter delivered on its strategic commitments. What’s unfinished?</li>
    <li>Ask brothers what needs to improve this year.</li>
    <li>Talk with your Grand Praetor, Chapter Advisor, members, and campus partners. See the chapter through their eyes.</li>
    <li>Note what’s happening on campus around you.</li>
    <li>Read the Fraternity’s ${esc(S.config.planName)} strategic plan below. Your chapter’s imperatives will advance it.</li></ul></details>
  ${expectMoreRef(false)}
  <h3>What? The current state of your chapter</h3>
  <div class="spot" style="margin-bottom:1.2rem"><div></div><div class="hd"><span>Helpful</span><span>Harmful</span></div>
    <div class="ax">Internal</div>${q("strengths","S","Strengths","What the chapter does well today.")}${q("problems","P","Problems","What’s not working inside the chapter.")}
    <div class="ax">External</div>${q("opportunities","O","Opportunities","Openings on campus or beyond that the chapter could use.")}${q("threats","T","Threats","Outside pressures that could hurt the chapter.")}
  </div>
  <h3>So what?</h3>${fText("m1.impact","What impact does your SPOT analysis have on the way the chapter operates?","",4)}
  <h3>Now what?</h3>${fRows("m1.focus",{label:"Three to four focus areas that would improve chapter and campus culture this year",hint:"For each, say why it matters to the chapter, the brotherhood, and the campus community.",min:3,max:4,add:"focus area",cols:[{k:"area",ph:"Focus area"},{k:"why",ph:"Why it matters",area:1}]})}`;
}
function formM2(){
  const imps=ensureArr("m2.imperatives",1,{text:"",goals:["",""]});
  const rp=pillar(S.config.requiredPillar);
  return `${expectMoreRef(false)}<div class="callout"><b>Imperative 1, set by the Fraternity for every chapter:</b><br>${esc(S.config.requiredImperative)}${rp?`<div class="sm muted">Advances ${esc(S.config.planName)}: ${esc(rp.title)}</div>`:""}</div>
  ${fList("m2.imp1Goals",{label:"Suggest goals for Imperative 1",hint:"At least one. Make each goal SMART: specific, measurable, achievable, relevant, and time-bound.",min:1,max:4,add:"goal",ph:"e.g. Every new member completes bystander training by Oct. 15"})}
  ${fTargets(S.config.requiredPillar,"m2.imp1Goals",{max:4})}
  <h3>Your proposed Imperatives 2 to 4, in rank order</h3>
  <p class="hint">Build on the focus areas from Strategy Meeting 1. Tie each imperative to the ${esc(S.config.planName)} area or goal it advances, put the one you think matters most first, and suggest at least one goal for each.</p>
  ${imps.map((im,i)=>{im.goals=im.goals||["",""];return `<div class="pair" style="margin-bottom:.7rem"><div class="split" style="margin:0"><b>Rank ${i+1}, proposed Imperative ${i+2}</b><span class="btns"><button class="icon" data-move="m2.imperatives.${i}" data-dir="-1" aria-label="Move up" ${i===0?"disabled":""}>↑</button><button class="icon" data-move="m2.imperatives.${i}" data-dir="1" aria-label="Move down" ${i===imps.length-1?"disabled":""}>↓</button>${imps.length>1?`<button class="icon" data-del="m2.imperatives.${i}" aria-label="Remove">×</button>`:""}</span></div>
  <textarea rows="2" data-bind="m2.imperatives.${i}.text" placeholder="We commit to…" aria-label="Imperative">${esc(im.text||"")}</textarea>
  <select data-bind="m2.imperatives.${i}.area" data-rerender="1" aria-label="Expect More area this imperative advances">${areaOptions(im.area||"")}</select>
  <input type="text" data-bind="m2.imperatives.${i}.goals.0" value="${esc(im.goals[0]||"")}" placeholder="Goal 1" aria-label="Goal 1">
  <input type="text" data-bind="m2.imperatives.${i}.goals.1" value="${esc(im.goals[1]||"")}" placeholder="Goal 2 (optional)" aria-label="Goal 2">
  ${im.area?fTargets(areaPid(im.area),`m2.imperatives.${i}.goals`,{max:2}):""}</div>`}).join("")}
  ${imps.length<3?`<button class="btn ghost sm" data-add="m2.imperatives" data-tpl='${esc(JSON.stringify({text:"",goals:["",""]}))}'>Add an imperative</button>`:""}
  <details style="margin-top:1rem"><summary>Test your priorities with SOAR</summary><p class="sm">Before you settle on an imperative, ask: How will it impact my future? Is it just and right? Is it consistent with my and our values? Will it build friendships? How will it impact the community?</p></details>`;
}
function formM3(){
  return `<div class="callout">Simon Sinek’s Golden Circle: the leaders who move people start with <b>why</b>, then how, then what. Explain why your team made these choices before you explain what they are.</div>
  ${fList("m3.keyPoints",{label:"Three to five key points behind your chapter strategy",min:3,max:5,add:"key point",ph:"Why this strategy matters"})}
  ${fText("m3.why","Our why","Take 5 to 10 minutes. Describe the why behind the decisions your executive team made about the chapter strategy.",7)}
  <h3>Motivating the middle</h3>
  <p class="hint">Roughly a third of members give 110%, a third give little or nothing, and the middle third care, but… Your plan succeeds or stalls with the middle.</p>
  ${fList("m3.middle",{label:"Two practical ways to motivate the members in the middle",min:2,max:4,add:"idea"})}`;
}
function formM4(){
  return `<p class="hint">Complete this after the chapter buy-in meeting.</p>
  ${fText("m4.conversation","How did the conversation about the strategic plan go with the rest of the chapter?","",3)}
  ${fText("m4.operationalize","How are you putting the priorities and plans into practice in the chapter?","",3)}
  ${fText("m4.resistance","How will you deal with potential resistance?","",3)}
  <h3>The Man in the Arena</h3>
  <blockquote class="quote">“It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”<br><span class="sm muted">Theodore Roosevelt, “Citizenship in a Republic,” April 23, 1910</span></blockquote>
  ${fText("m4.arena","How will you dare greatly? How will you challenge the chapter to new levels of excellence?","Spend 5 to 10 minutes with the quote.",5)}
  ${fList("m4.dare",{label:"One or two practical ideas to encourage brothers to dare greatly this year",min:1,max:3,add:"idea"})}`;
}
function formM5(){
  return `${fText("m5.challenging","What has been the most challenging part of the strategic planning process for you?","",3)}
  ${fText("m5.rewarding","What has been the most rewarding part? Name a win.","We need to take the wins where we can get them.",3)}
  ${fText("m5.resources","Do you need any additional resources to reach your chapter goals? What are they?","",3)}
  <p class="hint">Come to the final strategy meeting ready to share this reflection with your leadership team.</p>`;
}
/* ---------- consolidation ---------- */
function participants(m,subs){return subs.filter(s=>has(s.data&&s.data[m]))}
function buildInput(m,subs){
  const ps=participants(m,subs),labels={},cut=s=>String(s||"").trim().slice(0,700);
  const out={};
  ps.forEach((s,i)=>{const P="P"+(i+1);labels[P]=s.uid;const d=s.data[m]||{};
    if(m==="m1"){(out.items=out.items||[]);[["strengths","s"],["problems","p"],["opportunities","o"],["threats","t"]].forEach(([k,c])=>clean(d[k]).forEach((t,j)=>out.items.push({ref:`${P}-${c}${j+1}`,type:k,text:cut(t)})));
      (out.focus=out.focus||[]);(d.focus||[]).filter(f=>has(f)).forEach((f,j)=>out.focus.push({ref:`${P}-f${j+1}`,area:cut(f.area),why:cut(f.why)}));
      if(has(d.impact))(out.impact=out.impact||[]).push({ref:`${P}-i`,text:cut(d.impact)})}
    if(m==="m2"){(out.imp1Goals=out.imp1Goals||[]);clean(d.imp1Goals).forEach((t,j)=>out.imp1Goals.push({ref:`${P}-g${j+1}`,text:cut(t)}));
      (out.imperatives=out.imperatives||[]);let r=0;(d.imperatives||[]).forEach(im=>{if(!has(im.text))return;r++;out.imperatives.push({ref:`${P}-r${r}`,rank:r,text:cut(im.text),area:im.area||"",goals:clean(im.goals).map(cut)})})}
    if(m==="m3"){(out.keyPoints=out.keyPoints||[]);clean(d.keyPoints).forEach((t,j)=>out.keyPoints.push({ref:`${P}-k${j+1}`,text:cut(t)}));
      if(has(d.why))(out.why=out.why||[]).push({ref:`${P}-w`,text:cut(d.why)});
      (out.middle=out.middle||[]);clean(d.middle).forEach((t,j)=>out.middle.push({ref:`${P}-m${j+1}`,text:cut(t)}))}
    if(m==="m4"){["conversation","operationalize","resistance","arena"].forEach(k=>{if(has(d[k]))(out[k]=out[k]||[]).push({ref:`${P}-${k[0]}`,text:cut(d[k])})});
      (out.dare=out.dare||[]);clean(d.dare).forEach((t,j)=>out.dare.push({ref:`${P}-d${j+1}`,text:cut(t)}))}
    if(m==="m5"){[["challenging","c"],["rewarding","w"],["resources","x"]].forEach(([k,c])=>{if(has(d[k]))(out[k]=out[k]||[]).push({ref:`${P}-${c}`,text:cut(d[k])})})}
  });
  if(m==="m2"){out.requiredImperative=S.config.requiredImperative;out.expectMoreAreas=(S.config.pillars||[]).map(p=>({id:p.id,title:p.title,goals:(p.goals||[]).map((g,i)=>({id:p.id+":"+i,title:g.title}))}))}
  if(m==="m4"&&S.planCache)out.currentPlanImperatives=(S.planCache.imperatives||[]).map((x,i)=>i===0?S.config.requiredImperative:x.text).filter(has);
  return {input:out,labels,n:ps.length};
}
function grp(items,key){const map=new Map();for(const it of items||[]){const k=norm(it[key||"text"]);if(!k)continue;if(!map.has(k))map.set(k,{text:it[key||"text"],refs:[],extra:[]});const g=map.get(k);g.refs.push(it.ref);if(it.why)g.extra.push(it.why);if(it.goals)g.extra.push(...it.goals)}return [...map.values()].sort((a,b)=>b.refs.length-a.refs.length)}
function localCons(m,input){
  const I=input;
  if(m==="m1"){const by=t=>grp((I.items||[]).filter(x=>x.type===t)).map(g=>({theme:g.text,detail:"",refs:g.refs}));
    return {strengths:by("strengths"),problems:by("problems"),opportunities:by("opportunities"),threats:by("threats"),impact:"",focusAreas:grp(I.focus,"area").map(g=>({area:g.text,why:[...new Set(g.extra)].join(" "),refs:g.refs}))}}
  if(m==="m2"){const areaOf=refs=>{const c={};(I.imperatives||[]).filter(x=>refs.includes(x.ref)&&x.area).forEach(x=>c[x.area]=(c[x.area]||0)+1);return Object.keys(c).sort((a,b)=>c[b]-c[a])[0]||""};
    return {imperatives:grp(I.imperatives).map(g=>({title:g.text,area:areaOf(g.refs),refs:g.refs,goals:[...new Set(g.extra.filter(Boolean))].slice(0,4).map(t=>({text:t,note:""}))})),imp1Goals:grp(I.imp1Goals).map(g=>({text:g.text,refs:g.refs,note:""})),observations:""}}
  if(m==="m3")return {keyPoints:grp(I.keyPoints).map(g=>({point:g.text,refs:g.refs})),why:"",middle:grp(I.middle).map(g=>({idea:g.text,refs:g.refs}))};
  if(m==="m4")return {conversation:"",operationalize:"",resistance:"",arena:"",dare:grp(I.dare).map(g=>({idea:g.text,refs:g.refs})),revisions:[]};
  return {challenges:grp(I.challenging).map(g=>({point:g.text,refs:g.refs})),wins:grp(I.rewarding).map(g=>({point:g.text,refs:g.refs})),resources:grp(I.resources).map(g=>({point:g.text,refs:g.refs})),summary:""};
}
function sampleMsg(e){const c=e&&e.code;if(c==="not_granted")return "Claude isn’t set up on this server, so this is a basic merge of matching answers.";if(c==="rate_limited")return "Claude is busy right now, so this is a basic merge. Try again in a minute.";if(c==="cancelled")return "Consolidation stopped.";return "Claude consolidation didn’t finish, so this is a basic merge. You can try again."}
async function consolidate(m){
  const d=S.dash;if(d.running[m])return;
  const {input,labels,n}=buildInput(m,d.subs);
  if(!n){toast("No one has started this step yet.");return}
  d.running[m]=true;renderDash();
  let data=null,method="ai";
  try{
    data=(await API("POST",`/api/groups/${S.gid}/consolidate`,{m,input})).data;
    if(!data||typeof data!=="object"||Array.isArray(data))throw {code:"invalid_json"};
  }catch(e){if(e&&e.code!=="no_sample")toast(sampleMsg(e));data=localCons(m,input);method="basic"}
  const cons=clone(d.cons)||{};cons[m]={data,labels,n,method,generatedAt:Date.now()};
  d.cons=cons;d.running[m]=false;
  try{await S.db.doc(`groups/${S.gid}/work/consolidated`).set(cons)}catch(e){toast("Couldn’t save the consolidation: "+(e.message||e.code))}
  renderDash();
}
function refInfo(refs,labels){const ps=[...new Set((refs||[]).map(r=>String(r).split("-")[0]).filter(p=>labels&&labels[p]))];return {count:ps.length,uids:ps.map(p=>labels[p])}}
function m2Score(refs,labels){const best={};for(const r of refs||[]){const [p,x]=String(r).split("-");if(!labels[p]||!/^r\d+$/.test(x||""))continue;const rank=+x.slice(1);best[p]=Math.min(best[p]||9,rank)}return Object.values(best).reduce((s,r)=>s+Math.max(1,4-r),0)}
/* ---------- leader dashboard ---------- */
function status(sub,m){if(!sub)return "none";if(sub.done&&sub.done[m])return "done";return has(sub[m])?"started":"none"}
function viewDash(){
  const d=S.dash;d.members=[];d.subs=[];d.cons={};d.raw={};d.tempPw=null;
  S.db.doc(`groups/${S.gid}/work/plan`).get().then(p=>{S.planCache=p.exists?p.data():null}).catch(()=>{});
  const onErr=e=>{if(e.code==="revoked")$("#view").innerHTML=`<div class="empty">This page is no longer available to you.</div>`};
  S.unsubs.push(S.db.collection(`groups/${S.gid}/members`).onSnapshot(s=>{d.members=s.docs.map(x=>x.data());resolveNames(d.members.map(x=>x.uid)).then(renderDash);renderDash()},onErr));
  S.unsubs.push(S.db.collection(`groups/${S.gid}/subs`).onSnapshot(s=>{d.subs=s.docs.map(x=>({uid:x.id,data:x.data()}));renderDash()},onErr));
  S.unsubs.push(S.db.doc(`groups/${S.gid}/work/consolidated`).onSnapshot(s=>{if(!d.running[d.mod])d.cons=s.exists?clone(s.data()):{};renderDash()},onErr));
  renderDash();
}
function stale(m){const c=S.dash.cons[m];if(!c)return true;const ps=participants(m,S.dash.subs);if(ps.length!==c.n)return true;return ps.some(s=>(s.data.updatedAt||0)>c.generatedAt)}
function renderDash(){
  const v=$("#view");if(!v||S.view!=="dashboard")return;const d=S.dash,g=S.group;
  const subBy={};d.subs.forEach(s=>subBy[s.uid]=s.data);
  const members=[...d.members].sort((a,b)=>(a.uid===g.leaderId?-1:0)-(b.uid===g.leaderId?-1:0));
  const doneCount=m=>members.filter(x=>status(subBy[x.uid],m)==="done").length;
  const m=d.mod,mm=MODS.find(x=>x.id===m),c=d.cons[m],nStarted=participants(m,d.subs).length;
  v.innerHTML=`<section class="panel"><div class="split"><div><h2 style="margin:0">Your team</h2><p class="muted sm" style="margin:0">Share the join code with each officer on the executive team.</p></div><div class="btns"><span class="code">${esc(g.code)}</span><button class="btn ghost sm" data-act="copyCode">Copy code</button></div></div>
  ${d.tempPw?`<div class="callout">Temporary password for <b>${esc(nm(d.tempPw.uid))}</b>: <span class="code" style="font-size:1rem">${esc(d.tempPw.pw)}</span><br><span class="sm">Share it with him privately. He should change it under Account after signing in.</span> <button class="btn ghost sm" data-act="clearPw">Done</button></div>`:""}
  ${members.length?`<div class="scroll"><table><thead><tr><th>Officer</th>${MODS.map(x=>`<th title="${esc(x.title)}">Step ${x.n}</th>`).join("")}<th>Last active</th><th></th></tr></thead><tbody>${members.map(x=>{const s=subBy[x.uid];return `<tr><td><b>${esc(nm(x.uid))}</b>${x.uid===g.leaderId?` <span class="badge">Leader</span>`:""}<div class="muted sm">${esc(x.role||"")}</div></td>${MODS.map(mo=>{const st=status(s,mo.id);return `<td><span class="dot ${st}" title="${st==="done"?"Complete":st==="started"?"In progress":"Not started"}"></span><span class="sr-only" style="position:absolute;left:-9999px">${st}</span></td>`}).join("")}<td class="sm muted">${ago(s&&s.updatedAt)}</td><td><div class="btns">${x.uid!==g.leaderId&&(g.leaderId===S.me||S.isOwner)?`<button class="btn ghost sm" data-act="makeLeader" data-uid="${esc(x.uid)}">Make leader</button>`:""}${x.uid!==S.me?`<button class="btn ghost sm" data-act="resetPw" data-uid="${esc(x.uid)}">Reset password</button>`:""}</div></td></tr>`}).join("")}</tbody></table></div>
  <p class="sm muted" style="margin:.6rem 0 0"><span class="dot done"></span> complete <span class="dot started" style="margin-left:.7rem"></span> in progress <span class="dot" style="margin-left:.7rem"></span> not started</p>`:`<div class="empty">No one has joined yet. Send your officers the code above.</div>`}</section>
  <section class="panel"><h2>Team input, consolidated</h2>
  <div class="mtabs" role="tablist">${MODS.map(x=>`<button role="tab" aria-selected="${x.id===m}" class="${x.id===m?"on":""}" data-act="dashMod" data-m="${x.id}">Step ${x.n}: ${esc(x.short)} (${doneCount(x.id)}/${members.length})</button>`).join("")}</div>
  <div class="split"><div><h3 style="margin:0">${esc(mm.title)}</h3><div class="sm muted">${nStarted} of ${members.length} officers have input here${c?`. Consolidated ${ago(c.generatedAt)} from ${c.n} response${c.n===1?"":"s"}${c.method==="basic"?" (basic merge)":""}`:""}.</div>${c&&stale(m)&&nStarted?`<div class="warnline">New input since the last consolidation.</div>`:""}</div>
  <div class="btns">${d.running[m]?`<span class="sm"><span class="spin"></span> Claude is reading ${nStarted} response${nStarted===1?"":"s"}…</span>`:`<button class="btn sm" data-act="consolidate" data-m="${m}" ${nStarted?"":"disabled"}>${c?"Consolidate again":"Consolidate with Claude"}</button>`}
  <button class="btn ghost sm" data-act="toggleRaw" data-m="${m}">${d.raw[m]?"Hide":"See"} individual responses</button></div></div>
  ${d.raw[m]?rawView(m,members,subBy):""}
  ${c?consView(m,c):`<div class="empty">${nStarted?"Select “Consolidate with Claude” to merge everyone’s answers into shared themes.":"Nothing to consolidate yet."}</div>`}
  </section>`;
  if(!d.running[m]&&nStarted&&stale(m)&&S.dash.autoWanted===m){S.dash.autoWanted=null;consolidate(m)}
}
ACT.dashMod=b=>{S.dash.mod=b.dataset.m;if(!S.autoRan[S.gid+b.dataset.m]){S.autoRan[S.gid+b.dataset.m]=1;S.dash.autoWanted=b.dataset.m}renderDash()};
ACT.consolidate=b=>consolidate(b.dataset.m);
ACT.resetPw=async b=>{
  if(b.dataset.confirm!=="1"){b.dataset.confirm="1";b.textContent="Select again to reset";setTimeout(()=>{if(b.isConnected){b.dataset.confirm="";b.textContent="Reset password"}},4000);return}
  try{const j=await API("POST",`/api/groups/${S.gid}/members/${b.dataset.uid}/reset-password`,{});S.dash.tempPw={uid:b.dataset.uid,pw:j.tempPassword};renderDash()}catch(e){toast(e.message)}
};
ACT.clearPw=()=>{S.dash.tempPw=null;renderDash()};
ACT.toggleRaw=b=>{S.dash.raw[b.dataset.m]=!S.dash.raw[b.dataset.m];renderDash()};
ACT.copyCode=async()=>{try{await navigator.clipboard.writeText(S.group.code);toast("Join code copied.")}catch(e){toast("Join code: "+S.group.code)}};
ACT.makeLeader=async b=>{
  if(b.dataset.confirm!=="1"){b.dataset.confirm="1";b.textContent="Select again to confirm";setTimeout(()=>{if(b.isConnected){b.dataset.confirm="";b.textContent="Make leader"}},4000);return}
  try{await S.db.doc("groups/"+S.gid).update({leaderId:b.dataset.uid});S.group.leaderId=b.dataset.uid;toast(nm(b.dataset.uid)+" now leads this team.");route()}catch(e){toast("Couldn’t change the leader: "+(e.message||e.code))}
};
function rawView(m,members,subBy){
  const L=(t,v)=>has(v)?`<div class="sm"><b>${esc(t)}:</b> ${Array.isArray(v)?esc(clean(v).join("; ")):esc(v)}</div>`:"";
  const rows=members.filter(x=>has(subBy[x.uid]&&subBy[x.uid][m])).map(x=>{const d=subBy[x.uid][m];let h="";
    if(m==="m1")h=L("Strengths",d.strengths)+L("Problems",d.problems)+L("Opportunities",d.opportunities)+L("Threats",d.threats)+L("Impact",d.impact)+((d.focus||[]).filter(has).map(f=>L("Focus area",`${f.area||""}${f.why?" — "+f.why:""}`)).join(""));
    if(m==="m2")h=L("Imperative 1 goals",d.imp1Goals)+((d.imperatives||[]).filter(i=>has(i.text)).map((i,k)=>L("Rank "+(k+1),i.text+(i.area?" ["+areaLabel(i.area)+"]":"")+(clean(i.goals).length?" (Goals: "+clean(i.goals).join("; ")+")":""))).join(""));
    if(m==="m3")h=L("Key points",d.keyPoints)+L("Our why",d.why)+L("Motivating the middle",d.middle);
    if(m==="m4")h=L("Conversation",d.conversation)+L("Operationalizing",d.operationalize)+L("Resistance",d.resistance)+L("Dare greatly",d.arena)+L("Ideas",d.dare);
    if(m==="m5")h=L("Most challenging",d.challenging)+L("Win",d.rewarding)+L("Resources needed",d.resources);
    return `<details><summary>${esc(nm(x.uid))}${x.role?`, ${esc(x.role)}`:""}</summary>${h}</details>`});
  return rows.length?`<div style="margin-bottom:1rem">${rows.join("")}</div>`:"";
}
function themeRow(text,sub,refs,c,actions){const r=refInfo(refs,c.labels);return `<div class="theme"><div class="t"><div>${esc(text)}</div>${sub?`<div class="sm muted">${esc(sub)}</div>`:""}${r.count?`<div class="who">${esc(r.uids.map(nm).join(", "))}</div>`:""}</div><span class="badge" title="Officers who raised this">${r.count} of ${c.n}</span>${actions||""}</div>`}
function listBlock(title,arr,textK,subK,c,act){arr=(arr||[]).filter(x=>x&&has(x[textK]));if(!arr.length)return "";arr=[...arr].sort((a,b)=>refInfo(b.refs,c.labels).count-refInfo(a.refs,c.labels).count);return `<h3 style="margin-top:1rem">${esc(title)}</h3>${arr.map((x,i)=>themeRow(x[textK],subK?x[subK]:"",x.refs,c,act?act(x,i):"")).join("")}`}
function para(title,t){return has(t)?`<h3 style="margin-top:1rem">${esc(title)}</h3><p>${esc(t)}</p>`:""}
function coverageLine(areas){const ps=S.config.pillars||[];const hit=new Set([S.config.requiredPillar,...areas.map(areaPid)].filter(Boolean));
  return `<p class="sm" style="margin:.8rem 0 0"><b>${esc(S.config.planName)} areas covered:</b> ${ps.map(p=>`<span class="badge ${hit.has(p.id)?"":"blue"}" style="${hit.has(p.id)?"":"opacity:.55"}">${hit.has(p.id)?"✓ ":""}${esc(p.title)}</span>`).join(" ")}</p>`}
function consView(m,c){
  const d=c.data||{};S.consCur=d;
  if(m==="m1")return `<div class="grid2"><div>${listBlock("Strengths",d.strengths,"theme","detail",c)}${listBlock("Problems",d.problems,"theme","detail",c)}</div><div>${listBlock("Opportunities",d.opportunities,"theme","detail",c)}${listBlock("Threats",d.threats,"theme","detail",c)}</div></div>${para("What it means for the chapter",d.impact)}
    ${listBlock("Focus areas the team proposed",d.focusAreas,"area","why",c,(x,i)=>`<button class="btn ghost sm" data-act="toPlan" data-kind="focus" data-text="${esc(x.area)}">Use as imperative</button>`)}`;
  if(m==="m2"){const imps=(d.imperatives||[]).filter(x=>has(x.title)).map(x=>({...x,score:m2Score(x.refs,c.labels)})).sort((a,b)=>b.score-a.score);S.m2Sorted=imps;
    const i1=(d.imp1Goals||[]).filter(x=>has(x.text));S.m2i1=i1;
    return `${d.observations?`<div class="callout">${esc(d.observations)}</div>`:""}
    <div class="btns" style="margin:.5rem 0"><button class="btn gold sm" data-act="buildDraft">Build draft plan from this step</button><span class="sm muted">Takes Imperative 1 goals and the top three proposed imperatives.</span></div>
    <h3 style="margin-top:1rem">Imperative 1 goals</h3><p class="sm muted">${esc(S.config.requiredImperative)}</p>${i1.map((x,i)=>themeRow(x.text,x.note,x.refs,c,`<button class="btn ghost sm" data-act="toPlan" data-kind="i1goal" data-i="${i}">Add to plan</button>`)).join("")||`<p class="muted sm">No goals proposed yet.</p>`}
    ${coverageLine(imps.map(x=>x.area))}
    <h3 style="margin-top:1rem">Proposed imperatives, ranked by team support</h3><p class="sm muted">Ranking points: an officer’s first choice earns 3, second 2, third 1.</p>
    ${imps.map((x,i)=>{const r=refInfo(x.refs,c.labels);return `<div class="imp" style="padding:.8rem"><div class="split" style="margin:0"><span><b>${esc(x.title)}</b>${areaLabel(x.area)?`<div class="sm" style="color:var(--blue)">Advances ${esc(areaLabel(x.area))}</div>`:""}</span><span class="btns"><span class="badge">${x.score} pts</span><span class="badge blue">${r.count} of ${c.n}</span></span></div><div class="who sm muted">${esc(r.uids.map(nm).join(", "))}</div>${(x.goals||[]).filter(g=>has(g.text)).map(g=>`<div class="sm" style="margin-top:.35rem">• ${esc(g.text)}${g.note?`<span class="muted"> (${esc(g.note)})</span>`:""}</div>`).join("")}<div class="btns" style="margin-top:.5rem"><button class="btn ghost sm" data-act="toPlan" data-kind="imp" data-i="${i}">Add to plan with goals</button></div></div>`}).join("")||`<p class="muted sm">No imperatives proposed yet.</p>`}`}
  if(m==="m3")return `${has(d.why)?`<h3>Draft “Our why”</h3><blockquote class="quote">${esc(d.why)}</blockquote><button class="btn ghost sm" data-act="toPlan" data-kind="why">Use as the plan’s why</button>`:""}
    ${listBlock("Key points",d.keyPoints,"point","",c,(x,i)=>`<button class="btn ghost sm" data-act="toPlan" data-kind="kp" data-text="${esc(x.point)}">Add</button>`)}${listBlock("Ideas for motivating the middle",d.middle,"idea","",c)}`;
  if(m==="m4")return `${para("How the conversation went",d.conversation)}${para("Putting it into practice",d.operationalize)}${para("Handling resistance",d.resistance)}${para("Daring greatly",d.arena)}${listBlock("Ideas to encourage brothers",d.dare,"idea","",c)}
    ${(d.revisions||[]).filter(has).length?`<h3 style="margin-top:1rem">Suggested revisions to the plan</h3><ul>${d.revisions.filter(has).map(r=>`<li>${esc(r)}</li>`).join("")}</ul>`:""}`;
  return `${d.summary?`<div class="callout">${esc(d.summary)}</div>`:""}${listBlock("Challenges",d.challenges,"point","",c)}${listBlock("Wins",d.wins,"point","",c)}${listBlock("Resources requested",d.resources,"point","",c)}`;
}
/* ---------- plan ---------- */
function blankPlan(){const g=S.group;return {chapterName:g.name||"",institution:g.school||"",cycle:g.cycle||S.config.cycle,submittedBy:"",
  imperatives:[0,1,2,3].map(()=>({text:"",owner:"",area:"",goals:[0,1,2,3].map(()=>({text:"",leader:"",ap:{actions:[],barriers:[],resAvail:"",resNeed:""}}))})),
  why:"",keyPoints:[],buyin:BUYIN.map(()=>({action:"",who:"",when:""})),buyinNotes:""}}
function fixPlan(p){const b=blankPlan();p=Object.assign(b,p||{});p.imperatives=[0,1,2,3].map(i=>{const x=Object.assign({text:"",owner:"",area:""},(p.imperatives||[])[i]||{});x.goals=[0,1,2,3].map(j=>{const g=Object.assign({text:"",leader:""},(x.goals||[])[j]||{});g.ap=Object.assign({actions:[],barriers:[],resAvail:"",resNeed:""},g.ap||{});return g});return x});
  p.buyin=BUYIN.map((_,i)=>Object.assign({action:"",who:"",when:""},(p.buyin||[])[i]||{}));p.keyPoints=p.keyPoints||[];return p}
async function loadPlan(){const d=await S.db.doc(`groups/${S.gid}/work/plan`).get();return fixPlan(d.exists?clone(d.data()):null)}
async function viewPlan(){
  const rt=S.rt;
  if(!S.isLeader){
    const g=(await S.db.doc("groups/"+S.gid).get()).data();
    if(!g.planShared){$("#view").innerHTML=`<div class="empty">Your team leader hasn’t shared the chapter plan yet. It will appear here once he does.</div>`;return}
    const p=await loadPlan();$("#view").innerHTML=`<div class="doc">${planDoc(p)}</div>`;return}
  S.plan=await loadPlan();S.plan._gid=S.gid;S.planCache=S.plan;
  const mems=await S.db.collection(`groups/${S.gid}/members`).get();S.planMembers=mems.docs.map(x=>x.data());
  await resolveNames(S.planMembers.map(x=>x.uid));if(rt!==S.rt)return;
  S.bind={model:()=>S.plan,saver:new Saver(S.db.doc(`groups/${S.gid}/work/plan`),()=>{const b=clone(S.plan);delete b._gid;return b}),rerender:renderPlan};
  renderPlan();
}
function goalBlock(i,j){const g=S.plan.imperatives[i].goals[j],b=`imperatives.${i}.goals.${j}`;
  return `<div class="goal"><div class="g2">${fText(b+".text",`Goal ${i+1}.${j+1}`,"",2)}${fInput(b+".leader","Goal leader","Who guides it day to day","people")}</div>
  <details><summary>Action plan for goal ${i+1}.${j+1}${has(g.ap)?" (started)":""}</summary>
  ${fRows(b+".ap.actions",{label:"Strategic actions",hint:"Give every step a deadline, spread the work, and watch for steps that depend on others.",min:1,max:12,add:"action",grid:"2fr 1fr 1fr 1fr",cols:[{k:"step",ph:"Action step"},{k:"start",ph:"Start"},{k:"end",ph:"End"},{k:"who",ph:"By whom"}]})}
  ${fRows(b+".ap.barriers",{label:"Potential barriers",hint:"Structures, processes, materials, people, approvals, budget.",min:1,max:6,add:"barrier",grid:"1fr 1fr",cols:[{k:"barrier",ph:"Barrier"},{k:"response",ph:"How we’ll deal with it"}]})}
  <div class="g2" style="grid-template-columns:1fr 1fr">${fText(b+".ap.resAvail","Resources available","",2)}${fText(b+".ap.resNeed","Resources needed","",2)}</div></details></div>`}
function renderPlan(){
  if(S.view!=="plan"||!$("#view"))return;
  const p=S.plan,g=S.group;
  const names=[...new Set(S.planMembers.map(x=>S.names[x.uid]).filter(Boolean))];
  $("#view").innerHTML=`<datalist id="people">${names.map(n=>`<option value="${esc(n)}">`).join("")}</datalist>
  <section class="panel"><div class="split"><div><h2 style="margin:0">Chapter strategic plan</h2><p class="muted sm" style="margin:0">Pull in team input from the dashboard, or build a first draft in one step, then edit anything here.</p></div>
  <div class="btns"><button class="btn gold" data-act="buildDraft">Build draft from team input</button></div></div>
  <div class="grid2">${fInput("chapterName","Chapter")}${fInput("institution","Institution")}${fInput("cycle","Planning year")}${fInput("submittedBy","Submitted by","","people")}</div></section>
  ${p.imperatives.map((im,i)=>`<section class="imp"><div class="head"><span class="num">${i+1}</span><h3 style="margin:0">Imperative ${i+1}</h3></div>
    ${i===0?`<div class="callout" style="margin-bottom:.8rem">${esc(S.config.requiredImperative)}<div class="sm muted">Set by the Fraternity for every chapter. Advances ${esc(areaLabel(S.config.requiredPillar))}.</div></div>`:fText(`imperatives.${i}.text`,"","",2)+fArea(`imperatives.${i}.area`,`${S.config.planName} area or goal it advances`)}
    ${fTargets(i===0?S.config.requiredPillar:areaPid(im.area),`imperatives.${i}.goals`,{obj:1})}
    ${fInput(`imperatives.${i}.owner`,"Imperative owner","","people")}<p class="hint" style="margin-top:-.8rem">Coordinates the work on every goal under this imperative.</p>
    ${[0,1,2,3].map(j=>goalBlock(i,j)).join("")}</section>`).join("")}
  <section class="panel"><h2>Our why</h2>${fText("why","","Why these imperatives and goals matter to the chapter now and in the long run.",6)}${fList("keyPoints",{label:"Key points",min:1,max:5,add:"key point"})}</section>
  <section class="panel"><h2>Chapter buy-in meeting</h2><p class="muted sm">Agree on these before presenting to the chapter. Plan 60 to 90 minutes: explain why you plan every year, walk through the process, report on last year’s results, share the Fraternity’s ${esc(S.config.planName)} plan and how your imperatives advance it, present the imperatives with owners and goals with leaders, listen for additional ideas, and ask for buy-in.</p>
  <div class="scroll"><table><thead><tr><th style="min-width:180px">Decision</th><th style="min-width:180px">Action</th><th style="min-width:120px">Who</th><th style="min-width:100px">When</th></tr></thead><tbody>${BUYIN.map((t,i)=>`<tr><td class="sm">${esc(t)}</td><td><input type="text" data-bind="buyin.${i}.action" value="${esc(p.buyin[i].action)}" aria-label="Action"></td><td><input type="text" list="people" data-bind="buyin.${i}.who" value="${esc(p.buyin[i].who)}" aria-label="Who"></td><td><input type="text" data-bind="buyin.${i}.when" value="${esc(p.buyin[i].when)}" aria-label="When"></td></tr>`).join("")}</tbody></table></div>
  ${fText("buyinNotes","Buy-in meeting notes","Record members’ concerns and suggestions for more imperatives or goals.",4)}</section>
  <section class="panel"><div class="split"><h2 style="margin:0">Finish and share</h2><span class="btns">
    <button class="btn" data-act="preview">${S.showPreview?"Hide":"Preview"} final plan</button>
    <button class="btn ghost" data-act="dlHtml">Download for print (.html)</button><button class="btn ghost" data-act="dlMd">Download text (.md)</button>
    <button class="btn ${g.planShared?"ghost":"gold"}" data-act="share">${g.planShared?"Stop sharing with team":"Share plan with team"}</button></span></div>
    ${coverageLine(p.imperatives.slice(1).filter(x=>has(x.text)).map(x=>x.area))}
    <p class="muted sm" style="margin:.6rem 0 0">${g.planShared?"Your officers can see the current plan on their Chapter plan tab.":"Only you can see the plan until you share it."} Open the .html download in a browser and print it to PDF for the Chapter System upload, due within 30 days of your academic start.</p>
    ${S.showPreview?`<div class="doc" style="margin-top:1rem">${planDoc(p)}</div>`:""}</section>`;
}
function firstEmptyImp(){for(let i=1;i<4;i++)if(!has(S.plan.imperatives[i].text))return i;return -1}
function putGoals(i,goals){const gs=S.plan.imperatives[i].goals;let added=0;for(const t of goals){if(!has(t))continue;if(gs.some(x=>norm(x.text)===norm(t)))continue;const k=gs.findIndex(x=>!has(x.text));if(k<0)break;gs[k].text=t;added++}return added}
async function ensurePlanLoaded(){S.plan=await loadPlan();S.plan._gid=S.gid}
async function savePlanNow(){const b=clone(S.plan);delete b._gid;b.updatedAt=Date.now();await S.db.doc(`groups/${S.gid}/work/plan`).set(b);S.planCache=b}
ACT.toPlan=async b=>{
  if(!S.bind||S.bind.model()!==S.plan)await ensurePlanLoaded();
  const k=b.dataset.kind;let msg="";
  if(k==="focus"||k==="imp"){const i=firstEmptyImp();if(i<0){toast("All four imperatives are filled. Clear one on the plan first.");return}
    if(k==="focus")S.plan.imperatives[i].text=b.dataset.text;else{const x=S.m2Sorted[+b.dataset.i];S.plan.imperatives[i].text=x.title;S.plan.imperatives[i].area=areaParts(x.area)?x.area:"";putGoals(i,(x.goals||[]).map(g=>g.text))}
    msg=`Added as Imperative ${i+1}.`}
  if(k==="i1goal"){const x=S.m2i1[+b.dataset.i];msg=putGoals(0,[x.text])?"Added under Imperative 1.":"Imperative 1 already has that goal or is full."}
  if(k==="why"){S.plan.why=S.consCur.why;msg="Our why added to the plan."}
  if(k==="kp"){if(S.plan.keyPoints.filter(has).length>=5){toast("The plan already has five key points.");return}if(!S.plan.keyPoints.some(x=>norm(x)===norm(b.dataset.text))){const e=S.plan.keyPoints.findIndex(x=>!has(x));if(e>=0)S.plan.keyPoints[e]=b.dataset.text;else S.plan.keyPoints.push(b.dataset.text)}msg="Key point added."}
  try{await savePlanNow();toast(msg)}catch(e){toast("Couldn’t update the plan: "+(e.message||e.code))}
};
ACT.buildDraft=async b=>{
  const onPlan=S.bind&&S.bind.model()===S.plan;
  if(!onPlan)await ensurePlanLoaded();
  const filled=S.plan.imperatives.some((x,i)=>(i>0&&has(x.text))||x.goals.some(g=>has(g.text)));
  if(filled&&b.dataset.confirm!=="1"){b.dataset.confirm="1";const t=b.textContent;b.textContent="Select again to replace the current imperatives and goals";setTimeout(()=>{if(b.isConnected){b.dataset.confirm="";b.textContent=t}},5000);return}
  b.disabled=true;
  const cd=await S.db.doc(`groups/${S.gid}/work/consolidated`).get();const cons=cd.exists?cd.data():{};
  const c2=cons.m2;
  if(!c2){b.disabled=false;toast("Consolidate Step 2 on the team dashboard first.");return}
  const imps=(c2.data.imperatives||[]).filter(x=>has(x.title)).map(x=>({...x,score:m2Score(x.refs,c2.labels)})).sort((a,b)=>b.score-a.score).slice(0,3);
  const i1=(c2.data.imp1Goals||[]).filter(x=>has(x.text)).sort((a,b)=>refInfo(b.refs,c2.labels).count-refInfo(a.refs,c2.labels).count);
  S.plan.imperatives.forEach((im,i)=>{if(i>0){im.text="";im.area=""}im.goals.forEach(g=>{g.text=""})});
  putGoals(0,i1.map(x=>x.text));
  imps.forEach((x,k)=>{S.plan.imperatives[k+1].text=x.title;S.plan.imperatives[k+1].area=areaParts(x.area)?x.area:"";putGoals(k+1,(x.goals||[]).map(g=>g.text))});
  const c3=cons.m3;
  if(c3&&c3.data){if(!has(S.plan.why)&&has(c3.data.why))S.plan.why=c3.data.why;
    if(!has(S.plan.keyPoints)){S.plan.keyPoints=(c3.data.keyPoints||[]).filter(x=>has(x.point)).sort((a,b)=>refInfo(b.refs,c3.labels).count-refInfo(a.refs,c3.labels).count).slice(0,5).map(x=>x.point)}}
  if(!has(S.plan.submittedBy)&&S.names[S.me])S.plan.submittedBy=S.names[S.me];
  try{await savePlanNow();b.disabled=false;toast(`Draft built: ${imps.length+1} imperatives. Now assign owners and goal leaders.`);if(onPlan)renderPlan();else location.hash=`#/g/${S.gid}/plan`}
  catch(e){b.disabled=false;toast("Couldn’t save the draft: "+(e.message||e.code))}
};
ACT.preview=()=>{S.showPreview=!S.showPreview;renderPlan()};
ACT.share=async()=>{const v=!S.group.planShared;try{await S.bind.saver.flush();await S.db.doc("groups/"+S.gid).update({planShared:v});S.group.planShared=v;toast(v?"Plan shared with your team.":"Plan hidden from your team.");renderPlan()}catch(e){toast("Couldn’t change sharing: "+(e.message||e.code))}};
/* ---------- final plan document & export ---------- */
function planParts(p){const c=S.config;const imps=p.imperatives.map((im,i)=>({n:i+1,text:i===0?c.requiredImperative:im.text,owner:im.owner,area:i===0?c.requiredPillar:im.area,goals:im.goals.map((g,j)=>({...g,n:`${i+1}.${j+1}`})).filter(g=>has(g.text))})).filter(im=>has(im.text));return {c,imps}}
function planDoc(p){
  const {c,imps}=planParts(p);
  const ap=g=>{const a=g.ap||{};const acts=(a.actions||[]).filter(has),bars=(a.barriers||[]).filter(has);if(!acts.length&&!bars.length&&!has(a.resAvail)&&!has(a.resNeed))return "";
    return `<div style="margin:.4rem 0 .8rem 1rem" class="sm">${acts.length?`<table><thead><tr><th>Action</th><th>Start</th><th>End</th><th>By whom</th></tr></thead><tbody>${acts.map(x=>`<tr><td>${esc(x.step)}</td><td>${esc(x.start)}</td><td>${esc(x.end)}</td><td>${esc(x.who)}</td></tr>`).join("")}</tbody></table>`:""}
    ${bars.length?`<p style="margin:.4rem 0 .2rem"><b>Barriers</b></p><ul style="margin:0">${bars.map(x=>`<li>${esc(x.barrier)}${x.response?`: ${esc(x.response)}`:""}</li>`).join("")}</ul>`:""}
    ${has(a.resAvail)?`<p style="margin:.3rem 0"><b>Resources available:</b> ${esc(a.resAvail)}</p>`:""}${has(a.resNeed)?`<p style="margin:.3rem 0"><b>Resources needed:</b> ${esc(a.resNeed)}</p>`:""}</div>`};
  const bi=(p.buyin||[]).map((x,i)=>({t:BUYIN[i],...x})).filter(x=>has(x.action)||has(x.who)||has(x.when));
  return `<div class="center"><div class="sm muted">Sigma Chi</div><h1 style="margin:.1rem 0">Strategic Direction ${esc(p.cycle)}</h1><div><b>${esc(p.chapterName)}</b>${p.institution?`, ${esc(p.institution)}`:""}</div>${p.submittedBy?`<div class="sm muted">Submitted by ${esc(p.submittedBy)}</div>`:""}</div>
  <h2>The Fraternity’s ${esc(c.planName)} strategic plan</h2><p><b>Core values.</b> ${esc(c.coreValues)}</p><p><b>Vision.</b> ${esc(c.vision)}</p><p><b>Mission.</b> ${esc(c.mission)}</p>
  <p style="margin-bottom:.2rem"><b>Strategic areas of focus</b></p><ul>${(c.pillars||[]).map(pl=>{const ns=imps.filter(im=>areaPid(im.area)===pl.id).map(im=>im.n);return `<li><b>${esc(pl.title)}.</b> ${esc(pl.tagline)}${ns.length?` <i>Advanced by chapter Imperative${ns.length>1?"s":""} ${ns.join(", ")}.</i>`:""}</li>`}).join("")}</ul>
  <h2>Our chapter imperatives</h2><div class="caa">CLARITY, ALIGNMENT, ACCOUNTABILITY</div>
  ${imps.map(im=>`<div class="dimp"><h3>Imperative ${im.n}: ${esc(im.text)}</h3>${areaLabel(im.area)?`<div class="sm">Advances ${esc(c.planName)}: ${esc(areaLabel(im.area))}</div>`:""}<div class="sm muted">Owner: ${esc(im.owner||"not yet assigned")}</div>${im.goals.map(g=>`<div style="margin-top:.6rem"><b>${g.n} Goal:</b> ${esc(g.text)}<div class="sm muted">Leader: ${esc(g.leader||"not yet assigned")}</div>${ap(g)}</div>`).join("")}</div>`).join("")||`<p class="muted">No imperatives yet.</p>`}
  ${has(p.why)||has(p.keyPoints)?`<h2>Our why</h2>${has(p.why)?`<p>${esc(p.why)}</p>`:""}${has(p.keyPoints)?`<ul>${clean(p.keyPoints).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}`:""}
  ${bi.length?`<h2>Buy-in and follow-through</h2><div class="scroll"><table><thead><tr><th>Decision</th><th>Action</th><th>Who</th><th>When</th></tr></thead><tbody>${bi.map(x=>`<tr><td>${esc(x.t)}</td><td>${esc(x.action)}</td><td>${esc(x.who)}</td><td>${esc(x.when)}</td></tr>`).join("")}</tbody></table></div>`:""}`;
}
function planMd(p){
  const {c,imps}=planParts(p);let o=`# ${p.chapterName} Strategic Plan ${p.cycle}\n\n`;
  if(p.institution)o+=`${p.institution}\n\n`;if(p.submittedBy)o+=`Submitted by ${p.submittedBy}\n\n`;
  o+=`## The Fraternity’s ${c.planName} strategic plan\n\n**Core values.** ${c.coreValues}\n\n**Vision.** ${c.vision}\n\n**Mission.** ${c.mission}\n\n**Strategic areas of focus**\n\n`;(c.pillars||[]).forEach(pl=>{const ns=imps.filter(im=>areaPid(im.area)===pl.id).map(im=>im.n);o+=`- **${pl.title}.** ${pl.tagline}${ns.length?` _Advanced by chapter Imperative${ns.length>1?"s":""} ${ns.join(", ")}._`:""}\n`});
  o+=`\n## Our chapter imperatives\n\n`;
  imps.forEach(im=>{o+=`### Imperative ${im.n}: ${im.text}\n\n${areaLabel(im.area)?`Advances ${c.planName}: ${areaLabel(im.area)}\n\n`:""}Owner: ${im.owner||"not yet assigned"}\n\n`;im.goals.forEach(g=>{o+=`- **${g.n} Goal:** ${g.text} (Leader: ${g.leader||"not yet assigned"})\n`;const a=g.ap||{};(a.actions||[]).filter(has).forEach(x=>o+=`  - Action: ${x.step}${x.start?`, start ${x.start}`:""}${x.end?`, end ${x.end}`:""}${x.who?`, by ${x.who}`:""}\n`);(a.barriers||[]).filter(has).forEach(x=>o+=`  - Barrier: ${x.barrier}${x.response?`; response: ${x.response}`:""}\n`);if(has(a.resAvail))o+=`  - Resources available: ${a.resAvail}\n`;if(has(a.resNeed))o+=`  - Resources needed: ${a.resNeed}\n`});o+="\n"});
  if(has(p.why)||has(p.keyPoints)){o+=`## Our why\n\n${p.why||""}\n\n`;clean(p.keyPoints).forEach(x=>o+=`- ${x}\n`);o+="\n"}
  const bi=(p.buyin||[]).map((x,i)=>({t:BUYIN[i],...x})).filter(x=>has(x.action)||has(x.who)||has(x.when));
  if(bi.length){o+=`## Buy-in and follow-through\n\n| Decision | Action | Who | When |\n|---|---|---|---|\n`;bi.forEach(x=>o+=`| ${x.t} | ${(x.action||"").replace(/\|/g,"/")} | ${x.who||""} | ${x.when||""} |\n`)}
  return o;
}
function planHtmlFile(p){return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(p.chapterName)} Strategic Plan ${esc(p.cycle)}</title><style>
body{font:15px/1.55 Georgia,"Times New Roman",serif;color:#1B2230;max-width:760px;margin:2rem auto;padding:0 1rem}h1,h2,h3{font-weight:600;line-height:1.2}h1{font-size:1.8rem}h2{font-size:1.25rem;border-bottom:2px solid #B8923A;padding-bottom:.25rem;margin-top:1.6rem;color:#12284C}h3{font-size:1.05rem;margin:0 0 .2rem}
.center{text-align:center}.sm{font-size:.88rem}.muted{color:#5B6577}.caa{font-size:.78rem;letter-spacing:.2em;color:#5B6577;text-align:center;margin:.3rem 0 1rem}.dimp{border:1px solid #D9DEE7;border-left:4px solid #0067B9;padding:.7rem 1rem;margin:0 0 1rem;page-break-inside:avoid}table{border-collapse:collapse;width:100%}th,td{border-bottom:1px solid #D9DEE7;padding:.3rem .4rem;text-align:left;vertical-align:top}th{font-size:.8rem;color:#5B6577}ol,ul{margin:.3rem 0 .6rem 1.2rem;padding:0}
@media print{body{margin:0}}</style></head><body>${planDoc(p)}</body></html>`}
async function dl(filename,data){try{await S.bind.saver.flush()}catch(e){}const type=filename.endsWith(".html")?"text/html":"text/markdown";const url=URL.createObjectURL(new Blob([data],{type:type+";charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000)}
const fname=()=>((S.plan.chapterName||"Chapter")+" Strategic Plan "+(S.plan.cycle||"")).replace(/[–—]/g,"-").replace(/[^\w\- ]+/g,"").trim().replace(/\s+/g," ");
ACT.dlHtml=()=>dl(fname()+".html",planHtmlFile(S.plan));
ACT.dlMd=()=>dl(fname()+".md",planMd(S.plan));
boot();
