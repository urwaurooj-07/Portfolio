(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const li=a=>a.map(x=>`<li>${x}</li>`).join('');
const services=[
['bi-search','SEO','Improve website visibility and search performance through structured SEO strategies.',['Keyword Research','On-Page SEO','Technical SEO','SEO Audits','Content Optimization','Website SEO Strategy']],
['bi-share','Social Media Marketing','Build consistent social presence through strategic content, campaigns and audience engagement.',['Facebook Marketing','Instagram Marketing','Content Strategy','Social Media Management','Campaign Planning','Audience Engagement']],
['bi-megaphone','Digital Marketing','Develop digital campaigns and strategies that support brand awareness, visibility and lead generation.',['Digital Marketing Strategy','Lead Generation','Content Marketing','Brand Promotion','Campaign Planning','Online Growth Strategy']],
['bi-pen','Content Strategy','Plan useful and engaging content that supports social media and digital marketing objectives.',['Social Media Content','Reels Concepts','Promotional Copy','Content Calendars','Campaign Creatives']]];
$('#serviceGrid').innerHTML=services.map(s=>`<div class="col-md-6 reveal"><article class="card-x"><i class="bi ${s[0]} ic" aria-hidden="true"></i><h3 class="h5">${s[1]}</h3><p>${s[2]}</p><ul>${li(s[3])}</ul></article></div>`).join('');

const fb=['Facebook','Instagram','Canva','Meta Business Suite'],gs=['Google Search Console','Google Analytics','SEO Tools'];
const P=[
['social','Social Media Marketing','bi-instagram','COMSTECH Hyderabad — Social Media Marketing','Social media planning, content strategy, campaign coordination and digital communication for COMSTECH Hyderabad.','Strengthen social media communication and maintain a consistent digital presence.',['Social Media Strategy','Content Planning','Campaign Planning','Audience Engagement','Brand Communication'],fb],
['dm','Digital Campaign','bi-translate','German Language Course Campaign','Digital marketing and promotional content focused on communicating a German language course and attracting interested audiences.','Promote the course through digital content and campaign communication.',['Campaign Planning','Social Media Marketing','Promotional Content','Audience Communication'],fb],
['seo','SEO / Digital Marketing','bi-graph-up-arrow','Digital Marketing & SEO Campaigns','Digital marketing activities focused on website visibility, search optimization and online presence.','Improve digital visibility through structured SEO and marketing activities.',['SEO','Keyword Research','Content Optimization','Digital Strategy','Website Visibility'],gs],
['dm','Lead Generation / Marketing','bi-mortarboard','Course Admission Campaigns','Digital campaigns designed to communicate educational opportunities and encourage potential students to explore course admissions.','Create clear promotional communication and improve audience outreach.',['Campaign Planning','Social Media Marketing','Promotional Content','Lead Generation Strategy'],fb],
['content','Content Strategy','bi-camera-reels','Social Media Content & Reels','Creative social media content and short-form video concepts designed for digital communication and audience engagement.','Create consistent and engaging social media content.',['Content Planning','Reels Concepts','Promotional Copy','Creative Planning','Social Media Management'],['Canva','Instagram','Facebook']],
['seo','SEO / Website','bi-window-sidebar','SEO / Website Optimization Projects','Website-focused SEO and optimization activities designed to support search visibility, content quality and online discoverability.','Improve website structure and search-friendly content.',['SEO Auditing','Keyword Research','On-Page SEO','Content Optimization','Website SEO Strategy'],[...gs,'HTML','CSS']]];
$('#workGrid').innerHTML=P.map((p,i)=>`<div class="col-md-6 col-lg-4 work-col" data-cat="${p[0]}"><article class="card-x work"><div class="thumb" role="img" aria-label="Placeholder visual for ${p[3]}"><i class="bi ${p[2]}"></i></div><div class="body"><span class="badge-cat align-self-start">${p[1]}</span><h3>${p[3]}</h3><p>${p[4]}</p><div class="tags">${p[7].map(t=>`<span>${t}</span>`).join('')}</div><button class="btn btn-grad btn-sm" data-i="${i}">View Case Study</button></div></article></div>`).join('');

const modal=new bootstrap.Modal('#caseModal');
$('#workGrid').addEventListener('click',e=>{const b=e.target.closest('button[data-i]');if(!b)return;const p=P[b.dataset.i];
$('#cmCat').textContent=p[1];$('#cmTitle').textContent=p[3];
$('#cmBody').innerHTML=`<div class="thumb" role="img" aria-label="Placeholder visual for ${p[3]}"><i class="bi ${p[2]}"></i></div><h3>Overview</h3><p>${p[4]}</p><h3>Objective</h3><p>${p[5]}</p><h3>Services</h3><div class="tags">${p[6].map(t=>`<span>${t}</span>`).join('')}</div><h3>Tools</h3><div class="tags">${p[7].map(t=>`<span>${t}</span>`).join('')}</div><h3>Approach</h3><p>Understand the audience and goal, plan the content or optimization work, produce the material, then review and refine.</p><h3>Key Activities</h3><ul>${li(p[6])}</ul><h3>Project Outcome</h3><p>Qualitative project work focused on improving digital communication, visibility and audience engagement.</p>`;
modal.show();});
$$('.filters button').forEach(b=>b.addEventListener('click',()=>{$$('.filters button').forEach(x=>x.classList.toggle('active',x===b));
$$('.work-col').forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.cat===b.dataset.f));}));

