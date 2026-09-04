/* Hub approval metadata with optional client previews; approval records unchanged. */
(() => {
  'use strict';
  const approvals = {
  "pages/about-nevshe": "v1.27",
  "pages/home": "v1.20",
  "pages/board-of-directors": "v1.20",
  "pages/member-directory": "v1.20",
  "pages/sponsor-directory": "v1.19",
  "pages/contact": "v1.16",
  "templates/global-header-desktop-navigation": "v1.9",
  "templates/full-screen-mobile-navigation": "v1.9",
  "templates/global-footer": "v1.11",
  "templates/interior-page-hero": "v1.8",
  "templates/event-archive-card-single": "v1.10",
  "templates/sponsor-directory-card-marquee": "v1.11",
  "templates/resource-archive-card-single": "v1.9",
  "templates/board-directory-card": "v1.10",
  "templates/member-organization-directory-card": "v1.9",
  "templates/news-archive-card-single-post": "v1.10",
  "templates/search-no-results-404": "v1.5",
  "templates/contact-form-notification-routing": "v1.9",
  "templates/global-component-library": "v1.12"
};
  const {targets,resolve}=window.NEVSheReviewLinks;
  const body=document.body,kind=body.dataset.artifactKind;
  const entry=targets[(kind==='page'?'pages':'templates')+'/'+body.dataset.artifactId];
  if(entry&&body.dataset.linkSourceVersion)body.dataset.version=entry.current;
  function patchLink(link) {
    const raw=link.getAttribute('href');if(raw===null)return;
    const current=resolve(raw,location.href);
    if(current!==raw)link.setAttribute('href',current);
  }
  function metadata() {
    if(entry&&body.dataset.linkSourceVersion){
      const title=document.title.replace(/v1\.\d+/g,entry.current);
      if(title!==document.title)document.title=title;
      document.querySelectorAll('.review-bar,.draft-chip').forEach(el=>{
        const walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node;
        while((node=walk.nextNode())){const text=node.nodeValue.replace(/v1\.\d+/gi,entry.current);if(text!==node.nodeValue)node.nodeValue=text;}
      });
    }
    if(kind==='hub')document.querySelectorAll('a.review-card').forEach(card=>{
      const match=new URL(card.href,location.href).pathname.match(/\/(pages|templates)\/(.+)-v1\.\d+\//);
      const target=match&&targets[match[1]+'/'+match[2]];if(!target)return;
      const label=card.querySelector('footer span:last-child');
      if(label&&label.textContent!==target.current+' ↗')label.textContent=target.current+' ↗';
      card.dataset.linkSourceVersion=target.source;
      const approved=approvals[match[1]+'/'+match[2]]===target.current;
      if(approved){
        const status=card.querySelector('.review-status');
        const badge=card.dataset.optionalPreview==='true'?'Optional preview':'Waiting client approval';
        if(status&&status.textContent!==badge){status.className='review-status client';status.textContent=badge;}
        card.classList.add('client-approved');
        card.dataset.approvalLocked='true';card.dataset.approvedDate='2026-09-04';
        card.title=card.dataset.optionalPreview==='true'?'Optional reference — no separate approval needed. Internally approved '+target.current+'.':target.current+' internally approved by Todd on September 4, 2026. Frozen; waiting client approval.';
      }else{
      if(target.contentCorrection||target.styling){const status=card.querySelector('.review-status');if(status&&status.textContent!==(target.contentCorrection?'Requested corrections — review':'Styling alignment — review')){status.className='review-status component';status.textContent=target.contentCorrection?'Requested corrections — review':'Styling alignment — review';card.classList.remove('client-approved');card.removeAttribute('data-approval-locked');card.removeAttribute('data-approved-date');}}
      card.title=(target.approvedBaseline?'Visual approval retained on '+target.approvedBaseline+'. ':'Existing correction review remains open. ')+target.current+(target.contentCorrection?' contains the requested Contact or source-backed Board corrections; review remains open.':target.styling?' contains the explicitly requested sponsor/menu/footer alignment; review remains open.':' is a link-only update; no new client approval.');
      }
    });
  }
  function scan(root){
    if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_NODE)return;
    if(root.matches?.('a[href],area[href]'))patchLink(root);
    root.querySelectorAll('a[href],area[href]').forEach(patchLink);
  }
  scan(document);metadata();
  new MutationObserver(changes=>{
    changes.forEach(change=>{
      if(change.type==='attributes')patchLink(change.target);
      else change.addedNodes.forEach(scan);
    });
    metadata();
  }).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['href']});
  // Capture newly created links before native navigation, including modified/middle clicks.
  ['pointerdown','click','auxclick','contextmenu','keydown'].forEach(type=>document.addEventListener(type,event=>{
    const link=event.target.closest?.('a[href],area[href]');if(link)patchLink(link);
  },true));
  if(kind==='hub'&&!body.dataset.clientReviewGuide){
    const summary=document.querySelector('.hub-approval-summary');
    if(summary)summary.innerHTML='<span><strong>17</strong> pages · waiting client approval</span><span><strong>13</strong> reusable templates · waiting client approval</span><span><strong>0</strong> pages · internal review</span>';
    const intro=document.querySelector('.hub-hero .container > p');
    if(intro)intro.textContent='All pages and reusable templates are internally approved and waiting for client approval. Approved designs are frozen unless Todd specifically requests a change.';
    const spot=document.querySelector('.detail-spotlight .section-heading p');
    if(spot)spot.textContent='All four featured templates are internally approved and waiting for client approval. Their current versions are preserved unchanged.';
  }
})();
