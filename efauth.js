/* EnglishFEDAC · login amb Google + resultats + rànquing */
(function(){
const SB_URL='https://tbzifugbfvrjtapdxmrw.supabase.co';
const SB_KEY='sb_publishable_rJILsuooVdK_DpTQtGfQEQ_uYKUZ9CM';
const CDN='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js';
const AVATARS=['🦊','🐼','🐯','🦁','🐸','🐵','🐨','🐙','🦄','🐲','🦖','🐧','🦉','🐬','🐝','🐞','🚀','⚽','🎸','🌟'];
const COURSES=['3r','4t','5è','6è'],GROUPS=['A','B','C','D'];
const EF=window.EF={user:null,profile:null,sb:null,listeners:[],best:{}};
let readyRes;EF.ready=new Promise(r=>readyRes=r);
EF.onChange=f=>{EF.listeners.push(f);};
const fire=()=>EF.listeners.forEach(f=>{try{f(EF)}catch(e){}});

const css=`
.efchip{position:fixed;right:14px;bottom:14px;z-index:95;display:flex;align-items:center;gap:8px;background:#fff;color:#26214a;border:0;border-radius:999px;padding:8px 16px 8px 10px;font:700 17px Fredoka,system-ui,sans-serif;box-shadow:0 5px 0 rgba(0,0,0,.22),0 10px 24px rgba(0,0,0,.18);cursor:pointer;text-decoration:none}
.efchip .av{font-size:26px;line-height:1}
.efchip.out{background:#26214a;color:#fff}
.efchip .g{width:22px;height:22px}.efgo svg{width:30px;height:30px;flex-shrink:0}
.efov{position:fixed;inset:0;background:rgba(20,15,45,.6);z-index:200;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(3px)}
.efbox{background:#fff;color:#26214a;border-radius:28px;max-width:520px;width:100%;padding:26px 22px;text-align:center;font-family:Fredoka,system-ui,sans-serif;box-shadow:0 12px 0 rgba(0,0,0,.2);max-height:94vh;overflow:auto}
.efbox h2{font-size:30px;margin:6px 0}
.efbox p{font-size:17px;color:#6b6790;margin:4px 0 12px}
.efbox label{display:block;text-align:left;font-weight:700;margin:14px 0 6px;font-size:17px}
.efbox input{width:100%;font:600 20px Fredoka,sans-serif;padding:12px 14px;border:3px solid #e4e0f5;border-radius:14px;outline:none}
.efbox input:focus{border-color:#6c4cf5}
.efrow{display:flex;gap:8px;flex-wrap:wrap}
.efrow button{flex:1;min-width:60px;font:700 20px Fredoka,sans-serif;padding:12px;border:3px solid #e4e0f5;background:#f6f4ff;border-radius:14px;cursor:pointer;color:#26214a}
.efrow button.on{border-color:#6c4cf5;background:#6c4cf5;color:#fff}
.efav{display:grid;grid-template-columns:repeat(10,1fr);gap:6px}
.efav button{font-size:26px;padding:6px 0;border:3px solid transparent;background:#f6f4ff;border-radius:12px;cursor:pointer}
.efav button.on{border-color:#6c4cf5;background:#ece6ff}
.efgo{margin-top:18px;width:100%;font:700 22px Fredoka,sans-serif;border:0;border-radius:16px;padding:14px;background:#ffcf3f;color:#3a2a00;box-shadow:0 5px 0 rgba(0,0,0,.25);cursor:pointer}
.efgo.g{background:#fff;border:3px solid #dadce0;box-shadow:0 4px 0 #dadce0;color:#3c4043;display:flex;align-items:center;justify-content:center;gap:12px}
.efsm{background:none;border:0;color:#6b6790;font:600 16px Fredoka,sans-serif;margin-top:10px;cursor:pointer;text-decoration:underline}
.efmenu a,.efmenu button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font:700 19px Fredoka,sans-serif;padding:13px 14px;border:0;background:#f6f4ff;border-radius:14px;margin-top:8px;color:#26214a;text-decoration:none;cursor:pointer}
.efsave{position:fixed;left:50%;bottom:20px;transform:translate(-50%,120px);background:#22b35b;color:#fff;font:700 18px Fredoka,sans-serif;padding:10px 20px;border-radius:999px;z-index:210;transition:.35s;box-shadow:0 5px 0 rgba(0,0,0,.2)}
.efsave.show{transform:translate(-50%,0)}
.efsave.err{background:#e5484d}
@media (max-width:600px){.efchip{padding:6px 12px 6px 8px;font-size:15px}.efav{grid-template-columns:repeat(5,1fr)}}
`;
const G='<svg class="g" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>';
function el(h){const d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild}
function overlay(h){closeOv();const o=el(`<div class="efov" id="efov"><div class="efbox">${h}</div></div>`);o.addEventListener('click',e=>{if(e.target===o&&EF.profile)closeOv()});document.body.appendChild(o);return o}
function closeOv(){const o=document.getElementById('efov');if(o)o.remove()}
function flash(t,err){let s=document.getElementById('efsave');if(!s){s=el('<div class="efsave" id="efsave"></div>');document.body.appendChild(s)}s.textContent=t;s.classList.toggle('err',!!err);s.classList.add('show');clearTimeout(s._t);s._t=setTimeout(()=>s.classList.remove('show'),2400)}

EF.login=async()=>{try{await EF.sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.href.split('#')[0],queryParams:{prompt:'select_account'}}})}catch(e){flash('No s’ha pogut iniciar sessió',1)}};
EF.logout=async()=>{await EF.sb.auth.signOut();EF.user=null;EF.profile=null;EF.best={};closeOv();chip();fire()};
EF.isTeacher=async()=>{if(!EF.user)return false;const {data}=await EF.sb.rpc('is_teacher');return !!data};

