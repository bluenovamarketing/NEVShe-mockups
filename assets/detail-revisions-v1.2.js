/* September 3 revision: full sourced article, simple events, shared card data.
   Earlier revision files intentionally remain unchanged. */
(() => {
  'use strict';
  const kind = document.body.dataset.artifactKind;
  const id = document.body.dataset.artifactId;
  const base = kind === 'hub' ? './' : '../../';
  const routes = {
    news: `${base}templates/news-archive-card-single-post-v1.4/`,
    event: `${base}templates/event-archive-card-single-v1.4/`,
    profiles: `${base}templates/board-directory-card-v1.4/?view=directory`
  };
  // One record feeds each detail and its card demonstration. Production CMS
  // fields, event status rules, and maintenance checks are built on staging.
  const milestone = {
    title: 'A historic milestone for Nevada healthcare facilities',
    excerpt: 'NEVShe is officially recognized as ASHE’s newest chapter, connecting Nevada with the Region 9 community alongside California and Arizona.',
    date: 'August 2, 2026',
    dateISO: '2026-08-02',
    location: 'Minneapolis, Minnesota',
    conference: 'ASHE Healthcare Facilities Innovation Conference',
    image: `${base}assets/images/client-supplied/nevshe-ashe-2026-chapter-members.jpg`,
    alt: 'From left: Richard Park, Narsimha Irrinki, Ricardo D. Barrera Jr., and Ismael Lopez-Ferratt at the ASHE conference.',
    caption: 'From left: Richard Park, NEVShe Secretary; Narsimha Irrinki, ASHE Region 9 President; Ricardo D. Barrera Jr., NEVShe President; and Ismael Lopez-Ferratt, NEVShe Director at Large.'
  };
  const pastEvent = {
    title: milestone.conference,
    excerpt: 'NEVShe celebrates its official chapter recognition at ASHE’s annual conference.',
    date: milestone.date,
    location: milestone.location,
    status: 'Past event',
    image: milestone.image,
    alt: milestone.alt,
    body: `<p>The ${milestone.conference} brought chapters together in Minneapolis. During the gathering, the Nevada Society of Healthcare Engineers was officially recognized as ASHE’s newest chapter.</p><p>NEVShe leaders joined Narsimha Irrinki, ASHE Region 9 President, to celebrate the milestone. Read the chapter story for the full photograph, board introductions, and what this recognition means for Nevada.</p>`
  };
  const upcomingEvent = {
    title: 'Connect. Learn. Share.',
    excerpt: 'An upcoming-event layout example for NEVShe’s professional community.',
    date: 'To be announced',
    location: 'To be announced',
    status: 'Layout sample',
    image: `${base}assets/images/generated-v7/sponsorship-nevada-community-v1.png`,
    alt: 'Illustrative professionals in a Nevada landscape; not actual event attendees or venue.',
    body: '<p>No event is announced in this example. A confirmed program will include a short description, its date and location, and a direct registration link.</p>'
  };
  const breadcrumbs = (label, url, title) => `<nav class="detail-breadcrumb" aria-label="Breadcrumb"><a href="${base}">Mockup hub</a><span aria-hidden="true">/</span><a href="${url}">${label}</a><span aria-hidden="true">/</span><span>${title}</span></nav>`;
  const photo = () => `<figure class="detail-figure"><img src="${milestone.image}" alt="${milestone.alt}"><figcaption>${milestone.caption}</figcaption></figure>`;
  function article() {
    return `<div class="detail-wrap revision-story">
      ${breadcrumbs('News', `${base}pages/news-v1.14/`, 'ASHE chapter recognition')}
      <header class="detail-hero">
        <div class="detail-kicker">Chapter milestone</div>
        <h1>${milestone.title}</h1>
        <p class="detail-intro">${milestone.excerpt}</p>
        <div class="detail-meta"><span>Recognition date: <time datetime="${milestone.dateISO}">${milestone.date}</time></span><span>${milestone.location}</span></div>
      </header>
      ${photo()}
      <article class="revision-prose" aria-label="Chapter recognition article">
        <p class="revision-lead">The Nevada Society of Healthcare Engineers (NEVShe) has officially been recognized as the newest chapter of the American Society for Health Care Engineering (ASHE). The recognition took place at the ASHE Healthcare Facilities Innovation Conference in Minneapolis on August 2, 2026.</p>
        <p>For Nevada’s healthcare facilities community, the occasion marked the culmination of months of work and collaboration to establish the state’s first official ASHE chapter. Members of NEVShe’s leadership attended the annual conference, which brought together chapters from across the country, to celebrate the achievement.</p>
        <h2>A Nevada chapter, connected to Region 9</h2>
        <p>NEVShe joins ASHE Region 9 alongside California and Arizona. That regional connection places Nevada’s chapter within a wider community while keeping its focus on the healthcare facility professionals who work throughout the state.</p>
        <p>The chapter’s stated direction brings together education, networking, professional development, and collaboration. Official recognition provides a milestone from which NEVShe can continue that work while supporting ASHE’s mission.</p>
        <h2>The people behind the milestone</h2>
        <p>To commemorate the recognition, three NEVShe leaders joined Narsimha Irrinki, ASHE Region 9 President, for the group photograph above. Pictured from left to right are Richard Park, NEVShe Board Secretary; Irrinki; Ricardo D. Barrera Jr., NEVShe President; and Ismael Lopez-Ferratt, NEVShe Director at Large.</p>
        <p>The chapter’s leadership also includes four board members who were unable to attend the conference: Vice President Hans G. Gottschaldt, Treasurer Dave Lamb, and Directors at Large Andy Nelson and Brian Foote. Together with Barrera, Park, and Lopez-Ferratt, they make up the seven-person board identified in the chapter’s milestone announcement.</p>
        <h2>Looking ahead</h2>
        <p>In its announcement, NEVShe described the recognition as a beginning, with further work ahead to advance healthcare facility management across Nevada through learning and professional connections.</p>
        <p>The chapter also thanked everyone who helped make the achievement possible. The Minneapolis photograph records that shared moment: Nevada’s new chapter celebrating its official place in the ASHE community, alongside the regional leadership it now joins.</p>
        <div class="detail-actions"><a class="btn btn-primary" href="${routes.profiles}">Meet the NEVShe board →</a></div>
        <p class="revision-source">Based on NEVShe’s supplied milestone announcement and conference details. Article draft prepared for website review.</p>
      </article>
    </div>`;
  }
  function event(upcoming) {
    const data = upcoming ? upcomingEvent : pastEvent;
    return `<div class="detail-wrap revision-event">
      ${breadcrumbs('Events', `${base}pages/events-v1.8/`, upcoming ? 'Upcoming event sample' : 'Conference recap')}
      ${upcoming ? '<p class="revision-review-note">Mockup example only · No upcoming program has been announced.</p>' : ''}
      <header class="detail-hero">
        <div class="detail-event-hero">
          <div><div class="detail-kicker">${data.status}${upcoming ? '' : ' · Hosted by ASHE'}</div><h1>${data.title}</h1><p class="detail-intro">${data.excerpt}</p></div>
          <figure><img src="${data.image}" alt="${data.alt}"></figure>
        </div>
        <div class="revision-event-meta"><span><b>${upcoming ? 'Date & time' : 'Date'}</b>${data.date}</span><span><b>Location</b>${data.location}</span></div>
      </header>
      <section class="revision-event-body" aria-label="Event overview">
        ${data.body}
        <div class="detail-actions">${upcoming ? '<button class="btn btn-primary" disabled aria-disabled="true">Registration not open</button>' : `<a class="btn btn-primary" href="${routes.news}">Read the full chapter story →</a>`}</div>
      </section>
    </div>`;
  }
  function card(key) {
    const data = key === 'news' ? milestone : pastEvent;
    return `<article class="detail-card"><img class="group-image" src="${data.image}" alt="${data.alt}"><div class="detail-card-copy"><span class="detail-kicker">${key === 'news' ? 'Chapter milestone' : 'Past event'}</span><h2>${data.title}</h2><p>${data.excerpt}</p><p class="detail-tag">${data.date} · ${data.location}</p><a href="${routes[key]}">Read ${key === 'news' ? 'article' : 'event details'} →</a></div></article>`;
  }
  if (kind === 'hub') {
    for (const key of ['news', 'event']) {
      const slug = key === 'news' ? 'news-archive-card-single-post' : 'event-archive-card-single';
      document.querySelectorAll(`a.review-card[href*="templates/${slug}-"]`).forEach(a => {
        a.href = routes[key];
        a.querySelector('footer span:last-child').textContent = 'v1.4 ↗';
        a.querySelector('p').textContent = key === 'news' ? 'The complete client-sourced recognition article and full group photograph.' : 'Simplified event detail: photo, essential information, short description, one action.';
      });
    }
    const spotlight = document.querySelector('.detail-spotlight .container');
    const nav = document.createElement('nav');
    nav.className = 'revision-review-links';
    nav.setAttribute('aria-label', 'Separate template state examples');
    nav.innerHTML = `<span>Additional examples:</span><a href="${routes.news}?view=card">News listing card</a><a href="${routes.event}?view=card">Event listing card</a><a href="${routes.event}?state=upcoming">Upcoming event</a>`;
    spotlight?.append(nav);
    return;
  }
  const key = id === 'news-archive-card-single-post' ? 'news' : id === 'event-archive-card-single' ? 'event' : null;
  if (!key) return;
  const params = new URLSearchParams(location.search);
  const main = document.querySelector('main');
  main.classList.add('detail-main');
  main.innerHTML = params.get('view') === 'card'
    ? `<div class="detail-wrap revision-card-demo">${breadcrumbs('Template detail', routes[key], 'Listing card example')}<h1>${key === 'news' ? 'News' : 'Event'} listing card</h1><p>This separate mockup demonstrates the card visitors select in the listing.</p><div class="revision-demo-grid">${card(key)}</div></div>`
    : key === 'news' ? article() : event(params.get('state') === 'upcoming');
  document.title = `${key === 'news' ? 'NEVShe chapter recognition' : 'NEVShe event detail'} — Mockup v1.4`;
})();
