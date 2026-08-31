import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const pages = [
  'home',
  'about-nevshe',
  'board-of-directors',
  'events',
  'education',
  'membership',
  'member-directory',
  'sponsorship',
  'sponsor-directory',
  'resources',
  'news',
  'contact',
  'privacy-policy',
  'terms-of-use',
  'accessibility-statement',
  'search-results',
  '404'
];

const shell = (id) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="NEVShe page-only mockup ${id} v1.2 — agency draft for review.">
  <title>NEVShe ${id.replaceAll('-', ' ')} v1.2</title>
  <link rel="stylesheet" href="../../assets/mockup-system-v1.2.css">
</head>
<body data-artifact-kind="page" data-artifact-id="${id}" data-version="v1.2">
  <div id="app"></div>
  <script src="../../assets/mockup-system-v1.2.js?build=20260831b"></script>
</body>
</html>
`;

for (const id of pages) {
  const dir = join(root, 'pages', `${id}-v1.2`);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), shell(id), 'utf8');
}

console.log(`Generated ${pages.length} page-only v1.2 wrappers; v1.1 artifacts were not changed.`);
