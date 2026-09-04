/* Hub-only exact-version approvals. Does not modify any approved mockup. */
(() => {
  'use strict';
  if(document.body.dataset.artifactKind!=='hub')return;
  const approved={
    pages:{home:'v1.17','board-of-directors':'v1.17','member-directory':'v1.17',events:'v1.11',education:'v1.14',membership:'v1.12',sponsorship:'v1.15','sponsor-directory':'v1.16',resources:'v1.17',news:'v1.17',contact:'v1.13'},
    templates:{'global-header-desktop-navigation':'v1.6','full-screen-mobile-navigation':'v1.6','global-footer':'v1.8','interior-page-hero':'v1.5','contact-form-notification-routing':'v1.6','member-organization-directory-card':'v1.6','board-directory-card':'v1.7','news-archive-card-single-post':'v1.7','resource-archive-card-single':'v1.6','event-archive-card-single':'v1.7'}
  };
  const revised={'about-nevshe':'v1.22'};
  const templateRevisions={"global-header-desktop-navigation":"v1.6","full-screen-mobile-navigation":"v1.6","global-footer":"v1.8","sponsor-directory-card-marquee":"v1.8","contact-form-notification-routing":"v1.6","global-component-library":"v1.9"};
  document.querySelectorAll('a.review-card[href]').forEach(card=>{
    const url=new URL(card.href,location.href),m=url.pathname.match(/\/(pages|templates)\/(.+)-(v1\.\d+)\//);if(!m)return;
    const [path,kind,id]=m;
    const version=approved[kind][id]||(kind==='pages'?revised[id]:templateRevisions[id]);
    if(!version)return;
    url.pathname=url.pathname.replace(path,'/'+kind+'/'+id+'-'+version+'/');card.href=url.href;
    card.querySelector('footer span:last-child').textContent=version+' ↗';
    const status=card.querySelector('.review-status');
    if(approved[kind][id]){
      status.className='review-status client';
      status.textContent='Waiting client approval';
      card.dataset.approvedDate='2026-09-04';card.dataset.approvalLocked='true';
      card.classList.remove('motion-approved');card.classList.add('client-approved');
      card.title='Approved by Todd. Frozen: no further changes without his specific instruction.';
    }else{status.className='review-status review';status.textContent='Requested corrections — review';}
  });
  // Normalize all previously approved cards, including unchanged no-motion T11.
  document.querySelectorAll('.review-card .review-status.client,.review-card .review-status.approved').forEach(status=>{
    status.textContent='Waiting client approval';status.className='review-status client';
    const card=status.closest('.review-card');card.classList.add('client-approved');card.title='Waiting client approval. Internally approved version remains unchanged.';
  });
  const intro=document.querySelector('.hub-hero .container > p');
  if(intro)intro.textContent='Eleven motion pages and ten motion templates are approved and waiting for client review. Approved versions are frozen. Requested About and reusable-template corrections are ready for review.';
  const summary=document.querySelector('.hub-approval-summary');
  if(summary)summary.innerHTML='<span><strong>11</strong> motion pages · waiting client approval</span><span><strong>10</strong> motion templates · waiting client approval</span><span><strong>1</strong> page correction · review</span><span><strong>2</strong> other motion templates · review</span><span><strong>5</strong> no-motion pages · unchanged</span>';
  const spot=document.querySelector('.detail-spotlight .section-heading');
  if(spot){spot.querySelector('.eyebrow').textContent='Waiting client approval';spot.querySelector('p').textContent='These four exact template versions are approved by Todd. No content, design or motion changes will be made without his specific instruction.';}
  const style=document.createElement('style');
  style.textContent='.review-card[data-approval-locked] .review-status{white-space:normal;line-height:1.45;max-width:100%;}.review-card[data-approval-locked] .review-card-top{align-items:flex-start;gap:12px;}';
  document.head.append(style);
})();
