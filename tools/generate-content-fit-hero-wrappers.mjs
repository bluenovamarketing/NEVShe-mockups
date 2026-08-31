import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const revisions = {
  sponsorship: 'v1.5',
  'sponsor-directory': 'v1.5',
  resources: 'v1.4',
  news: 'v1.5'
};

const shell = (id, version) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="NEVShe content-fit image hero page-only mockup ${id} ${version} — agency draft for review.">
  <title>NEVShe ${id.replaceAll('-', ' ')} ${version}</title>
  <link rel="stylesheet" href="../../assets/mockup-system-v1.5.css">
</head>
<body data-artifact-kind="page" data-artifact-id="${id}" data-version="${version}">
  <div id="app"></div>
  <script src="../../assets/mockup-system-v1.5.js?build=20260831d"></script>
</body>
</html>
`;

for (const [id, version] of Object.entries(revisions)) {
  const dir = join(root, 'pages', `${id}-${version}`);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), shell(id, version), 'utf8');
}

console.log(`Generated ${Object.keys(revisions).length} content-fit hero wrappers; prior revisions were not changed.`);
