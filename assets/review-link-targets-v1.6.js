/* Version 2 concept routing. Preserves the v1.5 target map and expands version matching. */
(() => {
  'use strict';
  const previous = window.NEVSheReviewLinks;
  if (!previous) return;
  const targets = previous.targets;
  Object.assign(targets['templates/interior-page-hero'], { source:'v1.8', current:'v2.1', approvedBaseline:'v1.8', styling:false, contentCorrection:false, conceptRound:true });
  Object.assign(targets['templates/event-archive-card-single'], { source:'v1.10', current:'v2.1', approvedBaseline:null, styling:false, contentCorrection:true, conceptRound:true });
  Object.assign(targets['templates/sponsor-directory-card-marquee'], { source:'v1.11', current:'v2.1', approvedBaseline:null, styling:false, contentCorrection:true, conceptRound:true });
  function resolve(input, base) {
    let url, context;
    try { url = new URL(input, base); context = new URL(base); } catch { return input; }
    const local = url.origin === context.origin;
    const publicReview = url.origin === 'https://bluenovamarketing.github.io' && url.pathname.startsWith('/NEVShe-mockups/');
    if (!local && !publicReview) return input;
    const match = url.pathname.match(/^\/(mockups|NEVShe-mockups)\/(pages|templates)\/(.+)-(v\d+\.\d+)(?:\/index\.html|\/)?$/);
    if (!match) return input;
    const entry = targets[`${match[2]}/${match[3]}`];
    if (!entry) return input;
    const prefix = context.pathname.match(/^\/(mockups|NEVShe-mockups)(?:\/|$)/)?.[1] || match[1];
    url.protocol = context.protocol;
    url.host = context.host;
    url.pathname = `/${prefix}/${match[2]}/${match[3]}-${entry.current}/`;
    return url.href;
  }
  window.NEVSheReviewLinks = Object.freeze({ targets, resolve });
})();
