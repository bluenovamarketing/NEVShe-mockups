import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(path, import.meta.url), 'utf8');
const system = read('../assets/mockup-system-client-v1.3.js');
const styles = read('../assets/mockup-system-client-v1.3.css');
const hub = read('../index.html');
const home = read('../pages/home-v1.7/index.html');
const footer = read('../templates/global-footer-v1.4/index.html');

let passed = 0;
let failed = 0;
const check = (label, condition) => {
  if (condition) {
    passed += 1;
    console.log(`PASS ${label}`);
  } else {
    failed += 1;
    console.error(`FAIL ${label}`);
  }
};

check('Home v1.7 wrapper metadata', home.includes('data-version="v1.7"') && home.includes('mockup-system-client-v1.3.js'));
check('Footer v1.4 wrapper metadata', footer.includes('data-version="v1.4"') && footer.includes('mockup-system-client-v1.3.js'));
check('Hub points to revision asset', hub.includes('mockup-system-client-v1.3.js') && hub.includes('mockup-system-client-v1.3.css'));
check('Hub current Home is v1.7', system.includes("'home': 'v1.7'"));
check('Hub current footer is v1.4', system.includes("'global-footer':'v1.4'"));
check('Ongoing replaces Year-Round in current proof row', system.includes("['Ongoing','education and events']") && !system.includes("['Year-Round','education and events']"));
check('Footer review shows only the actual footer', system.includes("if (id === 'global-footer')") && system.includes("${reviewBar(`${cfg[0]} template`)}${footer()}"));
check('Footer main spacing is compact', styles.includes('padding: 48px 0 36px'));
check('Footer legal row spacing is compact', styles.includes('padding: 16px 0'));
check('Home remains page-only', !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(home));
check('Prior Home revision remains present', fs.existsSync(new URL('../pages/home-v1.6/index.html', import.meta.url)));
check('Prior footer revision remains present', fs.existsSync(new URL('../templates/global-footer-v1.3/index.html', import.meta.url)));

console.log(`\n${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
