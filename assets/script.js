
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
// Replace this placeholder with the official Budokomi CYDC email before launch.
const ORGANIZATION_EMAIL='REPLACE-WITH-OFFICIAL-EMAIL@example.com';
const form=document.getElementById('contactForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const status=document.getElementById('formStatus');if(ORGANIZATION_EMAIL.includes('REPLACE-WITH-OFFICIAL-EMAIL')){status.hidden=false;status.textContent='Please configure the official organization email address in assets/script.js before sending enquiries.';return}const d=new FormData(form),subject=encodeURIComponent('Budokomi CYDC enquiry: '+d.get('topic')),body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nTopic: '+d.get('topic')+'\n\nMessage:\n'+d.get('message'));status.hidden=false;status.textContent='Opening your email app. Please review and send your message.';location.href='mailto:'+ORGANIZATION_EMAIL+'?subject='+subject+'&body='+body});
