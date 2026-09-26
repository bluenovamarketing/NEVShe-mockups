/* Visitor-facing temporary News and Resources content for Todd review. */
(() => {
  'use strict';

  const body = document.body;
  if (body.dataset.version !== 'v1.21') return;
  const id = body.dataset.artifactId;
  if (id !== 'resources' && id !== 'news') return;

  const assets = '../../assets/images/';
  const resourceItems = [
    {
      category: 'Emergency preparedness',
      meta: 'Planning guide · 8-minute read',
      title: 'Build a practical healthcare facility emergency plan',
      text: 'A working outline for clarifying responsibilities, communication paths, essential systems, vendor contacts, and the first decisions teams need during a disruption.',
      image: `${assets}generated-v1/infrastructure-safety-v1.png`
    },
    {
      category: 'Water management',
      meta: 'Review worksheet · Downloadable PDF',
      title: 'Water management program review worksheet',
      text: 'Use this draft worksheet to organize program ownership, control measures, documentation, response steps, and follow-up questions before the next team review.',
      image: `${assets}generated-v1/tahoe-water-systems-v1.png`
    },
    {
      category: 'Facility operations',
      meta: 'Operations tool · 6-minute read',
      title: 'Prioritize preventive maintenance conversations',
      text: 'A simple framework for discussing risk, critical equipment, recurring failures, staffing constraints, and the work that should move to the top of the plan.',
      image: `${assets}generated-v1/rural-hvac-operations-v1.png`
    },
    {
      category: 'Professional development',
      meta: 'Team template · Downloadable document',
      title: 'Turn an education session into an action plan',
      text: 'Capture the useful ideas, owners, next steps, and internal conversations that can help a learning session continue creating value after the event.',
      image: `${assets}generated-v5/education-resource-library-v1.png`
    },
    {
      category: 'Leadership',
      meta: 'Conversation guide · 7-minute read',
      title: 'Prepare a clear facilities leadership handoff',
      text: 'Organize current risks, active projects, important contacts, unresolved decisions, and near-term deadlines so responsibility can transfer without losing context.',
      image: `${assets}generated-v2/board-leadership-planning-v2.png`
    },
    {
      category: 'Energy and sustainability',
      meta: 'Discussion guide · 5-minute read',
      title: 'Start an energy-efficiency conversation with useful questions',
      text: 'A practical set of prompts for connecting energy opportunities with patient-care priorities, operational reliability, available data, and realistic project constraints.',
      image: `${assets}generated-v3/resources-professional-library-v3.png`
    }
  ];

  const newsItems = [
    {
      category: 'Chapter news',
      meta: 'September 2026 · 4-minute read',
      title: 'NEVShe strengthens a statewide community for healthcare facilities professionals',
      text: 'The chapter is creating more ways for facility managers, engineers, technicians, healthcare leaders, and industry partners to learn from one another across Nevada.',
      image: `${assets}generated-v3/news-chapter-editorial-v3.png`
    },
    {
      category: 'Education',
      meta: 'September 2026 · 3-minute read',
      title: 'What members can expect from upcoming NEVShe education',
      text: 'Future program pages will bring dates, speakers, learning objectives, formats, continuing-education details, and registration information together in one place.',
      image: `${assets}generated-v1/education-collaboration-v1.png`
    },
    {
      category: 'Professional community',
      meta: 'September 2026 · 5-minute read',
      title: 'Why peer connection matters in healthcare facility operations',
      text: 'Shared experience can help professionals compare approaches, ask better questions, and build relationships that continue long after a single program ends.',
      image: `${assets}generated-v6/membership-professional-network-v1.png`
    },
    {
      category: 'Resources',
      meta: 'September 2026 · 3-minute read',
      title: 'A new resource library will keep useful information within reach',
      text: 'The planned library will give approved presentations, worksheets, recordings, chapter materials, and trusted references a searchable home between events.',
      image: `${assets}generated-v5/education-resource-library-v1.png`
    },
    {
      category: 'Leadership',
      meta: 'September 2026 · 4-minute read',
      title: 'Meet the professionals helping guide NEVShe',
      text: 'Board profiles introduce the experience and professional context behind the people supporting chapter education, connection, and statewide participation.',
      image: `${assets}generated-v2/board-leadership-planning-v2.png`
    },
    {
      category: 'Sponsorship',
      meta: 'September 2026 · 3-minute read',
      title: 'Sponsor recognition connected to professional value',
      text: 'NEVShe sponsorship is designed to place participating organizations alongside relevant programs, resources, and relationships within the healthcare facilities community.',
      image: `${assets}generated-v3/sponsorship-community-support-v3.png`
    }
  ];

  const addReviewBanner = (label) => {
    const header = document.querySelector('.site-header');
    const main = document.querySelector('main');
    if ((!header && !main) || document.querySelector('.draft-content-banner')) return;
    const banner = document.createElement('aside');
    banner.className = 'draft-content-banner';
    banner.setAttribute('role', 'note');
    banner.innerHTML = `<strong>Content mockup:</strong> ${label} are temporary Blue Nova agency drafts for layout and content-direction review. They are not published NEVShe records.`;
    (header || main).insertAdjacentElement('beforebegin', banner);
  };

  const cardMarkup = (item, index, kind) => `
    <article class="visitor-content-card" data-category="${item.category.toLowerCase()}" data-search="${`${item.category} ${item.title} ${item.text}`.toLowerCase()}">
      <img src="${item.image}" alt="" loading="lazy">
      <div class="visitor-content-card-copy">
        <div class="meta">${item.category}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="visitor-content-card-footer"><span>${item.meta}</span><a href="#${kind}-${index + 1}">${kind === 'news' ? 'Read article' : 'View resource'} →</a></div>
      </div>
    </article>`;

  const browserMarkup = (kind, items) => {
    const isNews = kind === 'news';
    const categories = ['All', ...new Set(items.map(item => item.category))];
    return `
      <div class="section-heading visitor-content-heading">
        <div class="eyebrow" style="color:var(--violet)">${isNews ? 'Latest NEVShe news' : 'Resource library'}</div>
        <h2>${isNews ? 'Stories from Nevada’s healthcare facilities community.' : 'Tools for planning, operations, and professional learning.'}</h2>
        <p>${isNews ? 'Explore chapter activity, education, leadership, resources, and professional perspectives.' : 'Find practical guides, worksheets, and professional-development material by topic.'}</p>
      </div>
      <div class="visitor-content-tools">
        <div class="search-panel"><input type="search" aria-label="Search ${isNews ? 'news' : 'resources'}" placeholder="Search ${isNews ? 'stories' : 'resources'}"><button class="btn btn-primary" type="button">Search</button></div>
        <div class="filter-bar" aria-label="Filter ${isNews ? 'news' : 'resources'}">${categories.map((category, index) => `<button class="filter" type="button" data-filter="${category.toLowerCase()}" aria-pressed="${index === 0}">${category}</button>`).join('')}</div>
      </div>
      <div class="visitor-content-grid ${isNews ? 'visitor-news-grid' : 'visitor-resource-grid'}">${items.map((item, index) => cardMarkup(item, index, kind)).join('')}</div>
      <p class="visitor-content-empty" hidden>No matching ${isNews ? 'stories' : 'resources'} were found. Try another search or category.</p>`;
  };

  const activateBrowser = (container) => {
    const input = container.querySelector('input[type="search"]');
    const search = container.querySelector('.search-panel button');
    const filters = [...container.querySelectorAll('[data-filter]')];
    const cards = [...container.querySelectorAll('.visitor-content-card')];
    const empty = container.querySelector('.visitor-content-empty');
    let active = 'all';

    const apply = () => {
      const query = input.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const categoryMatch = active === 'all' || card.dataset.category === active;
        const queryMatch = !query || card.dataset.search.includes(query);
        card.hidden = !(categoryMatch && queryMatch);
        if (!card.hidden) visible += 1;
      });
      empty.hidden = visible !== 0;
    };

    filters.forEach(filter => filter.addEventListener('click', () => {
      active = filter.dataset.filter;
      filters.forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
      apply();
    }));
    search.addEventListener('click', apply);
    input.addEventListener('input', apply);
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        apply();
      }
    });
    container.querySelectorAll('.visitor-content-card a').forEach(link => link.addEventListener('click', event => event.preventDefault()));
  };

  if (id === 'resources') {
    addReviewBanner('The six resource examples below');
    const browse = [...document.querySelectorAll('.interior-hero a.btn')].find(link => link.textContent.includes('Browse resources'));
    if (browse) browse.href = '#library';
    const intro = document.querySelector('.resource-intro-copy');
    if (intro) intro.innerHTML = `
      <div class="eyebrow" style="color:var(--violet)">A practical professional library</div>
      <h2>Find useful guidance for the work behind healthcare.</h2>
      <p>Explore planning guides, worksheets, operational tools, and professional-learning material created to help facility teams organize conversations and carry useful ideas into their work.</p>
      <p>Every resource identifies its topic and format before it opens, so visitors can quickly decide whether it fits the question in front of them.</p>`;
    const container = document.querySelector('.resource-browser-section .container');
    if (container) {
      container.innerHTML = browserMarkup('resources', resourceItems);
      activateBrowser(container);
    }
  }

  if (id === 'news') {
    addReviewBanner('The six article examples below');
    const container = document.querySelector('section#library .container');
    if (container) {
      container.innerHTML = `${browserMarkup('news', newsItems)}<div class="news-preview-action"><a class="btn btn-primary" href="https://lp.constantcontactpages.com/sl/As6eGyf">Get notifications →</a></div>`;
      activateBrowser(container);
    }
  }
})();
