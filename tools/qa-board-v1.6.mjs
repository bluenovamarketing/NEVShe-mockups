import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const renderer = fs.readFileSync(path.join(root, 'assets', 'mockup-system-client-v1.2.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'assets', 'mockup-system-client-v1.2.css'), 'utf8');
const hub = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const board = fs.readFileSync(path.join(root, 'pages', 'board-of-directors-v1.6', 'index.html'), 'utf8');
const card = fs.readFileSync(path.join(root, 'templates', 'board-directory-card-v1.3', 'index.html'), 'utf8');

let passed = 0;
const failures = [];
const check = (condition, label) => condition ? passed += 1 : failures.push(label);

check(renderer.includes("'board-of-directors': 'v1.6'"), 'Board current version is not v1.6');
check(renderer.includes("'board-directory-card':'v1.3'"), 'Board card template current version is not v1.3');
check(renderer.includes('const personCards ='), 'person-card renderer is missing');
check(renderer.includes('class="avatar person-avatar"'), 'portrait fallback is missing');
check(renderer.includes("['Name pending','President','Employer and title pending']"), 'person-first Board card anatomy is missing');
check(renderer.includes("id === 'board-of-directors' ? 'people' : true"), 'Board page does not select person cards');
check(renderer.includes("const privacyNote = id === 'member-directory'"), 'directory privacy note is not scoped to the Member Directory');
check(!/agency[ -]draft|unique page image|page-specific asset|editorial break/i.test(renderer), 'internal labels remain in the renderer');
check(styles.includes('.person-avatar'), 'portrait fallback styles are missing');
check(board.includes('data-artifact-id="board-of-directors" data-version="v1.6"'), 'Board wrapper metadata is incorrect');
check(card.includes('data-artifact-id="board-directory-card" data-version="v1.3"'), 'Board card wrapper metadata is incorrect');
check(board.includes('mockup-system-client-v1.2.js?build=20260831k'), 'Board wrapper renderer is incorrect');
check(card.includes('mockup-system-client-v1.2.js?build=20260831k'), 'Board card wrapper renderer is incorrect');
check(hub.includes('mockup-system-client-v1.2.js?build=20260831k'), 'hub does not load the Board revision renderer');

console.log(`Board v1.6 QA: ${passed} passed, ${failures.length} failed.`);
if (failures.length) {
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
