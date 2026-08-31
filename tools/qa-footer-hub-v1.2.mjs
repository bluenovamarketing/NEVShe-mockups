import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const mockups = path.resolve(import.meta.dirname, '..');
const read = (...parts) => fs.readFileSync(path.join(mockups, ...parts), 'utf8');
const exists = (...parts) => fs.existsSync(path.join(mockups, ...parts));
const system = read('assets', 'mockup-system-global-v1.2.js');
const hub = read('assets', 'mockup-hub.js');
const hubHtml = read('index.html');
const checks = [];
const check = (label, pass) => checks.push({label, pass: Boolean(pass)});

for (const slug of ['global-footer', 'global-component-library']) {
  const html = read('templates', `${slug}-v1.2`, 'index.html');
  check(`${slug} v1.2 wrapper exists`, exists('templates', `${slug}-v1.2`, 'index.html'));
  check(`${slug} v1.2 metadata`, html.includes(`data-artifact-id="${slug}"`) && html.includes('data-version="v1.2"'));
  check(`${slug} v1.2 uses isolated revised system`, html.includes('mockup-system-global-v1.2.js?build=20260831f'));
  check(`${slug} v1.1 is preserved`, exists('templates', `${slug}-v1.1`, 'index.html'));
  check(`hub points to ${slug} v1.2`, hub.includes(`'${slug}':'v1.2'`) && hub.includes('templates/${slug}-${v}/'));
}

check('copyright includes a current-year date', system.includes('© ${new Date().getFullYear()} NEVShe'));
check('Blue Nova design credit is linked safely', system.includes('Website designed by <a href="https://bluenovamarketing.com/" target="_blank" rel="noopener noreferrer">Blue Nova Marketing</a>'));
check('Organization footer contains Sitemap link', system.includes('<a href="https://nevshe.org/sitemap/">Sitemap</a>'));
check('removed proposed-system footer line', !system.includes('Statewide Nevada • Proposed website system'));
check('removed mockup disclaimer from revised footer', !system.includes('© NEVShe • Mockup content is not approved for publication.'));
check('hub removes internal version summary', !hub.includes('class="hub-summary"'));
check('hub removes redundant hero shortcuts', !hub.includes('Start with Home') && !hub.includes('Review component library') && !hub.includes('Brand Foundation v2'));
check('hub keeps separate-window review cards', hub.includes('target="_blank" rel="noopener noreferrer"'));
check('hub cache advanced', hubHtml.includes('mockup-hub.js?build=20260831f'));

const failed = checks.filter(({pass}) => !pass);
for (const {label,pass} of checks) console.log(`${pass ? 'PASS' : 'FAIL'} ${label}`);
console.log(`\n${checks.length - failed.length}/${checks.length} checks passed.`);
if (failed.length) process.exit(1);
