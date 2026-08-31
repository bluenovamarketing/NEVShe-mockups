import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const mockups = path.resolve(import.meta.dirname, '..');
const assets = path.join(mockups, 'assets');
const pagesDir = path.join(mockups, 'pages');
const v13JsPath = path.join(assets, 'mockup-system-v1.3.js');
const v12JsPath = path.join(assets, 'mockup-system-v1.2.js');
const hubJsPath = path.join(assets, 'mockup-hub.js');
const cssPath = path.join(assets, 'mockup-system-v1.3.css');

const v13Pages = [
  'home',
  'about-nevshe',
  'board-of-directors',
  'member-directory',
  'sponsorship',
  'sponsor-directory',
  'news',
  'contact'
];

const currentPages = [
  ['home', 'v1.3'],
  ['about-nevshe', 'v1.3'],
  ['board-of-directors', 'v1.3'],
  ['events', 'v1.2'],
  ['education', 'v1.2'],
  ['membership', 'v1.2'],
  ['member-directory', 'v1.3'],
  ['sponsorship', 'v1.3'],
  ['sponsor-directory', 'v1.3'],
  ['resources', 'v1.2'],
  ['news', 'v1.3'],
  ['contact', 'v1.3'],
  ['privacy-policy', 'v1.2'],
  ['terms-of-use', 'v1.2'],
  ['accessibility-statement', 'v1.2'],
  ['search-results', 'v1.2'],
  ['404', 'v1.2']
];

const imageBearingPages = currentPages.slice(0, 12);
const supportPages = ['home', 'about-nevshe', 'board-of-directors', 'sponsorship', 'sponsor-directory'];
const expectedV2Assets = [
  'about-statewide-network-v2.png',
  'contact-professional-connection-v2.png',
  'member-directory-networking-v2.png',
  'sponsorship-systems-partnership-v2.png',
  'sponsor-directory-showcase-v2.png',
  'news-infrastructure-story-v2.png',
  'home-connected-campus-v2.png',
  'about-statewide-campus-v2.png',
  'board-leadership-planning-v2.png',
  'sponsorship-workshop-v2.png',
  'sponsor-directory-specialties-v2.png'
];

const read = (file) => fs.readFileSync(file, 'utf8');
const v13Js = read(v13JsPath);
const v12Js = read(v12JsPath);
const hubJs = read(hubJsPath);
const css = read(cssPath);
const checks = [];

const check = (label, pass, detail = '') => {
  checks.push({ label, pass: Boolean(pass), detail });
};

const configBlock = (source, slug) => {
  const start = source.indexOf(`    '${slug}': {`);
  if (start < 0) return '';
  const next = source.indexOf("\n    '", start + 8);
  const templates = source.indexOf('\n  const templateConfigs', start);
  const end = next > -1 && (templates < 0 || next < templates) ? next : templates;
  return source.slice(start, end > -1 ? end : source.length);
};

const field = (source, slug, name) => {
  const block = configBlock(source, slug);
  const match = block.match(new RegExp(`${name}: '([^']+)'`));
  return match?.[1] || '';
};

for (const slug of v13Pages) {
  const file = path.join(pagesDir, `${slug}-v1.3`, 'index.html');
  const exists = fs.existsSync(file);
  const html = exists ? read(file) : '';
  check(`${slug} v1.3 wrapper exists`, exists, file);
  check(`${slug} v1.3 wrapper metadata`, html.includes(`data-artifact-id="${slug}"`) && html.includes('data-version="v1.3"'));
  check(`${slug} uses v1.3 system`, html.includes('mockup-system-v1.3.css') && html.includes('mockup-system-v1.3.js'));
  check(`${slug} page-only wrapper`, !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(html));
}

const heroRows = imageBearingPages.map(([slug, version]) => {
  const source = version === 'v1.3' ? v13Js : v12Js;
  return [slug, field(source, slug, 'image')];
});
const heroNames = heroRows.map(([, image]) => image.replace(/^v2:/, ''));
check('all 12 current image-bearing pages define a hero', heroNames.every(Boolean), JSON.stringify(heroRows));
check('all 12 current page heroes are unique', new Set(heroNames).size === heroNames.length, JSON.stringify(heroRows));

const supportRows = supportPages.map((slug) => [slug, field(v13Js, slug, 'supportImage')]);
const supportNames = supportRows.map(([, image]) => image.replace(/^v2:/, ''));
check('five core pages define supporting imagery', supportNames.every(Boolean), JSON.stringify(supportRows));
check('all supporting images are unique', new Set(supportNames).size === supportNames.length, JSON.stringify(supportRows));
check('supporting images do not repeat a hero', supportNames.every((name) => !heroNames.includes(name)));

for (const name of expectedV2Assets) {
  const file = path.join(assets, 'images', 'generated-v2', name);
  check(`${name} exists`, fs.existsSync(file) && fs.statSync(file).size > 100_000, file);
}

check('Home has hero and story motion enabled', /'home':[\s\S]*?motion: true,[\s\S]*?storyMotion: true/.test(v13Js));
check('About has hero and story motion enabled', /'about-nevshe':[\s\S]*?motion: true,[\s\S]*?storyMotion: true/.test(v13Js));
for (const token of ['motion-field', '@keyframes orbit-turn', '@keyframes node-pulse', '@keyframes visual-pan', '@media (prefers-reduced-motion: reduce)']) {
  check(`motion system includes ${token}`, css.includes(token));
}

check('hub declares eight v1.3 current pages', v13Pages.every((slug) => hubJs.includes(`'${slug}':'v1.3'`)));
check('hub summary declares the 8/9/13 review split', hubJs.includes('8 image-led page revisions') && hubJs.includes('9 page-only mockups') && hubJs.includes('13 reusable-system reviews'));
check('hub links open in a new window/tab safely', hubJs.includes('target="_blank" rel="noopener noreferrer"'));

const localTargets = new Set();
for (const source of [v13Js, hubJs]) {
  for (const match of source.matchAll(/(?:href=\"|href: |href=|['\"])(?:\.\.\/|pages\/)([a-z0-9-]+-v1\.[123])\/?/g)) {
    localTargets.add(match[1]);
  }
}
for (const target of localTargets) {
  check(`internal target ${target} exists`, fs.existsSync(path.join(pagesDir, target, 'index.html')));
}

const failures = checks.filter((item) => !item.pass);
for (const item of checks) {
  console.log(`${item.pass ? 'PASS' : 'FAIL'}  ${item.label}${item.detail ? ` :: ${item.detail}` : ''}`);
}
console.log(`\n${checks.length - failures.length}/${checks.length} checks passed.`);
if (failures.length) process.exitCode = 1;
