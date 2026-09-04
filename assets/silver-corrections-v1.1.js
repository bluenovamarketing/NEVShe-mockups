/* Explicit Home/About feedback only; no approved artifact loads this file. */
(() => {
  'use strict';
  const body=document.body, id=body.dataset.artifactId;
  if(!((id==='home'&&body.dataset.version==='v1.17')||(id==='about-nevshe'&&body.dataset.version==='v1.20')))return;
  body.classList.add('silver-corrections');
  const cardWithHeading=text=>[...document.querySelectorAll('main .card h3')].find(h=>h.textContent.trim()===text)?.closest('.card');
  if(id==='about-nevshe'){
    cardWithHeading('Find the NEVShe path that fits you.')?.classList.add('start-here-silver');
    cardWithHeading('Advancing healthcare facility professionals across Nevada.')?.classList.add('silver-hover-card');
  }else cardWithHeading('Upcoming NEVShe learning opportunity')?.classList.add('silver-hover-card');
  const current={home:'v1.17','about-nevshe':'v1.20','board-of-directors':'v1.17','member-directory':'v1.17'};
  document.querySelectorAll('a[href]').forEach(a=>{
    const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
    const m=u.pathname.match(/\/pages\/(.+)-v1\.\d+\//);
    if(m&&current[m[1]]){u.pathname=u.pathname.replace(m[0],'/pages/'+m[1]+'-'+current[m[1]]+'/');a.href=u.href;}
  });
})();
