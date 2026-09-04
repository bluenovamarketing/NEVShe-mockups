/* Shared hover refinement. Only new versioned wrappers load this asset. */
(() => {
  'use strict';
  const revisions = {
  "pages": {
    "home": "v1.15",
    "about-nevshe": "v1.18",
    "board-of-directors": "v1.16",
    "events": "v1.11",
    "education": "v1.14",
    "membership": "v1.12",
    "member-directory": "v1.16",
    "sponsorship": "v1.15",
    "sponsor-directory": "v1.16",
    "resources": "v1.17",
    "news": "v1.17",
    "contact": "v1.13"
  },
  "templates": {
    "global-header-desktop-navigation": "v1.5",
    "full-screen-mobile-navigation": "v1.5",
    "global-footer": "v1.7",
    "interior-page-hero": "v1.5",
    "event-archive-card-single": "v1.7",
    "sponsor-directory-card-marquee": "v1.5",
    "resource-archive-card-single": "v1.6",
    "board-directory-card": "v1.7",
    "member-organization-directory-card": "v1.6",
    "news-archive-card-single-post": "v1.7",
    "contact-form-notification-routing": "v1.5",
    "global-component-library": "v1.6"
  }
};
  const body=document.body;
  const kind=body.dataset.artifactKind;
  const id=body.dataset.artifactId;
  const remap=() => document.querySelectorAll('a[href]').forEach(link=>{
    const url=new URL(link.getAttribute('href'),location.href);
    if(url.origin!==location.origin)return;
    const match=url.pathname.match(/\/(pages|templates)\/(.+)-v1\.\d+\//);
    const version=match&&revisions[match[1]][match[2]];
    if(!version)return;
    url.pathname=url.pathname.replace(match[0],'/'+match[1]+'/'+match[2]+'-'+version+'/');
    link.href=url.href;
    if(kind==='hub'&&link.matches('.review-card')){
      const status=link.querySelector('.review-status');
      if(status){status.className='review-status component';status.textContent='Hero + blue hover — review';}
      link.classList.remove('motion-approved');link.removeAttribute('data-approved-date');
      const label=link.querySelector('footer span:last-child');if(label)label.textContent=version+' ↗';
    }
  });
  remap();
  if(kind==='hub'){
    document.querySelector('.hub-hero .container > p').textContent='Stronger hero image and text entrances, with consistent chapter-blue hover feedback across all 12 motion pages and 12 reusable templates. The designated no-motion screens remain unchanged. These new versions are ready for review.';
    const summary=document.querySelector('.hub-approval-summary');
    if(summary)summary.innerHTML='<span><strong>12</strong> pages · motion review</span><span><strong>12</strong> templates · motion review</span><span><strong>5</strong> no-motion pages · unchanged</span><span><strong>1</strong> search/error template · unchanged</span>';
    const spot=document.querySelector('.detail-spotlight .section-heading');
    if(spot){spot.querySelector('.eyebrow').textContent='Approved detail layouts · stronger entrances';spot.querySelector('p').textContent='The four featured hover-template versions were approved by Todd on September 4. Their new hero and consistent-blue hover revisions are ready for review below.';}
    return;
  }
  if(!revisions[kind==='template'?'templates':'pages'][id])return;
  body.classList.add('hover-refinement');
  document.title=document.title.replace(/v1\.\d+/g,body.dataset.version);
  const label=document.querySelector('.motion-review-label');
  const updateLabel=()=>{if(label)label.textContent=body.dataset.version+' · Motion 2';};
  updateLabel();
  document.querySelector('.motion-toggle')?.addEventListener('click',updateLabel);
  const cardSelector='.card,.linked-card,.board-person-card,.member-profile-card,.organization-tile,.archive-card,.archive-preview-card,.education-pathway,.detail-card,.organization-profile,.person-card,.feature-collection > article';
  const candidates=[...document.querySelectorAll(cardSelector)].filter(el=>!el.closest('.review-bar,.mobile-menu')&&!el.matches('.form-card,.contact-form'));
  const cards=candidates.filter(el=>!candidates.some(parent=>parent!==el&&parent.contains(el))).filter(el=>{
    const interactive=el.matches('a[href],details')||!!el.querySelector('a[href],button:not(:disabled),summary');
    const explicitFeature=['membership','events','board-of-directors'].includes(id)&&el.matches('.feature-collection > article');
    // Informational About sections and multi-action panels are not giant buttons.
    const multipleActions=el.querySelectorAll('.btn').length>1;
    const informationalFeature=el.matches('.feature-collection > article')&&!interactive&&!explicitFeature;
    const passiveAbout=id==='about-nevshe'&&!interactive;
    return !multipleActions&&!informationalFeature&&!passiveAbout;
  });
  cards.forEach(el=>{
    el.classList.add('hover-surface');
    const siblings=[...el.parentElement.children].filter(e=>cards.includes(e));
    const index=siblings.indexOf(el);
    const portrait=el.matches('.board-person-card,.member-profile-card,.person-card')||!!el.querySelector('img[src*="headshot"],.detail-person-fallback');
    el.dataset.hoverTone='blue';
    if(portrait)el.classList.add('hover-portrait');
  });
  document.querySelectorAll('.logo-tile').forEach(el=>el.classList.add('hover-sponsor'));
  document.querySelectorAll('.filter,.detail-switch a').forEach(el=>el.classList.add('hover-filter'));
  // Extend one-time entrances to previously omitted cards and filter rows.
  const extras=[...cards,...document.querySelectorAll('.filter-bar')].filter(el=>!el.closest('[data-motion-item]')&&!el.querySelector('[data-motion-item]'));
  const running=new Set();
  const canMove=()=>!body.classList.contains('motion-still')&&(!matchMedia('(prefers-reduced-motion: reduce)').matches||body.classList.contains('motion-opt-in'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach((entry,i)=>{
        if(!entry.isIntersecting)return;
        observer.unobserve(entry.target);
        if(!canMove()||!entry.target.animate)return;
        const a=entry.target.animate([{opacity:.5,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:760,delay:Math.min(i*80,240),easing:'cubic-bezier(.2,.65,.25,1)',fill:'none'});
        running.add(a);a.onfinish=a.oncancel=()=>running.delete(a);
      });
    },{rootMargin:'0px 0px -30px 0px'});
    extras.forEach(el=>{el.dataset.hoverEntrance='true';observer.observe(el);});
  }
  const cancel=()=>{for(const a of [...running])a.cancel();};
  new MutationObserver(()=>{if(!canMove())cancel();}).observe(body,{attributes:true,attributeFilter:['class']});
  document.addEventListener('focusin',cancel);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
})();
