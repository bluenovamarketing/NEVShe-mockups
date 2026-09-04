(() => {
  'use strict';
  const body=document.body,id=body.dataset.artifactId;
  const versions={'global-header-desktop-navigation':'v1.6','full-screen-mobile-navigation':'v1.6','global-footer':'v1.8','sponsor-directory-card-marquee':'v1.8','contact-form-notification-routing':'v1.6','global-component-library':'v1.9'};
  if(body.dataset.artifactKind!=='template'||body.dataset.version!==versions[id])return;
  const currentPages={home:'v1.17','about-nevshe':'v1.20','board-of-directors':'v1.17','member-directory':'v1.17'};
  document.querySelectorAll('a[href]').forEach(a=>{
    const url=new URL(a.href,location.href);if(url.origin!==location.origin)return;
    const match=url.pathname.match(/\/(pages|templates)\/(.+)-v1\.\d+\//);
    const version=match&&(match[1]==='pages'?currentPages[match[2]]:versions[match[2]]);
    if(version){url.pathname=url.pathname.replace(match[0],'/'+match[1]+'/'+match[2]+'-'+version+'/');a.href=url.href;}
  });
  if(['global-header-desktop-navigation','full-screen-mobile-navigation','global-footer'].includes(id)){
    body.classList.add('template-feedback-nav');
    const routes=new Map([...document.querySelectorAll('.desktop-nav a,.footer-col a')].map(a=>[a.textContent.trim(),a.href]));
    const link=text=>{const a=document.createElement('a');a.textContent=text;a.href=routes.get(text);return a;};
    document.querySelectorAll('.mini-header nav span,.mobile-preview nav span').forEach(s=>{if(routes.has(s.textContent.trim()))s.replaceWith(link(s.textContent.trim()));});
    document.querySelectorAll('.mini-footer > div:not(:first-child) p').forEach(p=>{
      const labels=p.innerHTML.split(/<br\s*\/?>/i).map(t=>t.trim());
      if(labels.every(t=>routes.has(t)))p.replaceChildren(...labels.map(link));
    });
  }
  if(['sponsor-directory-card-marquee','global-component-library'].includes(id))body.classList.add('template-feedback-sponsors');
  if(id==='sponsor-directory-card-marquee')body.classList.add('template-feedback-sponsor-cards');
  if(id==='contact-form-notification-routing'){
    const form=document.querySelector('main form');
    form.querySelectorAll('.field').forEach((field,i)=>{
      const input=field.querySelector('input,select,textarea'),label=field.querySelector('label');
      if(!input||!label)return;
      input.required=true;input.id='contact-template-'+i;input.name=label.textContent.trim().toLowerCase();label.htmlFor=input.id;
      label.append(' (required)');
      if(input.tagName==='SELECT'){const placeholder=new Option('Select a topic','',true,true);placeholder.disabled=true;input.prepend(placeholder);}
    });
    // Keep the mockup local: browser validation runs, but valid submissions never leave the page.
    form.addEventListener('submit',event=>event.preventDefault());
  }
})();
