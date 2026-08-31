import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const mockups = path.resolve(import.meta.dirname, '..');
const assets = path.join(mockups, 'assets');
const pagesDir = path.join(mockups, 'pages');
const systemJs = fs.readFileSync(path.join(assets, 'mockup-system-v1.5.js'), 'utf8');
const systemCss = fs.readFileSync(path.join(assets, 'mockup-system-v1.5.css'), 'utf8');
const hubJs = fs.readFileSync(path.join(assets, 'mockup-hub.js'), 'utf8');

const revisions = [
  ['sponsorship', 'v1.5', 'v1.4'],
  ['sponsor-directory', 'v1.5', 'v1.4'],
  ['resources', 'v1.4', 'v1.3'],
  ['news', 'v1.5', 'v1.4']
];

const checks = [];
const check = (label, pass, detail = '') => checks.push({ label, pass: Boolean(pass), detail });

for (const [slug, version, superseded] of revisions) {
  const wrapper = path.join(pagesDir, `${slug}-${version}`, 'index.html');
  const prior = path.join(pagesDir, `${slug}-${superseded}`, 'index.html');
  const exists = fs.existsSync(wrapper);
  const html = exists ? fs.readFileSync(wrapper, 'utf8') : '';
  check(`${slug} ${version} wrapper exists`, exists, wrapper);
  check(`${slug} ${version} metadata`, html.includes(`data-artifact-id="${slug}"`) && html.includes(`data-version="${version}"`));
  check(`${slug} ${version} uses v1.5 system`, html.includes('mockup-system-v1.5.css') && html.includes('mockup-system-v1.5.js?build=20260831d'));
  check(`${slug} ${version} remains page-only`, !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(html));
  check(`${slug} preserves ${superseded}`, fs.existsSync(prior), prior);
  check(`hub points to ${slug} ${version}`, hubJs.includes(`'${slug}':'${version}'`));
}

const expectedAssets = [
  'sponsorship-community-support-v3.png',
  'sponsor-directory-supporters-v3.png',
  'resources-professional-library-v3.png',
  'news-chapter-editorial-v3.png'
];
for (const file of expectedAssets) {
  const full = path.join(assets, 'images', 'generated-v3', file);
  check(`${file} exists and is substantial`, fs.existsSync(full) && fs.statSync(full).size > 100000, full);
  check(`${file} is referenced`, systemJs.includes(`v3:${file}`));
}

check('versioned image resolver supports v3', systemJs.includes("name.match(/^v([1-9]):(.+)$/)"));
check('sponsorship uses seamless tone', systemJs.includes("heroTone: 'seamless'"));
check('sponsor directory uses open tone', systemJs.includes("heroTone: 'open'"));
check('resources and news use soft tone', (systemJs.match(/heroTone: 'soft'/g) || []).length >= 2);
check('smooth overlay replaces former hard treatment', systemCss.includes('.interior-hero.hero-tone-open::after') && systemCss.includes('.interior-hero.hero-tone-soft::after') && !systemCss.includes('rgba(19,23,83,.97)'));
check('hub keeps new-window review behavior', hubJs.includes('target="_blank" rel="noopener noreferrer"'));

const failed = checks.filter((item) => !item.pass);
for (const item of checks) console.log(`${item.pass ? 'PASS' : 'FAIL'} ${item.label}${item.detail ? ` — ${item.detail}` : ''}`);
console.log(`\n${checks.length - failed.length}/${checks.length} checks passed.`);
if (failed.length) process.exit(1);
