/* Todd approved these frozen mockup versions on September 3, 2026. */
(() => {
  if (document.body.dataset.artifactKind !== 'hub') return;
  const approvedPaths = new Set([
  "templates/global-header-desktop-navigation-v1.2/",
  "templates/full-screen-mobile-navigation-v1.2/",
  "templates/global-footer-v1.4/",
  "templates/interior-page-hero-v1.2/",
  "templates/event-archive-card-single-v1.4/",
  "templates/sponsor-directory-card-marquee-v1.2/",
  "templates/resource-archive-card-single-v1.3/",
  "templates/board-directory-card-v1.4/",
  "templates/member-organization-directory-card-v1.3/",
  "templates/news-archive-card-single-post-v1.4/",
  "templates/search-no-results-404-v1.2/",
  "templates/contact-form-notification-routing-v1.2/",
  "templates/global-component-library-v1.3/"
]);
  const current = new Set();
  document.querySelectorAll('a.review-card.template').forEach(card => {
    const path = new URL(card.href).pathname.split('/templates/')[1];
    if (!approvedPaths.has('templates/' + path)) return;
    current.add(path);
    card.classList.add('motion-approved');
    const status = card.querySelector('.review-status');
    if (status) {
      status.className = 'review-status approved';
      status.textContent = 'Approved by Todd';
    }
    card.dataset.approvedDate = '2026-09-03';
  });
  const summary = document.querySelector('.hub-approval-summary');
  const badge = document.createElement('span');
  badge.innerHTML = '<strong>' + current.size + '</strong> templates approved';
  summary?.append(badge);
  const intro = document.querySelector('.hub-hero .container > p');
  if (intro) intro.textContent = 'All current page and template mockups approved by Todd on September 3, 2026. Client approval, motion implementation, staging, and launch remain separate stages.';
  const spotlight = document.querySelector('.detail-spotlight .section-heading');
  if (spotlight) {
    spotlight.querySelector('.eyebrow').textContent = 'Approved · Detail-page examples';
    spotlight.querySelector('p').textContent = 'All four current detail examples are approved by Todd. Open the approved versions below.';
  }
})();

