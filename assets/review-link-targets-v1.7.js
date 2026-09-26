/* September 26 content-review routing. Prior approved versions remain preserved. */
(() => {
  'use strict';
  const previous = window.NEVSheReviewLinks;
  if (!previous) return;
  const targets = previous.targets;
  Object.assign(targets['pages/resources'], { source:'v1.20', current:'v1.21', approvedBaseline:'v1.20', styling:false, contentCorrection:true, contentReview:true });
  Object.assign(targets['pages/news'], { source:'v1.20', current:'v1.21', approvedBaseline:'v1.20', styling:false, contentCorrection:true, contentReview:true });
  window.NEVSheReviewLinks = Object.freeze({ targets, resolve: previous.resolve });
})();
