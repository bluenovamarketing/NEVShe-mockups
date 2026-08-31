import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const mockups = path.resolve(import.meta.dirname, '..');
const assets = path.join(mockups, 'assets');
const wrapper = path.join(mockups, 'pages', 'sponsorship-v1.6', 'index.html');
const prior = path.join(mockups, 'pages', 'sponsorship-v1.5', 'index.html');
const systemJs = fs.readFileSync(path.join(assets, 'mockup-system-v1.6.js'), 'utf8');
const systemCss = fs.readFileSync(path.join(assets, 'mockup-system-v1.6.css'), 'utf8');
const hubJs = fs.readFileSync(path.join(assets, 'mockup-hub.js'), 'utf8');
const hubHtml = fs.readFileSync(path.join(mockups, 'index.html'), 'utf8');
const html = fs.existsSync(wrapper) ? fs.readFileSync(wrapper, 'utf8') : '';
const image = path.join(assets, 'images', 'generated-v4', 'sponsorship-partnership-hero-v4.png');

const checks = [];
const check = (label, pass, detail = '') => checks.push({label, pass: Boolean(pass), detail});

check('Sponsorship v1.6 wrapper exists', fs.existsSync(wrapper), wrapper);
check('Sponsorship v1.6 metadata', html.includes('data-artifact-id="sponsorship"') && html.includes('data-version="v1.6"'));
check('Sponsorship v1.6 uses v1.6 system', html.includes('mockup-system-v1.6.css') && html.includes('mockup-system-v1.6.js?build=20260831e'));
check('Sponsorship v1.6 remains page-only', !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(html));
check('Sponsorship v1.5 is preserved', fs.existsSync(prior), prior);
check('New full-frame hero exists and is substantial', fs.existsSync(image) && fs.statSync(image).size > 100000, image);
check('New hero is the Sponsorship image', systemJs.includes("image: 'v4:sponsorship-partnership-hero-v4.png'"));
check('Old split-looking hero is removed from v1.6 config', !systemJs.includes("image: 'v2:sponsorship-systems-partnership-v2.png'"));
check('Sponsorship uses neutral natural treatment', systemJs.includes("heroTone: 'natural'") && systemCss.includes('.interior-hero.hero-tone-natural::after'));
check('Natural treatment is neutral rather than blue', systemCss.includes('rgba(7,9,24') && !/hero-tone-natural[\s\S]{0,350}rgba\((?:19,23,83|41,52,146)/.test(systemCss));
check('Versioned image resolver supports v4', systemJs.includes("name.match(/^v([1-9]):(.+)$/)"));
check('v1.6 is current in page system', systemJs.includes("'sponsorship': 'v1.6'"));
check('Hub points to Sponsorship v1.6', hubJs.includes("'sponsorship':'v1.6'"));
check('Hub keeps new-window review behavior', hubJs.includes('target="_blank" rel="noopener noreferrer"'));
check('Hub cache was advanced', hubHtml.includes('mockup-hub.js?build=20260831e'));

const failed = checks.filter((item) => !item.pass);
for (const item of checks) console.log(`${item.pass ? 'PASS' : 'FAIL'} ${item.label}${item.detail ? ` — ${item.detail}` : ''}`);
console.log(`\n${checks.length - failed.length}/${checks.length} checks passed.`);
if (failed.length) process.exit(1);
