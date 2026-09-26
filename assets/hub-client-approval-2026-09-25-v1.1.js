/* Hub-only client-approval presentation. Approved mockup files and versions remain unchanged. */
(() => {
  'use strict';
  if (document.body.dataset.artifactKind !== 'hub') return;

  const reviewLinks = window.NEVSheReviewLinks;
  const approvalDate = '2026-09-25';

  function setText(element, value) {
    if (element && element.textContent !== value) element.textContent = value;
  }

  function setHTML(element, value) {
    if (element && element.innerHTML !== value) element.innerHTML = value;
  }

  function patchLink(link) {
    if (!reviewLinks) return;
    const raw = link.getAttribute('href');
    if (raw === null) return;
    const current = reviewLinks.resolve(raw, location.href);
    if (current !== raw) link.setAttribute('href', current);
  }

  function markCardApproved(card) {
    if (card.dataset.clientApproval === 'revision-requested') return;
    patchLink(card);
    const status = card.querySelector('.review-status');
    if (status) {
      if (status.className !== 'review-status approved') status.className = 'review-status approved';
      setText(status, 'Client approved');
      delete status.dataset.clientLabel;
      delete status.dataset.clientState;
    }

    card.classList.add('motion-approved');
    card.classList.remove('client-approved');
    card.dataset.clientApproval = 'approved';
    card.dataset.approvalLocked = 'true';
    card.dataset.approvedDate = approvalDate;
    card.title = 'Client approved by NEVShe on September 25, 2026. Frozen for implementation; no redesign or mockup change is authorized.';

    const match = new URL(card.href, location.href).pathname.match(/\/(pages|templates)\/(.+)-v\d+\.\d+\//);
    const target = match && reviewLinks?.targets?.[`${match[1]}/${match[2]}`];
    const versionLabel = card.querySelector('footer span:last-child');
    if (target && versionLabel) {
      setText(versionLabel, `${target.current} ↗`);
      card.dataset.linkSourceVersion = target.source;
    }
  }

  function applyApprovalPresentation() {
    document.querySelectorAll('a.review-card').forEach(markCardApproved);

    const requestedRevisions = document.querySelectorAll('a.review-card[data-client-approval="revision-requested"]').length;
    if (requestedRevisions) {
      setText(document.querySelector('.hub-hero h1'), 'NEVShe website — two content revisions ready for review.');
      setText(
        document.querySelector('.hub-hero .container > p'),
        'The client-approved baselines remain preserved. Resources and News now have requested content-direction revisions; the other 15 pages and all 13 shared website features remain frozen.'
      );
      setHTML(
        document.querySelector('.hub-approval-summary'),
        '<span><strong>15</strong> pages · client approved</span><span><strong>2</strong> page revisions · review</span><span><strong>13</strong> shared features · client approved</span>'
      );
      setHTML(
        document.querySelector('.client-review-guide'),
        '<h2>Two requested page revisions</h2><p>Review the new visitor-facing News and Resources examples. Their earlier client-approved versions remain preserved until these revisions are approved.</p>'
      );

      const pageSection = document.querySelector('#review-pages');
      if (pageSection) {
        const heading = pageSection.querySelector('.section-heading');
        setText(heading?.querySelector('.eyebrow'), 'Current page review');
        setText(heading?.querySelector('h2'), 'Resources and News have requested content revisions.');
        setText(heading?.querySelector('p'), 'Open those two cards to review realistic temporary visitor content. The other 15 page versions remain client approved and frozen.');
      }
      return;
    }

    setText(document.querySelector('.hub-hero h1'), 'NEVShe website — client approved.');
    setText(
      document.querySelector('.hub-hero .container > p'),
      'NEVShe approved all 17 pages and all 13 shared website features on September 25, 2026. These exact designs are frozen for implementation.'
    );
    setHTML(
      document.querySelector('.hub-approval-summary'),
      '<span><strong>17</strong> pages · client approved</span><span><strong>13</strong> shared features · client approved</span>'
    );
    setHTML(
      document.querySelector('.client-review-guide'),
      '<h2>Client approval recorded</h2><p>All current page designs and shared website features are approved. Blue Nova will use these exact mockups as the WordPress build specification; redesign is not part of the implementation phase.</p>'
    );

    const pageSection = document.querySelector('#review-pages');
    if (pageSection) {
      const heading = pageSection.querySelector('.section-heading');
      setText(heading?.querySelector('.eyebrow'), 'Client-approved pages');
      setText(heading?.querySelector('h2'), 'All 17 website pages are approved.');
      setText(heading?.querySelector('p'), 'These current page versions are frozen and will be reproduced in WordPress without redesigning or rethinking the approved direction.');
    }

    const sharedSection = document.querySelector('#shared-features');
    if (sharedSection) {
      const heading = sharedSection.querySelector('.section-heading');
      setText(heading?.querySelector('.eyebrow'), 'Client-approved shared features');
      setText(heading?.querySelector('h2'), 'All 13 shared website features are approved.');
      setText(heading?.querySelector('p'), 'These current navigation, footer, form, listing, directory, and component examples are frozen for implementation.');

      const disclosures = [...sharedSection.querySelectorAll('.client-preview-disclosure')];
      disclosures.forEach((details, index) => {
        const summary = details.querySelector(':scope > summary');
        setText(summary, index === 0 ? 'View client-approved detail examples' : 'View all 13 client-approved shared features');
      });
    }
  }

  applyApprovalPresentation();

  new MutationObserver(changes => {
    const relevant = changes.some(change =>
      change.type === 'childList' ||
      (change.type === 'attributes' && change.attributeName === 'href')
    );
    if (relevant) applyApprovalPresentation();
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['href']
  });

  ['pointerdown', 'click', 'auxclick', 'contextmenu', 'keydown'].forEach(type => {
    document.addEventListener(type, event => {
      const link = event.target.closest?.('a[href],area[href]');
      if (link) patchLink(link);
    }, true);
  });
})();