function loginBox(reason){overlay(`<div style="font-size:64px">🎮</div><h2>English FEDAC</h2><p>${reason||'Inicia sessió per guardar els teus punts i sortir al rànquing!'}</p><button class="efgo g" id="efG">${G} Inicia sessió amb Google</button><button class="efsm" id="efNo">Ara no, només vull jugar</button>`);
 document.getElementById('efG').onclick=EF.login;document.getElementById('efNo').onclick=closeOv}
EF.loginBox=loginBox;

function profileBox(first){const p=EF.profile||{};let av=p.avatar||AVATARS[Math.random()*AVATARS.length|0],co=p.course||'',gr=p.grp||'A';
 const guess=(EF.user.user_metadata&&(EF.user.user_metadata.full_name||EF.user.user_metadata.name)||'').split(' ');const nick=p.nickname||(guess[0]?guess[0]+(guess[1]?' '+guess[1][0]+'.':''):'');
 overlay(`<div style="font-size:54px" id="efBig">${av}</div><h2>${first?'Benvingut/da! 👋':'El meu perfil'}</h2><p>${first?'Només cal fer-ho un cop.':EF.user.email}</p>
 <label>👤 El meu nom al rànquing</label><input id="efN" maxlength="24" value="${nick.replace(/"/g,'')}" placeholder="Ex: Pau G.">
 <label>🎓 Curs</label><div class="efrow" id="efC">${COURSES.map(c=>`<button data-v="${c}" class="${c===co?'on':''}">${c}</button>`).join('')}</div>
 <label>🏫 Grup</label><div class="efrow" id="efR">${GROUPS.map(c=>`<button data-v="${c}" class="${c===gr?'on':''}">${c}</button>`).join('')}</div>
 <label>😀 Avatar</label><div class="efav" id="efA">${AVATARS.map(a=>`<button data-v="${a}" class="${a===av?'on':''}">${a}</button>`).join('')}</div>
 <button class="efgo" id="efS">✔ ${first?'Comença!':'Desa'}</button>${first?'':'<button class="efsm" id="efOut">Tanca la sessió</button>'}`);
 const pickRow=(id,cb)=>document.querySelectorAll(`#${id} button`).forEach(b=>b.onclick=()=>{document.querySelectorAll(`#${id} button`).forEach(x=>x.classList.remove('on'));b.classList.add('on');cb(b.dataset.v)});
 pickRow('efC',v=>co=v);pickRow('efR',v=>gr=v);pickRow('efA',v=>{av=v;document.getElementById('efBig').textContent=v});
 const o=document.getElementById('efOut');if(o)o.onclick=EF.logout;
 document.getElementById('efS').onclick=async()=>{const n=document.getElementById('efN').value.trim();
  if(n.length<2){flash('Escriu el teu nom 🙂',1);return}if(!co){flash('Tria el teu curs 🎓',1);return}
  const row={id:EF.user.id,email:EF.user.email,nickname:n,course:co,grp:gr,avatar:av};
  const {data,error}=await EF.sb.from('profiles').upsert(row).select().single();
  if(error){flash('Error desant el perfil',1);return}EF.profile=data;closeOv();chip();fire();flash('✔ Perfil desat!')}}
