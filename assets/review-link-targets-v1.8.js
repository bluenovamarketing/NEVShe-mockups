/* October 25 Member Directory compact interaction revision. */
(() => {
  'use strict';
  const previous = window.NEVSheReviewLinks;
  if (!previous) return;
  const targets = previous.targets;
  Object.assign(targets['pages/member-directory'], {
    source: 'v1.21',
    current: 'v1.22',
    approvedBaseline: 'v1.20',
    styling: false,
    contentCorrection: false,
    interactionCorrection: true,
  });
  window.NEVSheReviewLinks = Object.freeze({ targets, resolve: previous.resolve });
})();
