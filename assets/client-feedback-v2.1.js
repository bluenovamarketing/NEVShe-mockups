(() => {
  'use strict';
  if (document.body.dataset.conceptRound !== 'v2.1') return;
  const id = document.body.dataset.artifactId;
  const main = document.querySelector('main');
  const assets = new URL('../../assets/images/', location.href).href;
  const suppliedPhoto = `${assets}client-supplied/nevshe-ashe-2026-chapter-members.jpg`;
  const names = 'From left: Rich Park, Narsimha Irrinki, Ricardo Barrera, and Ismael Lopez-Ferratt at the ASHE conference.';
  const note = (label,copy) => `<div class="v2-note"><span class="v2-note-badge">${label}</span><div>${copy}</div></div>`;
  const top = (kicker,title,copy) => `<header class="v2-intro"><div class="v2-container"><div class="v2-kicker">${kicker}</div><h1>${title}</h1><p>${copy}</p></div></header>`;
  const shell = html => `<div class="v2-shell">${html}</div>`;

  function hero() {
    return shell(`${top('T04 · Version 2.1','One clear direction for interior-page introductions.','The client-selected image-led approach is now the default for core interior pages. The other concepts remain preserved in Version 1.8 for history.')}
      <section class="v2-section"><div class="v2-container">
        <article class="v2-hero-preview" style="--v2-image:url('${assets}generated-v2/about-statewide-campus-v2.png')">
          <div class="v2-hero-copy"><nav class="v2-crumbs" aria-label="Example breadcrumb"><a href="#">Home</a><span>/</span><span>About NEVShe</span></nav><div class="v2-kicker">About the chapter</div><h2>Built for Nevada’s healthcare facilities community.</h2><p>A confident page title, a short introduction, and one useful next step appear over distinctive editorial imagery.</p><a class="v2-btn" href="#hero-guidance">See the page structure →</a></div>
        </article>
        ${note('Approved direction','This Version 2 preview applies the client’s preference for the image-led option. Each core page will use its own relevant image; compact and gradient-only treatments are reserved for utility or legal pages where a photograph would not help.')}
      </div></section>
      <section class="v2-section" id="hero-guidance"><div class="v2-container"><div class="v2-section-head"><h2>Consistent structure, different story on every page.</h2><p>The layout remains familiar while the image, title, introduction, and action change with the page.</p></div><div class="v2-rule-grid">
        <article class="v2-rule"><div class="v2-kicker">01</div><h3>Relevant image</h3><p>Use a supplied or approved image that represents the page—not a generic decoration.</p></article>
        <article class="v2-rule"><div class="v2-kicker">02</div><h3>Short opening</h3><p>Keep the headline and introduction concise enough to understand before scrolling.</p></article>
        <article class="v2-rule"><div class="v2-kicker">03</div><h3>One next step</h3><p>Include one primary action only when the page has a clear visitor task.</p></article>
      </div></div></section>`);
  }

  const eventCard = ({media,title,meta,copy,href,pending}) => `<article class="v2-event-card">${pending?`<div class="v2-pending-media"><strong>Future NEVShe event</strong></div>`:`<div class="v2-event-media"><img src="${media}" alt="${names}" loading="lazy"></div>`}<div class="v2-event-card-body"><div class="v2-event-meta">${meta}</div><h3>${title}</h3><p>${copy}</p><a class="v2-btn" href="${href}">View full event →</a></div></article>`;
  function event() {
    const selected = new URLSearchParams(location.search).get('event');
    if (selected) return eventDetail(selected);
    return shell(`${top('T05 · Version 2.1','Event cards now open the complete event page.','Visitors move directly from the listing to all available event details. There is no separate “full story” step between the card and the event page.')}
      <section class="v2-section"><div class="v2-container"><div class="v2-section-head"><h2>Events at a glance.</h2><p>Past and upcoming events use the same direct path. Registration appears only when a confirmed registration link exists.</p></div><div class="v2-event-grid">
        ${eventCard({media:suppliedPhoto,title:'ASHE Healthcare Facilities Innovation Conference',meta:'Past event · August 2, 2026 · Minneapolis',copy:'NEVShe’s official ASHE chapter-recognition milestone, with the recap included on the event page.',href:'./?event=ashe-innovation-conference'})}
        ${eventCard({title:'Upcoming program example',meta:'Date and location pending',copy:'A layout example showing where confirmed program and registration details will appear.',href:'./?event=upcoming-program',pending:true})}
        ${eventCard({title:'Future chapter gathering',meta:'Details pending NEVShe',copy:'A second example demonstrating how additional events continue in the same responsive grid.',href:'./?event=future-gathering',pending:true})}
      </div>${note('Simplified path','Each card opens one complete event page. Past-event recaps stay on that same page; upcoming-event pages add one registration button only after NEVShe supplies the confirmed link.')}</div></section>`);
  }
  function eventDetail(selected) {
    const supplied = selected === 'ashe-innovation-conference';
    const title = supplied ? 'ASHE Healthcare Facilities Innovation Conference' : selected === 'upcoming-program' ? 'Upcoming program example' : 'Future chapter gathering';
    const status = supplied ? 'Past event · chapter milestone' : 'Layout example · details pending';
    const intro = supplied ? 'NEVShe was officially recognized as ASHE’s newest chapter during the Minneapolis gathering.' : 'This page shows the complete visitor path while the factual event details remain open for NEVShe to supply.';
    return shell(`<section class="v2-section"><div class="v2-container"><p><a href="./">← Back to all events</a></p><div class="v2-detail-hero"><div class="v2-detail-copy"><div class="v2-kicker">${status}</div><h1>${title}</h1><p>${intro}</p>${!supplied?note('Content pending','No date, venue, speaker, agenda, pricing, or registration information is invented in this example.'):''}</div><div class="v2-detail-image"><img src="${supplied?suppliedPhoto:`${assets}generated-v7/sponsorship-nevada-community-v1.png`}" alt="${supplied?names:'Illustrative professionals in a Nevada setting; not actual event attendees or venue'}"></div></div>
      <div class="v2-fact-grid"><div class="v2-fact"><b>Date and time</b>${supplied?'August 2, 2026':'To be announced'}</div><div class="v2-fact"><b>Location</b>${supplied?'Minneapolis, Minnesota':'To be announced'}</div><div class="v2-fact"><b>Registration</b>${supplied?'Closed · past conference':'Link appears here when confirmed'}</div></div>
      <div class="v2-prose"><article><h2>${supplied?'About the conference':'About the event'}</h2>${supplied?`<p>The ASHE Healthcare Facilities Innovation Conference brought together chapters from across the country. NEVShe was officially recognized as ASHE’s newest chapter during the Minneapolis gathering.</p><p>NEVShe’s Ricardo Barrera, Rich Park, and Ismael Lopez-Ferratt are pictured with Narsimha Irrinki, ASHE Region 9 President, celebrating the chapter milestone.</p><h2>Chapter participation</h2><p>The supplied event information centers on NEVShe’s recognition and the people who represented the chapter. Additional program information can be added here when NEVShe provides it.</p>`:`<p>The confirmed event description will appear here. The same page will hold the practical information visitors need: schedule, venue or online format, presenters, registration link, pricing, and any approved supporting material.</p><p>After the event, the page can remain available as the permanent recap. Photos, presentations, or recordings can be added without creating a second story visitors must find.</p>`}</article><aside class="v2-aside"><h2>Event information</h2><dl><dt>Organizer</dt><dd>${supplied?'ASHE':'Pending confirmation'}</dd><dt>Event status</dt><dd>${supplied?'Past conference':'Upcoming example'}</dd><dt>Visitor action</dt><dd>${supplied?'Read recap on this page':'Register when link is confirmed'}</dd></dl></aside></div></div></section>`);
  }

  const logo = label => `<div class="v2-logo">Sponsor logo<small>${label}</small></div>`;
  function sponsors() {
    const run = Array.from({length:8},(_,i)=>logo(`Placeholder ${i%4+1}`)).join('');
    return shell(`${top('T06 · Version 2.1','Recognition first, then a clear sponsorship hierarchy.','The sitewide marquee remains. The directory beneath it now demonstrates how higher confirmed levels receive stronger visual prominence without allowing sponsors to control site content.')}
      <section class="v2-section"><div class="v2-container"><div class="v2-section-head"><h2>Sitewide sponsor marquee.</h2><p>Approved sponsor logos repeat in a calm horizontal loop and link to the sponsor directory.</p></div></div><div class="v2-marquee" aria-label="Sponsor logo placeholders"><div class="v2-marquee-track">${run}${run}</div></div><div class="v2-container">${note('Assets pending','Izzy has not yet uploaded sponsor logos. These labeled placeholders show size and placement only; real logos will be added after the supplied files and display permissions are available.')}</div></section>
      <section class="v2-section"><div class="v2-container"><div class="v2-section-head"><h2>Tiered directory below the marquee.</h2><p>The hierarchy is visual now. NEVShe’s actual level names, order, eligibility, and benefits remain authoritative client content.</p></div>
        <article class="v2-tier v2-tier-high"><div class="v2-tier-head"><div><div class="v2-kicker">Highest confirmed level</div><h3>Largest logo treatment</h3></div><p>Top-level sponsors receive the most prominent placement and room for a concise approved organization description.</p></div><div class="v2-tier-logos">${logo('Level name pending')}${logo('Level name pending')}</div></article>
        <article class="v2-tier v2-tier-mid"><div class="v2-tier-head"><div><div class="v2-kicker">Middle confirmed level</div><h3>Balanced three-column treatment</h3></div><p>Mid-level sponsors remain prominent while more organizations fit naturally in each row.</p></div><div class="v2-tier-logos">${logo('Level name pending')}${logo('Level name pending')}${logo('Level name pending')}</div></article>
        <article class="v2-tier v2-tier-support"><div class="v2-tier-head"><div><div class="v2-kicker">Additional confirmed sponsors</div><h3>Compact supporting grid</h3></div><p>Additional sponsors receive consistent, readable recognition without an endless carousel or hidden horizontal scroll.</p></div><div class="v2-tier-logos">${logo('Level name pending')}${logo('Level name pending')}${logo('Level name pending')}${logo('Level name pending')}</div></article>
        <p class="v2-sponsor-disclaimer"><strong>What remains open:</strong> NEVShe must supply the official sponsorship-level names, ordering rules, approved logos, and any level-specific benefits. This mockup intentionally does not invent those business terms.</p>
      </div></section>`);
  }

  const render = { 'interior-page-hero':hero, 'event-archive-card-single':event, 'sponsor-directory-card-marquee':sponsors }[id];
  if (!render || !main) return;
  main.innerHTML = render();
  const label = document.querySelector('.review-meta .review-pill');
  if (label) label.textContent = id === 'interior-page-hero' ? 'Page introductions · Version 2' : id === 'event-archive-card-single' ? 'Event listings and details · Version 2' : 'Sponsor displays · Version 2';
})();
