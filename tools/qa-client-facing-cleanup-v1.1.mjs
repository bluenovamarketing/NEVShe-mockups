import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const rendererPath = path.join(root, 'assets', 'mockup-system-client-v1.1.js');
const renderer = fs.readFileSync(rendererPath, 'utf8');
const hub = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const pages = {
  home: 'v1.6', 'about-nevshe': 'v1.5', 'board-of-directors': 'v1.5',
  events: 'v1.4', education: 'v1.4', membership: 'v1.4',
  'member-directory': 'v1.5', sponsorship: 'v1.7', 'sponsor-directory': 'v1.6',
  resources: 'v1.5', news: 'v1.6', contact: 'v1.5',
  'privacy-policy': 'v1.3', 'terms-of-use': 'v1.3', 'accessibility-statement': 'v1.3',
  'search-results': 'v1.3', '404': 'v1.3'
};

const templates = {
  'global-header-desktop-navigation': 'v1.2', 'full-screen-mobile-navigation': 'v1.2',
  'global-footer': 'v1.3', 'interior-page-hero': 'v1.2',
  'event-archive-card-single': 'v1.2', 'sponsor-directory-card-marquee': 'v1.2',
  'resource-archive-card-single': 'v1.2', 'board-directory-card': 'v1.2',
  'member-organization-directory-card': 'v1.2', 'news-archive-card-single-post': 'v1.2',
  'search-no-results-404': 'v1.2', 'contact-form-notification-routing': 'v1.2',
  'global-component-library': 'v1.3'
};

let passed = 0;
const failures = [];
const check = (condition, label) => {
  if (condition) passed += 1;
  else failures.push(label);
};

const banned = /agency[ -]draft|review direction|review the [^<\n]+ system|unique page image|page-specific asset|editorial break|proposed positioning|implementation intent|review guidance/i;
check(!banned.test(renderer), 'renderer contains internal reviewer language');
check(hub.includes('mockup-system-client-v1.1.js?build=20260831i'), 'hub does not load the client-facing renderer');
check(renderer.includes('target="_blank" rel="noopener noreferrer"'), 'hub cards do not open safely in a new window');
check(renderer.includes('© ${new Date().getFullYear()} NEVShe'), 'footer copyright year is missing');
check(renderer.includes('Website designed by <a href="https://bluenovamarketing.com/"'), 'Blue Nova credit link is missing');
check(renderer.includes('href="https://nevshe.org/sitemap/"'), 'Sitemap link is missing');
check(!renderer.includes('Mockup content is not approved for publication'), 'obsolete footer disclaimer remains');
check(!renderer.includes('Statewide Nevada • Proposed website system'), 'obsolete footer system label remains');
check(renderer.includes("document.getElementById('app').innerHTML = `${reviewBar(`${c.name} page`)}<main"), 'page-only renderer changed unexpectedly');
check(!renderer.includes('Implementation intent:'), 'template implementation note remains');

for (const [slug, version] of Object.entries(pages)) {
  const file = path.join(root, 'pages', `${slug}-${version}`, 'index.html');
  check(fs.existsSync(file), `missing page ${slug}-${version}`);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  check(!banned.test(html), `${slug}-${version} wrapper contains reviewer language`);
  check(html.includes(`data-artifact-id="${slug}" data-version="${version}"`), `${slug}-${version} metadata mismatch`);
  check(html.includes('mockup-system-client-v1.1.js?build=20260831i'), `${slug}-${version} renderer mismatch`);
  check(renderer.includes(`'${slug}': '${version}'`), `${slug} current-version map mismatch`);
}

for (const [slug, version] of Object.entries(templates)) {
  const file = path.join(root, 'templates', `${slug}-${version}`, 'index.html');
  check(fs.existsSync(file), `missing template ${slug}-${version}`);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  check(!banned.test(html), `${slug}-${version} wrapper contains reviewer language`);
  check(html.includes(`data-artifact-id="${slug}" data-version="${version}"`), `${slug}-${version} metadata mismatch`);
  check(html.includes('mockup-system-client-v1.1.js?build=20260831i'), `${slug}-${version} renderer mismatch`);
  check(renderer.includes(`'${slug}':'${version}'`), `${slug} template-version map mismatch`);
}

console.log(`Client-facing cleanup QA: ${passed} passed, ${failures.length} failed.`);
if (failures.length) {
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
