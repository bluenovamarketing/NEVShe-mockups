/* Client review statuses and Version 2 links for the September 24 feedback round. */
(() => {
  'use strict';
  if (document.body.dataset.artifactKind !== 'hub') return;
  const approved = new Set([
    'global-header-desktop-navigation','full-screen-mobile-navigation','global-footer','interior-page-hero',
    'resource-archive-card-single','board-directory-card','member-organization-directory-card',
    'news-archive-card-single-post','search-no-results-404','contact-form-notification-routing','global-component-library'
  ]);
  const versionTwoReview = new Set(['event-archive-card-single','sponsor-directory-card-marquee']);
  const cards = [...document.querySelectorAll('#shared-features a.review-card')];
  cards.forEach(card => {
    const match = new URL(card.href, location.href).pathname.match(/\/templates\/(.+)-v\d+\.\d+\//);
    if (!match) return;
    const id = match[1];
    const status = card.querySelector('.review-status');
    const version = window.NEVSheReviewLinks?.targets?.[`templates/${id}`]?.current;
    const versionLabel = card.querySelector('footer span:last-child');
    if (versionLabel && version) versionLabel.dataset.currentVersion = version;
    if (approved.has(id)) {
      status.className = 'review-status approved';
      status.textContent = 'Approved';
      status.dataset.clientLabel = 'Approved';
      status.dataset.clientState = 'approved';
      card.classList.add('motion-approved');
      card.classList.remove('client-approved');
      card.dataset.clientApproval = 'approved';
      card.title = id === 'interior-page-hero' ? 'Approved image-led direction, applied in Version 2.1.' : 'Approved by NEVShe in the September 24, 2026 client review.';
    } else if (versionTwoReview.has(id)) {
      status.className = 'review-status component';
      status.textContent = 'Version 2 review';
      status.dataset.clientLabel = 'Version 2 review';
      status.dataset.clientState = 'review';
      card.classList.remove('client-approved','motion-approved');
      card.dataset.clientApproval = 'changes-requested';
      card.title = 'Updated Version 2.1 concept based on NEVShe feedback; ready for review.';
    }
  });
  const summary = document.querySelector('.hub-approval-summary');
  if (summary) summary.innerHTML = '<span><strong>17</strong> pages · waiting client approval</span><span><strong>11</strong> shared features · Approved</span><span><strong>2</strong> Version 2 updates · review</span>';
  const heading = document.querySelector('#shared-features .section-heading');
  if (heading) {
    const eyebrow = heading.querySelector('.eyebrow');
    const title = heading.querySelector('h2');
    const copy = heading.querySelector('p');
    if (eyebrow) eyebrow.textContent = 'Shared website features';
    if (title) title.textContent = 'Approved features and two Version 2 updates.';
    if (copy) copy.textContent = 'Approved items are clearly marked below. Review the updated event path and sponsor hierarchy; the image-led page introduction reflects the direction already approved.';
  }
  const disclosure = document.querySelector('#shared-features .client-preview-disclosure > summary');
  if (disclosure) disclosure.textContent = 'View all 13 shared features';
})();
