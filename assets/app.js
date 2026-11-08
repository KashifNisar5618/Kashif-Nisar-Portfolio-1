const KEY='kn-site-v1',AU='Kashif Nisar',AP='KAS123';
const CATS=['Machine Learning','AI Applications','Web & Systems'];
const DEF={name:'Kashif Nisar',role:'Data Science Student | Aspiring Data Scientist & AI Engineer',
tagline:'I turn raw data into intelligent solutions. I want to become a Data Scientist and AI Engineer.',
bio:'I am a Data Science student in my 3rd semester at Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST). I work on machine learning, data cleaning, and AI projects, and I want to become a Data Scientist and AI Engineer who builds systems people can trust.',
photo:'assets/kashif.jpg',theme:'charcoal',
contact:{email:'',whatsapp:'',instagram:'',youtube:'',github:'',linkedin:''},
projects:[{t:'Fraud Detection on Transactions',c:'Machine Learning',d:'Machine learning model that flags suspicious transactions.',img:''},{t:'Hospital Management System',c:'Web & Systems',d:'System to manage patient records, appointments, and hospital data.',img:''},{t:'AI Finance Assistant',c:'AI Applications',d:'AI assistant that helps users understand and track their finances.',img:''},{t:'Opportunity Hub',c:'Web & Systems',d:'Website connecting students with opportunities.',img:''}],
timeline:[['Started Data Science studies','BS Data Science, PAF-IAST'],['Completed C++ certificate','Scholar Hat'],['Completed Machine Learning certificate','The Techniknest'],['Built Fraud Detection project','Machine Learning'],['Building AI Finance Assistant','AI Applications']],
skills:[['Python',85],['Machine Learning',80],['Data Cleaning & Wrangling',85],['Excel',80],['C++',70]],
services:[{t:'Data Cleaning & Analysis',d:'Clean, organize, and analyze messy datasets using Python and Excel.',p:'On request'},{t:'Machine Learning Models',d:'Build and evaluate predictive models for detection and classification tasks.',p:'On request'},{t:'AI Assistant Development',d:'Design simple AI assistants for finance and everyday tasks.',p:'On request'},{t:'Excel Reporting',d:'Dashboards and automated reports built in Excel.',p:'On request'}],
awards:[{t:'C++ Programming Certificate',g:'Scholar Hat',y:'',w:'Shows solid programming fundamentals.'},{t:'Machine Learning Certificate',g:'The Techniknest',y:'',w:'Covers core machine learning concepts and practice.'}]};
let D=load();
function load(){try{return Object.assign({},JSON.parse(JSON.stringify(DEF)),JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return JSON.parse(JSON.stringify(DEF))}}
function save(){localStorage.setItem(KEY,JSON.stringify(D));theme()}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function theme(){document.documentElement.dataset.theme=D.theme||'charcoal'}
function lines(v,f){return v.split('\n').map(l=>l.split('|').map(x=>x.trim())).filter(a=>a[0]).map(f)}
function img(file,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,700/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.85))};im.src=r.result};r.readAsDataURL(file)}
const PAGES=[['index.html','Home'],['portfolio.html','Portfolio'],['about.html','About'],['services.html','Services'],['awards.html','Awards'],['contact.html','Contact'],['admin.html','Admin']];
function nav(){const cur=location.pathname.split('/').pop()||'index.html';document.querySelector('header').innerHTML=`<div class="logo">KN</div><ul>${PAGES.map(([h,l])=>`<li><a href="${h}" class="${h===cur?'on':''}">${l}</a></li>`).join('')}</ul>`}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('on');en.target.querySelectorAll('[data-w]').forEach(i=>i.style.width=i.dataset.w+'%');io.unobserve(en.target)}}),{threshold:.15});
function observe(){document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*.08+'s';io.observe(el)})}
const photo=()=>esc(D.photo||'assets/kashif.jpg');
const thumb=p=>p.img?`url(${p.img})`:'linear-gradient(135deg,var(--a1),var(--a2))';
/* ---- animated project scenes (used when no image is uploaded) ---- */
const KIND=t=>/fraud/i.test(t)?'fraud':/hospital/i.test(t)?'hospital':/finance|assistant|\bai\b/i.test(t)?'ai':/opportun|hub/i.test(t)?'hub':'default';
const SCN={
fraud:`<div class="fr-list">${[['$240.00',0],['$18.50',0],['$9,800.00',1],['$64.20',0],['$3,310.00',1],['$22.00',0]].map(([a,b],i)=>`<div class="fr-row${b?' bad':''}" style="animation-delay:${i*.15}s"><i></i><b>${a}</b><em>${b?'FLAGGED':'OK'}</em></div>`).join('')}</div><div class="fr-beam"></div>`,
hospital:`<svg class="hs-ecg" viewBox="0 0 300 90" preserveAspectRatio="none"><path d="M0 50 H60 L72 50 L80 30 L90 70 L100 40 L108 50 H150 L162 50 L170 20 L180 80 L190 50 H300"/></svg><div class="hs-heart">+</div><div class="hs-chips"><span>Records</span><span>Appointments</span><span>Billing</span></div>`,
ai:`<div class="ai-chat"><div class="bub u">Show my spending this month</div><div class="bub a">Groceries are up 18% ✨</div><div class="typing"><i></i><i></i><i></i></div></div><div class="ai-bars">${[40,70,55,90,62].map((h,i)=>`<i style="--h:${h}%;animation-delay:${i*.12}s"></i>`).join('')}</div>`,
hub:`<div class="hb-ring"></div>${[['50%','14%','Jobs'],['86%','50%','Scholarships'],['50%','86%','Internships'],['14%','50%','Events']].map(([x,y,t],i)=>`<div class="hb-orb" style="left:${x};top:${y}"><span style="animation-delay:${i*.5}s">${t}</span></div>`).join('')}<div class="hb-core">KN</div>`,
default:`<div class="df-orb o1"></div><div class="df-orb o2"></div><div class="df-ring"></div>`
};
const visual=(p,big)=>p.img?`<div class="${big?'big':'thumb'}" style="background:url(${p.img}) center/cover"></div>`:`<div class="${big?'big':'thumb'} scene"><div class="scn">${SCN[KIND(p.t)]}</div><span class="tag">${esc(p.c)}</span></div>`;
/* ---------- public pages ---------- */
const R={};
R.index=()=>`<section class="hero wrap"><div class="htxt rv"><h1>Hi, I'm <span class="g">${esc(D.name)}</span></h1><div class="role">${esc(D.role)}</div><p>${esc(D.tagline)}</p><div class="btns"><a class="btn" href="portfolio.html">View Full Portfolio</a><a class="btn ghost" href="contact.html">Contact Me</a></div></div><div class="avatar rv"><img src="${photo()}" alt="${esc(D.name)}"></div></section>
<section class="wrap"><h2 class="rv">Featured <span class="g">Work</span></h2><p class="sub rv">A few projects I have built</p><div class="grid">${D.projects.slice(0,3).map(p=>`<div class="card rv">${visual(p)}<h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`).join('')}</div><p class="center rv"><a class="btn ghost" href="portfolio.html">View Full Portfolio</a></p></section>`;
let cat=CATS[0];
R.portfolio=()=>`<section class="wrap"><h2 class="rv">My <span class="g">Portfolio</span></h2><p class="sub rv">Browse my projects by category</p><div class="tabs">${CATS.map(c=>`<button class="tab ${c===cat?'on':''}" onclick="setCat(this.dataset.c)" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div><div class="grid" id="grid"></div></section><div class="lb" id="lb" onclick="if(event.target===this)closeLb()"></div>`;
function setCat(c){cat=c;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.c===c));grid()}
function grid(){const g=document.getElementById('grid');g.className='grid fade';g.innerHTML=D.projects.map((p,i)=>p.c===cat?`<div class="card rv" onclick="openLb(${i})">${visual(p)}<h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`:'').join('');observe()}
function openLb(i){const p=D.projects[i];document.getElementById('lb').innerHTML=`<div class="box"><button class="x" onclick="closeLb()">×</button>${visual(p,true)}<div class="inf"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><small class="sub">${esc(p.c)}</small></div></div>`;document.getElementById('lb').classList.add('open')}
function closeLb(){document.getElementById('lb').classList.remove('open')}
R.about=()=>`<section class="wrap"><h2 class="rv">About <span class="g">Me</span></h2><p class="sub rv">My story so far</p>
<div class="grid" style="grid-template-columns:1fr 1fr"><div class="rv"><p style="font-size:1.02rem">${esc(D.bio)}</p><h3 style="margin:26px 0 8px">Journey</h3><div class="tl">${D.timeline.map(([t,s])=>`<div class="tli"><b>${esc(t)}</b><span>${esc(s)}</span></div>`).join('')}</div></div>
<div class="rv"><h3 style="margin-bottom:14px">Core Skills</h3>${D.skills.map(([n,v])=>`<div class="skill-row"><span>${esc(n)}</span><span>${esc(v)}%</span></div><div class="bar"><i data-w="${esc(v)}"></i></div>`).join('')}</div></div></section>`;
R.services=()=>`<section class="wrap"><h2 class="rv">My <span class="g">Services</span></h2><p class="sub rv">What I can do for you</p><div class="grid">${D.services.map((s,i)=>`<div class="card rv"><div class="ic">${['📊','🤖','💬','📈','🧹','⚙️'][i%6]}</div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p><div class="price">Starting price: ${esc(s.p)}</div></div>`).join('')}</div></section>`;
R.awards=()=>`<section class="wrap"><h2 class="rv">Awards & <span class="g">Achievements</span></h2><p class="sub rv">Recognition for my work</p><div class="grid">${D.awards.map(a=>`<div class="card rv"><h3>${esc(a.t)}</h3><small>${a.y?esc(a.y)+' · ':''}Given by ${esc(a.g)}</small><p style="margin-top:10px">${esc(a.w)}</p></div>`).join('')}</div></section>`;
R.contact=()=>{const c=D.contact;const s=[['IG','instagram','Instagram'],['YT','youtube','YouTube'],['GH','github','GitHub'],['IN','linkedin','LinkedIn']].filter(x=>c[x[1]]).map(x=>`<a href="${esc(c[x[1]])}" target="_blank" title="${x[2]}">${x[0]}</a>`).join('');
return `<section class="wrap"><h2 class="rv">Get in <span class="g">Touch</span></h2><p class="sub rv">Reach out for data science, machine learning, or AI project collaborations.</p>
<div class="rv"><p>Email: ${c.email?`<a class="g" href="mailto:${esc(c.email)}">${esc(c.email)}</a>`:'Available in the Admin Panel'}</p><p>WhatsApp: ${c.whatsapp?`<a class="g" target="_blank" href="https://wa.me/${esc(c.whatsapp.replace(/\D/g,''))}">${esc(c.whatsapp)}</a>`:'Available on request'}</p></div>
<div class="social rv">${s||'<small class="sub">Social links can be added in the Admin Panel.</small>'}</div>
<form class="cform rv" onsubmit="return sendForm(event)">
<label class="lbl">Name</label><input id="f1" required><label class="lbl">Email</label><input id="f2" type="email" required>
<label class="lbl">Project Type</label><select id="f3"><option>Machine Learning Project</option><option>Data Analysis</option><option>AI Assistant</option><option>Web Project</option><option>Other</option></select>
<label class="lbl">Budget</label><input id="f4" placeholder="e.g. $200">
<label class="lbl">Message</label><textarea id="f5" rows="5" required></textarea>
<div><button class="btn" type="submit">Send Message</button></div></form></section>`};
function sendForm(e){e.preventDefault();if(!D.contact.email){alert('Contact email not set yet. Add it in the Admin Panel.');return false}
const b=`Name: ${f1.value}\nEmail: ${f2.value}\nProject: ${f3.value}\nBudget: ${f4.value}\n\n${f5.value}`;location.href=`mailto:${D.contact.email}?subject=${encodeURIComponent('Project enquiry from '+f1.value)}&body=${encodeURIComponent(b)}`;return false}
/* ---------- admin ---------- */
R.admin=()=>{if(!sessionStorage.getItem('kn-auth')){return `<section class="wrap adm"><div class="sec" style="max-width:420px;margin:auto"><h3>Admin Login</h3><label class="lbl">Username</label><input id="u"><label class="lbl">Password</label><input id="p" type="password"><div style="margin-top:14px"><button class="sb" onclick="login()">Log in</button></div><div class="msg" id="lm"></div><p class="sub" style="margin-top:14px;font-size:.85rem">Username: Kashif Nisar · Password: KAS123.</p></div></section>`}
const T=[['charcoal','Charcoal Orange'],['midnight','Midnight Blue'],['slate','Slate Purple'],['emerald','Emerald Dark']];
const tx=(k,l)=>`<label class="lbl">${l}</label><input value="${esc(D[k])}" oninput="D.${k}=this.value;save()">`;
const cf=(k,l)=>`<label class="lbl">${l}</label><input value="${esc(D.contact[k])}" oninput="D.contact.${k}=this.value;save()">`;
const pj=(p,i)=>`<div class="row"><input value="${esc(p.t)}" oninput="D.projects[${i}].t=this.value;save()"><select onchange="D.projects[${i}].c=this.value;save()">${CATS.map(c=>`<option ${c===p.c?'selected':''}>${esc(c)}</option>`).join('')}</select><input type="file" accept="image/*" onchange="img(this.files[0],u=>{D.projects[${i}].img=u;save();msg('Thumbnail saved')})"><button class="sb red" onclick="rm('projects',${i})">Remove</button></div><input style="margin-bottom:12px" value="${esc(p.d)}" oninput="D.projects[${i}].d=this.value;save()">`;
const sv=(s,i)=>`<div class="row"><input value="${esc(s.t)}" oninput="D.services[${i}].t=this.value;save()"><input value="${esc(s.p)}" placeholder="Price" oninput="D.services[${i}].p=this.value;save()"><input value="${esc(s.d)}" oninput="D.services[${i}].d=this.value;save()"><button class="sb red" onclick="rm('services',${i})">Remove</button></div>`;
const aw=(a,i)=>`<div class="row"><input value="${esc(a.t)}" oninput="D.awards[${i}].t=this.value;save()"><input value="${esc(a.g)}" placeholder="Given by" oninput="D.awards[${i}].g=this.value;save()"><input value="${esc(a.y)}" placeholder="Year" oninput="D.awards[${i}].y=this.value;save()"><button class="sb red" onclick="rm('awards',${i})">Remove</button></div><input style="margin-bottom:12px" value="${esc(a.w)}" placeholder="Why it matters" oninput="D.awards[${i}].w=this.value;save()">`;
return `<section class="wrap adm"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px"><h2>Admin <span class="g">Dashboard</span></h2><button class="sb" onclick="logout()">Log out</button></div>
<div class="sec"><h3>Color Theme</h3><div class="themes">${T.map(([k,l])=>`<button class="tab ${D.theme===k?'on':''}" onclick="D.theme='${k}';save();admin()">${l}</button>`).join('')}</div></div>
<div class="sec"><h3>Home Page</h3>${tx('name','Name')}${tx('role','Role')}<label class="lbl">Tagline</label><textarea rows="2" oninput="D.tagline=this.value;save()">${esc(D.tagline)}</textarea><label class="lbl">Profile photo</label><input type="file" accept="image/*" onchange="img(this.files[0],u=>{D.photo=u;save();msg('Photo saved')})"></div>
<div class="sec"><h3>About Page</h3><label class="lbl">Story</label><textarea rows="4" oninput="D.bio=this.value;save()">${esc(D.bio)}</textarea><label class="lbl">Timeline (one per line: Milestone | Detail)</label><textarea rows="5" oninput="D.timeline=lines(this.value,x=>[x[0],x[1]||'']);save()">${D.timeline.map(x=>x.join(' | ')).join('\n')}</textarea><label class="lbl">Skills (one per line: Skill | 0-100)</label><textarea rows="5" oninput="D.skills=lines(this.value,x=>[x[0],+x[1]||0]);save()">${D.skills.map(x=>x.join(' | ')).join('\n')}</textarea></div>
<div class="sec"><h3>Portfolio Projects <button class="sb" onclick="add('projects',{t:'New project',c:CATS[0],d:'',img:''})">+ Add</button></h3>${D.projects.map(pj).join('')}</div>
<div class="sec"><h3>Services <button class="sb" onclick="add('services',{t:'New service',d:'',p:'On request'})">+ Add</button></h3>${D.services.map(sv).join('')}</div>
<div class="sec"><h3>Awards & Achievements <button class="sb" onclick="add('awards',{t:'New award',g:'',y:'',w:''})">+ Add</button></h3>${D.awards.map(aw).join('')}</div>
<div class="sec"><h3>Contact & Social</h3>${cf('email','Email')}${cf('whatsapp','WhatsApp number (with country code)')}${cf('instagram','Instagram URL')}${cf('youtube','YouTube URL')}${cf('github','GitHub URL')}${cf('linkedin','LinkedIn URL')}</div>
<div class="sec"><button class="sb red" onclick="if(confirm('Reset all content to defaults?')){localStorage.removeItem(KEY);D=load();theme();admin()}">Reset to defaults</button> <span id="ms" class="sub" style="margin-left:10px"></span></div></section>`};
function admin(){document.getElementById('app').innerHTML=R.admin()}
function login(){if(u.value===AU&&p.value===AP){sessionStorage.setItem('kn-auth','1');admin()}else lm.textContent='Wrong username or password.'}
function logout(){sessionStorage.removeItem('kn-auth');admin()}
function add(k,item){D[k].push(item);save();admin()}
function rm(k,i){D[k].splice(i,1);save();admin()}
function msg(t){const m=document.getElementById('ms');if(m)m.textContent=t}
/* ---------- boot ---------- */
const P=document.body.dataset.page;
function render(){theme();if(P==='admin')return admin();document.getElementById('app').innerHTML=R[P]();if(P==='portfolio')grid();observe();document.querySelectorAll('.lb').forEach(()=>{})}
window.addEventListener('storage',e=>{if(e.key===KEY){D=load();render()}});
nav();render();
document.getElementById('foot').textContent='© '+new Date().getFullYear()+' Kashif Nisar';
