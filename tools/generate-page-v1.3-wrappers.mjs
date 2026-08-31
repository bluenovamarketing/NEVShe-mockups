import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const pages = [
  'home',
  'about-nevshe',
  'board-of-directors',
  'member-directory',
  'sponsorship',
  'sponsor-directory',
  'news',
  'contact'
];

const shell = (id) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="NEVShe image-led page-only mockup ${id} v1.3 — agency draft for review.">
  <title>NEVShe ${id.replaceAll('-', ' ')} v1.3</title>
  <link rel="stylesheet" href="../../assets/mockup-system-v1.3.css">
</head>
<body data-artifact-kind="page" data-artifact-id="${id}" data-version="v1.3">
  <div id="app"></div>
  <script src="../../assets/mockup-system-v1.3.js"></script>
</body>
</html>
`;

for (const id of pages) {
  const dir = join(root, 'pages', `${id}-v1.3`);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), shell(id), 'utf8');
}

console.log(`Generated ${pages.length} image-led v1.3 wrappers; earlier page revisions were not changed.`);
