/* Template motion pass 1. Approved source renderers remain unchanged. */
(() => {
  'use strict';
  const body = document.body;
  const kind = body.dataset.artifactKind;
  const id = body.dataset.artifactId;
  const templates = {
  "global-header-desktop-navigation": "v1.3",
  "full-screen-mobile-navigation": "v1.3",
  "global-footer": "v1.5",
  "interior-page-hero": "v1.3",
  "event-archive-card-single": "v1.5",
  "sponsor-directory-card-marquee": "v1.3",
  "resource-archive-card-single": "v1.4",
  "board-directory-card": "v1.5",
  "member-organization-directory-card": "v1.4",
  "news-archive-card-single-post": "v1.5",
  "contact-form-notification-routing": "v1.3",
  "global-component-library": "v1.4"
};
  const pages = {home:'v1.13','about-nevshe':'v1.16','board-of-directors':'v1.14',events:'v1.9',education:'v1.12',membership:'v1.10','member-directory':'v1.14',sponsorship:'v1.13','sponsor-directory':'v1.14',resources:'v1.15',news:'v1.15',contact:'v1.11'};
  Object.assign(pages,{'privacy-policy':'v1.4','terms-of-use':'v1.4','accessibility-statement':'v1.4','search-results':'v1.3','404':'v1.3'});
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.getAttribute('href'),location.href);
    if (url.origin !== location.origin) return;
    const match = url.pathname.match(/\/(pages|templates)\/(.+)-v1\.\d+\//);
    if (!match) return;
    const next = (match[1] === 'templates' ? templates : pages)[match[2]];
    if (!next) return;
    url.pathname = url.pathname.replace(match[0],'/'+match[1]+'/'+match[2]+'-'+next+'/');
    link.href = url.href;
    if (kind === 'hub' && match[1] === 'templates' && link.matches('.review-card')) {
      link.classList.remove('motion-approved');
      link.removeAttribute('data-approved-date');
      const status = link.querySelector('.review-status');
      if (status) { status.className='review-status component'; status.textContent='Motion pass 1 — review'; }
      const version = link.querySelector('footer span:last-child');
      if (version) version.textContent=next+' ↗';
    }
  });
  if (kind === 'hub') {
    document.querySelector('.hub-approval-summary').innerHTML='<span><strong>12</strong> core pages · motion review</span><span><strong>12</strong> templates · motion review</span><span><strong>5</strong> no-motion pages · waiting client</span><span><strong>1</strong> search/error template · unchanged</span>';
    document.querySelector('.hub-hero .container > p').textContent='First motion pass on the approved core-page and reusable-template layouts. New motion versions await Todd’s review; approved static baselines are preserved. Legal, search and error screens remain motion-free.';
    const spot = document.querySelector('.detail-spotlight .section-heading');
    if (spot) { spot.querySelector('.eyebrow').textContent='Motion pass 1 · Detail templates'; spot.querySelector('p').textContent='Profile, article, resource and event movement now matches the core-page motion direction. Review these new versions below.'; }
    return;
  }
  if (kind !== 'template' || !templates[id]) return;
  const main = document.querySelector('main') || (id === 'global-footer' ? document.querySelector('.site-footer') : null);
  if (!main) return;
  document.title = document.title.replace(/v1\.\d+/g,body.dataset.version);
  body.classList.add('motion-page','template-motion-page');
  body.dataset.motionFamily = 'template';
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
  const targets = [...main.querySelectorAll('.template-hero .container > *, .detail-hero > *, .detail-profile > *, .detail-resource > *, .detail-figure, .detail-profile-body > *, .detail-related > h2, .detail-card, .revision-prose > h2, .revision-event-body, .section-heading, .preview-frame, .mobile-preview, .card, .organization-profile, .library-block, .mini-footer > *, .footer-main > *, .cta-band')];
  // Avoid stacked parent/child transforms and keep native reading/focus order.
  const items = targets.filter(el => !targets.some(parent => parent !== el && parent.contains(el)));
  items.forEach(el => el.dataset.motionItem = 'true');
  main.querySelectorAll('.detail-card,.card,.organization-profile').forEach(el => {
    if (el.querySelector('a[href],button:not(:disabled)')) el.classList.add('motion-hover');
  });
  const animateIn = (el, delay = 0) => {
    played.add(el);
    if (!canMove() || !el.animate || el.contains(document.activeElement)) return;
    const distance = innerWidth < 600 || id === 'contact-form-notification-routing' ? 12 : 24;
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
    controls.querySelector('.motion-review-label').textContent = `${body.dataset.version} · Motion 1`;
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

  // Native dialogs stay functional when motion is paused or disabled.
  document.querySelectorAll('dialog').forEach(dialog => {
    new MutationObserver(() => { if (dialog.open) animateIn(dialog); }).observe(dialog,{attributes:true,attributeFilter:['open']});
  });
  main.querySelectorAll('details').forEach(details => details.addEventListener('toggle',() => {
    if (details.open) [...details.children].filter(el => el.tagName !== 'SUMMARY').forEach(el => animateIn(el));
  }));
  const menu = document.querySelector('.mobile-menu');
  const opener = document.querySelector('.menu-button');
  if (menu && opener) {
    menu.setAttribute('role','dialog');
    menu.setAttribute('aria-label','Navigation menu');
    menu.setAttribute('aria-modal','true');
    let returnFocus = opener;
    let background = [];
    opener.addEventListener('click',() => { returnFocus = opener; });
    if (id === 'full-screen-mobile-navigation') {
      const demo = document.createElement('button');
      demo.type = 'button'; demo.className = 'btn btn-primary template-menu-demo';
      demo.textContent = 'Preview menu movement';
      demo.setAttribute('aria-controls',menu.id);
      demo.addEventListener('click',() => { opener.click(); returnFocus = demo; });
      main.querySelector('.mobile-preview')?.before(demo);
    }
    new MutationObserver(() => {
      const open = menu.getAttribute('aria-hidden') === 'false';
      if (open) {
        background = [...document.querySelectorAll('main,.site-header,.site-footer,.review-bar')].filter(el => !el.contains(menu)).map(el => [el,el.inert]);
        background.forEach(([el]) => { el.inert = true; });
        menu.querySelectorAll('nav a').forEach((el,i) => animateIn(el,Math.min(i*40,200)));
      } else {
        background.forEach(([el,wasInert]) => { el.inert = wasInert; });
        background = [];
        returnFocus.focus();
      }
    }).observe(menu,{attributes:true,attributeFilter:['aria-hidden']});
    menu.addEventListener('keydown',event => {
      if (event.key !== 'Tab' || menu.getAttribute('aria-hidden') !== 'false') return;
      const focusable = [...menu.querySelectorAll('a[href],button:not(:disabled)')];
      const first = focusable[0], last = focusable[focusable.length-1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }
  sync();
})();
