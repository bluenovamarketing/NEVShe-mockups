/* Shared hero choreography for Motion 2; content is never hidden by default. */
(() => {
  'use strict';
  const body = document.body;
  if (!body.classList.contains('motion-page')) return;
  body.classList.add('motion-two');
  if(body.dataset.artifactId==='interior-page-hero'){
    document.querySelectorAll('main .card[style]').forEach(card=>{
      if(!card.style.background.includes('url('))return;
      card.style.setProperty('--hero-sample-background',card.style.background);
      card.style.background='var(--chapter)';
      card.classList.remove('hover-surface');
      card.classList.add('hero-sample-photo');
    });
  }
  const roots = [...document.querySelectorAll('main .hero,main .interior-hero,main .template-hero,main .detail-hero,main .detail-profile,main .detail-resource,main .hero-sample-photo')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const canMove = () => !document.hidden && !body.classList.contains('motion-still') && (!reduced.matches || body.classList.contains('motion-opt-in'));
  const animations = new Set();
  const visible = el => { const r=el.getBoundingClientRect(); return r.bottom>0 && r.top<innerHeight; };
  const run = (el, frames, options) => {
    if (!el.animate || el.contains(document.activeElement)) return;
    const a=el.animate(frames,options);
    animations.add(a);
    a.onfinish=a.oncancel=()=>animations.delete(a);
  };
  const stop = () => {
    for (const a of [...animations]) a.cancel();
    roots.forEach(el=>el.classList.remove('hero-arriving','hero-drifting'));
  };
  roots.forEach(root=>{
    root.dataset.heroMotion='ready';
    root.addEventListener('animationend',e=>{
      if(e.animationName==='nevshe-hero-arrive' && canMove()){
        root.classList.remove('hero-arriving');root.classList.add('hero-drifting');
      }
    });
  });
  const playRoot = root => {
    if (!canMove() || !visible(root)) return;
    const mobile=innerWidth<600;
    if(root.matches('.hero,.interior-hero.has-image,.hero-sample-photo')){
      root.classList.remove('hero-arriving','hero-drifting');
      void root.offsetWidth;
      root.classList.add('hero-arriving');
    }
    const children=[...root.querySelectorAll('.hero-copy > *, .interior-hero-inner > div:not(.breadcrumbs) > *, .template-hero .container > *, .hero-sample-photo > *, :scope > .detail-kicker, :scope > h1, :scope > p, :scope > .detail-meta, :scope > .detail-actions, .detail-profile > div:not(.detail-profile-portrait) > *, .detail-resource > div:not(.detail-document) > *, .detail-event-hero > div > *')];
    children.filter(el=>!children.some(p=>p!==el&&p.contains(el))).forEach((el,i)=>{
      el.dataset.heroText='true';
      run(el,[{opacity:0,transform:`translateY(${mobile?22:38}px) scale(.97)`},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:1050,delay:160+Math.min(i,5)*120,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'});
    });
    // Portraits and documentary photos enter as complete frames: never zoom/crop faces.
    root.querySelectorAll('.detail-profile-portrait,.detail-event-hero > figure,.detail-document').forEach(el=>{
      run(el,[{opacity:.35,transform:'translateY(24px) scale(.94)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:1500,easing:'cubic-bezier(.16,1,.3,1)',fill:'none'});
    });
  };
  const playVisible = () => { stop(); roots.forEach(playRoot); };
  // Image-led article/event previews may place their complete hero photo after the heading.
  const figures=[...document.querySelectorAll('main .detail-figure')];
  const showFigure=el=>{
    if(!canMove()||!visible(el))return;
    run(el,[{opacity:.35,transform:'translateY(24px) scale(.96)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:1400,easing:'cubic-bezier(.16,1,.3,1)',fill:'none'});
  };
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(!e.isIntersecting)return;
      observer.unobserve(e.target);
      if(roots.includes(e.target))playRoot(e.target);else showFigure(e.target);
    }),{threshold:.08});
    [...roots,...figures].forEach(el=>observer.observe(el));
  } else { roots.forEach(playRoot); }
  const label=()=>{const el=document.querySelector('.motion-review-label');if(el)el.textContent=body.dataset.version+' · Motion 2';};
  document.querySelector('.motion-toggle')?.addEventListener('click',()=>{
    label(); if(canMove()){playVisible();figures.forEach(showFigure);}else stop();
  });
  document.querySelector('.motion-replay')?.addEventListener('click',()=>{playVisible();figures.forEach(showFigure);});
  document.querySelector('main')?.addEventListener('focusin',stop);
  reduced.addEventListener('change',stop);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  label();
})();