const skills=[['bi-megaphone','Digital Marketing',['SEO','Social Media Marketing','Content Marketing','Lead Generation','Campaign Strategy']],['bi-search','SEO',['Keyword Research','On-Page SEO','Technical SEO','SEO Auditing','Content Optimization']],['bi-people','Social Platforms',['Facebook','Instagram','LinkedIn','YouTube']],['bi-code-slash','Technical',['WordPress','HTML','CSS','Basic JavaScript','Website Management']],['bi-bar-chart','Analytics & Marketing',['Google Search Console','Google Analytics','Meta Business Suite','SEO Tools','AI Marketing Tools']]];
$('#skillGrid').innerHTML=skills.map(s=>`<div class="col-md-6 col-lg-4 reveal"><div class="card-x skillcard"><h3><i class="bi ${s[0]}" aria-hidden="true"></i>${s[1]}</h3><div class="tags">${s[2].map(t=>`<span>${t}</span>`).join('')}</div><div class="bar" aria-hidden="true"><span style="--w:${Math.min(60+s[2].length*6,92)}%"></span></div></div></div>`).join('');

$('#whyGrid').innerHTML=[['Creative Thinking','Develop engaging digital content and marketing ideas.','bi-lightbulb'],['Technical Perspective','Use a Computer Science background to understand websites, SEO and digital tools.','bi-cpu'],['Strategic Approach','Connect content, social media and SEO with broader digital objectives.','bi-diagram-3'],['Consistent Communication','Focus on clear, professional and audience-focused digital communication.','bi-chat-dots']].map(w=>`<div class="col-sm-6 col-lg-3 reveal"><div class="card-x"><i class="bi ${w[2]} ic" aria-hidden="true"></i><h3 class="h5">${w[0]}</h3><p class="mb-0">${w[1]}</p></div></div>`).join('');
$('#processList').innerHTML=[['Discover','Understand the brand, audience and objectives.'],['Strategize','Develop a digital marketing and content strategy.'],['Create','Develop content, campaigns and SEO-focused material.'],['Optimize','Review performance and improve digital activities.'],['Grow','Build consistent online visibility and audience engagement.']].map((p,i)=>`<li class="reveal"><span class="n">0${i+1}</span><h3>${p[0]}</h3><p class="mb-0">${p[1]}</p></li>`).join('');

const nav=$('#nav'),top=$('#top'),links=$$('.nav-link'),secs=links.map(l=>$(l.getAttribute('href')));
function onScroll(){const y=scrollY;nav.classList.toggle('scrolled',y>40);top.classList.toggle('show',y>600);
let cur=0;secs.forEach((s,i)=>{if(s&&s.offsetTop-120<=y)cur=i;});links.forEach((l,i)=>{l.classList.toggle('active',i===cur);i===cur?l.setAttribute('aria-current','true'):l.removeAttribute('aria-current');});}
addEventListener('scroll',onScroll,{passive:true});onScroll();
top.addEventListener('click',()=>scrollTo({top:0}));
$$('#menu a').forEach(a=>a.addEventListener('click',()=>{const m=$('#menu');if(m.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(m).hide();}));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));

const f=$('#cform'),msg=$('#fmsg');
f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
$$('.form-control',f).forEach(i=>{const v=i.checkValidity()&&i.value.trim()!=='';i.classList.toggle('is-invalid',!v);ok=ok&&v;});
msg.className='mt-3 mb-0';
if(!ok){msg.textContent='Please fix the highlighted fields.';return;}
// TODO: connect to a backend or form service (e.g. Formspree) here.
msg.classList.add('ok');msg.textContent='Thanks! Form validated. Sending is not connected yet — see README to enable it.';f.reset();});
$('#yr').textContent=new Date().getFullYear();
})();
