/* Mark only the newly requested News and Resources revisions as needing review. */
(() => {
  'use strict';
  if (document.body.dataset.artifactKind !== 'hub') return;
  const slugs = new Set(['resources', 'news']);
  const versions = { resources:'v1.21', news:'v1.21' };

  const apply = () => {
    document.querySelectorAll('a.review-card').forEach(card => {
      const match = new URL(card.href, location.href).pathname.match(/\/pages\/(.+)-v\d+\.\d+\//);
      if (!match || !slugs.has(match[1])) return;
      const slug = match[1];
      card.href = new URL(`pages/${slug}-${versions[slug]}/`, location.href).href;
      const status = card.querySelector('.review-status');
      if (status) {
        if (status.className !== 'review-status component') status.className = 'review-status component';
        if (status.textContent !== 'Requested content revision — review') status.textContent = 'Requested content revision — review';
      }
      card.classList.remove('motion-approved', 'client-approved');
      card.dataset.clientApproval = 'revision-requested';
      card.removeAttribute('data-approval-locked');
      card.removeAttribute('data-approved-date');
      card.title = 'Todd requested realistic temporary content on September 26, 2026. The client-approved v1.20 baseline remains preserved; v1.21 requires review.';
      const versionLabel = card.querySelector('footer span:last-child');
      if (versionLabel) versionLabel.textContent = `${versions[slug]} ↗`;
    });
  };

  apply();
})();
