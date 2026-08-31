import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(path, import.meta.url), 'utf8');
const system = read('../assets/mockup-system-client-v1.4.js');
const styles = read('../assets/mockup-system-client-v1.4.css');
const hub = read('../index.html');
const education = read('../pages/education-v1.5/index.html');
const educationConfig = system.slice(system.indexOf("    'education': {"), system.indexOf("    'membership': {"));

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

check('Education v1.5 wrapper metadata', education.includes('data-version="v1.5"') && education.includes('mockup-system-client-v1.4.js'));
check('Hub points to revision asset', hub.includes('mockup-system-client-v1.4.js') && hub.includes('mockup-system-client-v1.4.css'));
check('Hub current Education is v1.5', system.includes("'education': 'v1.5'"));
check('Clear hero actions', system.includes("cta: ['View upcoming events', 'events']") && system.includes("secondary: ['Browse resources', 'resources']"));
check('Two unique image-led pathways', system.includes('education-upcoming-learning-v1.png') && system.includes('education-resource-library-v1.png'));
check('Education-specific renderer is active', system.includes('function renderEducation(c)') && system.includes("c.type === 'education'"));
check('Uneven generic card grid removed from Education', !educationConfig.includes('sections:'));
check('Unsupported topic labels removed', !['Compliance & life safety','Water management','Emergency preparedness','Facilities operations','Leadership & workforce'].some((term) => educationConfig.includes(term)));
check('Vague actions removed', !system.includes("['View opportunities'") && !system.includes("['Explore resources'"));
check('Repeated topic action removed', !system.includes("'View topic'"));
check('Responsive pathway layout exists', styles.includes('.education-pathways') && styles.includes('grid-template-columns: repeat(2') && styles.includes('grid-template-columns: 1fr'));
check('Education remains page-only', !/<header\b|<footer\b|class="site-header|class="site-footer/i.test(education));
check('Prior Education revision remains present', fs.existsSync(new URL('../pages/education-v1.4/index.html', import.meta.url)));
check('Both image assets exist', fs.existsSync(new URL('../assets/images/generated-v5/education-upcoming-learning-v1.png', import.meta.url)) && fs.existsSync(new URL('../assets/images/generated-v5/education-resource-library-v1.png', import.meta.url)));

console.log(`\n${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
