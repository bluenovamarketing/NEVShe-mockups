(() => {
  'use strict';

  const body = document.body;
  const kind = body.dataset.artifactKind;
  const id = body.dataset.artifactId;
  const version = body.dataset.version || '';
  const root = kind === 'hub' ? './' : '../../';
  const currentVersions = {
    'home': 'v1.4',
    'about-nevshe': 'v1.4',
    'board-of-directors': 'v1.4',
    'events': 'v1.3',
    'education': 'v1.3',
    'membership': 'v1.3',
    'member-directory': 'v1.4',
    'sponsorship': 'v1.6',
    'sponsor-directory': 'v1.5',
    'resources': 'v1.4',
    'news': 'v1.5',
    'contact': 'v1.4'
  };
  const img = (name) => {
    const versioned = name.match(/^v([1-9]):(.+)$/);
    const folder = versioned ? `generated-v${versioned[1]}` : 'generated-v1';
    const filename = versioned ? versioned[2] : name;
    return new URL(`${root}assets/images/${folder}/${filename}`, window.location.href).href;
  };
  const joinUrl = 'https://lp.constantcontactpages.com/ev/reg/c9zrcum';
  const notifyUrl = 'https://lp.constantcontactpages.com/sl/As6eGyf';

  const pageConfigs = {
    'home': {
      n: 1, name: 'Home', type: 'home', image: 'statewide-healthcare-hero-v1.png',
      supportImage: 'v2:home-connected-campus-v2.png',
      storyEyebrow: 'A living facilities network', storyTitle: 'Connected systems. Connected people.',
      storyText: 'The visual system treats the healthcare campus as an active network—energy, water, air, safety, knowledge, and people moving together rather than a collection of static buildings.',
      eyebrow: 'Nevada Society of Healthcare Engineers',
      title: 'Advancing Nevada’s healthcare facilities community.',
      intro: 'Education, collaboration, and professional development for the people who keep healthcare environments safe, efficient, and operational.',
      cta: ['Join NEVShe', joinUrl], secondary: ['View events', '../events-v1.2/'],
      stats: [['60+','members and growing'],['Statewide','one Nevada chapter'],['ASHE','chapter connection'],['Year-round','education and events']],
      sections: [
        ['Built for the people behind healthcare', 'NEVShe connects facility operators, engineers, technicians, healthcare leaders, and industry partners across Nevada. This agency-draft direction presents the chapter as practical, welcoming, and statewide.'],
        ['Learn together. Solve together.', 'The site brings events, continuing education, professional resources, and chapter news into one clear experience—while preserving the simple external registration workflow already in place.']
      ],
      cards: [
        ['Education','Strengthen practical knowledge across compliance, safety, systems, sustainability, and leadership.','Explore education'],
        ['Events','Find upcoming chapter gatherings, learning sessions, and opportunities to connect statewide.','View events'],
        ['Membership','Join a growing community focused on safer, more resilient healthcare environments.','Membership overview']
      ]
    },
    'about-nevshe': {
      n: 2, name: 'About NEVShe', type: 'standard', image: 'v2:about-statewide-network-v2.png',
      supportImage: 'v2:about-statewide-campus-v2.png',
      storyEyebrow: 'Statewide by design', storyTitle: 'One chapter across a wide, complex state.',
      storyText: 'A statewide healthcare campus scene carries the idea beyond the hero—connecting geography, facilities, disciplines, and professional relationships without inventing chapter-history details.',
      eyebrow: 'One chapter. One Silver State.',
      title: 'A statewide community for healthcare facilities professionals.',
      intro: 'This page direction explains NEVShe’s role, who it serves, and how its ASHE chapter connection supports education and collaboration across Nevada.',
      cta: ['Learn about membership', '../membership-v1.2/'], secondary: ['Meet the board', '../board-of-directors-v1.3/'],
      sections: [
        ['Why NEVShe exists', 'Healthcare environments depend on people and systems working together. NEVShe creates a Nevada-focused place for facilities professionals and partners to share knowledge, build relationships, and strengthen the work behind patient care.'],
        ['Statewide by design', 'The chapter serves northern and southern Nevada, urban and rural facilities, and the wide range of disciplines required to operate complex healthcare environments.'],
        ['ASHE connection', 'NEVShe is presented as a newly approved ASHE chapter. Final affiliation language, chapter history, and any official marks remain subject to client confirmation before publication.']
      ],
      cards: [['Education','Practical learning that supports safer, stronger facilities.','See education'],['Collaboration','A statewide network for shared experience and problem-solving.','Join the community'],['Professional growth','Connections and resources for operators, leaders, and partners.','Explore resources']]
    },
    'board-of-directors': {
      n: 3, name: 'Board of Directors', type: 'directory', image: 'rural-hvac-operations-v1.png',
      supportImage: 'v2:board-leadership-planning-v2.png',
      storyEyebrow: 'Leadership in practice', storyTitle: 'Decisions grounded in the work behind care.',
      storyText: 'The second editorial scene breaks up the directory and gives leadership a more human, working context while names, roles, employers, and biographies remain client-supplied.',
      eyebrow: 'Chapter leadership',
      title: 'Leadership serving healthcare facilities across Nevada.',
      intro: 'A structured leadership directory will introduce officers and directors without requiring routine editors to redesign cards or layouts.',
      cta: ['Contact NEVShe', '../contact-v1.3/'],
      cards: [['President','Name and employer pending','Board role'],['Vice President','Name and employer pending','Board role'],['Secretary / Treasurer','Name and employer pending','Board role'],['Director','Name and employer pending','Board role'],['Director','Name and employer pending','Board role'],['Director','Name and employer pending','Board role']]
    },
    'events': {
      n: 4, name: 'Events', type: 'archive', image: 'education-collaboration-v1.png', eyebrow: 'Learn • Connect • Advance',
      title: 'Events that move Nevada healthcare facilities forward.',
      intro: 'A filterable event system gives every program a clear path from discovery to registration, then supports recaps and resources after the event.',
      cta: ['Get event notifications', notifyUrl],
      filters: ['All events','Education','Networking','Chapter meeting','Past events'],
      cards: [['Featured upcoming event','Date and venue pending','Representative event layout — final program details supplied by NEVShe.'],['Education session','Details coming soon','Supports speakers, objectives, CE/CEC information, agenda, and external registration.'],['Statewide networking','Details coming soon','Supports in-person, virtual, and hybrid event formats.']]
    },
    'education': {
      n: 5, name: 'Education', type: 'standard', image: 'tahoe-water-systems-v1.png', eyebrow: 'Continuing education',
      title: 'Practical knowledge for complex healthcare environments.',
      intro: 'The education hub brings chapter learning opportunities, trusted external resources, and future on-demand material into a focused experience.',
      cta: ['View opportunities', '#opportunities'], secondary: ['Explore resources', '../resources-v1.2/'],
      sections: [['Education with operational relevance','Agency-draft framing centers the real systems, standards, and leadership challenges facilities teams navigate every day.'],['A flexible learning system','The layout can support upcoming sessions, webinars, presentations, certification links, topic submissions, and later on-demand material without redesigning the page.']],
      cards: [['Compliance & life safety','Codes, standards, and safe operations.','View topic'],['Water management','Resilience, quality, and environmental stewardship.','View topic'],['Emergency preparedness','Planning for continuity and response.','View topic'],['Facilities operations','Mechanical, electrical, maintenance, and performance.','View topic'],['Construction','Healthcare construction and infection-prevention coordination.','View topic'],['Leadership & workforce','Professional development and the next generation.','View topic']]
    },
    'membership': {
      n: 6, name: 'Membership', type: 'conversion', image: 'southern-campus-leadership-v1.png', eyebrow: 'Join the statewide network',
      title: 'Grow your knowledge, network, and impact.',
      intro: 'This agency-draft membership page makes the value proposition clear while sending registration into NEVShe’s existing Constant Contact and PayPal workflow.',
      cta: ['Join NEVShe', joinUrl], secondary: ['Membership questions', '../contact-v1.2/'],
      cards: [['Learn','Connect with education and resources relevant to healthcare facilities.','Included direction'],['Connect','Build relationships with operators, leaders, and industry partners statewide.','Included direction'],['Contribute','Share experience and help strengthen Nevada’s healthcare facilities community.','Included direction']],
      faq: [['Who should join?','Final eligibility and membership-type language is pending NEVShe confirmation. The page is structured for facilities professionals, healthcare leaders, and approved industry partners.'],['How do I register?','The Join action opens NEVShe’s existing Constant Contact registration flow, which continues to its current payment process.'],['How is membership processed?','The approved Phase One workflow remains manually administered by NEVShe.']]
    },
    'member-directory': {
      n: 7, name: 'Member Directory', type: 'directory', image: 'v2:member-directory-networking-v2.png', eyebrow: 'Statewide organization directory',
      title: 'Find organizations supporting Nevada healthcare facilities.',
      intro: 'Phase One displays approved organization-level information only: organization name, industry, logo, and website. Personal contact information is excluded.',
      cta: ['Membership overview', '../membership-v1.2/'],
      filters: ['All organizations','Healthcare provider','Engineering','Construction','Facilities services','Technology'],
      cards: [['Member organization','Industry pending','Organization profile'],['Member organization','Industry pending','Organization profile'],['Member organization','Industry pending','Organization profile'],['Member organization','Industry pending','Organization profile'],['Member organization','Industry pending','Organization profile'],['Member organization','Industry pending','Organization profile']]
    },
    'sponsorship': {
      n: 8, name: 'Sponsorship', type: 'conversion', image: 'v4:sponsorship-partnership-hero-v4.png',
      supportImage: 'v3:sponsorship-community-support-v3.png', heroTone: 'natural',
      storyEyebrow: 'Support made visible', storyTitle: 'Partnership becomes useful participation.',
      storyText: 'The supporting image now centers partnership, professional connection, and visible chapter support, while exact sponsorship levels, benefits, and financial terms remain pending.',
      eyebrow: 'Support the chapter',
      title: 'Put your support behind Nevada’s healthcare facilities community.',
      intro: 'The sponsorship experience introduces the audience and opportunity clearly while reserving specific levels, benefits, and financial terms for client-confirmed content.',
      cta: ['Become a Sponsor', joinUrl], secondary: ['Ask a question', '../contact-v1.3/'],
      cards: [['Chapter visibility','Proposed placement across approved sponsor surfaces and chapter communications.','Benefits pending'],['Community support','Align with education, collaboration, and professional development in Nevada.','Benefits pending'],['Lasting connection','Build relationships with healthcare facilities professionals and leaders.','Benefits pending']],
      faq: [['What sponsorship levels are available?','Names, pricing, benefits, and availability remain pending NEVShe confirmation. The design supports tiered comparison.'],['Can we sponsor an event?','The layout can distinguish annual chapter support from event-specific opportunities when details are supplied.'],['How do we register?','The primary action opens the existing external Constant Contact registration workflow.']]
    },
    'sponsor-directory': {
      n: 9, name: 'Sponsor Directory', type: 'directory', image: 'v3:sponsor-directory-supporters-v3.png', heroTone: 'open',
      supportImage: 'v2:sponsor-directory-specialties-v2.png',
      storyEyebrow: 'Different specialties, shared outcomes', storyTitle: 'Recognition with real visual variety.',
      storyText: 'A distinct supporting image introduces the range of technical specialties sponsors may represent without inventing company names, levels, claims, or affiliations.',
      eyebrow: 'Chapter supporters',
      title: 'Recognizing organizations that help NEVShe grow.',
      intro: 'A tier-aware directory gives sponsors clear recognition while allowing administrators to add or update entries through simple WordPress fields.',
      cta: ['Become a Sponsor', joinUrl],
      filters: ['All sponsors','Founding / featured','Gold','Additional levels'],
      cards: [['Sponsor name pending','Level pending','Sponsor profile'],['Sponsor name pending','Level pending','Sponsor profile'],['Sponsor name pending','Level pending','Sponsor profile'],['Sponsor name pending','Level pending','Sponsor profile'],['Sponsor name pending','Level pending','Sponsor profile'],['Sponsor name pending','Level pending','Sponsor profile']]
    },
    'resources': {
      n: 10, name: 'Resources', type: 'archive', image: 'v3:resources-professional-library-v3.png', heroTone: 'soft', eyebrow: 'Professional resource library',
      title: 'Find useful guidance without digging through the site.',
      intro: 'A searchable, filterable resource library supports approved files and trusted external links with clear source, topic, format, and publication details.',
      cta: ['Browse resources', '#library'],
      filters: ['All resources','Codes & regulation','Emergency preparedness','Water management','Sustainability','Certification'],
      cards: [['Resource title pending','Approved source required','External link or document'],['Resource title pending','Approved source required','External link or document'],['Resource title pending','Approved source required','External link or document'],['Resource title pending','Approved source required','External link or document'],['Resource title pending','Approved source required','External link or document'],['Resource title pending','Approved source required','External link or document']]
    },
    'news': {
      n: 11, name: 'News', type: 'archive', image: 'v3:news-chapter-editorial-v3.png', heroTone: 'soft', eyebrow: 'Chapter and industry updates',
      title: 'News from across Nevada’s healthcare facilities community.',
      intro: 'The news system supports chapter updates, member and sponsor spotlights, advocacy, industry context, event recaps, and continuing education.',
      cta: ['Get notifications', notifyUrl],
      filters: ['All news','Chapter News','Industry Updates','Advocacy','Member Spotlight','Event Recap'],
      cards: [['Featured story title pending','Chapter News','Agency-draft excerpt will appear here once the source story is supplied.'],['Article title pending','Industry Updates','WordPress posts automatically populate this archive card.'],['Article title pending','Member Spotlight','Authorship, categories, imagery, and SEO fields remain simple to edit.']]
    },
    'contact': {
      n: 12, name: 'Contact', type: 'contact', image: 'v2:contact-professional-connection-v2.png', eyebrow: 'Connect with NEVShe',
      title: 'Start the right conversation.',
      intro: 'This page separates general inquiries, membership and sponsorship interest, and event notifications while final recipient and social details remain pending.',
      cta: ['Join event notifications', notifyUrl]
    },
    'privacy-policy': {
      n: 13, name: 'Privacy Policy', type: 'legal', eyebrow: 'Legal framework', title: 'Privacy Policy',
      intro: 'Layout mockup only. Final privacy language must reflect the website’s actual forms, analytics, embeds, vendors, retention practices, and legal review.',
      sections: [['Information we collect','Approved legal language pending. This section will describe the information actually collected through the finished website.'],['How information is used','Approved legal language pending. Uses must match the final form, email, analytics, and operational workflows.'],['Third-party services','Approved legal language pending. External registration, payment, analytics, and embedded services will be identified accurately.'],['Choices and contact','Approved legal language and contact route pending.']]
    },
    'terms-of-use': {
      n: 14, name: 'Terms of Use', type: 'legal', eyebrow: 'Legal framework', title: 'Terms of Use',
      intro: 'Layout mockup only. The final terms require organization-authorized language and professional review before launch.',
      sections: [['Website purpose','Approved terms pending.'],['Acceptable use','Approved terms pending.'],['External links and resources','Approved terms pending.'],['Disclaimers and limitations','Approved terms pending.'],['Changes and contact','Approved terms and contact route pending.']]
    },
    'accessibility-statement': {
      n: 15, name: 'Accessibility Statement', type: 'legal', eyebrow: 'Inclusive access', title: 'Accessibility Statement',
      intro: 'Agency-draft structure for an accessibility commitment, conformance approach, known limitations, and a clear issue-reporting route.',
      sections: [['Our commitment','NEVShe intends for its public website to be usable by as many people as possible. Final wording and conformance claims require review against the completed site.'],['What we are doing','The project includes keyboard, focus, contrast, reduced-motion, zoom/reflow, label, error, and responsive checks before launch.'],['Known limitations','Any verified limitations at launch will be described here with a remediation plan.'],['Need assistance?','The final statement will include the approved accessibility contact route and the information helpful for resolving an issue.']]
    },
    'search-results': {
      n: 16, name: 'Search Results', type: 'search', eyebrow: 'Site search', title: 'Search NEVShe',
      intro: 'A clear search experience helps visitors find events, education, resources, news, and permanent pages—with useful empty states when nothing matches.'
    },
    '404': {
      n: 17, name: '404', type: '404', eyebrow: 'Page not found', title: 'That route has moved off the map.',
      intro: 'The recovery state keeps the experience on-brand and offers direct paths to search, events, resources, and the homepage.'
    }
  };

  const templateConfigs = {
    'global-header-desktop-navigation': ['Global header + desktop navigation','All public pages','Desktop navigation, current-page state, search utility, Join, Sponsor, and breakpoint behavior.'],
    'full-screen-mobile-navigation': ['Full-screen mobile navigation','Mobile and tablet','Animated, accessible overlay with the complete approved navigation and prominent Join/Sponsor actions.'],
    'global-footer': ['Global footer','All public pages','Organization context, navigation, programs, legal links, notifications, and pending social/contact details.'],
    'interior-page-hero': ['Interior-page hero','Interior pages','Reusable image-led, gradient-led, and compact hero variants with breadcrumbs and content-authority labels.'],
    'event-archive-card-single': ['Event archive, card + single','Events archive and event routes','Featured event, filters, card anatomy, registration path, event details, recap state, and empty state.'],
    'sponsor-directory-card-marquee': ['Sponsor directory, card + marquee','Sponsor directory and sitewide recognition','Tier grouping, logo treatment, marquee, profile link, CTA, and empty/level states.'],
    'resource-archive-card-single': ['Resource archive, card + optional single','Resource library','Search, topic filters, source/format metadata, document vs. external link, and optional detail layout.'],
    'board-directory-card': ['Board directory + card','Board of Directors','Role order, headshot fallback, employer, biography preview, optional committee information, and privacy-conscious display.'],
    'member-organization-directory-card': ['Member organization directory + card','Public member-company directory','Approved organization-only fields, industry filters, website link, consent state, and no personal contact data.'],
    'news-archive-card-single-post': ['News archive, card + single post','News and post routes','Featured story, category filters, card, article typography, share row, related content, and author-rule flexibility.'],
    'search-no-results-404': ['Search, no-results + 404','Search and error routes','Results list, helpful no-results guidance, query recovery, and branded 404 navigation.'],
    'contact-form-notification-routing': ['Contact form + notification routing','Contact and global CTAs','Form fields and states, routing intent, privacy consent, spam protection note, and separate Constant Contact destinations.'],
    'global-component-library': ['Global component library','All page families','Review board for the recurring Elementor-ready sections, cards, controls, content states, and motion behaviors.']
  };

  const navItems = [
    ['About','about-nevshe'],['Events','events'],['Education','education'],['Membership','membership'],['Member Directory','member-directory'],['Sponsorship','sponsorship'],['Resources','resources'],['News','news'],['Contact','contact']
  ];

  const icon = (name) => {
    const paths = {
      search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
      close: '<path d="m6 6 12 12M18 6 6 18"></path>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"></path>'
    };
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  };

  const local = (slug) => `${root}pages/${slug}-${currentVersions[slug] || 'v1.2'}/`;
  const reviewBar = (label) => `<div class="review-bar"><a href="${root}">← Complete mockup hub</a><div class="review-meta"><span class="review-pill">${label}</span>${version ? `<span class="review-pill">${version}</span>` : ''}<span class="review-pill">Agency draft • 2026-08-31</span></div></div>`;

  function header(current = '') {
    const links = navItems.map(([label,slug]) => `<a href="${local(slug)}" ${slug === current ? 'aria-current="page"' : ''}>${label}</a>`).join('');
    return `<a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="${local('home')}" aria-label="NEVShe home"><img src="${root}assets/brand/nevshe-logo-provisional.png" alt="Nevada Society of Healthcare Engineers"></a>
          <nav class="desktop-nav" aria-label="Primary">${links}</nav>
          <div class="header-actions">
            <a class="btn btn-small btn-primary" href="${joinUrl}">Join NEVShe</a>
            <a class="btn btn-small btn-secondary" href="${local('sponsorship')}">Sponsor</a>
            <a class="icon-button" href="${local('search-results')}" aria-label="Search">${icon('search')}</a>
          </div>
          <button class="menu-button" type="button" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">${icon('menu')}</button>
        </div>
      </header>
      <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-inner">
          <div class="mobile-menu-top"><img src="${root}assets/brand/nevshe-logo-provisional.png" alt="NEVShe"><button class="icon-button menu-close" type="button" aria-label="Close menu">${icon('close')}</button></div>
          <nav aria-label="Mobile">${links}</nav>
          <div class="mobile-menu-actions"><a class="btn btn-primary" href="${joinUrl}">Join NEVShe</a><a class="btn btn-ghost" href="${local('sponsorship')}">Become a Sponsor</a></div>
        </div>
      </div>`;
  }

  function footer() {
    return `<footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand"><img src="${root}assets/brand/nevshe-logo-provisional.png" alt="NEVShe"><p>Connecting the people who keep Nevada healthcare environments safe, efficient, and operational.</p><a class="btn btn-ghost btn-small" href="${notifyUrl}">Get event notifications</a></div>
        <div class="footer-col"><h3>Explore</h3><a href="${local('about-nevshe')}">About</a><a href="${local('board-of-directors')}">Board</a><a href="${local('events')}">Events</a><a href="${local('news')}">News</a></div>
        <div class="footer-col"><h3>Participate</h3><a href="${local('education')}">Education</a><a href="${local('membership')}">Membership</a><a href="${local('sponsorship')}">Sponsorship</a><a href="${local('resources')}">Resources</a></div>
        <div class="footer-col"><h3>Organization</h3><a href="${local('contact')}">Contact</a><a href="${local('privacy-policy')}">Privacy</a><a href="${local('terms-of-use')}">Terms</a><a href="${local('accessibility-statement')}">Accessibility</a></div>
      </div>
      <div class="footer-bottom"><div class="footer-bottom-inner"><span>© NEVShe • Mockup content is not approved for publication.</span><span>Statewide Nevada • Proposed website system</span></div></div>
    </footer>`;
  }

  const pageHero = (c, home = false) => {
    const style = c.image ? ` style="--hero-image:url('${img(c.image)}')"` : '';
    const actions = [c.cta,c.secondary].filter(Boolean).map((x,i) => `<a class="btn ${i ? 'btn-ghost' : 'btn-primary'}" href="${x[1]}">${x[0]} ${icon('arrow')}</a>`).join('');
    if (home) return `<section class="hero"${style}><div class="hero-content"><div class="hero-copy"><span class="draft-chip">Agency draft</span><div class="eyebrow" style="margin-top:22px">${c.eyebrow}</div><h1>${c.title}</h1><p>${c.intro}</p><div class="hero-actions">${actions}</div></div></div></section>`;
    return `<section class="interior-hero ${c.image ? 'has-image' : ''} hero-tone-${c.heroTone || 'seamless'}"${style}><div class="interior-hero-inner"><div class="breadcrumbs"><a href="${local('home')}">Home</a><span>/</span><span>${c.name}</span></div><div><span class="draft-chip">Agency draft</span><div class="eyebrow" style="margin-top:20px">${c.eyebrow}</div><h1>${c.title}</h1><p>${c.intro}</p>${actions ? `<div class="hero-actions">${actions}</div>` : ''}</div></div></section>`;
  };

  const sectionHeading = (eyebrow, title, text) => `<div class="section-heading"><div class="eyebrow" style="color:var(--violet)">${eyebrow}</div><h2>${title}</h2><p>${text}</p></div>`;
  const featureCards = (cards, directory = false) => `<div class="grid ${cards.length > 4 ? 'grid-3' : 'grid-3'}">${cards.map((x,i) => directory ? `<article class="card directory-card placeholder"><div class="avatar">${String(i+1).padStart(2,'0')}</div><div><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></div></article>` : `<article class="card"><div class="card-icon">${['✦','↗','◇','✓','◌','＋'][i%6]}</div><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p><span class="card-link">${x[2].includes('pending') ? 'Content pending' : 'Review direction'} →</span></article>`).join('')}</div>`;
  const visualStory = (c) => `<section class="section visual-story-section"><div class="container"><div class="visual-story"><div class="visual-story-media" style="--story-image:url('${img(c.supportImage)}')"><span class="visual-story-label">Unique page image</span></div><div class="visual-story-copy"><div class="eyebrow" style="color:var(--violet)">${c.storyEyebrow}</div><h2>${c.storyTitle}</h2><p>${c.storyText}</p><div class="visual-facts" aria-label="Visual direction notes"><span>Agency draft</span><span>Page-specific asset</span><span>Editorial break</span></div></div></div></div></section>`;

  function renderHome(c) {
    return `${pageHero(c,true)}
      <section class="section section-alt"><div class="container"><div class="stats">${c.stats.map(([a,b])=>`<div class="stat"><strong data-count>${a}</strong><span>${b}</span></div>`).join('')}</div></div></section>
      <section class="section"><div class="container">${sectionHeading('Who NEVShe serves',c.sections[0][0],c.sections[0][1])}${featureCards(c.cards)}</div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section section-dark"><div class="container"><div class="split"><div>${sectionHeading('Featured event','A clear path from interest to registration.','Event details are intentionally representative until NEVShe supplies the next approved event. The reusable event system supports dates, locations, speakers, objectives, CE/CEC details, agenda files, and external registration.') }<div class="hero-actions"><a class="btn btn-primary" href="${local('events')}">Review the event system ${icon('arrow')}</a></div></div><article class="card"><div class="meta">Featured event • Details pending</div><h3>Next NEVShe learning opportunity</h3><p>Representative content slot with date, format, location, registration state, and post-event resources.</p><span class="card-link">Event information pending →</span></article></div></div></section>
      <section class="section"><div class="container"><div class="quote"><blockquote>“One statewide community, connected by the work behind every safe and resilient healthcare environment.”</blockquote><cite>Proposed positioning line • Agency draft</cite></div></div></section>
      <section class="section section-alt"><div class="container">${sectionHeading('Latest knowledge','Education, resources, and chapter updates in one system.',c.sections[1][1])}<div class="grid grid-3"><article class="card"><div class="meta">Education</div><h3>Practical topics for complex facilities</h3><p>Compliance, life safety, water, emergency preparedness, operations, construction, leadership, and workforce development.</p></article><article class="card"><div class="meta">Resources</div><h3>A library built for quick retrieval</h3><p>Search and filter trusted links and approved documents by source, topic, format, and date.</p></article><article class="card"><div class="meta">News</div><h3>Chapter stories and industry context</h3><p>News, spotlights, advocacy, recaps, and continuing-education updates share one editorial system.</p></article></div></div></section>
      <div class="marquee" aria-label="Sponsor logo placeholders"><div class="marquee-track">${Array.from({length:12},(_,i)=>`<div class="logo-tile">Sponsor ${i%6+1}</div>`).join('')}</div></div>
      <section class="section"><div class="container"><div class="cta-band"><div class="eyebrow">Ready to connect?</div><h2>Help strengthen Nevada’s healthcare facilities community.</h2><p>Join the chapter, support its work, or sign up for event notifications using the existing approved external registration routes.</p><div class="hero-actions"><a class="btn btn-secondary" href="${joinUrl}">Join NEVShe</a><a class="btn btn-ghost" href="${local('sponsorship')}">Become a Sponsor</a></div></div></div></section>`;
  }

  function renderStandard(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="grid grid-3">${c.sections.map((s,i)=>`<article class="card"><div class="card-icon">${i+1}</div><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div></div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section section-alt"><div class="container">${sectionHeading('Page content system','A clear hierarchy for scanning, learning, and taking action.','Every repeated content type is designed for simple WordPress fields and automatic Elementor rendering.')}${featureCards(c.cards)}</div></section>
      <section class="section"><div class="container"><div class="cta-band"><div class="eyebrow">Next step</div><h2>${c.cta ? c.cta[0] : 'Continue exploring'}</h2><p>Final facts and language remain subject to NEVShe review. The layout, hierarchy, and reusable component direction are ready for design feedback.</p><div class="hero-actions"><a class="btn btn-secondary" href="${c.cta ? c.cta[1] : local('contact')}">${c.cta ? c.cta[0] : 'Contact NEVShe'} ${icon('arrow')}</a></div></div></div></section>`;
  }

  function renderDirectory(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="search-panel"><input type="search" aria-label="Search directory" placeholder="Search this directory"><button class="btn btn-primary" type="button">Search</button></div>${c.filters ? `<div class="filter-bar" style="margin-top:18px">${c.filters.map((f,i)=>`<button class="filter" type="button" aria-pressed="${i===0}">${f}</button>`).join('')}</div>` : ''}</div></section>
      <section class="section section-alt"><div class="container">${sectionHeading('Directory preview','Structured, consistent, and simple to maintain.','These intentionally unpopulated cards demonstrate hierarchy and empty-content handling without inventing names, employers, companies, or affiliations.')}${featureCards(c.cards,true)}</div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section"><div class="container"><div class="notice"><strong>Privacy and content rule:</strong> only approved public fields will appear. For the Member Directory, Phase One excludes personal email addresses, direct phone numbers, accounts, and private profiles.</div></div></section>`;
  }

  function renderArchive(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="search-panel"><input type="search" aria-label="Search ${c.name}" placeholder="Search ${c.name.toLowerCase()}"><button class="btn btn-primary" type="button">Search</button></div><div class="filter-bar" style="margin-top:18px">${c.filters.map((f,i)=>`<button class="filter" type="button" aria-pressed="${i===0}">${f}</button>`).join('')}</div></div></section>
      <section class="section section-alt" id="library"><div class="container">${sectionHeading('Archive system','Featured content plus a flexible, filterable grid.','Representative cards demonstrate the planned metadata and states. Actual events, resources, and news require approved source material.')}${featureCards(c.cards)}</div></section>
      <section class="section"><div class="container"><div class="system-state"><div><div class="code">0</div><h2>No matching results</h2><p>Helpful empty-state copy suggests clearing filters, trying another term, or browsing all content.</p><button class="btn btn-secondary" type="button">Clear filters</button></div></div></div></section>`;
  }

  function renderConversion(c) {
    return `${pageHero(c)}<section class="section"><div class="container">${sectionHeading('Proposed value framing','A concise route from interest to action.','Specific eligibility, levels, pricing, benefits, and financial terms will appear only after NEVShe supplies or confirms them.')}${featureCards(c.cards)}</div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section section-alt"><div class="container"><div class="split"><div><div class="eyebrow" style="color:var(--violet)">How it works</div><h2 style="color:var(--chapter);font-family:var(--serif);font-size:clamp(2.4rem,5vw,4.5rem);font-weight:500;margin:.3em 0">Simple outside. Simple inside.</h2><ul class="check-list"><li>Visitor reviews the approved membership or sponsorship information.</li><li>The primary action opens NEVShe’s existing Constant Contact registration flow.</li><li>The current downstream PayPal and manual administration workflow stays intact for Phase One.</li></ul></div><div class="card"><div class="meta">Existing external workflow</div><h3>Registration remains off-site</h3><p>This mockup does not imitate checkout or collect payment information. It clearly signals the handoff to the approved external destination.</p><div class="hero-actions"><a class="btn btn-primary" href="${joinUrl}">${c.cta[0]} ${icon('arrow')}</a></div></div></div></div></section>
      <section class="section"><div class="container">${sectionHeading('Questions','Frequently asked questions reduce uncertainty before registration.','Answers below distinguish verified workflow facts from details still awaiting client confirmation.')}<div class="faq">${c.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;
  }

  function renderContact(c) {
    return `${pageHero(c)}<section class="section section-alt"><div class="container"><div class="grid grid-3"><article class="card"><div class="card-icon">?</div><h3>General inquiry</h3><p>Questions about the organization, website, or chapter activity.</p></article><article class="card"><div class="card-icon">＋</div><h3>Membership or sponsorship</h3><p>Questions before using the separate external registration workflow.</p></article><article class="card"><div class="card-icon">◌</div><h3>Event notifications</h3><p>Join the confirmed Constant Contact notification list.</p><a class="card-link" href="${notifyUrl}">Get notifications →</a></article></div></div></section>
      <section class="section"><div class="container"><div class="grid grid-2"><div>${sectionHeading('Contact form','Designed for clear routing and accessible feedback.','Final recipient, response expectations, consent wording, and spam protection will be configured and tested on WordPress staging.')}</div><form class="card form-card" onsubmit="return false"><div class="form-grid"><div class="field"><label for="first">First name</label><input id="first" autocomplete="given-name"></div><div class="field"><label for="last">Last name</label><input id="last" autocomplete="family-name"></div><div class="field field-full"><label for="email">Email</label><input id="email" type="email" autocomplete="email"></div><div class="field field-full"><label for="topic">Topic</label><select id="topic"><option>Select a topic</option><option>General inquiry</option><option>Membership</option><option>Sponsorship</option><option>Events or education</option></select></div><div class="field field-full"><label for="message">Message</label><textarea id="message"></textarea></div></div><button class="btn btn-primary" type="submit" style="margin-top:18px">Submit inquiry</button><p class="form-note">Mockup only — this form does not submit or store information.</p></form></div></div></section>`;
  }

  function renderLegal(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="notice"><strong>Professional review required:</strong> this artifact approves layout and reading experience only. Placeholder or agency-draft legal language must not be published as final policy.</div><div class="legal-layout" style="margin-top:44px"><nav class="legal-nav">${c.sections.map((s,i)=>`<a href="#legal-${i+1}">${i+1}. ${s[0]}</a>`).join('')}</nav><article class="legal-copy">${c.sections.map((s,i)=>`<section id="legal-${i+1}"><h2>${s[0]}</h2><p>${s[1]}</p><p>Final approved content will be inserted here without changing the established typography, spacing, anchor navigation, or responsive behavior.</p></section>`).join('')}</article></div></div></section>`;
  }

  function renderSearch(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="search-panel"><input type="search" value="water management" aria-label="Search query"><button class="btn btn-primary" type="button">Search</button></div><p style="margin:22px 0 35px"><strong>Representative results</strong> for “water management”</p><div class="grid grid-2"><article class="card"><div class="meta">Education</div><h3>Water-management learning topic</h3><p>Sample result excerpt showing the search term in useful context.</p><span class="card-link">Open result →</span></article><article class="card"><div class="meta">Resources</div><h3>Water-management resource</h3><p>Sample result with source, format, and topic context.</p><span class="card-link">Open result →</span></article></div></div></section><section class="section section-alt"><div class="container"><div class="system-state"><div><div class="code">0</div><h2>No results for that search</h2><p>Try a shorter phrase, check spelling, or browse events, education, resources, and news.</p><a class="btn btn-secondary" href="${local('resources')}">Browse resources</a></div></div></div></section>`;
  }

  function render404(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="system-state"><div><div class="code">404</div><h2>Let’s find another route.</h2><p>This recovery pattern offers useful paths without blaming the visitor.</p><div class="hero-actions" style="justify-content:center"><a class="btn btn-primary" href="${local('home')}">Go home</a><a class="btn btn-secondary" href="${local('search-results')}">Search the site</a></div></div></div><div class="grid grid-3" style="margin-top:24px"><a class="card" href="${local('events')}" style="text-decoration:none"><h3>Events</h3><p>Find upcoming learning and connection opportunities.</p></a><a class="card" href="${local('resources')}" style="text-decoration:none"><h3>Resources</h3><p>Browse the professional resource library.</p></a><a class="card" href="${local('contact')}" style="text-decoration:none"><h3>Contact</h3><p>Ask NEVShe for help finding what you need.</p></a></div></div></section>`;
  }

  function renderPage() {
    const c = pageConfigs[id];
    if (!c) return;
    let main = '';
    if (c.type === 'home') main = renderHome(c);
    else if (c.type === 'standard') main = renderStandard(c);
    else if (c.type === 'directory') main = renderDirectory(c);
    else if (c.type === 'archive') main = renderArchive(c);
    else if (c.type === 'conversion') main = renderConversion(c);
    else if (c.type === 'contact') main = renderContact(c);
    else if (c.type === 'legal') main = renderLegal(c);
    else if (c.type === 'search') main = renderSearch(c);
    else if (c.type === '404') main = render404(c);
    document.getElementById('app').innerHTML = `${reviewBar(`${c.name} page`)}<main id="main">${main}</main>`;
  }

  const miniCards = (labels, directory=false) => `<div class="grid grid-3">${labels.map((x,i)=>directory?`<div class="card directory-card placeholder"><div class="avatar">${i+1}</div><div><div class="meta">${x[1]||'Field pending'}</div><h3>${x[0]}</h3><p>${x[2]||'Structured content preview.'}</p></div></div>`:`<div class="card"><div class="card-icon">${i+1}</div><div class="meta">${x[1]||'Reusable pattern'}</div><h3>${x[0]}</h3><p>${x[2]||'Template-controlled content and interaction.'}</p></div>`).join('')}</div>`;

  function templateContent(slug) {
    if (slug === 'global-header-desktop-navigation') return `<div class="preview-frame"><div class="preview-caption"><span>Desktop • 1240px content width</span><span>Sticky review shown separately</span></div><div class="mini-header"><img src="${root}assets/brand/nevshe-logo-provisional.png" alt="NEVShe"><nav><span>About</span><span>Events</span><span>Education</span><span>Membership</span><span>Resources</span><span>News</span></nav><span class="btn btn-small btn-primary">Join</span><span class="icon-button">${icon('search')}</span></div></div><div class="grid grid-3" style="margin-top:28px">${[['Current-page state','Underline and focus state','Navigation context remains obvious.'],['Utility actions','Join, Sponsor, Search','High-value actions stay distinct from the main menu.'],['Responsive handoff','Menu button below breakpoint','Header shifts cleanly without wrapping.']].map(x=>`<article class="card"><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></article>`).join('')}</div>`;
    if (slug === 'full-screen-mobile-navigation') return `<div class="grid grid-2"><div><div class="mobile-preview"><div style="display:flex;justify-content:space-between"><strong>NEVShe</strong><span>×</span></div><nav>${navItems.map(x=>`<span>${x[0]}</span>`).join('')}</nav><div class="grid grid-2"><span class="btn btn-secondary">Join</span><span class="btn btn-ghost">Sponsor</span></div></div></div><div><div class="section-heading"><div class="eyebrow" style="color:var(--violet)">Interaction notes</div><h2>Purposeful motion, complete access.</h2><p>The full-screen menu retains every primary route, presents Join and Sponsor prominently, locks background scrolling, returns focus when closed, and respects reduced-motion preferences.</p></div><ul class="check-list"><li>44-pixel minimum controls and obvious close action.</li><li>Keyboard and screen-reader state through expanded/hidden attributes.</li><li>Faster interface motion than ambient page motion.</li><li>Single-column actions on narrow phones.</li></ul></div></div>`;
    if (slug === 'global-footer') return `<div class="preview-frame"><div class="preview-caption"><span>Sitewide footer</span><span>Contact/social fields pending</span></div><div class="mini-footer"><div><strong>NEVShe</strong><p>Statewide healthcare facilities community.</p></div><div><b>Explore</b><p>About<br>Board<br>Events<br>News</p></div><div><b>Participate</b><p>Education<br>Membership<br>Sponsorship<br>Resources</p></div><div><b>Organization</b><p>Contact<br>Privacy<br>Terms<br>Accessibility</p></div></div></div><div class="notice" style="margin-top:28px">The notification-list CTA uses the confirmed Constant Contact destination. General email, social profiles, and final legal wording remain pending.</div>`;
    if (slug === 'interior-page-hero') return `<div class="grid grid-3"><article class="card" style="min-height:300px;color:white;background:linear-gradient(135deg,var(--chapter),var(--violet))"><div class="meta" style="color:white">Gradient-led</div><h3 style="color:white;font-size:2.2rem">Legal and system pages</h3><p>No editorial image required.</p></article><article class="card" style="min-height:300px;color:white;background:linear-gradient(90deg,rgba(41,52,146,.95),rgba(44,12,170,.5)),url('${img('rural-hvac-operations-v1.png')}') center/cover"><div class="meta" style="color:white">Image-led</div><h3 style="color:white;font-size:2.2rem">Core interior pages</h3><p>Unique editorial imagery with readable overlay.</p></article><article class="card" style="min-height:300px;background:var(--ice)"><div class="meta">Compact</div><h3 style="font-size:2.2rem">Archives and utilities</h3><p>Breadcrumbs, authority label, purpose, CTA, and optional filter introduction.</p></article></div>`;
    if (slug === 'event-archive-card-single') return `<div class="filter-bar">${['All','Education','Networking','Past events'].map((x,i)=>`<button class="filter" aria-pressed="${i===0}">${x}</button>`).join('')}</div>${miniCards([['Featured event','Date pending','High-emphasis summary and registration state.'],['Standard event card','Date pending','Format, location, CE/CEC, and action.'],['Past event recap','Resources available','Presentation, recording, gallery, and related links.']])}<div class="card form-card" style="margin-top:28px"><div class="meta">Single event template</div><h3 style="font-size:2.3rem">Representative event title</h3><div class="grid grid-3"><p><b>Date / time</b><br>Pending</p><p><b>Format / venue</b><br>Pending</p><p><b>Registration</b><br>Per-event external URL</p></div><hr style="border:0;border-top:1px solid var(--line)"><p>Description, learning objectives, CE/CEC hours, pricing when applicable, agenda, speakers, sponsor recognition, map, calendar actions, and post-event resources use structured fields.</p></div>`;
    if (slug === 'sponsor-directory-card-marquee') return `<div class="marquee"><div class="marquee-track">${Array.from({length:12},(_,i)=>`<div class="logo-tile">Sponsor ${i%6+1}</div>`).join('')}</div></div><div style="margin-top:30px">${miniCards([['Featured sponsor','Level pending','Logo, company name, website, and approved level.'],['Sponsor card','Level pending','Consistent display with optional featured status.'],['Become a Sponsor','External registration','Contextual CTA uses the confirmed workflow.']])}</div>`;
    if (slug === 'resource-archive-card-single') return `<div class="search-panel"><input placeholder="Search resources"><button class="btn btn-primary">Search</button></div><div class="filter-bar" style="margin-top:14px">${['All','Codes','Water','Sustainability','Emergency'].map((x,i)=>`<button class="filter" aria-pressed="${i===0}">${x}</button>`).join('')}</div>${miniCards([['Resource title','Approved source','Topic • format • publication date'],['External guidance','External link','Source clearly identified'],['Downloadable document','PDF or file','File type and size shown before opening']])}`;
    if (slug === 'board-directory-card') return `${miniCards([['President','Employer pending','Biography preview and optional committee data.'],['Vice President','Employer pending','Headshot fallback supports incomplete assets.'],['Director','Employer pending','Display order set through structured fields.']],true)}<div class="notice" style="margin-top:28px">Names, roles, employers, biographies, headshots, and committee assignments are authoritative client facts and remain intentionally unfilled.</div>`;
    if (slug === 'member-organization-directory-card') return `<div class="filter-bar">${['All','Healthcare provider','Engineering','Construction','Services'].map((x,i)=>`<button class="filter" aria-pressed="${i===0}">${x}</button>`).join('')}</div>${miniCards([['Member organization','Industry pending','Logo and public website only.'],['Member organization','Industry pending','Display requires client-approved data/consent.'],['Member organization','Industry pending','No individual contact information.']],true)}`;
    if (slug === 'news-archive-card-single-post') return `${miniCards([['Featured chapter story','Chapter News','Hero card with image, excerpt, date, and category.'],['Industry update','Industry Updates','Standard archive card.'],['Event recap','Event Recap','Related event and resource links.']])}<article class="card form-card" style="margin-top:28px"><div class="meta">Single post typography</div><h3 style="font-size:2.5rem">Representative article headline</h3><p style="font-size:1.15rem">A concise agency-draft standfirst introduces the story. Standard WordPress posts supply title, excerpt, author rule, categories, featured image, body, and SEO fields.</p><div class="social-row"><b>Share</b><a href="#">in</a><a href="#">f</a><a href="#">↗</a></div></article>`;
    if (slug === 'search-no-results-404') return `<div class="grid grid-3"><div class="system-state"><div><div class="code" style="font-size:5rem">3</div><h2 style="font-size:2rem">Search results</h2><p>Query, count, excerpts, content types.</p></div></div><div class="system-state"><div><div class="code" style="font-size:5rem">0</div><h2 style="font-size:2rem">No results</h2><p>Recovery suggestions and clear filters.</p></div></div><div class="system-state"><div><div class="code" style="font-size:5rem">404</div><h2 style="font-size:2rem">Page not found</h2><p>Home, search, events, resources, contact.</p></div></div></div>`;
    if (slug === 'contact-form-notification-routing') return `<div class="grid grid-2"><form class="card form-card" onsubmit="return false"><div class="form-grid"><div class="field"><label>Name</label><input></div><div class="field"><label>Email</label><input type="email"></div><div class="field field-full"><label>Topic</label><select><option>General inquiry</option><option>Membership</option><option>Sponsorship</option><option>Events / education</option></select></div><div class="field field-full"><label>Message</label><textarea></textarea></div></div><button class="btn btn-primary" style="margin-top:16px">Submit</button><p class="form-note">Mockup only — no submission.</p></form><div>${sectionHeading('Routing model','One form, clear intent, separate external lists.','The contact form routes by approved topic/recipient. Join/Sponsor and event-notification calls to action remain separate Constant Contact destinations.')}<ul class="check-list"><li>Labels, keyboard order, errors, confirmation, and consent.</li><li>Spam protection and authenticated delivery tested on staging.</li><li>No payment or membership data collected by this form.</li><li>Final recipient and retention details feed the Privacy Policy.</li></ul></div></div>`;
    if (slug === 'global-component-library') return componentLibrary();
    return '<p>Template preview.</p>';
  }

  function componentLibrary() {
    return `<div class="component-index">
      <div class="component-sample wide">${sectionHeading('01 • Heroes & orientation','Statewide hero, interior hero, breadcrumbs, section heading.','The system scales from cinematic landing moments to compact utility pages.')}</div>
      <div class="component-sample"><div class="stats"><div class="stat"><strong>60+</strong><span>members</span></div><div class="stat"><strong>1</strong><span>statewide chapter</span></div></div><p class="spec-label" style="margin-top:14px">Animated statistics</p></div>
      <div class="component-sample"><div class="card"><div class="meta">Featured event</div><h3>Representative event</h3><p>Date, place, learning details, and registration state.</p><div class="card-link">Review event →</div></div><p class="spec-label" style="margin-top:14px">Featured event + event card</p></div>
      <div class="component-sample wide"><div class="marquee"><div class="marquee-track">${Array.from({length:10},(_,i)=>`<div class="logo-tile">Sponsor ${i%5+1}</div>`).join('')}</div></div><p class="spec-label" style="margin-top:14px">Sponsor-logo marquee + sponsor-level grid</p></div>
      <div class="component-sample wide">${miniCards([['Member card','Organization data','Public organization fields only.'],['Board-member card','Leadership data','Role, employer, bio, headshot.'],['Resource card','Source + format','Link or document metadata.'],['Blog card','Category + date','Title, excerpt, image, author rule.']])}<p class="spec-label" style="margin-top:14px">Recurring content cards</p></div>
      <div class="component-sample"><div class="faq"><details open><summary>FAQ accordion question</summary><p>Answer content opens natively and remains keyboard accessible.</p></details><details><summary>Another question</summary><p>Additional answer.</p></details></div><p class="spec-label" style="margin-top:14px">FAQ accordion</p></div>
      <div class="component-sample"><div class="quote" style="padding:28px"><blockquote style="font-size:1.7rem">“A statewide community connected by the work behind care.”</blockquote><cite>Quote / testimonial pattern</cite></div><p class="spec-label" style="margin-top:14px">Member quote</p></div>
      <div class="component-sample wide"><div class="grid grid-2"><div style="min-height:280px;border-radius:20px;background:url('${img('tahoe-water-systems-v1.png')}') center/cover"></div><div style="align-self:center">${sectionHeading('Image + text split','Complex subjects, made clear.','Used for ASHE affiliation, membership, sponsorship, education, statewide imagery transitions, and content-rich calls to action.')}</div></div><p class="spec-label" style="margin-top:14px">Image-and-text split + ASHE affiliation block</p></div>
      <div class="component-sample wide"><div class="cta-band"><div class="eyebrow">Call to action</div><h2>Move from understanding to participation.</h2><p>Membership, sponsorship, newsletter, and contact variants share one familiar action system.</p><div class="hero-actions"><span class="btn btn-secondary">Primary action</span><span class="btn btn-ghost">Secondary action</span></div></div><p class="spec-label" style="margin-top:14px">Full-width animated CTA + membership/sponsorship CTAs</p></div>
      <div class="component-sample"><div class="form-grid"><div class="field field-full"><label>Email notifications</label><input placeholder="you@example.com"></div><button class="btn btn-primary">Sign up</button></div><p class="spec-label" style="margin-top:14px">Newsletter signup</p></div>
      <div class="component-sample"><div class="notice"><strong>Contact strip</strong><br>Clear contact route and response context.</div><div class="social-row" style="margin-top:18px"><b>Share</b><a href="#">in</a><a href="#">f</a><a href="#">↗</a></div><p class="spec-label" style="margin-top:14px">Contact strip + social-sharing row</p></div>
    </div>`;
  }

  function renderTemplate() {
    const cfg = templateConfigs[id];
    if (!cfg) return;
    document.getElementById('app').innerHTML = `${reviewBar(`${cfg[0]} template`)}${header('')}<main id="main"><section class="template-hero"><div class="container"><span class="draft-chip">Reusable template • v1.1</span><div class="eyebrow" style="color:var(--violet);margin-top:22px">${cfg[1]}</div><h1>${cfg[0]}</h1><p>${cfg[2]}</p></div></section><section class="section"><div class="container">${templateContent(id)}</div></section><section class="section section-alt"><div class="container"><div class="notice"><strong>Implementation intent:</strong> this review artifact defines a reusable Elementor Theme Builder, loop, section, or integration pattern. Routine WordPress editors populate structured fields; they do not redesign layouts, responsive behavior, or animation.</div></div></section></main>${footer()}`;
  }

  function renderHub() {
    const pages = Object.entries(pageConfigs).sort((a,b)=>a[1].n-b[1].n);
    const templates = Object.entries(templateConfigs);
    const pageCards = pages.map(([slug,c])=>`<a class="review-card" href="pages/${slug}-v1.1/"><span class="number">${String(c.n).padStart(2,'0')}</span><h3>${c.name}</h3><p>${c.intro}</p><footer><span>Page mockup</span><span>v1.1 →</span></footer></a>`).join('');
    const templateCards = templates.map(([slug,c],i)=>`<a class="review-card template" href="templates/${slug}-v1.1/"><span class="number">T${String(i+1).padStart(2,'0')}</span><h3>${c[0]}</h3><p>${c[2]}</p><footer><span>${c[1]}</span><span>v1.1 →</span></footer></a>`).join('');
    document.getElementById('app').innerHTML = `<div class="hub-shell">${reviewBar('Complete website draft')}<main id="main"><section class="hub-hero"><div class="container"><span class="draft-chip">Full review set • 2026-08-30</span><div class="eyebrow" style="color:var(--violet);margin-top:24px">Statewide Nevada • Website design review</div><h1>A draft of every launch page, template, and global component.</h1><p>Review the overall system first, then open individual artifacts for page-specific hierarchy, agency-draft copy, structured-content states, mobile behavior, and calls to action. All missing names, dates, benefits, prices, legal language, and other authoritative facts remain visibly pending.</p><div class="hub-summary"><span>17 page mockups</span><span>13 reusable-system reviews</span><span>All current artifacts v1.1</span><span>Responsive + reduced motion</span></div><div class="hero-actions"><a class="btn btn-primary" href="pages/home-v1.1/">Start with Home ${icon('arrow')}</a><a class="btn btn-secondary" href="templates/global-component-library-v1.1/">Review component library</a><a class="btn btn-secondary" href="brand-kit/v2/">Brand Foundation v2</a></div></div></section><section class="section"><div class="container">${sectionHeading('Launch pages','Every page in the approved Phase One inventory.','Each page owns its independent v1.1 sequence and current review path.')}<div class="review-grid">${pageCards}</div></div></section><section class="section section-alt"><div class="container">${sectionHeading('Templates & global systems','Reusable patterns that keep WordPress simple and consistent.','These artifacts show the systems behind recurring content, navigation, footer, forms, search, empty states, and global components.')}<div class="review-grid">${templateCards}</div></div></section><section class="section"><div class="container"><div class="cta-band"><div class="eyebrow">Review guidance</div><h2>Focus first on structure, tone, visual rhythm, and reusable behavior.</h2><p>Factual fields marked pending are intentionally not invented. Layout feedback, copy feedback, imagery feedback, and functional notes can be consolidated into the next independent page/template revisions.</p></div></div></section></main></div>`;
  }

  function initInteractions() {
    const open = document.querySelector('.menu-button');
    const close = document.querySelector('.menu-close');
    const menu = document.querySelector('.mobile-menu');
    if (open && close && menu) {
      const setMenu = (state) => { open.setAttribute('aria-expanded', String(state)); menu.setAttribute('aria-hidden', String(!state)); body.classList.toggle('menu-open', state); if (state) close.focus(); else open.focus(); };
      open.addEventListener('click', () => setMenu(true));
      close.addEventListener('click', () => setMenu(false));
      menu.addEventListener('click', (e) => { if (e.target === menu) setMenu(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.getAttribute('aria-hidden') === 'false') setMenu(false); });
    }
    document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
      const bar = button.closest('.filter-bar');
      if (bar) bar.querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-pressed','false'));
      button.setAttribute('aria-pressed','true');
    }));
  }

  if (kind === 'hub') renderHub();
  if (kind === 'page') renderPage();
  if (kind === 'template') renderTemplate();
  initInteractions();
})();
