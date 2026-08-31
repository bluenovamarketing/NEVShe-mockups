import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const mockups = path.resolve(import.meta.dirname, '..');
const assets = path.join(mockups, 'assets');
const pagesDir = path.join(mockups, 'pages');
const systemJs = fs.readFileSync(path.join(assets, 'mockup-system-v1.4.js'), 'utf8');
const systemCss = fs.readFileSync(path.join(assets, 'mockup-system-v1.4.css'), 'utf8');
const hubJs = fs.readFileSync(path.join(assets, 'mockup-hub.js'), 'utf8');

const currentPages = [
  ['home', 'v1.4', 'v1.3'],
  ['about-nevshe', 'v1.4', 'v1.3'],
  ['board-of-directors', 'v1.4', 'v1.3'],
  ['events', 'v1.3', 'v1.2'],
  ['education', 'v1.3', 'v1.2'],
  ['membership', 'v1.3', 'v1.2'],
  ['member-directory', 'v1.4', 'v1.3'],
  ['sponsorship', 'v1.4', 'v1.3'],
  ['sponsor-directory', 'v1.4', 'v1.3'],
  ['resources', 'v1.3', 'v1.2'],
  ['news', 'v1.4', 'v1.3'],
  ['contact', 'v1.4', 'v1.3']
];

const checks = [];
const check = (label, pass, detail = '') => checks.push({ label, pass: Boolean(pass), detail });

const configBlock = (slug) => {
  const start = systemJs.indexOf(`    '${slug}': {`);
  if (start < 0) return '';
  const next = systemJs.indexOf("\n    '", start + 8);
  const templates = systemJs.indexOf('\n  const templateConfigs', start);
  const end = next > -1 && (templates < 0 || next < templates) ? next : templates;
  return systemJs.slice(start, end > -1 ? end : systemJs.length);
};

const field = (slug, name) => configBlock(slug).match(new RegExp(`${name}: '([^']+)'`))?.[1] || '';

for (const [slug, version, superseded] of currentPages) {
  const wrapper = path.join(pagesDir, `${slug}-${version}`, 'index.html');
  const prior = path.join(pagesDir, `${slug}-${superseded}`, 'index.html');
  const exists = fs.existsSync(wrapper);
  const html = exists ? fs.readFileSync(wrapper, 'utf8') : '';
  check(`${slug} ${version} wrapper exists`, exists, wrapper);
  check(`${slug} ${version} metadata is correct`, html.includes(`data-artifact-id="${slug}"`) && html.includes(`data-version="${version}"`));
  check(`${slug} ${version} uses seamless hero system`, html.includes('mockup-system-v1.4.css') && html.includes('mockup-system-v1.4.js?build=20260831c'));
  check(`${slug} ${version} remains page-only`, !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(html));
  check(`${slug} preserves superseded ${superseded}`, fs.existsSync(prior), prior);
  check(`hub points to ${slug} ${version}`, hubJs.includes(`'${slug}':'${version}'`));
}

const heroRows = currentPages.map(([slug]) => [slug, field(slug, 'image')]);
const heroNames = heroRows.map(([, image]) => image.replace(/^v2:/, ''));
check('all 12 revised pages retain hero imagery', heroNames.every(Boolean), JSON.stringify(heroRows));
check('all 12 revised hero images remain unique', new Set(heroNames).size === heroNames.length, JSON.stringify(heroRows));

for (const [slug, image] of heroRows) {
  const isV2 = image.startsWith('v2:');
  const file = path.join(assets, 'images', isV2 ? 'generated-v2' : 'generated-v1', isV2 ? image.slice(3) : image);
  check(`${slug} hero asset exists`, fs.existsSync(file) && fs.statSync(file).size > 100_000, file);
}

check('interior hero photo covers the full hero', systemCss.includes('.interior-hero.has-image::before { content: \'\'; position: absolute; inset: 0;'));
check('old 48-percent split is absent', !systemCss.includes('inset: 0 0 0 48%'));
check('interior hero uses a progressive gradient blend', systemCss.includes('rgba(19,23,83,.97)') && systemCss.includes('rgba(37,45,148,.7)') && systemCss.includes('rgba(20,18,69,.16)'));
check('Home and About motion flags are removed', !/\b(?:motion|storyMotion): true\b/.test(configBlock('home')) && !/\b(?:motion|storyMotion): true\b/.test(configBlock('about-nevshe')));
check('page hero markup contains no orbit field or decorative rotating line', !/motionField\(['"](?:hero|interior)['"]\)/.test(systemJs) && !systemJs.includes('<div class="hero-lines"></div>'));
check('supporting image markup contains no sweep or motion field', !systemJs.includes("'<span class=\"visual-sweep\"") && !/motionField\(['"]story['"]\)/.test(systemJs));
check('hero image is static', !/\.hero::before[^\n]*animation:/.test(systemCss));
check('hub describes static Home/About and seamless heroes', hubJs.includes('Static Home/About + seamless photo heroes') && hubJs.includes('smooth readability gradient'));
check('hub review links open safely in a new tab', hubJs.includes('target="_blank" rel="noopener noreferrer"'));

const failures = checks.filter((item) => !item.pass);
for (const item of checks) {
  console.log(`${item.pass ? 'PASS' : 'FAIL'}  ${item.label}${item.detail ? ` :: ${item.detail}` : ''}`);
}
console.log(`\n${checks.length - failures.length}/${checks.length} checks passed.`);
if (failures.length) process.exitCode = 1;
