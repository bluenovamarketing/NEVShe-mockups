(() => {
  'use strict';

  const body = document.body;
  if (body.dataset.artifactId !== 'member-directory' || body.dataset.version !== 'v1.22') return;

  const importedMembers = [{"name":"Ed Ackerman","organization":"HHS Government services","jobTitle":"CMM","slug":"ed-ackerman"},{"name":"Sam Adams","organization":"Carson Tahoe Health","jobTitle":"Maintenance technician","slug":"sam-adams"},{"name":"James Alfheim","organization":"REMEDI8","jobTitle":"Account Executive","slug":"james-alfheim"},{"name":"Steve Arcouette","organization":"Arc Generator Service","jobTitle":"CEO","slug":"steve-arcouette"},{"name":"John Bigda","organization":"Ainsworth Associates Mechanical Engineers","jobTitle":"Senior Engineer","slug":"john-bigda"},{"name":"Aaron Brooks","organization":"Carson Tahoe Health","jobTitle":"Life Safety and Environment of Care Manager","slug":"aaron-brooks"},{"name":"Rommel Cabras","organization":"Common Spirit","jobTitle":"Facility Manager","slug":"rommel-cabras"},{"name":"Johnny Calimlim","organization":"Dignity Health","jobTitle":"Tradesman","slug":"johnny-calimlim"},{"name":"Matthew Caruso","organization":"SR Construction, Inc.","jobTitle":"Project Manager","slug":"matthew-caruso"},{"name":"Kelley Collins","organization":"Interface Flooring/Nora Rubber","jobTitle":"Las Vegas Representative","slug":"kelley-collins"},{"name":"David Colucci","organization":"Roseman University","jobTitle":"Director of Facility Management","slug":"david-colucci"},{"name":"Nelson Corros","organization":"St Rose Dominican Hospital Delima Campus","jobTitle":"Tradesman","slug":"nelson-corros"},{"name":"Amanda Cosenza","organization":"Aquatools","jobTitle":"Regional Sales Manager","slug":"amanda-cosenza"},{"name":"Ben Cossette","organization":"Universal Health Services","jobTitle":"Regional Director","slug":"ben-cossette"},{"name":"Nelson Cumana","organization":"Affordable Concepts, Inc.","jobTitle":"Vice President","slug":"nelson-cumana"},{"name":"Ricardo Dabu","organization":"Centennial Hills Hospital Medical Center","jobTitle":"Assistant Director of Plant Operations","slug":"ricardo-dabu"},{"name":"Derek Davidson","organization":"Airtec Gases","jobTitle":"Northern Nevada Sales Manager","slug":"derek-davidson"},{"name":"Eunice Diestro","organization":"SR Construction, Inc.","jobTitle":"Project Manager","slug":"eunice-diestro"},{"name":"Kelly Dixon","organization":"BELFOR Property Restoration","jobTitle":"Account Manager","slug":"kelly-dixon"},{"name":"Illya Esposito","organization":"UHS","jobTitle":"Facility Regional Director","slug":"illya-esposito"},{"name":"Mark Feldman","organization":"Silikalamerica.com","jobTitle":"Director","slug":"mark-feldman"},{"name":"Sarah Felix","organization":"Havasu regional medical center","jobTitle":"Facility coordinator","slug":"sarah-felix"},{"name":"Stephanie Fosmo","organization":"Harris Las Vegas","jobTitle":"Senior Solutions Consultant","slug":"stephanie-fosmo"},{"name":"Gerardo Garcia","organization":"Common Spirit","jobTitle":"Facility Manager","slug":"gerardo-garcia"},{"name":"Joseph Garcia","organization":"SR Construction, Inc.","jobTitle":"Project Executive","slug":"joseph-garcia"},{"name":"Stacey GIomi","organization":"Nevada Health Centers","jobTitle":"Director of Facilities, Security, Emergency Preparedness","slug":"stacey-giomi"},{"name":"Morgan Goff","organization":"Ainsworth Associates Mechanical Engineers","jobTitle":"Mechanical Engineer","slug":"morgan-goff"},{"name":"Roger Gravelle","organization":"Ainsworth Associates Mechanical Engineers","jobTitle":"Principal","slug":"roger-gravelle"},{"name":"Daniel Gurevitz","organization":"Hepacart","jobTitle":"Business Development Manager - Western United States","slug":"daniel-gurevitz"},{"name":"Alison Hall","organization":"Ainsworth Associates Mechanical Engineers","jobTitle":"Principal","slug":"alison-hall"},{"name":"Jason Harris","organization":"Kodiak Roofing","jobTitle":"","slug":"jason-harris"},{"name":"Edgar Herrera","organization":"Las Vegas Door Service LLC","jobTitle":"Owner","slug":"edgar-herrera"},{"name":"Clifford Huff","organization":"Dignity Health St. Rose Dominican Hospital-RDL","jobTitle":"Tradesman","slug":"clifford-huff"},{"name":"Narsimha Irrinki","organization":"Santa Clara Valley Healthcare","jobTitle":"Enterprise Director of Facilities","slug":"narsimha-irrinki"},{"name":"Ratko Jefic","organization":"Siemens Industry, Inc.","jobTitle":"Sales Executive","slug":"ratko-jefic"},{"name":"Pat Johnson","organization":"The PENTA Building Group","jobTitle":"Precon Manager","slug":"pat-johnson"},{"name":"Roy Jones","organization":"Arc Generator Service","jobTitle":"Manager","slug":"roy-jones"},{"name":"Kirk Kaiser","organization":"Smart Care Equipment Solutions","jobTitle":"District Sales Manager","slug":"kirk-kaiser"},{"name":"William Kenton","organization":"Department of Veterans Affairs","jobTitle":"Healthcare Engineer","slug":"william-kenton"},{"name":"Anthony Kleinfieldt","organization":"Carson Tahoe Health","jobTitle":"Lead Maintenance technician","slug":"anthony-kleinfieldt"},{"name":"Brian Lerkins","organization":"Zurn Elkay Water Solutions","jobTitle":"Business Development Manager, A|E Specifications","slug":"brian-lerkins"},{"name":"Dave Lockhart","organization":"Kaiser Permanente","jobTitle":"Executive Director","slug":"dave-lockhart"},{"name":"Bret Loughridge","organization":"SR Construction, Inc.","jobTitle":"President","slug":"bret-loughridge"},{"name":"Andy Lyle","organization":"Siemens","jobTitle":"Account Manager","slug":"andy-lyle"},{"name":"Mark Martinez","organization":"Ainsworth Associates Mechanical Engineers","jobTitle":"Mechanical Designer","slug":"mark-martinez"},{"name":"Troy Mcjunkin","organization":"Carson Tahoe Health","jobTitle":"Maintenance technician","slug":"troy-mcjunkin"},{"name":"Manny Mendez","organization":"Las Ventanas","jobTitle":"Director of Buildings & Grounds","slug":"manny-mendez"},{"name":"Mario Mendez","organization":"Centennial Hills Hospital Medical Center","jobTitle":"Director of Facilities","slug":"mario-mendez"},{"name":"Kelly Musler","organization":"Commercial Builders Inc","jobTitle":"President","slug":"kelly-musler"},{"name":"Emmett Nash","organization":"Kodiak Roofing","jobTitle":"","slug":"emmett-nash"},{"name":"Mike Nash","organization":"Kodiak Roofing","jobTitle":"Operations Manager","slug":"mike-nash"},{"name":"Cody Neally","organization":"BELFOR Property Restoration","jobTitle":"General Manager","slug":"cody-neally"},{"name":"Jeff Norman","organization":"Alliance Environmental","jobTitle":"Sales Manager","slug":"jeff-norman"},{"name":"Angel Pena","organization":"Neuro Restorative","jobTitle":"emergency Management/ Maintenance","slug":"angel-pena"},{"name":"Dan Perham","organization":"Southland Industries","jobTitle":"Service Account Manager","slug":"dan-perham"},{"name":"Bryson Peterson","organization":"Mountain Medical Gas, LLC","jobTitle":"Business Owner","slug":"bryson-peterson"},{"name":"Austin Phillips","organization":"Kodiak Roofing","jobTitle":"","slug":"austin-phillips"},{"name":"Ray Poyaoan","organization":"CommonSpirit Health","jobTitle":"Facility Manager","slug":"ray-poyaoan"},{"name":"Daniel Prado","organization":"FACS","jobTitle":"Assistant Director","slug":"daniel-prado"},{"name":"Tom Pride","organization":"Valley Health Specialty Hospital","jobTitle":"Director of Plant Operations","slug":"tom-pride"},{"name":"Jason Rader","organization":"BELFOR Property Restoration","jobTitle":"General Manager","slug":"jason-rader"},{"name":"Zachary Ramos","organization":"FACS","jobTitle":"Project Manager","slug":"zachary-ramos"},{"name":"Lynda Rowin","organization":"Alliance Environmental Group","jobTitle":"Key Account Manager","slug":"lynda-rowin"},{"name":"Clint Schreiner","organization":"Dignity Health","jobTitle":"Tradesman","slug":"clint-schreiner"},{"name":"Ernest Sinaly","organization":"Spring Valley Hospital","jobTitle":"Director of Plant Operations/Facilities/Environment of Care","slug":"ernest-sinaly"},{"name":"Kimberly Smith","organization":"Ask Product Solutions","jobTitle":"Product Business Manager","slug":"kimberly-smith"},{"name":"Chris Soares","organization":"CBRE","jobTitle":"Sr. Facilities manager","slug":"chris-soares"},{"name":"Kawika Soares","organization":"CBRE","jobTitle":"Building Engineer","slug":"kawika-soares"},{"name":"Mark Stanek","organization":"DM Stanek Corporation","jobTitle":"President","slug":"mark-stanek"},{"name":"Nicholas Strom","organization":"Cure 4 The Kids","jobTitle":"Facilities Manager","slug":"nicholas-strom"},{"name":"Shane Sullivan","organization":"www.nephros.com","jobTitle":"VP of Sales","slug":"shane-sullivan"},{"name":"Christian Tercero","organization":"Carson Tahoe Health","jobTitle":"Maintenance technician","slug":"christian-tercero"},{"name":"Dylan Thran","organization":"Arc Generator Service","jobTitle":"Technician","slug":"dylan-thran"},{"name":"Wesley Ulloa","organization":"FACS","jobTitle":"Project Manager","slug":"wesley-ulloa"},{"name":"Susy Vasquez","organization":"BluSky Restoration Contractors","jobTitle":"Business Development Manager","slug":"susy-vasquez"},{"name":"Janice Vaughan","organization":"Bosch Building Technologies North America","jobTitle":"Outside Sales Executive","slug":"janice-vaughan"},{"name":"Van Viles","organization":"Valley Health Specialty Hospital","jobTitle":"Plant of Operations Supervisor","slug":"van-viles"},{"name":"Roger Villalta","organization":"Pyro combustion","jobTitle":"Outside Sales","slug":"roger-villalta"},{"name":"Andi Wade","organization":"Precept Environmental","jobTitle":"Regional Manager","slug":"andi-wade"},{"name":"Matt Wieland","organization":"Ainsworth Associates Mechanical Engineers","jobTitle":"Engineer","slug":"matt-wieland"},{"name":"Scott Wismer","organization":"West-com & TV INC","jobTitle":"Account Executive","slug":"scott-wismer"},{"name":"Ian Zavala","organization":"STARC Systems","jobTitle":"Regional Sales Manager","slug":"ian-zavala"}];

  const additionalProfiles = [
    {name:'Ricardo Barrera', organization:'CommonSpirit Health', jobTitle:'Nevada Market Director FM Operations', slug:'ricardo-barrera', image:'../../assets/images/client-supplied/ricardo-barrera.jpg'},
    {name:'Hans Gottschaldt', organization:'ACCO Engineered Systems', jobTitle:'Regional Sales Executive', slug:'hans-gottschaldt', image:'../../assets/images/client-supplied/hans-gottschaldt.jpeg'},
    {name:'Rich Park', organization:'JLL', jobTitle:'Director, Healthcare Solutions', slug:'rich-park', image:'../../assets/images/client-supplied/rich-park.jpeg'},
    {name:'Dave Lamb', organization:'NEVShe Board of Directors', jobTitle:'Treasurer', slug:'dave-lamb'},
    {name:'Ismael Lopez-Ferratt', organization:'Specified Technologies Inc.', jobTitle:'Strategic Account Manager, Healthcare – Southwest', slug:'ismael-lopez-ferratt', image:'../../assets/images/client-supplied/ismael-lopez-ferratt.png'},
    {name:'Andy Nelson', organization:'NEVShe Board of Directors', jobTitle:'Director at Large', slug:'andy-nelson'},
    {name:'Brian Foote', organization:'BELFOR Property Restoration', jobTitle:'National Account Manager', slug:'brian-foote', image:'../../assets/images/client-supplied/brian-foote.jpeg'},
    {name:'Todd Bailey', organization:'Blue Nova Marketing', jobTitle:'Owner', slug:'todd-bailey'}
  ];

  const members = importedMembers.concat(additionalProfiles).sort((a, b) => {
    const last = (person) => person.name.trim().split(/\s+/).at(-1).toLocaleLowerCase();
    return last(a).localeCompare(last(b)) || a.name.localeCompare(b.name);
  });

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const lastInitial = (member) => member.name.trim().split(/\s+/).at(-1).charAt(0).toUpperCase();
  const initials = (member) => member.name.trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0)).join('').toUpperCase();
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';
  const searchIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>';
  const container = document.querySelector('.member-directory-browser .container');
  if (!container) return;

  const requested = new URLSearchParams(window.location.search).get('profile');
  const selected = members.find((member) => member.slug === requested);

  if (selected) {
    const visual = selected.image
      ? `<div class="compact-profile-visual"><img src="${escapeHtml(selected.image)}" alt="Portrait of ${escapeHtml(selected.name)}"></div>`
      : `<div class="compact-profile-visual" role="img" aria-label="No public portrait supplied"><div class="compact-profile-initials">${escapeHtml(initials(selected))}</div></div>`;
    container.innerHTML = `
      <a class="compact-back-link" href="./">← Back to all members</a>
      <div class="compact-profile-preview" id="profile">
        ${visual}
        <article class="compact-profile-copy">
          <div class="eyebrow" style="color:var(--violet)">Member profile</div>
          <h2>${escapeHtml(selected.name)}</h2>
          <p class="compact-profile-company">${escapeHtml(selected.organization)}</p>
          <p class="compact-profile-role">${escapeHtml(selected.jobTitle || 'Professional title not supplied')}</p>
          <div class="compact-profile-placeholder-copy">
            <strong>Profile details remain unchanged.</strong>
            <p>This concept only changes the directory index. An approved biography, specialty, and other public information can continue to appear inside the member profile when available.</p>
          </div>
        </article>
      </div>`;
    return;
  }

  const letters = [...new Set(members.map(lastInitial))];
  container.innerHTML = `
    <div class="compact-directory-intro">
      <div class="section-heading">
        <div class="eyebrow" style="color:var(--violet)">Member profiles</div>
        <h2>Find a member of the NEVShe community.</h2>
        <p>Search by member name or organization, or jump to a last-name letter. The compact index keeps the statewide community easy to browse while each individual profile retains its fuller information.</p>
      </div>
      <div class="compact-member-total" aria-label="${members.length} member profiles"><strong>${members.length}</strong><span>member profiles</span></div>
    </div>
    <div class="compact-directory-controls">
      <div class="compact-search-row">
        <label class="compact-search-field">
          <span class="sr-only">Search members or organizations</span>
          ${searchIcon}
          <input type="search" placeholder="Search members or organizations" autocomplete="off">
        </label>
        <div class="compact-results-count" aria-live="polite">Showing all ${members.length} members</div>
      </div>
      <div class="compact-alpha-nav" aria-label="Filter by last-name initial">
        <button class="compact-alpha-button" type="button" data-letter="all" aria-pressed="true">All</button>
        ${letters.map((letter) => `<button class="compact-alpha-button" type="button" data-letter="${letter}" aria-pressed="false">${letter}</button>`).join('')}
      </div>
    </div>
    <div class="compact-member-grid" aria-label="NEVShe members"></div>
    <div class="compact-directory-note">
      <p><strong>No empty photo boxes.</strong> Portraits appear only after a visitor opens a profile that has an approved headshot.</p>
      <p>All members remain available through normal page scrolling—no inner scroll box and no repeated Load more clicks.</p>
    </div>`;

  const grid = container.querySelector('.compact-member-grid');
  const input = container.querySelector('input[type="search"]');
  const resultCount = container.querySelector('.compact-results-count');
  const alphabet = Array.from(container.querySelectorAll('.compact-alpha-button'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeLetter = 'all';

  const render = () => {
    const query = input.value.trim().toLocaleLowerCase();
    const matches = members.filter((member) => {
      const letterMatch = activeLetter === 'all' || lastInitial(member) === activeLetter;
      const textMatch = !query || `${member.name} ${member.organization}`.toLocaleLowerCase().includes(query);
      return letterMatch && textMatch;
    });
    resultCount.textContent = matches.length === members.length ? `Showing all ${members.length} members` : `Showing ${matches.length} of ${members.length} members`;
    grid.innerHTML = matches.length ? matches.map((member) => `
      <a class="compact-member-card" href="?profile=${encodeURIComponent(member.slug)}#profile" data-motion-item="true">
        <span class="compact-member-copy"><strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(member.organization)}</span></span>
        <span class="compact-profile-link">View profile ${arrow}</span>
      </a>`).join('') : '<div class="compact-empty-state"><strong>No matching members.</strong><br>Try another name, organization, or last-name letter.</div>';
  };

  const showFilteredResults = () => {
    window.requestAnimationFrame(() => {
      grid.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  };

  input.addEventListener('input', render);
  alphabet.forEach((button) => button.addEventListener('click', () => {
    activeLetter = button.dataset.letter;
    alphabet.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    render();
    showFilteredResults();
  }));
  render();
})();
