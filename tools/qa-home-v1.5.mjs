import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const mockups = path.resolve(import.meta.dirname, '..');
const read = (...parts) => fs.readFileSync(path.join(mockups, ...parts), 'utf8');
const exists = (...parts) => fs.existsSync(path.join(mockups, ...parts));
const system = read('assets', 'mockup-system-home-v1.5.js');
const hub = read('assets', 'mockup-hub.js');
const hubHtml = read('index.html');
const wrapper = read('pages', 'home-v1.5', 'index.html');
const checks = [];
const check = (label, pass) => checks.push({label, pass: Boolean(pass)});

check('Home v1.5 wrapper exists', exists('pages', 'home-v1.5', 'index.html'));
check('Home v1.5 metadata', wrapper.includes('data-artifact-id="home"') && wrapper.includes('data-version="v1.5"'));
check('Home v1.5 uses isolated revised system', wrapper.includes('mockup-system-home-v1.5.js?build=20260831g'));
check('Home v1.5 remains page-only', !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(wrapper));
check('Home v1.4 is preserved', exists('pages', 'home-v1.4', 'index.html'));
check('Home current version advances to v1.5', system.includes("'home': 'v1.5'") && hub.includes("'home':'v1.5'"));
check('Year-Round capitalization corrected', system.includes("['Year-Round','education and events']") && !system.includes("['Year-round','education and events']"));
check('internal Review direction labels removed', !system.includes('Review direction'));
check('Home cards use visitor-facing action labels', system.includes('${x[2]} →') && system.includes("Education:'education'") && system.includes("Events:'events'") && system.includes("Membership:'membership'"));
check('visual production labels removed', !system.includes('Unique page image') && !system.includes('Visual direction notes') && !system.includes('Page-specific asset') && !system.includes('Editorial break'));
check('event CTA is visitor-facing', system.includes('View upcoming events') && !system.includes('Review the event system'));
check('quote attribution label removed', !system.includes('Proposed positioning line • Agency draft'));
check('hub cache advanced', hubHtml.includes('mockup-hub.js?build=20260831g'));
check('hub keeps separate-window review cards', hub.includes('target="_blank" rel="noopener noreferrer"'));

const failed = checks.filter(({pass}) => !pass);
for (const {label,pass} of checks) console.log(`${pass ? 'PASS' : 'FAIL'} ${label}`);
console.log(`\n${checks.length - failed.length}/${checks.length} checks passed.`);
if (failed.length) process.exit(1);