EF.profileBox=()=>EF.user?profileBox(false):loginBox();

function menuBox(){overlay(`<div style="font-size:54px">${EF.profile.avatar}</div><h2>${EF.profile.nickname}</h2><p>${EF.profile.course} ${EF.profile.grp} · ${EF.user.email}</p><div class="efmenu">
 <a href="leaderboard.html">🏆 Rànquing de la classe</a><a href="leaderboard.html#me">⭐ Els meus resultats</a><button id="efE">✏️ Canvia el perfil</button><a href="teacher.html" id="efT" style="display:none">👩‍🏫 Panell del mestre</a><button id="efO">🚪 Tanca la sessió</button></div>`);
 document.getElementById('efE').onclick=()=>profileBox(false);document.getElementById('efO').onclick=EF.logout;
 EF.isTeacher().then(t=>{if(t)document.getElementById('efT').style.display=''})}

function chip(){let c=document.getElementById('efchip');if(!c){c=el('<button class="efchip" id="efchip"></button>');document.body.appendChild(c)}
 if(!EF.user){c.className='efchip out';c.innerHTML=`<span class="av">🔑</span> Inicia sessió`;c.onclick=()=>loginBox()}
 else if(!EF.profile){c.className='efchip';c.innerHTML=`<span class="av">👤</span> Completa el perfil`;c.onclick=()=>profileBox(true)}
 else{c.className='efchip';c.innerHTML=`<span class="av">${EF.profile.avatar}</span> ${EF.profile.nickname}`;c.onclick=menuBox}}

EF.saveScore=async(s)=>{await EF.ready;if(!EF.user||!EF.profile){flash('🔑 Inicia sessió per guardar els punts!');return false}
 const row={game:s.game,title:s.title,course:s.course,unit:s.unit,stars:Math.max(0,Math.min(3,s.stars|0)),points:Math.max(0,Math.min(100000,s.points|0))};
 const {error}=await EF.sb.from('scores').insert(row);if(error){flash('No s’han pogut guardar els punts',1);return false}
 EF.best[row.game]=Math.max(EF.best[row.game]||0,row.stars);flash(`💾 Guardat! ${'⭐'.repeat(row.stars)}`);return true};
EF.loadBest=async()=>{if(!EF.user)return{};const {data}=await EF.sb.from('scores').select('game,stars').eq('user_id',EF.user.id).limit(5000);EF.best={};(data||[]).forEach(r=>EF.best[r.game]=Math.max(EF.best[r.game]||0,r.stars));return EF.best};

async function init(){const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 if(!window.supabase){await new Promise((res,rej)=>{const s=document.createElement('script');s.src=CDN;s.onload=res;s.onerror=rej;document.head.appendChild(s)}).catch(()=>null)}
 if(!window.supabase){readyRes(EF);return}
 EF.sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,detectSessionInUrl:true,flowType:'pkce'}});
 const {data:{session}}=await EF.sb.auth.getSession();EF.user=session?session.user:null;
 if(EF.user){const {data}=await EF.sb.from('profiles').select('*').eq('id',EF.user.id).maybeSingle();EF.profile=data;await EF.loadBest()}
 chip();readyRes(EF);fire();
 if(EF.user&&!EF.profile)profileBox(true);
 EF.sb.auth.onAuthStateChange(async(ev,ses)=>{if(ev==='SIGNED_IN'&&ses&&(!EF.user||EF.user.id!==ses.user.id)){EF.user=ses.user;const {data}=await EF.sb.from('profiles').select('*').eq('id',EF.user.id).maybeSingle();EF.profile=data;await EF.loadBest();chip();fire();if(!EF.profile)profileBox(true)}});
}
EF.AVATARS=AVATARS;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
