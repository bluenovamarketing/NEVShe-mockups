import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(path, import.meta.url), 'utf8');
const system = read('../assets/mockup-system-client-v1.5.js');
const styles = read('../assets/mockup-system-client-v1.5.css');
const hub = read('../index.html');
const page = read('../pages/member-directory-v1.6/index.html');
const template = read('../templates/member-organization-directory-card-v1.3/index.html');
const memberConfig = system.slice(system.indexOf("    'member-directory': {"), system.indexOf("    'sponsorship': {"));

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

check('Member Directory v1.6 wrapper metadata', page.includes('data-version="v1.6"') && page.includes('mockup-system-client-v1.5.js'));
check('Reusable directory v1.3 wrapper metadata', template.includes('data-version="v1.3"') && template.includes('mockup-system-client-v1.5.js'));
check('Hub points to revision asset', hub.includes('mockup-system-client-v1.5.js') && hub.includes('mockup-system-client-v1.5.css'));
check('Hub current Member Directory is v1.6', system.includes("'member-directory': 'v1.6'"));
check('Hub current reusable directory is v1.3', system.includes("'member-organization-directory-card':'v1.3'"));
check('Member Directory uses dedicated renderer', system.includes('function renderMemberDirectory(c)') && system.includes("id === 'member-directory'"));
check('Organization accordion is implemented', system.includes('organizationProfiles') && system.includes('<details class="organization-profile"'));
check('One example opens by default', system.includes("i === 0 ? 'open' : ''"));
check('Neutral logo fallback replaces numbers', system.includes('organizationPlaceholder') && !memberConfig.match(/String\(i\+1\)|padStart/));
check('Public detail fields are demonstrated', system.includes('Organization overview') && system.includes('Industry / category') && system.includes('Approved public link pending'));
check('Privacy boundary is explicit', system.includes('Personal email addresses, direct phone numbers, member accounts, and private individual profiles are excluded'));
check('Responsive accordion styling exists', styles.includes('.organization-directory') && styles.includes('.organization-profile-body') && styles.includes('grid-template-columns: 68px minmax(0, 1fr)'));
check('Member Directory remains page-only', !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(page));
check('Prior page revision remains present', fs.existsSync(new URL('../pages/member-directory-v1.5/index.html', import.meta.url)));
check('Prior reusable revision remains present', fs.existsSync(new URL('../templates/member-organization-directory-card-v1.2/index.html', import.meta.url)));

console.log(`\n${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
