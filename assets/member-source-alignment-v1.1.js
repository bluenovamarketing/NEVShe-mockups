(() => {
  'use strict';

  const body = document.body;
  const kind = body.dataset.artifactKind;
  const id = body.dataset.artifactId;
  const version = body.dataset.version || '';
  const root = kind === 'hub' ? './' : '../../';
  const currentVersions = {
    'home': 'v1.12',
    'about-nevshe': 'v1.15',
    'board-of-directors': 'v1.13',
    'events': 'v1.8',
    'education': 'v1.11',
    'membership': 'v1.9',
    'member-directory': 'v1.13',
    'sponsorship': 'v1.12',
    'sponsor-directory': 'v1.13',
    'resources': 'v1.14',
    'news': 'v1.14',
    'contact': 'v1.10',
    'privacy-policy': 'v1.4',
    'terms-of-use': 'v1.4',
    'accessibility-statement': 'v1.4',
    'search-results': 'v1.3',
    '404': 'v1.3'
  };
  const img = (name) => {
    const shared = name.match(/^shared:(.+)$/);
    if (shared) return new URL(`${root}assets/images/${shared[1]}`, window.location.href).href;
    const versioned = name.match(/^v([1-9][0-9]*):(.+)$/);
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
      editorialImage: 'shared:nevada-statewide-visual-study-v1.png',
      storyVariant: 'aligned',
      storyEyebrow: 'Why NEVShe exists', storyTitle: 'Stronger facility professionals. Safer healthcare environments.',
      storyText: 'NEVShe advances the profession through targeted education, professional development, and networking—supporting safe, efficient, and innovative healthcare environments across Nevada.',
      eyebrow: 'Nevada Society of Healthcare Engineers',
      title: 'Advancing Nevada’s healthcare facilities community.',
      intro: 'NEVShe brings Nevada’s healthcare facility managers, engineers, technicians, and industry partners together for targeted education, professional development, and networking.',
      cta: ['Join NEVShe', joinUrl], secondary: ['View events', 'events'],
      stats: [['60+','members and growing'],['Statewide','one Nevada chapter'],['ASHE','chapter connection'],['Ongoing','education and events']],
      sections: [
        ['A statewide professional community built around healthcare facilities', 'NEVShe is a not-for-profit association serving the people who plan, operate, maintain, and support complex healthcare environments across Nevada. Members and partners can find practical learning, professional connections, and a shared place to strengthen the work behind patient care.'],
        ['Keep learning between chapter events.', 'Move from event announcements to supporting education, technical resources, and chapter updates, with each item organized so it is easier to find and use.']
      ],
      cards: [
        ['Education','Build knowledge through targeted programs and resources connected to real healthcare facility challenges.','Explore education','education'],
        ['Professional network','Connect with facility managers, engineers, technicians, healthcare leaders, and industry partners across Nevada.','Learn about membership','membership'],
        ['Events','Find dates, speakers, learning objectives, registration details, and post-event materials in one place.','View events','events']
      ]
    },
    'about-nevshe': {
      n: 2, name: 'About NEVShe', type: 'about', image: 'v2:about-statewide-network-v2.png',
      editorialImage: 'shared:client-supplied/nevshe-ashe-2026-chapter-members.jpg',
      purposeImage: 'v2:about-statewide-campus-v2.png',
      supportImage: 'v6:membership-professional-network-v1.png',
      storyVariant: 'reverse',
      storyEyebrow: 'Statewide by design', storyTitle: 'One chapter across a wide, complex state.',
      storyText: 'NEVShe connects facilities, disciplines, and professional relationships across Nevada’s wide and varied healthcare landscape.',
      eyebrow: 'One chapter across Nevada',
      title: 'Built to strengthen the people behind Nevada healthcare facilities.',
      intro: 'NEVShe brings facility managers, engineers, technicians, healthcare leaders, and industry partners into one statewide professional community.',
      cta: ['Learn about membership', 'membership'], secondary: ['Meet the board', 'board-of-directors'],
      sections: [
        ['A clear professional purpose', 'NEVShe is a not-for-profit association dedicated to targeted education, professional development, and networking for the people responsible for healthcare facilities.'],
        ['A Nevada-wide point of connection', 'The chapter creates one place for professionals and partners across Nevada to exchange practical knowledge, develop relationships, and stay connected to chapter activity.'],
        ['Work that supports patient care', 'By helping facility professionals strengthen safety, efficiency, innovation, and operational excellence, NEVShe supports the environments where healthcare is delivered.']
      ],
      cards: [['Education','Find upcoming learning opportunities and practical resources connected to healthcare facility work.','Explore education','education'],['Membership','Join a statewide network of facility professionals, leaders, and industry partners.','Learn about membership','membership'],['Leadership','See the officers and directors guiding the chapter as confirmed information is supplied.','Meet the board','board-of-directors']],
      quote: ['Advancing the profession of healthcare facility managers, engineers and technicians through targeted education, professional development, and networking.','NEVShe Mission Statement']
    },
    'board-of-directors': {
      n: 3, name: 'Board of Directors', type: 'directory', image: 'rural-hvac-operations-v1.png',
      supportImage: 'v2:board-leadership-planning-v2.png',
      storyVariant: 'wide',
      storyEyebrow: 'Leadership in practice', storyTitle: 'Decisions grounded in the work behind care.',
      storyText: 'Chapter leaders bring practical experience, professional perspective, and a shared commitment to Nevada’s healthcare facilities community.',
      eyebrow: 'Chapter leadership',
      title: 'Leadership serving healthcare facilities across Nevada.',
      intro: 'Meet the officers and directors helping guide NEVShe’s statewide healthcare facilities community.',
      cta: ['Contact NEVShe', 'contact'],
      overviewHeading: ['Chapter stewardship','Leadership connected to NEVShe’s purpose.','The board helps keep the chapter focused on useful education, professional connection, and the needs of Nevada’s healthcare facilities community.'],
      overview: [['Statewide perspective','Chapter leadership','A statewide board brings together experience from different facilities, disciplines, communities, and industry partners.'],['Professional connection','Community building','Board leadership creates opportunities for members to learn from one another and participate in chapter activity.'],['Visible accountability','Approachable leadership','Members can see the people responsible for guiding NEVShe and connecting its mission to meaningful chapter work.']],
      directoryHeading: ['Chapter leaders','Meet the people guiding NEVShe.','NEVShe’s board brings together professionals who support the chapter’s mission, programs, and statewide community.'],
      cards: [
        ['Ricardo Barrera','Founding President','Nevada Market Director of Facilities Management, Common Spirit Health (Dignity Health)','shared:client-supplied/ricardo-barrera.jpg'],
        ['Rich Park','Secretary','Healthcare Solutions Director, JLL','shared:client-supplied/rich-park.jpeg'],
        ['Ismael Lopez-Ferratt','Board Member at Large','Healthcare Strategic Accounts Manager, Specified Technologies, Inc. (STI Firestop)','shared:client-supplied/ismael-lopez-ferratt.png'],
        ['Brian Foote','Board Member','Biography, organization, and professional title pending client confirmation.','shared:client-supplied/brian-foote.jpeg'],
        ['Hans Gottschaldt','Board Member','Biography, organization, and professional title pending client confirmation.','shared:client-supplied/hans-gottschaldt.jpeg']
      ]
    },
    'events': {
      n: 4, name: 'Events', type: 'archive', image: 'education-collaboration-v1.png', eyebrow: 'Learn • Connect • Advance',
      supportImage: 'v2:sponsorship-workshop-v2.png', storyVariant: 'framed',
      storyEyebrow: 'Learning in action', storyTitle: 'Programs become more valuable when people work through ideas together.',
      storyText: 'NEVShe events can combine focused education with hands-on discussion, peer exchange, and relationships that continue after the program ends.',
      title: 'Events that move Nevada healthcare facilities forward.',
      intro: 'Find upcoming programs, registration information, event recaps, and shared resources in one place.',
      cta: ['Get event notifications', notifyUrl],
      overviewHeading: ['More than a date on a calendar','Learn together. Build relationships. Bring useful ideas back to work.','NEVShe events connect practical education with the professional relationships that help Nevada healthcare facility teams solve problems and keep improving.'],
      overview: [['Before the event','Plan with confidence','See the date, time, format, venue, learning objectives, speakers, CE/CEC information, pricing when applicable, and registration link.'],['At the event','Learn and connect','Programs can combine practical education with opportunities to meet facility professionals, chapter leaders, and industry partners.'],['After the event','Keep the value moving','When approved materials are available, past-event pages can retain presentations, recordings, resources, sponsor recognition, and recaps.']],
      archiveHeading: ['Current and upcoming programs','Find the next NEVShe opportunity.','Browse announced learning programs, networking opportunities, chapter meetings, and past-event materials as they become available.'],
      filters: ['All events','Education','Networking','Chapter meeting','Past events'],
      cards: [['Next NEVShe program','Date and venue pending','The next confirmed event will lead with the information visitors need to decide and register.'],['Learning opportunity','Program details pending','Education records can include speakers, objectives, CE/CEC information, agenda files, and related resources.'],['Chapter connection','Format and location pending','In-person, virtual, and hybrid opportunities can support statewide participation.']]
    },
    'education': {
      n: 5, name: 'Education', type: 'education', image: 'tahoe-water-systems-v1.png', eyebrow: 'Continuing education',
      supportImage: 'education-collaboration-v1.png',
      storyVariant: 'reverse',
      storyEyebrow: 'Learning in practice', storyTitle: 'Knowledge becomes more useful when professionals exchange it.',
      storyText: 'NEVShe education creates room for healthcare facility managers, engineers, technicians, leaders, and industry partners to connect technical learning with the situations they face across Nevada.',
      title: 'Practical knowledge for complex healthcare environments.',
      intro: 'Find upcoming NEVShe learning events and practical professional resources in two clear places.',
      cta: ['View upcoming events', 'events'], secondary: ['Browse resources', 'resources'],
      overviewHeading: ['Education with a practical purpose','Learning that connects back to the work.','NEVShe’s mission centers on targeted education and professional development for healthcare facility managers, engineers, and technicians.'],
      overview: [['Build usable knowledge','Targeted education','Programs help professionals explore issues affecting safety, operations, compliance, efficiency, leadership, and resilient healthcare environments.'],['Learn in the right format','Multiple ways to participate','Learning may include live programs, webinars, presentations, certification links, and on-demand materials when available.'],['Continue after the session','Resources that remain useful','Approved presentations, references, recordings, and related guidance extend learning beyond a single program.']],
      pathways: [
        ['Upcoming learning','See announced sessions, chapter meetings, speakers, dates, locations, and registration details.','View upcoming events','events','v5:education-upcoming-learning-v1.png'],
        ['Resource library','Browse approved presentations, technical references, and trusted external guidance as they are added.','Browse resources','resources','v5:education-resource-library-v1.png']
      ]
    },
    'membership': {
      n: 6, name: 'Membership', type: 'conversion', image: 'southern-campus-leadership-v1.png', eyebrow: 'Join the statewide network',
      supportImage: 'v6:membership-professional-network-v1.png', storyVariant: 'wide',
      storyEyebrow: 'Relationships that continue', storyTitle: 'Membership creates room for real professional connection.',
      storyText: 'A statewide chapter gives facility professionals, leaders, and industry partners a place to exchange experience, build trust, and stay connected between programs.',
      title: 'Grow your knowledge, network, and impact.',
      intro: 'Explore the value of membership and continue into NEVShe’s existing registration and payment process when you are ready to join.',
      cta: ['Join NEVShe', joinUrl], secondary: ['Membership questions', 'contact'],
      cards: [['Targeted learning','Education and development','Connect with chapter programs and approved resources created around the challenges healthcare facility professionals face.'],['Statewide relationships','Professional network','Build relationships with facility managers, engineers, technicians, healthcare leaders, and industry partners across Nevada.'],['A place to participate','Chapter community','Stay connected to events, chapter updates, and opportunities to share experience or support the profession.']],
      audienceHeading: ['Who NEVShe brings together','A professional community with a shared focus.','Healthcare facility professionals, leaders, and industry partners all contribute different experience to the shared work of supporting safe, efficient healthcare environments.'],
      audiences: [['Healthcare facility professionals','Managers, engineers, and technicians','People responsible for planning, operating, maintaining, improving, and protecting healthcare environments.'],['Healthcare leaders','Operational and organizational perspective','Professionals whose decisions support safe, efficient, innovative, and resilient facilities.'],['Industry partners','Organizations serving healthcare facilities','Companies and specialists whose work, knowledge, and services support the facilities community.']],
      faq: [['Who should join?','NEVShe serves healthcare facility managers, engineers, technicians, healthcare leaders, and industry partners. Final eligibility and membership types will be listed when confirmed.'],['What does membership include?','Confirmed benefits, pricing, renewal terms, and member categories will be published before launch.'],['How do I register?','Select Join NEVShe to open the current Constant Contact registration form and continue through the existing payment process.'],['How is membership processed?','NEVShe reviews and processes membership information manually through its existing administrative workflow.']]
    },
    'member-directory': {
      n: 7, name: 'Member Directory', type: 'directory', image: 'v2:member-directory-networking-v2.png', eyebrow: 'Statewide member directory',
      supportImage: 'v6:member-directory-organizations-v1.png', storyVariant: 'aligned',
      storyEyebrow: 'A statewide professional network', storyTitle: 'Find the organizations behind Nevada healthcare facilities.',
      storyText: 'NEVShe brings healthcare providers, engineering firms, contractors, facility-service companies, technology partners, and other supporting organizations into one professional community.',
      title: 'Meet members of Nevada’s healthcare facilities community.',
      intro: 'Search approved public member profiles by name, organization, or professional role while personal contact details remain private.',
      cta: ['Membership overview', 'membership'],
      overviewHeading: ['A practical statewide directory','Find organizations by what they do.','Discover healthcare providers, engineering firms, contractors, facility-service companies, and technology partners connected to NEVShe.'],
      overview: [['Find the organization','Organization first','Each listing leads with the member organization and its approved public logo.'],['Know who represents it','Public representative','A member name and professional title add useful context without publishing private contact details.'],['Continue to the source','Official website','Visitors can continue to the organization’s own public website for additional information.']],
      filters: [],
      cards: [
        ['CommonSpirit Health (Dignity Health)','Healthcare provider','Supporting healthcare facilities across Nevada.','Ricardo Barrera','Nevada Market Director of Facilities Management'],
        ['JLL','Healthcare solutions','Supporting healthcare facilities through professional services.','Rich Park','Healthcare Solutions Director'],
        ['Specified Technologies, Inc. (STI Firestop)','Industry partner','Supporting healthcare facilities with specialized life-safety expertise.','Ismael Lopez-Ferratt','Healthcare Strategic Accounts Manager']
      ]
    },
    'sponsorship': {
      n: 8, name: 'Sponsorship', type: 'conversion', image: 'v4:sponsorship-partnership-hero-v4.png',
      supportImage: 'v3:sponsorship-community-support-v3.png', editorialImage: 'v7:sponsorship-nevada-community-v1.png', heroTone: 'natural',
      storyVariant: 'reverse',
      storyEyebrow: 'Support made visible', storyTitle: 'Partnership becomes useful participation.',
      storyText: 'Sponsorship helps create professional connections, learning opportunities, and visible support for Nevada’s healthcare facilities community.',
      eyebrow: 'Support the chapter',
      title: 'Put your support behind Nevada’s healthcare facilities community.',
      intro: 'Support NEVShe’s statewide work through sponsorship opportunities designed for organizations serving healthcare facilities.',
      cta: ['Become a Sponsor', joinUrl], secondary: ['Ask a question', 'contact'],
      cards: [['Support the mission','Education and professional development','Sponsorship can help NEVShe create learning, connection, and professional-development opportunities for Nevada’s healthcare facilities community.'],['Be visible in context','Relevant chapter recognition','Approved sponsor recognition can place an organization alongside the chapter programs and resources it helps support.'],['Build professional relationships','Statewide connection','Participation can help industry partners connect with facility professionals, chapter leaders, and organizations serving healthcare environments.']],
      audienceHeading: ['Who sponsorship is intended for','Organizations invested in healthcare facilities.','Sponsorship is a fit for companies whose expertise, products, or services support the people and systems behind safe, efficient healthcare environments.'],
      audiences: [['Engineering and design','Planning and technical expertise','Organizations supporting facility design, engineering, infrastructure, construction, and modernization.'],['Operations and facility services','Systems that keep facilities working','Partners supporting maintenance, safety, compliance, energy, water, technology, and day-to-day operations.'],['Professional and industry support','Knowledge and specialized services','Organizations that contribute education, tools, guidance, or other expertise relevant to healthcare facility professionals.']],
      faq: [['What sponsorship levels are available?','NEVShe will publish the final level names, pricing, availability, term, and included benefits after confirmation.'],['What information will sponsors provide?','Approved sponsor records should include the organization name, level, logo, website, short public description, and permission to display the information.'],['Can an organization support a specific event?','Annual and event-specific opportunities may be shown when NEVShe confirms what is available and how recognition works.'],['How do we register?','Select Become a Sponsor to open NEVShe’s current Constant Contact registration and payment workflow.']]
    },
    'sponsor-directory': {
      n: 9, name: 'Sponsor Directory', type: 'directory', image: 'v3:sponsor-directory-supporters-v3.png', heroTone: 'open',
      supportImage: 'v3:sponsorship-community-support-v3.png',
      storyVariant: 'framed',
      storyEyebrow: 'Sponsor directory', storyTitle: 'The organizations supporting NEVShe, in one place.',
      storyText: 'Each published listing is reviewed and controlled by NEVShe and links visitors to the sponsor’s official public website.',
      eyebrow: 'Chapter supporters',
      title: 'NEVShe Sponsor Directory.',
      intro: 'Browse organizations currently supporting NEVShe. Listings appear only after NEVShe confirms the organization, logo, level, description, and public link.',
      cta: null,
      filters: [],
      cards: [['Sponsor organization','Confirmed level','Approved organization description.'],['Sponsor organization','Confirmed level','Approved organization description.'],['Sponsor organization','Confirmed level','Approved organization description.']]
    },
    'resources': {
      n: 10, name: 'Resources', type: 'archive', image: 'v3:resources-professional-library-v3.png', heroTone: 'soft', eyebrow: 'Professional resource library',
      supportImage: 'infrastructure-safety-v1.png', storyVariant: 'wide',
      storyEyebrow: 'From reference to practice', storyTitle: 'Useful guidance supports decisions in demanding environments.',
      storyText: 'Clear sources, formats, and publication details help healthcare facility professionals identify material that fits the system, question, or responsibility in front of them.',
      title: 'A clear home for approved professional resources.',
      intro: 'Find presentations, documents, recordings, chapter materials, and trusted links selected for the NEVShe community.',
      cta: ['Browse resources', '#library'],
      overviewHeading: ['A library built for real work','Know what a resource is before opening it.','Each approved item includes its source, topic, format, publication information, and a clear indication of whether it opens a document or a trusted external website.'],
      overview: [['Codes and regulatory guidance','Requirements and reference material','Organize approved Nevada, federal, accreditation, and industry links without presenting unverified compliance advice.'],['Operations and preparedness','Practical facility topics','Collect trusted material related to emergency readiness, water management, sustainability, energy, safety, and facility operations.'],['Professional development','Education and certification','Connect visitors with approved chapter materials, ASHE resources, certification information, and continuing-learning references.']],
      archiveHeading: ['Resource library','Approved information in one searchable place.','Resources will appear here after NEVShe confirms the source and approves publication.'],
      filters: [],
      cards: []
    },
    'news': {
      n: 11, name: 'News', type: 'archive', image: 'v3:news-chapter-editorial-v3.png', heroTone: 'soft', eyebrow: 'Chapter and industry updates',
      supportImage: 'v2:board-leadership-planning-v2.png', editorialImage: 'v6:membership-professional-network-v1.png', storyVariant: 'reverse',
      storyEyebrow: 'NEVShe updates', storyTitle: 'News and updates from NEVShe.',
      storyText: 'Follow confirmed chapter announcements, event recaps, and professional updates as they are published.',
      title: 'News from across Nevada’s healthcare facilities community.',
      intro: 'Read confirmed chapter announcements, event recaps, and professional updates from NEVShe.',
      cta: ['Get notifications', notifyUrl],
      overviewHeading: ['A living record of chapter activity','Follow NEVShe programs, people, and professional conversations.','Timely announcements and lasting stories connect chapter activity with the people, organizations, and issues shaping healthcare facilities.'],
      overview: [['Chapter updates','What NEVShe is doing','Announcements, leadership updates, program information, and organizational milestones can keep members and partners informed.'],['People and organizations','Member and sponsor stories','Approved spotlights can show the experience, contributions, and work of the professionals and organizations in the community.'],['Learning and industry context','Why an update matters','Education stories, event recaps, advocacy news, and industry developments can connect chapter activity to the work behind healthcare.']],
      archiveHeading: ['Latest NEVShe news','Confirmed chapter stories will appear here.','Each published article will include its date, image, short introduction, and related links.'],
      filters: [],
      cards: []
    },
    'contact': {
      n: 12, name: 'Contact', type: 'contact', image: 'v2:contact-professional-connection-v2.png', eyebrow: 'Connect with NEVShe',
      supportImage: 'v6:contact-response-v1.png', storyVariant: 'offset',
      storyEyebrow: 'Contact NEVShe', storyTitle: 'We look forward to hearing from you.',
      storyText: 'Use the form to ask a question about the chapter, membership, sponsorship, events, education, or another NEVShe topic.',
      title: 'Contact NEVShe.',
      intro: 'Have a question? Send NEVShe a message and the chapter team will respond as soon as possible.',
      cta: null,
      guidanceHeading: ['Choose the quickest path','Some actions already have a direct destination.','Using the right route helps visitors register, subscribe, or ask a question without waiting for someone to redirect the message.'],
      guidance: [['Ready to join or sponsor?','Use the registration route','Membership and sponsorship continue through NEVShe’s current Constant Contact and payment workflow.'],['Looking for event updates?','Use the notification list','The event-notification signup is separate from the general contact form so visitors can subscribe directly.'],['Need help or clarification?','Send a focused inquiry','Choose a topic and explain what you need. Final form recipients and the general NEVShe email remain pending client confirmation.']]
    },
    'privacy-policy': {
      n: 13, name: 'Privacy Policy', type: 'legal', eyebrow: 'Legal framework', title: 'Privacy Policy',
      intro: 'This policy explains the information NEVShe may collect through its website, how that information may be used, and the choices available to visitors.',
      legalUpdated: 'September 2, 2026',
      sections: [
        ['Information we collect','<p>NEVShe may collect information that you choose to provide, including your name, email address, organization, professional role, inquiry topic, message, event-registration information, membership or sponsorship information, and notification preferences.</p><p>The website and its service providers may also collect limited technical information automatically, such as Internet Protocol address, browser type, device type, pages viewed, referring page, date and time of access, and similar website log or analytics information.</p>'],
        ['How information may be used','<p>Information may be used to respond to inquiries; administer membership, sponsorship, event registration, and chapter communications; provide requested notifications; operate, secure, and improve the website; maintain business and legal records; prevent misuse; and comply with applicable law.</p><p>NEVShe should request only information reasonably related to the visitor’s chosen action. Please do not submit passwords, payment-card details, confidential patient information, or other sensitive information through a general contact form.</p>'],
        ['Service providers and other disclosures','<p>NEVShe may use service providers to support website hosting, forms, email communications, event registration, payment processing, analytics, file delivery, security, and related operations. Those providers may process information on NEVShe’s behalf or under their own posted terms and privacy notices.</p><p>Information may also be disclosed when reasonably necessary to comply with law, respond to lawful requests, protect rights or safety, investigate misuse, or complete an organizational transaction permitted by law.</p>'],
        ['Cookies, analytics, and third-party activity','<p>The website may use cookies or similar technologies required for site operation, security, preferences, and measurement. Third-party analytics, embedded content, registration tools, payment services, or linked websites may use their own technologies and may collect information about activity over time and across different websites according to their own policies.</p><p>Browser settings may allow you to block or delete cookies, although some website features may not function as intended afterward.</p>'],
        ['Your choices and Nevada privacy requests','<p>You may unsubscribe from promotional email by using the unsubscribe link in the message. You may also contact NEVShe to ask about access to, correction of, or deletion of personal information associated with you, subject to identity verification, legal exceptions, and record-retention requirements.</p><p>Nevada residents may submit any request available under applicable Nevada privacy law through the NEVShe contact page. NEVShe may need additional information to verify and process a request.</p>'],
        ['Security and retention','<p>NEVShe uses reasonable administrative, technical, and organizational measures intended to protect information. No website, transmission method, or storage system can be guaranteed completely secure.</p><p>Information should be retained only as long as reasonably necessary for the purpose collected, legal or accounting obligations, dispute resolution, security, and enforcement of agreements, and then deleted or de-identified when appropriate.</p>'],
        ['Children’s privacy','<p>This website is intended for a professional audience and is not directed to children under 13. NEVShe does not knowingly request personal information from children under 13 through the general website. A parent or guardian who believes a child supplied information may contact NEVShe to request review and appropriate removal.</p>'],
        ['Policy changes and contact','<p>NEVShe may update this policy as its website, services, or legal obligations change. The revised policy will be posted with a new effective date, and additional notice may be provided when a change is material.</p><p>Questions or privacy requests may be submitted through the NEVShe Contact page.</p>']
      ]
    },
    'terms-of-use': {
      n: 14, name: 'Terms of Use', type: 'legal', eyebrow: 'Legal framework', title: 'Terms of Use',
      intro: 'These Terms of Use govern access to and use of the NEVShe website, its public content, and the links and resources made available through it.',
      legalUpdated: 'September 2, 2026',
      sections: [
        ['Acceptance of these terms','<p>By accessing or using this website, you agree to these Terms of Use and the Privacy Policy. If you do not agree, do not use the website. NEVShe may revise these terms by posting an updated version and effective date.</p>'],
        ['Website purpose and permitted use','<p>The website provides information about NEVShe, its leadership, membership, sponsorship, education, events, news, resources, and related professional activities. You may use public website content for lawful personal, educational, and professional informational purposes.</p><p>You may not use the website in a way that violates law, infringes another party’s rights, interferes with website operation, attempts unauthorized access, introduces malicious code, misrepresents affiliation with NEVShe, or collects information about others without authorization.</p>'],
        ['Professional and informational content','<p>Website content is provided for general informational and educational purposes. It is not engineering, legal, regulatory, medical, safety, or other professional advice and should not replace applicable laws, codes, standards, facility policies, contracts, or advice from a qualified professional.</p><p>Visitors are responsible for evaluating information in light of their own facility, jurisdiction, responsibilities, and circumstances.</p>'],
        ['Registration, payments, and third-party services','<p>Membership, sponsorship, events, notifications, payments, or other activities may be handled through third-party services. Those services may have separate terms, privacy notices, eligibility requirements, refund rules, and technical requirements.</p><p>NEVShe is not responsible for a third party’s website, availability, security, content, or independent practices. A link does not necessarily mean NEVShe endorses every statement, product, or service found on the linked site.</p>'],
        ['Intellectual property','<p>Unless otherwise identified, the website’s design, text, graphics, compilation, and NEVShe branding are owned by or licensed to NEVShe and are protected by applicable intellectual-property laws. Third-party names, logos, photographs, publications, and trademarks remain the property of their respective owners.</p><p>No content may be copied, republished, sold, modified, or used to imply endorsement without permission, except for limited lawful uses such as linking to a public page or making a personal reference copy.</p>'],
        ['Submitted material','<p>If you submit text, files, photographs, comments, or other material, you represent that you have the right to provide it and that its use for the requested NEVShe purpose will not violate another party’s rights. Do not submit confidential, patient, payment-card, password, or other sensitive information through general website forms.</p>'],
        ['Disclaimers','<p>The website and its content are provided “as is” and “as available.” To the fullest extent permitted by law, NEVShe disclaims warranties of accuracy, completeness, merchantability, fitness for a particular purpose, noninfringement, uninterrupted availability, and freedom from harmful components.</p><p>NEVShe may correct, update, remove, or discontinue website content or features at any time.</p>'],
        ['Limitation of liability','<p>To the fullest extent permitted by law, NEVShe and its officers, directors, volunteers, representatives, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from website use, inability to use the website, reliance on content, or interaction with a third-party service.</p><p>Some jurisdictions do not allow certain exclusions or limitations, so portions of this section may not apply.</p>'],
        ['Governing law and contact','<p>These terms are governed by applicable United States and Nevada law, without regard to conflict-of-law principles, unless another law must apply. If any provision is unenforceable, the remaining provisions continue in effect.</p><p>Questions about these terms may be submitted through the NEVShe Contact page.</p>']
      ]
    },
    'accessibility-statement': {
      n: 15, name: 'Accessibility Statement', type: 'legal', eyebrow: 'Inclusive access', title: 'Accessibility Statement',
      intro: 'NEVShe is committed to making its website and public information usable by people with disabilities and to providing help when a barrier is encountered.',
      legalUpdated: 'September 2, 2026',
      sections: [
        ['Our commitment','<p>NEVShe wants members, partners, and visitors to be able to access information about the chapter, education, events, membership, sponsorship, resources, and news regardless of ability or the technology used to browse the site.</p><p>Accessibility is treated as an ongoing responsibility that includes design, content, development, testing, and timely response to reported barriers.</p>'],
        ['Accessibility standard and current status','<p>NEVShe is working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. WCAG provides internationally recognized guidance for making web content more perceivable, operable, understandable, and robust.</p><p>The final website has not yet completed a formal conformance assessment, so NEVShe is not claiming full WCAG conformance at this time.</p>'],
        ['Measures supporting accessibility','<p>Planned measures include semantic headings and landmarks; keyboard-accessible navigation and controls; visible focus indicators; text alternatives for meaningful images; sufficient color contrast; labeled forms and understandable error messages; responsive layouts; support for browser zoom and text resizing; captions or transcripts for time-based media when applicable; and respect for reduced-motion preferences.</p><p>Automated checks will be paired with keyboard, screen-reader, zoom, and manual visual testing because automated tools alone cannot identify every barrier.</p>'],
        ['Browser and assistive-technology compatibility','<p>The website is intended to work with current versions of major browsers and commonly used assistive technologies. Older browsers, unsupported operating systems, custom browser settings, or third-party content may produce different results.</p><p>Visitors who experience difficulty may request the information in another reasonable format through the NEVShe contact route.</p>'],
        ['Known and third-party limitations','<p>Some linked registration, payment, document, video, map, or embedded services may be operated by third parties. NEVShe will work to select and configure accessible services where practical, but it does not control every aspect of an external platform.</p><p>When NEVShe learns of a barrier in its own content, it will evaluate the issue and work toward a reasonable correction or accessible alternative.</p>'],
        ['Feedback and assistance','<p>If you cannot access content, operate a feature, or complete a form, please contact NEVShe. Include the page address, a short description of the problem, the browser or assistive technology used when helpful, and the format or assistance you need.</p><p>NEVShe will make a reasonable effort to acknowledge the request, provide available assistance, and use the feedback to improve the website.</p>'],
        ['Assessment and updates','<p>This statement will be reviewed as the website changes and after accessibility testing. The effective date will be updated when material changes are made to the statement or the website’s accessibility approach.</p><p>Questions or accessibility feedback may be submitted through the NEVShe Contact page.</p>']
      ]
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

  // Same supplied facts; keep this directory's existing five portrait examples and order.
  const memberOrder=['ricardo-barrera','rich-park','ismael-lopez-ferratt','brian-foote','hans-gottschaldt'];
  pageConfigs['board-of-directors'].cards=memberOrder.map(slug=>window.NEVSheBoardFacts.find(p=>p.slug===slug)).map(p=>[p.name,p.role,p.job+', '+p.org,'shared:client-supplied/'+p.image]);

  const pageContent = {
    'home': {
      eyebrow: 'Nevada healthcare facilities professionals',
      title: 'A statewide community for the people who keep healthcare environments working.',
      intro: 'The Nevada Society of Healthcare Engineers connects the professionals whose knowledge, judgment, and daily work support healthcare facilities throughout the state.',
      sections: [
        ['What is NEVShe?', 'NEVShe is a not-for-profit professional association for healthcare facility managers, engineers, technicians, healthcare leaders, and industry partners across Nevada. The chapter advances the profession through targeted education, professional development, and networking. That mission brings people from different facilities, disciplines, and organizations into one community built around the complex environments where healthcare is delivered.'],
        ['Knowledge connected to real facility work', 'Healthcare facilities rely on coordinated building systems, thoughtful planning, dependable maintenance, strong leadership, and people who understand how operational decisions affect care. NEVShe creates opportunities to exchange practical knowledge, learn from professional experience, and stay connected to subjects that matter to healthcare environments. Events, educational opportunities, resources, and chapter news give members several ways to continue learning.'],
        ['One Nevada chapter with several ways to participate', 'Visitors can learn about membership, find upcoming events, browse professional resources, meet chapter leadership, explore member and sponsor organizations, or contact NEVShe with a question. Industry partners can also learn about sponsorship and support the chapter’s educational and professional-development mission. Together, these pathways make NEVShe a statewide point of connection for the people and organizations behind safe, efficient, and innovative healthcare environments.']
      ]
    },
    'about-nevshe': {
      eyebrow: 'About the Nevada Society of Healthcare Engineers',
      title: 'Advancing the healthcare facilities profession across Nevada.',
      intro: 'NEVShe brings education, professional development, and networking together in one statewide association focused on healthcare environments.',
      sections: [
        ['A professional association with a practical mission', 'The Nevada Society of Healthcare Engineers is dedicated to advancing healthcare facility managers, engineers, and technicians. NEVShe provides a professional home for people whose work supports the buildings, infrastructure, operations, and teams behind patient care. Its charitable, scientific, and educational purpose keeps the organization focused on useful knowledge, continued growth, and meaningful professional connection.'],
        ['Why healthcare facilities professionals need connection', 'Healthcare environments are complex. Facility professionals coordinate technical systems, maintenance priorities, safety, efficiency, projects, emergency readiness, and long-term improvements while working alongside clinical and administrative leaders. No single role or organization holds every answer. A statewide chapter creates room for peers and industry partners to share perspective, learn from one another, and strengthen the judgment that complex facility work requires.'],
        ['Serving one statewide community', 'NEVShe connects professionals and organizations throughout Nevada rather than limiting participation to one city or one type of facility. Members can engage through education, events, resources, chapter news, leadership, and professional relationships. Industry partners contribute specialized knowledge and support the chapter’s work. Every part of that community advances the same goal: capable professionals and healthcare environments that are safe, efficient, innovative, and prepared to support excellent care.']
      ]
    },
    'board-of-directors': {
      eyebrow: 'Leadership and chapter stewardship',
      title: 'Guiding a statewide professional community.',
      intro: 'NEVShe’s Board of Directors helps connect the organization’s mission with useful programs, responsible decisions, and the needs of Nevada healthcare facilities professionals.',
      sections: [
        ['Stewardship of the chapter mission', 'Board leadership keeps NEVShe focused on advancing healthcare facility managers, engineers, and technicians through education, professional development, and networking. That responsibility includes setting priorities, supporting chapter programs, and helping the organization grow without losing sight of the professionals and healthcare environments it exists to serve.'],
        ['Perspective from across the profession', 'Healthcare facility work crosses operations, engineering, maintenance, safety, construction, leadership, and many supporting specialties. A strong board draws on that range of experience when considering chapter education, events, resources, membership, and industry participation. The result is leadership grounded in the practical realities of healthcare facilities rather than a single discipline or organization.'],
        ['Visible, approachable leadership', 'Members and visitors can see who is guiding NEVShe and how leadership connects to the chapter’s work. Board profiles present each person with equal visual treatment while reflecting the range of professional experience supporting Nevada’s healthcare facilities community.']
      ]
    },
    'events': {
      eyebrow: 'Healthcare facilities events in Nevada',
      title: 'Learn, connect, and keep the conversation moving.',
      intro: 'NEVShe events bring healthcare facility professionals and industry partners together around practical knowledge, professional relationships, and the work behind safe healthcare environments.',
      sections: [
        ['Learning grounded in healthcare facilities', 'Chapter events create space to explore the systems, responsibilities, and leadership challenges that shape healthcare environments. Programs may address facility operations, safety, compliance, water, energy, construction, emergency preparedness, workforce development, or other subjects connected to the profession. Each announced event will provide the confirmed information visitors need to understand the topic and decide whether to attend.'],
        ['Professional connection across Nevada', 'Events also make it easier for facility managers, engineers, technicians, healthcare leaders, and industry partners to meet outside their usual workplaces. Those conversations can introduce new perspectives, reveal shared challenges, and help professionals build relationships they can continue after the program ends. In-person, virtual, and hybrid formats can all support a statewide community when they are part of the confirmed schedule.'],
        ['Useful information before and after an event', 'Upcoming event listings include confirmed dates, times, locations or formats, speakers, learning objectives, registration links, and continuing-education information when applicable. Past-event pages can preserve approved recaps, presentations, recordings, photographs, related resources, and sponsor recognition. Visitors can also join the notification list to hear when new NEVShe events and educational opportunities are announced.']
      ]
    },
    'education': {
      eyebrow: 'Healthcare facilities education',
      title: 'Professional development for complex healthcare environments.',
      intro: 'NEVShe education helps facility professionals build practical knowledge, broaden perspective, and stay connected to learning beyond a single workplace.',
      sections: [
        ['Knowledge for demanding environments', 'Healthcare facilities bring technical systems, safety requirements, operational priorities, projects, people, and patient-care needs together every day. NEVShe supports learning connected to that complexity. Educational opportunities can help managers, engineers, technicians, and leaders explore current challenges, compare approaches, and strengthen the knowledge they use when planning, operating, maintaining, and improving healthcare environments.'],
        ['Learning through programs and trusted resources', 'Professional development does not happen in only one format. NEVShe connects visitors to upcoming educational events as well as approved presentations, technical references, certification information, recordings, and trusted external resources when they are available. Clear descriptions, sources, formats, and publication details help professionals choose material that fits the question they are trying to answer.'],
        ['A statewide exchange of experience', 'Education becomes more valuable when people can connect it to real work and discuss it with others in the profession. Chapter programs and resources support that exchange across facilities, roles, organizations, and regions of Nevada. Visitors can start with upcoming events for scheduled learning or browse the resource library for material they can use on their own time.']
      ]
    },
    'membership': {
      eyebrow: 'Join NEVShe',
      title: 'Build an ongoing connection to Nevada’s healthcare facilities community.',
      intro: 'Membership brings healthcare facility professionals, leaders, and industry partners into a statewide association centered on education, professional development, and networking.',
      sections: [
        ['A community built around shared responsibility', 'NEVShe serves people whose work contributes to the safety, efficiency, innovation, and day-to-day operation of healthcare environments. Facility managers, engineers, technicians, healthcare leaders, and industry partners bring different expertise to that responsibility. Membership creates a continuing connection among those perspectives and gives professionals a place to learn, exchange ideas, and participate in chapter activity.'],
        ['Learn, connect, and contribute', 'Members can stay close to NEVShe education, events, professional resources, chapter news, and statewide relationships. Those connections support both individual development and a stronger healthcare facilities community. Participation can also create opportunities to share experience, learn how other professionals approach common challenges, and help shape conversations that matter to facilities throughout Nevada.'],
        ['A clear path to join', 'People ready to become members can continue to NEVShe’s existing external registration and payment process. Confirmed membership types, eligibility, pricing, renewal terms, and included benefits will be presented before launch so prospective members can make an informed decision. Anyone who needs clarification first can contact NEVShe with a membership question or explore the rest of the site to learn more about the chapter.']
      ]
    },
    'member-directory': {
      eyebrow: 'NEVShe member organizations',
      title: 'Discover organizations connected to healthcare facilities across Nevada.',
      intro: 'The public Member Directory helps visitors identify NEVShe-connected organizations by industry, specialty, and the work they support.',
      sections: [
        ['A useful organization directory', 'NEVShe brings together healthcare providers, engineering firms, contractors, facility-service companies, technology partners, and other organizations connected to healthcare environments. The directory makes that statewide network easier to explore. Search and category filters help visitors narrow the list, while compact accordion profiles keep the page readable as more organizations are added.'],
        ['Public information with a clear purpose', 'Each organization profile can include an approved logo, organization name, industry or service category, public website, short overview, and organization-level contact information when authorized. The goal is to help visitors understand what an organization does and continue to its public website for more information, not to reproduce a full company website inside the directory.'],
        ['Privacy and equal presentation', 'This is an organization directory, not a public database of individual members. Personal email addresses, direct personal phone numbers, private profiles, member accounts, and login information are excluded. Every organization receives the same card structure and neutral logo fallback. Approved SVG or transparent PNG logos replace the fallback only after NEVShe receives the file and permission to display it publicly.']
      ]
    },
    'sponsorship': {
      eyebrow: 'Sponsor NEVShe',
      title: 'Support education and connection for Nevada healthcare facilities professionals.',
      intro: 'NEVShe sponsorship gives organizations serving healthcare facilities a way to support the chapter’s professional mission and participate in its statewide community.',
      sections: [
        ['Support a focused professional mission', 'NEVShe exists to advance healthcare facility managers, engineers, and technicians through targeted education, professional development, and networking. Sponsorship helps organizations stand behind that work and the professionals responsible for healthcare environments across Nevada. It connects industry participation to a clear chapter purpose rather than treating sponsorship as advertising alone.'],
        ['Participate where expertise is relevant', 'Healthcare facilities depend on many specialties, including engineering, design, construction, maintenance, safety, energy, water, technology, compliance, and other professional services. Sponsors can bring useful industry perspective into a community that understands the context for that expertise. Chapter relationships also give facility professionals and industry partners more opportunities to learn about one another’s work.'],
        ['Recognition with appropriate context', 'Approved sponsor logos and organization information can appear in the Sponsor Directory and other relevant chapter areas. Final sponsorship levels, pricing, terms, availability, and benefits will be published only after NEVShe confirms them. Organizations ready to participate can use the existing registration and payment process, while those with questions can contact the chapter before registering.']
      ]
    },
    'sponsor-directory': {
      eyebrow: 'Organizations supporting NEVShe',
      title: 'Recognizing the partners behind chapter growth.',
      intro: 'The Sponsor Directory connects recognition with useful information about the organizations supporting NEVShe and Nevada’s healthcare facilities community.',
      sections: [
        ['Support for education and professional connection', 'NEVShe sponsors help support a statewide association dedicated to education, professional development, and networking for healthcare facility professionals. Recognizing those organizations shows members and visitors who is investing in the chapter’s mission and the community that surrounds healthcare facilities throughout Nevada.'],
        ['Find organizations by expertise', 'Sponsors may represent engineering, construction, facility services, technology, safety, water, energy, design, and other specialties connected to healthcare environments. Approved profiles help visitors understand each organization’s work and continue to its public website. Search and filters make the directory useful as the sponsor community grows.'],
        ['Consistent and respectful recognition', 'Every sponsor profile uses a structured logo area, organization name, confirmed sponsorship level, public description, and website link. The presentation can distinguish approved levels without making any supporting organization appear unimportant. Sponsor information is shown only after NEVShe receives the approved logo, public details, and permission to display them.']
      ]
    },
    'resources': {
      eyebrow: 'Healthcare facilities resources',
      title: 'Practical information for the work behind care.',
      intro: 'The NEVShe Resource Library brings approved technical guidance, professional references, chapter materials, and trusted external links into one searchable place.',
      sections: [
        ['Start with the question you need to answer', 'Healthcare facility professionals may be looking for information about codes, emergency preparedness, water management, sustainability, energy, operations, safety, certification, or professional development. Search and topic filters help visitors move directly toward relevant material instead of digging through unrelated pages or long lists of links.'],
        ['Understand a resource before opening it', 'Each approved item includes a clear title, short description, source, topic, format, and publication details. Visitors can see whether an item opens a document, chapter presentation, newsletter, recording, or trusted external website. That context makes the library easier to use and helps distinguish educational references from organization-specific policies or professional advice.'],
        ['Keep learning connected', 'Resources can extend the value of NEVShe education and events by preserving approved presentations, references, recordings, and related material. They can also connect visitors to ASHE resources, certification information, and other trusted guidance selected by the chapter. As the library grows, related links can bring events, news, and resources together around the same professional topic.']
      ]
    },
    'news': {
      eyebrow: 'NEVShe news and updates',
      title: 'Stories from Nevada’s healthcare facilities community.',
      intro: 'NEVShe News keeps members, partners, and visitors connected to chapter activity, professional learning, and the people and organizations behind healthcare environments.',
      sections: [
        ['Follow the life of the chapter', 'Chapter announcements, leadership updates, organizational milestones, and program news help the statewide community understand what NEVShe is doing and where participation is growing. A consistent news archive keeps important updates easy to find after they leave the homepage or an email notification.'],
        ['Learn from events and professional experience', 'Event recaps can carry useful ideas beyond the people who attended by sharing approved highlights, photographs, presentations, recordings, and related resources. Member and sponsor spotlights can introduce the experience and work found across the community. Every story provides context without inventing claims, credentials, or details that have not been approved.'],
        ['Connect industry context to healthcare facilities', 'Healthcare facilities professionals work within changing technical, operational, regulatory, and organizational conditions. NEVShe can publish approved industry updates, advocacy information, and continuing-education stories that help readers understand why a development matters. Categories and search make it easier to follow the subjects most relevant to each reader’s role.']
      ]
    },
    'contact': {
      eyebrow: 'Contact the Nevada Society of Healthcare Engineers',
      title: 'Connect with the right NEVShe resource.',
      intro: 'Whether the question is about membership, sponsorship, events, education, or the chapter itself, NEVShe offers a clear place to begin.',
      sections: [
        ['Questions about the chapter', 'Use the general contact form for questions about NEVShe, its statewide professional community, chapter leadership, website information, or other topics that do not already have a direct destination. Selecting a topic and adding useful detail helps the chapter understand the request and route it appropriately.'],
        ['Membership, sponsorship, and event updates', 'Visitors who are ready to join or sponsor NEVShe can continue directly to the existing external registration and payment process. People who want announcements about upcoming programs can join the event-notification list. Keeping these actions separate from the general form makes each path clearer and avoids unnecessary delays.'],
        ['A focused message gets a better response', 'Before submitting an inquiry, include the subject, the organization involved when relevant, and the specific help or information needed. Do not send payment information, passwords, private member data, or other sensitive material through the public form. Confirmed contact recipients and privacy language will be added before the form becomes active on the final website.']
      ]
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
  const resolveHref = (href) => /^(?:https?:|#|\.\.?\/)/.test(href) ? href : local(href);
  const reviewBar = (label) => `<div class="review-bar"><a href="${root}">← Complete mockup hub</a><div class="review-meta"><span class="review-pill">${label}</span>${version ? `<span class="review-pill">${version}</span>` : ''}</div></div>`;

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
        <div class="footer-col"><h3>Organization</h3><a href="${local('contact')}">Contact</a><a href="https://nevshe.org/sitemap/">Sitemap</a><a href="${local('privacy-policy')}">Privacy</a><a href="${local('terms-of-use')}">Terms</a><a href="${local('accessibility-statement')}">Accessibility</a></div>
      </div>
      <div class="footer-bottom"><div class="footer-bottom-inner"><span>© ${new Date().getFullYear()} NEVShe</span><span>Website designed by <a href="https://bluenovamarketing.com/" target="_blank" rel="noopener noreferrer">Blue Nova Marketing</a></span></div></div>
    </footer>`;
  }

  const pageHero = (c, home = false) => {
    const style = c.image ? ` style="--hero-image:url('${img(c.image)}')"` : '';
    const actions = [c.cta,c.secondary].filter(Boolean).map((x,i) => `<a class="btn ${i ? 'btn-ghost' : 'btn-primary'}" href="${resolveHref(x[1])}">${x[0]} ${icon('arrow')}</a>`).join('');
    if (home) return `<section class="hero"${style}><div class="hero-content"><div class="hero-copy"><div class="eyebrow">${c.eyebrow}</div><h1>${c.title}</h1><p>${c.intro}</p><div class="hero-actions">${actions}</div></div></div></section>`;
    return `<section class="interior-hero ${c.image ? 'has-image' : ''} hero-tone-${c.heroTone || 'seamless'}"${style}><div class="interior-hero-inner"><div class="breadcrumbs"><a href="${local('home')}">Home</a><span>/</span><span>${c.name}</span></div><div><div class="eyebrow">${c.eyebrow}</div><h1>${c.title}</h1><p>${c.intro}</p>${actions ? `<div class="hero-actions">${actions}</div>` : ''}</div></div></section>`;
  };

  const sectionHeading = (eyebrow, title, text) => `<div class="section-heading"><div class="eyebrow" style="color:var(--violet)">${eyebrow}</div><h2>${title}</h2><p>${text}</p></div>`;
  const portraitPlaceholder = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="12"></circle><path d="M11 58c2-15 10-23 21-23s19 8 21 23"></path></svg>`;
  const organizationPlaceholder = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 56h48M15 56V20l17-10 17 10v36M23 27h6M35 27h6M23 36h6M35 36h6M28 56V45h8v11"></path></svg>`;
  const profileSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const personCards = (cards) => `<div class="board-person-grid">${cards.map((x) => `<article class="board-person-card">${x[3] ? `<img class="board-person-photo" src="${img(x[3])}" alt="Portrait of ${x[0]}">` : `<div class="avatar person-avatar" aria-label="Portrait placeholder">${portraitPlaceholder}</div>`}<div class="board-person-copy"><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p><a class="board-profile-link" href="?profile=${profileSlug(x[0])}#profile">View profile ${icon('arrow')}</a></div></article>`).join('')}</div>`;
  const memberProfileCards = (cards) => `<div class="member-profile-grid">${cards.map((x) => `<article class="member-profile-card"><img class="member-profile-photo" src="${img(x[3])}" alt="Portrait of ${x[0]}"><div class="member-profile-copy"><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p><a class="card-link" href="${local('board-of-directors')}?profile=${profileSlug(x[0])}#profile">View member profile →</a></div></article>`).join('')}</div>`;
  const featureCards = (cards, directory = false) => directory === 'people' ? personCards(cards) : `<div class="grid grid-3">${cards.map((x,i) => directory ? `<article class="card directory-card placeholder"><div class="avatar">${String(i+1).padStart(2,'0')}</div><div><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></div></article>` : `<article class="card"><div class="card-icon">${['✦','↗','◇','✓','◌','＋'][i%6]}</div><div class="meta">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></article>`).join('')}</div>`;
  const linkedCards = (cards) => `<div class="grid grid-3 linked-card-grid">${cards.map((x) => `<article class="card linked-card"><h3>${x[0]}</h3><p>${x[1]}</p>${x[3] ? `<a class="card-link" href="${local(x[3])}">${x[2]} →</a>` : `<span class="card-link">${x[2]} →</span>`}</article>`).join('')}</div>`;
  const visualStory = (c) => `<section class="section visual-story-section story-${c.storyVariant || 'split'}"><div class="container"><div class="visual-story"><div class="visual-story-media" role="img" aria-label="" style="--story-image:url('${img(c.supportImage)}')"></div><div class="visual-story-copy"><div class="eyebrow" style="color:var(--violet)">${c.storyEyebrow}</div><h2>${c.storyTitle}</h2><p>${c.storyText}</p></div></div></div></section>`;
  const cardSection = (heading, cards, alt = false) => cards?.length ? `<section class="section ${alt ? 'section-alt' : ''}"><div class="container">${sectionHeading(...heading)}${featureCards(cards)}</div></section>` : '';
  const editorialLayouts = {
    'home': ['mosaic', ['NEVShe', 'Professional practice', 'Statewide connection']],
    'about-nevshe': ['about-canvas', ['Purpose', 'The profession', 'One community']],
    'board-of-directors': ['rail', ['Mission', 'Perspective', 'Accountability']],
    'events': ['timeline', ['Learn', 'Connect', 'Continue']],
    'education': ['columns', ['Complexity', 'Formats', 'Exchange']],
    'member-directory': ['band', ['Find', 'Understand', 'Protect']],
    'sponsorship': ['mosaic', ['Mission', 'Visibility', 'Relationships']],
    'sponsor-directory': ['rail', ['Recognition', 'Profiles', 'Connection']],
    'resources': ['index', ['Guidance', 'Operations', 'Development']],
    'news': ['magazine', ['Chapter', 'Community', 'Context']],
    'contact': ['split', ['Registration', 'Notifications', 'Questions']]
  };
  const editorialContent = (slug, alt = false) => {
    const content = pageContent[slug];
    if (!content) return '';
    const [layout, labels] = editorialLayouts[slug] || ['columns', ['Focus', 'Practice', 'Connection']];
    const editorialImage = pageConfigs[slug]?.editorialImage ? img(pageConfigs[slug].editorialImage) : '';
    return `<section class="section editorial-content-section editorial-${layout} ${alt ? 'section-alt' : ''}"><div class="container">${sectionHeading(content.eyebrow, content.title, content.intro)}<div class="editorial-story-grid">${content.sections.map(([title, text], index) => {
      const imageFeature = index === 0 && editorialImage;
      return `<article class="editorial-story${imageFeature ? ' editorial-story-image' : ''}" data-sequence="${String(index + 1).padStart(2, '0')}"${imageFeature ? ` style="--editorial-image:url('${editorialImage}')"` : ''}><div class="editorial-kicker">${labels[index] || `Story ${index + 1}`}</div><h3>${title}</h3><p>${text}</p></article>`;
    }).join('')}</div></div></section>`;
  };

  const aboutEditorialFeature = (c) => {
    const content = pageContent['about-nevshe'];
    const labels = editorialLayouts['about-nevshe'][1];
    const editorialImage = img(c.editorialImage);
    return `<section class="section section-alt about-group-story"><div class="container">${sectionHeading(content.eyebrow, content.title, content.intro)}<figure class="about-group-photo"><img src="${editorialImage}" alt="Four people standing together in front of an ASHE event backdrop"></figure><div class="about-group-copy-grid">${content.sections.map(([title, text], index) => `<article><div class="editorial-kicker">${labels[index]}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>`;
  };

  const featureCollection = (heading, cards, variant = 'lines', alt = false) => cards?.length ? `<section class="section feature-collection-section feature-${variant} ${alt ? 'section-alt' : ''}"><div class="container">${sectionHeading(...heading)}<div class="feature-collection">${cards.map(([title, eyebrow, text], index) => `<article><div class="meta">${eyebrow}</div><h3>${title}</h3><p>${text}</p><span class="feature-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span></article>`).join('')}</div></div></section>` : '';
  const archiveCards = (cards, slug) => `<div class="archive-card-grid archive-${slug}">${cards.map(([title, meta, text]) => `<article class="archive-card"><div class="meta">${meta}</div><h3>${title}</h3><p>${text}</p><span class="card-link">View ${slug === 'events' ? 'event' : slug === 'news' ? 'story' : 'resource'} →</span></article>`).join('')}</div>`;
  const organizationTiles = (cards) => `<div class="organization-tile-grid">${cards.map(([title, meta, text, representative, representativeTitle]) => `<article class="organization-tile"><span class="organization-logo-placeholder" aria-label="Organization logo placeholder">${organizationPlaceholder}</span><div><div class="meta">${meta}</div><h3>${title}</h3><p>${text}</p>${representative ? `<div class="organization-representative"><strong>${representative}</strong><span>${representativeTitle}</span></div>` : ''}</div></article>`).join('')}</div>`;

  const aboutPurposeCollection = (c) => {
    const cards = c.sections.map((section, index) => [section[0], ['Professional purpose','Statewide connection','Operational impact'][index], section[1]]);
    const purposeImage = img(c.purposeImage);
    return `<section class="section feature-collection-section feature-offset feature-about-purpose section-alt"><div class="container">${sectionHeading('Why the chapter exists','A statewide professional home for healthcare facilities.','NEVShe gives the people responsible for healthcare environments a focused place to learn, build relationships, and strengthen the work that supports patient care.')}<div class="feature-collection">${cards.map(([title, eyebrow, text], index) => `<article${index === 0 ? ` class="about-purpose-image" role="img" aria-label="Nevada healthcare campus" style="--purpose-image:url('${purposeImage}')"` : ''}><div class="about-purpose-copy"><div class="meta">${eyebrow}</div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div></div></section>`;
  };

  const membershipEditorialAccordion = () => {
    const content = pageContent.membership;
    if (!content) return '';
    const splitText = (text) => {
      const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
      return {
        preview: sentences.slice(0, 2).join(' ').trim(),
        remainder: sentences.slice(2).join(' ').trim()
      };
    };
    return `<section class="section editorial-content-section section-alt membership-editorial"><div class="container">${sectionHeading(content.eyebrow, content.title, content.intro)}<div class="membership-story-accordion">${content.sections.map(([title, text], index) => {
      const parts = splitText(text);
      return `<details class="membership-story" ${index === 0 ? 'open' : ''}><summary><span><strong>${title}</strong><span>${parts.preview}</span></span><span class="membership-story-toggle" aria-hidden="true"></span></summary>${parts.remainder ? `<div class="membership-story-body"><p>${parts.remainder}</p></div>` : ''}</details>`;
    }).join('')}</div></div></section>`;
  };

  const splitEditorialText = (text) => {
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    return {
      preview: sentences.slice(0, 2).join(' ').trim(),
      remainder: sentences.slice(2).join(' ').trim()
    };
  };

  const educationEditorialAccordion = () => {
    const content = pageContent.education;
    if (!content) return '';
    const labels = editorialLayouts.education[1];
    return `<section class="section section-alt education-editorial-accordion"><div class="container">${sectionHeading(content.eyebrow, content.title, content.intro)}<div class="education-story-grid">${content.sections.map(([title, text], index) => {
      const parts = splitEditorialText(text);
      return `<details class="education-story"><summary><span class="editorial-kicker">${labels[index]}</span><strong>${title}</strong><span class="education-story-preview">${parts.preview}</span><span class="education-story-action"><span class="show-closed">Read more</span><span class="show-open">Show less</span></span></summary>${parts.remainder ? `<div class="education-story-body"><p>${parts.remainder}</p></div>` : ''}</details>`;
    }).join('')}</div></div></section>`;
  };

  const educationHighlights = (heading, cards) => `<section class="section education-highlights-section"><div class="container">${sectionHeading(...heading)}<div class="education-highlight-grid">${cards.map(([title, eyebrow, text]) => `<article class="education-highlight"><div class="meta">${eyebrow}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>`;

  function renderHome(c) {
    return `${pageHero(c,true)}
      <section class="section section-alt"><div class="container"><div class="stats">${c.stats.map(([a,b])=>`<div class="stat"><strong data-count>${a}</strong><span>${b}</span></div>`).join('')}</div></div></section>
      ${editorialContent('home')}
      <section class="section"><div class="container">${sectionHeading('Who NEVShe serves',c.sections[0][0],c.sections[0][1])}${linkedCards(c.cards)}</div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section section-dark"><div class="container"><div class="split"><div>${sectionHeading('Events and education','One place for the next NEVShe program.','When a program is announced, this homepage feature will show the date, format, location, speakers, learning objectives, CE/CEC details, and registration link.') }<div class="hero-actions"><a class="btn btn-primary" href="${local('events')}">View upcoming events ${icon('arrow')}</a><a class="btn btn-ghost" href="${notifyUrl}">Get event notifications ${icon('arrow')}</a></div></div><article class="card"><div class="meta">Next program • Details pending</div><h3>Upcoming NEVShe learning opportunity</h3><p>Confirmed program information will appear here as soon as the chapter announces it.</p><a class="card-link" href="${local('events')}">Check current events →</a></article></div></div></section>
      <section class="section"><div class="container"><div class="quote"><blockquote>“Advancing the profession of healthcare facility managers, engineers and technicians through targeted education, professional development, and networking.”</blockquote><cite>NEVShe Mission Statement</cite></div></div></section>
      <section class="section section-alt"><div class="container">${sectionHeading('Stay informed','Education, resources, and chapter updates in one place.',c.sections[1][1])}<div class="grid grid-3"><article class="card"><div class="meta">Education</div><h3>Upcoming learning and professional development</h3><p>Explore programs that support healthcare facility knowledge, safety, operations, leadership, and professional growth.</p><a class="card-link" href="${local('education')}">Explore education →</a></article><article class="card"><div class="meta">Resources</div><h3>Technical guidance and approved references</h3><p>Find useful files and trusted external guidance organized by topic, source, format, and publication details.</p><a class="card-link" href="${local('resources')}">Browse resources →</a></article><article class="card"><div class="meta">News</div><h3>Chapter activity and industry context</h3><p>Follow chapter announcements, event recaps, member and sponsor stories, and relevant industry updates.</p><a class="card-link" href="${local('news')}">Read chapter news →</a></article></div></div></section>
      <div class="marquee" aria-label="Sponsor logo placeholders"><div class="marquee-track">${Array.from({length:12},(_,i)=>`<div class="logo-tile">Sponsor ${i%6+1}</div>`).join('')}</div></div>
      <section class="section"><div class="container"><div class="cta-band"><div class="eyebrow">Ready to connect?</div><h2>Choose how you want to take part.</h2><p>Join NEVShe, ask about sponsorship, or sign up to hear when new events and programs are announced.</p><div class="hero-actions"><a class="btn btn-secondary" href="${joinUrl}">Join NEVShe</a><a class="btn btn-ghost" href="${local('sponsorship')}">Become a Sponsor</a><a class="btn btn-ghost" href="${notifyUrl}">Get event notifications</a></div></div></div></section>`;
  }

  function renderStandard(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="grid grid-3">${c.sections.map((s,i)=>`<article class="card"><div class="card-icon">${i+1}</div><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div></div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section section-alt"><div class="container">${sectionHeading('Explore more','Education, connection, and professional growth.','Choose the area that best matches what you want to learn or do next.')}${linkedCards(c.cards)}</div></section>
      ${c.quote ? `<section class="section"><div class="container"><div class="quote"><blockquote>“${c.quote[0]}”</blockquote><cite>${c.quote[1]}</cite></div></div></section>` : ''}
      <section class="section"><div class="container"><div class="cta-band"><div class="eyebrow">Next step</div><h2>${c.cta ? c.cta[0] : 'Continue exploring'}</h2><p>Connect with NEVShe and find the next opportunity to learn, participate, or ask a question.</p><div class="hero-actions"><a class="btn btn-secondary" href="${c.cta ? resolveHref(c.cta[1]) : local('contact')}">${c.cta ? c.cta[0] : 'Contact NEVShe'} ${icon('arrow')}</a></div></div></div></section>`;
  }

  function renderAbout(c) {
    const audiences = [
      ['Facility managers','Healthcare operations','Connect the planning, operations, safety, efficiency, and resilience work that keeps healthcare environments ready.'],
      ['Engineers and technicians','Technical practice','Build practical knowledge through education, professional development, and exchange with peers across Nevada.'],
      ['Healthcare leaders and industry partners','Shared expertise','Bring leadership perspective, specialized knowledge, and professional relationships into one statewide community.']
    ];
    return `${pageHero(c)}
      ${aboutEditorialFeature(c)}
      ${aboutPurposeCollection(c)}
      ${c.supportImage ? visualStory(c) : ''}
      <section class="section section-dark"><div class="container"><div class="split"><div><div class="section-heading"><div class="eyebrow" style="color:var(--paper)">Mission in action</div><h2>A professional community with a practical purpose.</h2><p>NEVShe’s mission connects three things that belong together: useful education, continued professional growth, and relationships among the people responsible for complex healthcare environments.</p></div><div class="hero-actions"><a class="btn btn-secondary" href="${local('education')}">Explore education ${icon('arrow')}</a><a class="btn btn-ghost" href="${local('events')}">View events ${icon('arrow')}</a></div></div><article class="card"><div class="meta">Mission foundation</div><h3>Advancing healthcare facility professionals across Nevada.</h3><p>“${c.quote[0]}”</p><p style="margin-top:18px"><strong>${c.quote[1]}</strong></p></article></div></div></section>
      ${featureCollection(['Who NEVShe brings together','Different roles. Shared responsibility.','The chapter is designed around the professionals and partners whose decisions, technical work, leadership, and coordination shape healthcare facilities every day.'], audiences, 'bands')}
      <section class="section section-alt"><div class="container">${sectionHeading('Ways to participate','Move from learning about NEVShe to taking part.','Choose the route that matches what you need now—practical learning, statewide professional connection, or information about chapter leadership.')}${linkedCards(c.cards)}</div></section>
      <section class="section"><div class="container"><div class="split"><div>${sectionHeading('One statewide chapter','Connection that reaches beyond one facility or one discipline.','NEVShe creates a shared chapter space where healthcare facility professionals can stay connected to education, events, resources, leadership, and one another.') }<ul class="check-list"><li>Find upcoming chapter education and events.</li><li>Use approved resources and chapter updates between programs.</li><li>Build relationships with professionals and partners across Nevada.</li><li>Understand who leads the chapter and how to get involved.</li></ul></div><div><div class="card" style="padding:clamp(30px,5vw,54px)"><div class="meta">Start here</div><h3 style="font-size:clamp(2rem,4vw,3.4rem)">Find the NEVShe path that fits you.</h3><p>Explore membership if you want ongoing professional connection, review events for the next chapter opportunity, or contact NEVShe with a specific question.</p><div class="hero-actions"><a class="btn btn-primary" href="${local('membership')}">Membership ${icon('arrow')}</a><a class="btn btn-secondary" href="${local('contact')}">Contact NEVShe ${icon('arrow')}</a></div></div></div></div></div></section>`;
  }

  function renderEducation(c) {
    const heroConfig = {
      ...c,
      cta: [c.cta[0], local(c.cta[1])],
      secondary: [c.secondary[0], local(c.secondary[1])]
    };
    const pathways = c.pathways.map(([eyebrow,title,action,destination,image]) => `<article class="education-pathway"><img class="education-pathway-media" src="${img(image)}" alt=""><div class="education-pathway-copy"><div class="eyebrow">${eyebrow}</div><h2>${eyebrow}</h2><p>${title}</p><a class="btn btn-secondary" href="${local(destination)}">${action} ${icon('arrow')}</a></div></article>`).join('');
    return `${pageHero(heroConfig)}
      ${educationEditorialAccordion()}
      ${c.supportImage ? visualStory(c) : ''}
      ${educationHighlights(c.overviewHeading,c.overview)}
      <section class="section education-pathways-section"><div class="container">${sectionHeading('Choose your next step','Learning opportunities and useful resources—without the guesswork.','Use the path that matches what you need today.') }<div class="education-pathways">${pathways}</div></div></section>
      <section class="section section-alt"><div class="container"><div class="cta-band"><div class="eyebrow">Stay informed</div><h2>Get notified when new learning opportunities are announced.</h2><p>Join NEVShe’s event notification list for updates about upcoming programs and chapter activity.</p><div class="hero-actions"><a class="btn btn-secondary" href="${notifyUrl}">Get event notifications ${icon('arrow')}</a></div></div></div></section>`;
  }

  function renderBoardProfile(c, person) {
    const pending = person[2].includes('pending client confirmation');
    return `<section class="section board-profile-view" id="profile"><div class="container"><a class="board-profile-back" href="./">${icon('arrow')} Back to all board members</a><div class="board-profile-layout"><div class="board-profile-portrait"><img src="${img(person[3])}" alt="Portrait of ${person[0]}"></div><article class="board-profile-copy"><div class="eyebrow" style="color:var(--violet)">Individual board profile</div><div class="meta">${person[1]}</div><h1>${person[0]}</h1><p class="board-profile-role">${person[2]}</p>${pending ? `<div class="notice"><strong>Profile details pending:</strong> NEVShe will confirm this person’s organization, professional title, exact board role, and public biography before the complete profile is published.</div>` : `<div class="notice"><strong>Biography pending publication approval:</strong> The full client-supplied biography will be added during private staging after NEVShe confirms accuracy and public-use permission.</div>`}<a class="btn btn-secondary" href="./">Return to board directory ${icon('arrow')}</a></article></div></div></section>`;
  }

  function renderDirectory(c) {
    if (id === 'board-of-directors') {
      const requestedProfile = new URLSearchParams(window.location.search).get('profile');
      const person = c.cards.find((card) => profileSlug(card[0]) === requestedProfile);
      if (person) return renderBoardProfile(c, person);
    }
    const privacyNote = id === 'member-directory' ? `<section class="section"><div class="container"><div class="notice"><strong>Privacy:</strong> the Member Directory includes organization-level information only and excludes personal email addresses, direct phone numbers, accounts, and private profiles.</div></div></section>` : '';
    return `${pageHero(c)}${editorialContent(id, true)}${featureCollection(c.overviewHeading,c.overview,id === 'board-of-directors' ? 'leadership' : 'logo-grid')}<section class="section"><div class="container"><div class="search-panel"><input type="search" aria-label="Search directory" placeholder="Search this directory"><button class="btn btn-primary" type="button">Search</button></div>${c.filters ? `<div class="filter-bar" style="margin-top:18px">${c.filters.map((f,i)=>`<button class="filter" type="button" aria-pressed="${i===0}">${f}</button>`).join('')}</div>` : ''}</div></section>
      <section class="section section-alt"><div class="container">${sectionHeading(...(c.directoryHeading || ['Directory','Browse organizations and chapter leadership.','Confirmed names, organizations, roles, and public profile details will appear here.']))}${id === 'board-of-directors' ? personCards(c.cards) : organizationTiles(c.cards)}</div></section>
      ${c.supportImage ? visualStory(c) : ''}
      ${privacyNote}`;
  }

  const archiveLayoutPreview = (kind) => {
    const isNews = kind === 'news';
    const label = isNews ? 'Story layout example' : 'Resource layout example';
    const titles = isNews ? ['Article title', 'Chapter story title', 'Event recap title'] : ['Resource title', 'Presentation title', 'Reference title'];
    const details = isNews ? ['Publication date · Story type', 'Publication date · Story type', 'Publication date · Story type'] : ['Source · Format · Date', 'Source · Format · Date', 'Source · Format · Date'];
    const action = isNews ? 'Read article' : 'View resource';
    return `<div class="archive-preview-heading"><div><div class="eyebrow" style="color:var(--violet)">Three-column layout preview</div><h2>This is how published ${isNews ? 'stories' : 'resources'} will appear.</h2></div><p>These three cards demonstrate the layout only. They are not published NEVShe content.</p></div><div class="archive-preview-grid">${titles.map((title,index) => `<article class="archive-preview-card"><div class="archive-preview-media preview-tone-${index + 1}" aria-hidden="true"><span>Image</span></div><div class="archive-preview-copy"><div class="preview-only-tag">${label}</div><div class="meta">${details[index]}</div><h3>${title}</h3><p>An approved short introduction will help visitors understand what this item contains before opening it.</p><span class="card-link">${action} →</span></div></article>`).join('')}</div><div class="archive-preview-footer"><span>Additional items continue in rows below.</span><button class="btn btn-secondary" type="button" disabled>Load more</button></div>`;
  };

  const organizationProfiles = (cards) => `<div class="organization-directory">${cards.map((x,i) => `<details class="organization-profile" ${i === 0 ? 'open' : ''}><summary><span class="organization-logo-placeholder" aria-label="Organization logo placeholder">${organizationPlaceholder}</span><span class="organization-summary-copy"><span class="meta">${x[1]}</span><strong>${x[0]}</strong><span>Public organization profile</span></span><span class="organization-toggle"><span class="show-closed">View details</span><span class="show-open">Hide details</span></span></summary><div class="organization-profile-body"><div><h3>Organization overview</h3><p>An approved public summary of the organization and its work will appear here.</p></div><dl><div><dt>Industry / category</dt><dd>Pending confirmation</dd></div><div><dt>Website</dt><dd>Approved public link pending</dd></div><div><dt>Public contact information</dt><dd>Organization-level details only, when approved</dd></div></dl></div></details>`).join('')}</div>`;

  function renderMemberDirectory(c) {
    return `${pageHero(c)}
      <section class="section member-directory-browser"><div class="container">${sectionHeading('Member profiles','Find a professional connected to NEVShe.','Search by member name, organization, or professional role. The five confirmed board members below demonstrate how individual member profiles can appear in the larger directory.')}<div class="directory-search-row"><div class="search-panel"><input type="search" aria-label="Search member profiles" placeholder="Search members, organizations, or roles"><button class="btn btn-primary" type="button">Search</button></div><div class="directory-count"><strong>60+ member community</strong><span>First profiles shown below</span></div></div>${memberProfileCards(pageConfigs['board-of-directors'].cards)}<div class="member-directory-footer"><span>The live directory will show nine profiles initially. Search narrows the list, and Load more reveals the next group.</span><button class="btn btn-secondary" type="button" disabled>Load more members</button></div></div></section>
      ${c.supportImage ? visualStory(c) : ''}
      <section class="member-privacy-strip-section"><div class="container"><div class="member-privacy-strip"><div><div class="eyebrow" style="color:var(--violet)">Member privacy</div><strong>Professional context without private contact details.</strong></div><p>Profiles may show an approved name, portrait, organization, and role. Personal email addresses, direct phone numbers, and private account information are not published.</p></div></div></section>`;
  }

  function renderSponsorDirectory(c) {
    return `${pageHero(c)}
      <section class="section sponsor-directory-simple"><div class="container">${sectionHeading('Sponsor directory','Organizations that support NEVShe.','Browse confirmed sponsor organizations by name. Every listing is selected, approved, and published by NEVShe.')}<div class="search-panel"><input type="search" aria-label="Search sponsor organizations" placeholder="Search sponsor organizations"><button class="btn btn-primary" type="button">Search</button></div><div class="collection-behavior-note"><span>Directory behavior</span><div><strong>Additional sponsors continue in simple rows—not a sideways carousel.</strong><p>Desktop displays three cards per row, tablets display two, and phones display one. The first nine appear initially; a Load more button reveals the next group while search remains available.</p></div></div><div class="sponsor-directory-grid">${organizationTiles(c.cards)}</div></div></section>
      ${c.supportImage ? visualStory(c) : ''}`;
  }

  function renderResources(c) {
    return `${pageHero(c)}
      <section class="section resource-intro-section"><div class="container"><div class="resource-intro"><div class="resource-intro-media" role="img" aria-label="Healthcare facilities professionals reviewing technical information" style="--resource-image:url('${img(c.supportImage)}')"></div><div class="resource-intro-copy"><div class="eyebrow" style="color:var(--violet)">A practical professional library</div><h2>Approved resources, clearly identified.</h2><p>The NEVShe Resource Library will collect chapter materials and trusted professional references in one place. Every published item will identify its source, format, and publication information before it opens.</p><p>No subject categories are shown until NEVShe confirms the actual resources and decides how they should be organized.</p></div></div></div></section>
      <section class="section section-alt resource-browser-section" id="library"><div class="container">${sectionHeading(...c.archiveHeading)}<div class="resource-search-shell"><div class="search-panel"><input type="search" aria-label="Search resources" placeholder="Search published resources"><button class="btn btn-primary" type="button">Search</button></div></div><div class="collection-behavior-note"><span>Library behavior</span><div><strong>Published resources will appear in a responsive card grid.</strong><p>Desktop displays three cards per row, tablets display two, and phones display one. The first nine appear initially; Load more reveals the next group. Search can narrow the collection without using a sideways carousel or endless scroll.</p></div></div>${archiveLayoutPreview('resources')}</div></section>
      <section class="section resource-learning-section"><div class="container"><div class="resource-learning-story"><img src="${img('v5:education-resource-library-v1.png')}" alt="Healthcare facilities professionals reviewing educational resources"><div class="resource-learning-copy"><div class="eyebrow" style="color:var(--violet)">Continue learning</div><h2>Build on what you learn at NEVShe programs.</h2><p>The Resource Library gives healthcare facility managers, engineers, technicians, and industry partners a place to revisit useful material after an event and discover professional information between programs.</p><p>As the collection grows, members can return for approved presentations, recordings, technical references, and chapter materials that support safer, more efficient healthcare environments.</p><div class="hero-actions"><a class="btn btn-secondary" href="${local('education')}">Explore education ${icon('arrow')}</a><a class="btn btn-ghost resource-story-link" href="${local('events')}">View upcoming events</a></div></div></div></div></section>`;
  }

  function renderNews(c) {
    return `${pageHero(c)}${c.supportImage ? visualStory(c) : ''}
      <section class="section section-alt" id="library"><div class="container"><div class="collection-behavior-note"><span>News archive behavior</span><div><strong>Published stories will appear in a responsive three-column archive.</strong><p>The first six articles appear initially, followed by a Load more button for the next group. Phones use one card per row. The archive will not use a sideways carousel or endless scrolling.</p></div></div>${archiveLayoutPreview('news')}<div class="news-preview-action"><a class="btn btn-primary" href="${notifyUrl}">Get notifications ${icon('arrow')}</a></div></div></section>`;
  }

  function renderArchive(c) {
    const collectionVariant = id === 'events' ? 'steps' : id === 'resources' ? 'shelves' : 'newsroom';
    return `${pageHero(c)}${editorialContent(id, true)}${featureCollection(c.overviewHeading,c.overview,collectionVariant)}${c.supportImage ? visualStory(c) : ''}<section class="section"><div class="container"><div class="search-panel"><input type="search" aria-label="Search ${c.name}" placeholder="Search ${c.name.toLowerCase()}"><button class="btn btn-primary" type="button">Search</button></div><div class="filter-bar" style="margin-top:18px">${c.filters.map((f,i)=>`<button class="filter" type="button" aria-pressed="${i===0}">${f}</button>`).join('')}</div></div></section>
      <section class="section section-alt" id="library"><div class="container">${sectionHeading(...(c.archiveHeading || [`Browse ${c.name.toLowerCase()}`,'Find the information that matters to you.','Use search and filters to narrow the collection. New items will appear here as they are published.']))}${archiveCards(c.cards,id)}</div></section>
      <section class="section"><div class="container"><div class="system-state"><div><div class="code">0</div><h2>No matching results</h2><p>Clear the filters, try another term, or browse all content.</p><button class="btn btn-secondary" type="button">Clear filters</button></div></div></div></section>`;
  }

  function renderConversion(c) {
    const openingContent = id === 'membership' ? membershipEditorialAccordion() : editorialContent(id, true);
    return `${pageHero(c)}${openingContent}${featureCollection(['Why participate','Learn, connect, and support the statewide community.','NEVShe participation is centered on professional education, statewide relationships, and stronger healthcare environments. Final membership or sponsorship terms will be published after chapter confirmation.'],c.cards,id === 'membership' ? 'membership' : 'sponsor')}
      ${c.supportImage ? visualStory(c) : ''}
      ${featureCollection(c.audienceHeading,c.audiences,id === 'membership' ? 'audiences' : 'sectors',true)}
      <section class="section section-alt"><div class="container"><div class="split"><div><div class="eyebrow" style="color:var(--violet)">How it works</div><h2 style="color:var(--chapter);font-family:var(--serif);font-size:clamp(2.4rem,5vw,4.5rem);font-weight:500;margin:.3em 0">A simple path to participate.</h2><ul class="check-list"><li>Review the available membership or sponsorship information.</li><li>Use the primary action to continue to NEVShe’s registration form.</li><li>Complete the existing payment and confirmation process off-site.</li></ul></div><div class="card"><div class="meta">Registration</div><h3>Continue securely off-site</h3><p>The registration button opens NEVShe’s existing external registration destination.</p><div class="hero-actions"><a class="btn btn-primary" href="${joinUrl}">${c.cta[0]} ${icon('arrow')}</a></div></div></div></div></section>
      <section class="section"><div class="container">${sectionHeading('Questions','Helpful answers before registration.','Additional details will be added as membership and sponsorship information is confirmed.')}<div class="faq">${c.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;
  }

  function renderContact(c) {
    return `${pageHero(c)}<section class="section contact-simple-section"><div class="container"><div class="contact-simple-grid"><form class="card form-card contact-form" onsubmit="return false"><div class="eyebrow" style="color:var(--violet)">Send a message</div><h2>How can we help?</h2><p>Complete the form and a member of the NEVShe team will follow up.</p><div class="form-grid"><div class="field"><label for="first">First name</label><input id="first" autocomplete="given-name"></div><div class="field"><label for="last">Last name</label><input id="last" autocomplete="family-name"></div><div class="field field-full"><label for="email">Email address</label><input id="email" type="email" autocomplete="email"></div><div class="field field-full"><label for="topic">What can we help with?</label><select id="topic"><option>Select a topic</option><option>General question</option><option>Membership</option><option>Sponsorship</option><option>Events or education</option></select></div><div class="field field-full"><label for="message">Message</label><textarea id="message"></textarea></div></div><button class="btn btn-primary" type="submit">Send message ${icon('arrow')}</button></form><div class="contact-simple-media"><img src="${img(c.supportImage)}" alt="Professional responding to a NEVShe inquiry"><div class="contact-media-note"><div class="eyebrow">NEVShe</div><h2>Let’s connect.</h2><p>Questions about the chapter, membership, sponsorship, events, or education are welcome.</p></div></div></div></div></section>`;
  }

  function renderLegal(c) {
    return `${pageHero(c)}<section class="section legal-page-section"><div class="container"><div class="legal-meta"><span>Effective date</span><strong>${c.legalUpdated}</strong><span>Questions may be submitted through the NEVShe Contact page.</span></div><div class="legal-layout"><nav class="legal-nav" aria-label="On this page">${c.sections.map((s,i)=>`<a href="#legal-${i+1}">${i+1}. ${s[0]}</a>`).join('')}</nav><article class="legal-copy">${c.sections.map((s,i)=>`<section id="legal-${i+1}"><h2>${s[0]}</h2><div class="legal-section-body">${s[1]}</div></section>`).join('')}<div class="legal-contact"><h2>Contact NEVShe</h2><p>Use the contact form for questions, privacy requests, accessibility assistance, or concerns about these terms.</p><a class="btn btn-secondary" href="${local('contact')}">Contact NEVShe ${icon('arrow')}</a></div></article></div></div></section>`;
  }

  function renderSearch(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="search-panel"><input type="search" value="water management" aria-label="Search query"><button class="btn btn-primary" type="button">Search</button></div><p style="margin:22px 0 35px"><strong>Search results</strong> for “water management”</p><div class="grid grid-2"><article class="card"><div class="meta">Education</div><h3>Water-management learning topic</h3><p>Find learning opportunities related to water management.</p><span class="card-link">Open result →</span></article><article class="card"><div class="meta">Resources</div><h3>Water-management resource</h3><p>Open a resource with source, format, and topic information.</p><span class="card-link">Open result →</span></article></div></div></section><section class="section section-alt"><div class="container"><div class="system-state"><div><div class="code">0</div><h2>No results for that search</h2><p>Try a shorter phrase, check spelling, or browse events, education, resources, and news.</p><a class="btn btn-secondary" href="${local('resources')}">Browse resources</a></div></div></div></section>`;
  }

  function render404(c) {
    return `${pageHero(c)}<section class="section"><div class="container"><div class="system-state"><div><div class="code">404</div><h2>Let’s find another route.</h2><p>The page may have moved or the address may be incomplete.</p><div class="hero-actions" style="justify-content:center"><a class="btn btn-primary" href="${local('home')}">Go home</a><a class="btn btn-secondary" href="${local('search-results')}">Search the site</a></div></div></div><div class="grid grid-3" style="margin-top:24px"><a class="card" href="${local('events')}" style="text-decoration:none"><h3>Events</h3><p>Find upcoming learning and connection opportunities.</p></a><a class="card" href="${local('resources')}" style="text-decoration:none"><h3>Resources</h3><p>Browse the professional resource library.</p></a><a class="card" href="${local('contact')}" style="text-decoration:none"><h3>Contact</h3><p>Ask NEVShe for help finding what you need.</p></a></div></div></section>`;
  }

  function renderPage() {
    const c = pageConfigs[id];
    if (!c) return;
    let main = '';
    if (c.type === 'home') main = renderHome(c);
    else if (c.type === 'education') main = renderEducation(c);
    else if (c.type === 'about') main = renderAbout(c);
    else if (c.type === 'standard') main = renderStandard(c);
    else if (id === 'member-directory') main = renderMemberDirectory(c);
    else if (id === 'resources') main = renderResources(c);
    else if (id === 'news') main = renderNews(c);
    else if (id === 'sponsor-directory') main = renderSponsorDirectory(c);
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
    if (slug === 'board-directory-card') return `${personCards([['Name pending','President','Employer and title pending'],['Name pending','Vice President','Employer and title pending'],['Name pending','Director','Employer and title pending']])}<div class="notice" style="margin-top:28px">Headshots will replace the neutral portrait fallback when NEVShe supplies approved photos. Every board member uses the same card size and visual treatment.</div>`;
    if (slug === 'member-organization-directory-card') return `<div class="filter-bar">${['All organizations','Healthcare provider','Engineering','Construction','Services'].map((x,i)=>`<button class="filter" aria-pressed="${i===0}">${x}</button>`).join('')}</div><div style="margin-top:28px">${organizationProfiles([['Organization name pending','Industry / category pending'],['Organization name pending','Industry / category pending'],['Organization name pending','Industry / category pending']])}</div><div class="notice" style="margin-top:28px">Organization logos replace the neutral placeholder when approved assets are supplied. Expanded details remain limited to approved public organization information.</div>`;
    if (slug === 'news-archive-card-single-post') return `${miniCards([['Featured chapter story','Chapter News','Hero card with image, excerpt, date, and category.'],['Industry update','Industry Updates','Standard archive card.'],['Event recap','Event Recap','Related event and resource links.']])}<article class="card form-card" style="margin-top:28px"><div class="meta">Single post typography</div><h3 style="font-size:2.5rem">Article headline</h3><p style="font-size:1.15rem">A concise introduction leads into the story. Published posts include a title, excerpt, category, featured image, article body, and sharing options.</p><div class="social-row"><b>Share</b><a href="#">in</a><a href="#">f</a><a href="#">↗</a></div></article>`;
    if (slug === 'search-no-results-404') return `<div class="grid grid-3"><div class="system-state"><div><div class="code" style="font-size:5rem">3</div><h2 style="font-size:2rem">Search results</h2><p>Query, count, excerpts, content types.</p></div></div><div class="system-state"><div><div class="code" style="font-size:5rem">0</div><h2 style="font-size:2rem">No results</h2><p>Recovery suggestions and clear filters.</p></div></div><div class="system-state"><div><div class="code" style="font-size:5rem">404</div><h2 style="font-size:2rem">Page not found</h2><p>Home, search, events, resources, contact.</p></div></div></div>`;
    if (slug === 'contact-form-notification-routing') return `<div class="grid grid-2"><form class="card form-card" onsubmit="return false"><div class="form-grid"><div class="field"><label>Name</label><input></div><div class="field"><label>Email</label><input type="email"></div><div class="field field-full"><label>Topic</label><select><option>General inquiry</option><option>Membership</option><option>Sponsorship</option><option>Events / education</option></select></div><div class="field field-full"><label>Message</label><textarea></textarea></div></div><button class="btn btn-primary" style="margin-top:16px">Submit</button><p class="form-note">Mockup only — no submission.</p></form><div>${sectionHeading('Routing model','One form, clear intent, separate external lists.','The contact form routes by approved topic/recipient. Join/Sponsor and event-notification calls to action remain separate Constant Contact destinations.')}<ul class="check-list"><li>Labels, keyboard order, errors, confirmation, and consent.</li><li>Spam protection and authenticated delivery tested on staging.</li><li>No payment or membership data collected by this form.</li><li>Final recipient and retention details feed the Privacy Policy.</li></ul></div></div>`;
    if (slug === 'global-component-library') return componentLibrary();
    return '<p>Template preview.</p>';
  }

  function componentLibrary() {
    return `<div class="component-index">
      <div class="component-sample wide">${sectionHeading('01 • Heroes & orientation','Statewide hero, interior hero, breadcrumbs, section heading.','The system scales from cinematic landing moments to compact utility pages.')}</div>
      <div class="component-sample"><div class="stats"><div class="stat"><strong>60+</strong><span>members</span></div><div class="stat"><strong>1</strong><span>statewide chapter</span></div></div><p class="spec-label" style="margin-top:14px">Animated statistics</p></div>
      <div class="component-sample"><div class="card"><div class="meta">Featured event</div><h3>Upcoming event</h3><p>Date, place, learning details, and registration state.</p><div class="card-link">View event →</div></div><p class="spec-label" style="margin-top:14px">Featured event + event card</p></div>
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
    if (id === 'global-footer') {
      document.getElementById('app').innerHTML = `${reviewBar(`${cfg[0]} template`)}${footer()}`;
      return;
    }
    document.getElementById('app').innerHTML = `${reviewBar(`${cfg[0]} template`)}${header('')}<main id="main"><section class="template-hero"><div class="container"><span class="draft-chip">Reusable template • ${version}</span><div class="eyebrow" style="color:var(--violet);margin-top:22px">${cfg[1]}</div><h1>${cfg[0]}</h1><p>${cfg[2]}</p></div></section><section class="section"><div class="container">${templateContent(id)}</div></section></main>${footer()}`;
  }

  function renderHub() {
    const pages = Object.entries(pageConfigs).sort((a,b)=>a[1].n-b[1].n);
    const templates = Object.entries(templateConfigs);
    const openNew = 'target="_blank" rel="noopener noreferrer"';
    const motionApproved = new Set(['home', 'about-nevshe', 'board-of-directors', 'events', 'education', 'membership', 'sponsorship', 'sponsor-directory', 'news', 'contact']);
    const awaitingClient = new Set(['privacy-policy', 'terms-of-use', 'accessibility-statement', 'search-results', '404']);
    const currentTemplateVersions = {'global-header-desktop-navigation':'v1.2','full-screen-mobile-navigation':'v1.2','global-footer':'v1.4','interior-page-hero':'v1.2','event-archive-card-single':'v1.2','sponsor-directory-card-marquee':'v1.2','resource-archive-card-single':'v1.2','board-directory-card':'v1.3','member-organization-directory-card':'v1.3','news-archive-card-single-post':'v1.2','search-no-results-404':'v1.2','contact-form-notification-routing':'v1.2','global-component-library':'v1.3'};
    const pageCards = pages.map(([slug,c])=>{ const v=currentVersions[slug]; const motion=motionApproved.has(slug); const client=awaitingClient.has(slug); const statusClass=motion ? 'approved' : client ? 'client' : 'review'; const statusText=motion ? 'Approved for motion' : client ? 'Approved — waiting client' : 'In review'; const cardClass=motion ? ' motion-approved' : client ? ' client-approved' : ''; return `<a class="review-card${cardClass}" href="pages/${slug}-${v}/" ${openNew}><span class="review-card-top"><span class="number">${String(c.n).padStart(2,'0')}</span><span class="review-status ${statusClass}">${statusText}</span></span><h3>${c.name}</h3><p>${c.intro}</p><footer><span>Page mockup</span><span>${v} ↗</span></footer></a>`; }).join('');
    const templateCards = templates.map(([slug,c],i)=>{ const v=currentTemplateVersions[slug]; return `<a class="review-card template" href="templates/${slug}-${v}/" ${openNew}><span class="review-card-top"><span class="number">T${String(i+1).padStart(2,'0')}</span><span class="review-status component">Component review</span></span><h3>${c[0]}</h3><p>${c[2]}</p><footer><span>${c[1]}</span><span>${v} ↗</span></footer></a>`; }).join('');
    document.getElementById('app').innerHTML = `<div class="hub-shell">${reviewBar('Complete mockup hub')}<main id="main"><section class="hub-hero"><div class="container"><div class="eyebrow" style="color:var(--violet)">NEVShe website review</div><h1>Complete page and component mockups.</h1><p>Open any page or reusable component below. Each item opens in a separate tab or window so this hub stays available.</p><div class="hub-approval-summary" aria-label="Review status summary"><span><strong>10</strong> approved for motion</span><span><strong>5</strong> approved—waiting for client</span><span><strong>2</strong> pages still in internal review</span></div></div></section><section class="section"><div class="container">${sectionHeading('Pages','Review each page on its own.','Motion pages, client-approval pages, and pages still in internal review are labeled separately. Pages 13–17 do not require motion.')}<div class="review-grid">${pageCards}</div></div></section><section class="section section-alt"><div class="container">${sectionHeading('Components','Reusable parts of the website.','Open a component to review navigation, footer, cards, forms, search states, and other shared elements.')}<div class="review-grid">${templateCards}</div></div></section></main></div>`;
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
