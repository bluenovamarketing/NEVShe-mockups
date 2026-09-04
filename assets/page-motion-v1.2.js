(() => {
  'use strict';
  const revisions = {
    home:'v1.13','about-nevshe':'v1.16','board-of-directors':'v1.14',events:'v1.9',education:'v1.12',membership:'v1.10',
    'member-directory':'v1.14',sponsorship:'v1.13','sponsor-directory':'v1.14',resources:'v1.15',news:'v1.15',contact:'v1.11'
  };
  const body = document.body;
  // Only the new wrappers and current hub load this file. Historical sources stay intact.
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    if (url.origin !== location.origin) return;
    const match = url.pathname.match(/\/pages\/(.+)-v1\.\d+\//);
    if (!match || !revisions[match[1]]) return;
    url.pathname = url.pathname.replace(match[0], `/pages/${match[1]}-${revisions[match[1]]}/`);
    link.href = url.href;
    if (body.dataset.artifactKind === 'hub') {
      const card = link.closest('.review-card');
      if (card) {
        card.querySelector('.review-status').textContent = 'Motion pass 1 — review';
        card.querySelector('footer span:last-child').textContent = `${revisions[match[1]]} ↗`;
      }
    }
  });
  if (body.dataset.artifactKind === 'hub') {
    const summary = document.querySelector('.hub-approval-summary');
    if (summary) summary.innerHTML = '<span><strong>12</strong> motion pass 1 — ready for review</span><span><strong>5</strong> approved—waiting for client · no motion</span><span><strong>13</strong> static templates approved</span>';
    const intro = document.querySelector('.hub-hero .container > p');
    if (intro) intro.textContent = 'First motion pass on the 12 approved core-page layouts. These new motion versions await Todd’s review; static-template approvals and the five no-motion pages remain unchanged. Client approval, staging, and launch are separate.';
    return;
  }
  if (!revisions[body.dataset.artifactId]) return;
  const main = document.getElementById('main');
  if (!main) return;
  const id = body.dataset.artifactId;
  body.classList.add('motion-page');
  body.dataset.motionFamily = id === 'home' ? 'home' : id === 'about-nevshe' ? 'story' : ['membership','sponsorship','education'].includes(id) ? 'conversion' : ['board-of-directors','member-directory','sponsor-directory'].includes(id) ? 'directory' : id === 'contact' ? 'utility' : 'archive';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let optedIn = false;
  try {
    paused = sessionStorage.getItem('nevshe-motion-paused') === 'true';
    optedIn = sessionStorage.getItem('nevshe-motion-opt-in') === 'true';
  } catch (_) { /* storage may be unavailable */ }
  const animations = new Set();
  const played = new WeakSet();
  const canMove = () => !paused && (!reduced.matches || optedIn);
  const controls = document.createElement('div');
  controls.className = 'motion-review-controls';
  controls.innerHTML = '<span class="motion-review-label">Motion pass 1</span><button type="button" class="motion-toggle" aria-pressed="false">Pause movement</button><button type="button" class="motion-replay">Replay entrances</button>';
  document.querySelector('.review-bar')?.append(controls);
  const toggle = controls.querySelector('.motion-toggle');
  const replay = controls.querySelector('.motion-replay');
  const targets = [...main.querySelectorAll('.hero-copy > *, .interior-hero-inner > div > *, .section-heading, .visual-story-media, .visual-story-copy, .editorial-story, .editorial-accordion, .membership-story, .feature-collection > article, .board-person-card, .member-profile-card, .organization-tile, .archive-card, .archive-preview-card, .linked-card, .about-group-photo, .about-group-copy-grid > article, .resource-learning-story, .form-card, .contact-form, .contact-simple-media, .cta-band, .stats-strip')];
  // Avoid stacked parent/child transforms and keep native reading/focus order.
  const heroSelector = '.hero,.interior-hero,.template-hero,.detail-hero,.detail-profile';
  const items = targets.filter(el => !el.closest(heroSelector) && !el.querySelector(heroSelector) && !el.matches('.detail-figure') && !targets.some(parent => parent !== el && parent.contains(el)));
  items.forEach(el => el.dataset.motionItem = 'true');
  main.querySelectorAll('.board-person-card,.member-profile-card,.linked-card,.archive-card,.archive-preview-card').forEach(el => {
    if (el.querySelector('a[href],button:not(:disabled)')) el.classList.add('motion-hover');
  });
  const animateIn = (el, delay = 0) => {
    played.add(el);
    if (!canMove() || !el.animate || el.contains(document.activeElement)) return;
    const distance = innerWidth < 600 || id === 'contact' ? 12 : 24;
    const animation = el.animate([{opacity:.35,transform:`translateY(${distance}px)`},{opacity:1,transform:'translateY(0)'}], {duration:760,delay,easing:'cubic-bezier(.2,.65,.25,1)',fill:'none'});
    animations.add(animation);
    animation.onfinish = animation.oncancel = () => animations.delete(animation);
  };
  let observer;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      let stagger = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting || played.has(entry.target)) return;
        animateIn(entry.target, Math.min(stagger++ * 80,240));
        observer.unobserve(entry.target);
      });
    }, {threshold:0,rootMargin:'0px 0px -30px 0px'});
    items.forEach(el => observer.observe(el));
  }
  const cancelEntrances = () => { for (const animation of [...animations]) animation.cancel(); };
  const sync = () => {
    body.classList.toggle('motion-still',!canMove());
    body.classList.toggle('motion-opt-in',optedIn);
    toggle.textContent = canMove() ? 'Pause movement' : 'Play movement';
    controls.querySelector('.motion-review-label').textContent = `${body.dataset.version} · Motion 2`;
    toggle.title = reduced.matches && !optedIn ? 'Your reduced-motion preference is active. Play only if you want to preview movement.' : 'Pause or play page movement';
    toggle.setAttribute('aria-pressed',String(!canMove()));
    replay.disabled = !canMove();
    if (!canMove()) cancelEntrances();
  };
  toggle.addEventListener('click', () => {
    if (!canMove()) { paused = false; optedIn = true; } else { paused = true; }
    try {
      sessionStorage.setItem('nevshe-motion-paused',String(paused));
      sessionStorage.setItem('nevshe-motion-opt-in',String(optedIn));
    } catch (_) {}
    sync();
  });
  replay.addEventListener('click', () => {
    cancelEntrances();
    let index = 0;
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) animateIn(el,Math.min(index++ * 80,240));
      // Offscreen content remains visible and retains its original one-time observation.
    });
  });
  main.addEventListener('focusin',cancelEntrances);
  reduced.addEventListener('change',() => {
    optedIn = false;
    try { sessionStorage.removeItem('nevshe-motion-opt-in'); } catch (_) {}
    sync();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { body.classList.add('motion-still'); cancelEntrances(); }
    else sync();
  });
  sync();
})();
