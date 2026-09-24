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
const realtorVideo=document.querySelector('#realtorVideo');
const heroMedia=document.querySelector('#heroMedia');
if(realtorVideo&&heroMedia){
  const revealVideo=()=>{heroMedia.hidden=false;};
  realtorVideo.addEventListener('loadedmetadata',revealVideo,{once:true});
  realtorVideo.addEventListener('canplay',revealVideo,{once:true});
  if(realtorVideo.readyState>=1) revealVideo();
}
