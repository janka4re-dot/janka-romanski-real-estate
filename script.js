const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}
const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();

const leadForm=document.querySelector('#leadForm');
if(leadForm){
  leadForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(leadForm);
    const name=(data.get('name')||'').toString().trim();
    const email=(data.get('email')||'').toString().trim();
    const phone=(data.get('phone')||'').toString().trim();
    const market=(data.get('market')||'').toString();
    const need=(data.get('need')||'').toString();
    const message=(data.get('message')||'').toString().trim();
    const subject=`Website inquiry: ${market} — ${need}`;
    const body=[
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Market: ${market}`,
      `Needs help with: ${need}`,
      '',
      'Message:',
      message || 'No additional message.'
    ].join('\n');
    window.location.href=`mailto:janka4re@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
