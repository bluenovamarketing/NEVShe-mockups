/* Route the Member Directory card to Todd's requested compact interaction revision. */
(() => {
  'use strict';
  if (document.body.dataset.artifactKind !== 'hub') return;

  const apply = () => {
    document.querySelectorAll('a.review-card').forEach((card) => {
      const match = new URL(card.href, location.href).pathname.match(/\/pages\/(.+)-v\d+\.\d+\//);
      if (!match || match[1] !== 'member-directory') return;
      card.href = new URL('pages/member-directory-v1.22/', location.href).href;
      const status = card.querySelector('.review-status');
      if (status) {
        status.className = 'review-status component';
        status.textContent = 'Requested directory revision — review';
      }
      card.classList.remove('motion-approved', 'client-approved');
      card.dataset.clientApproval = 'revision-requested';
      card.removeAttribute('data-approval-locked');
      card.removeAttribute('data-approved-date');
      card.title = 'Todd requested the compact 90-member directory and corrected A–Z filter scrolling on October 25, 2026. The client-approved v1.20 baseline remains preserved; v1.22 requires review.';
      const versionLabel = card.querySelector('footer span:last-child');
      if (versionLabel) versionLabel.textContent = 'v1.22 ↗';
    });
  };

  apply();
})();
