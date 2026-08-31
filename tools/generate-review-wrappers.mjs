import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const pages = [
  'home','about-nevshe','board-of-directors','events','education','membership','member-directory','sponsorship','sponsor-directory','resources','news','contact','privacy-policy','terms-of-use','accessibility-statement','search-results','404'
];

const templates = [
  'global-header-desktop-navigation','full-screen-mobile-navigation','global-footer','interior-page-hero','event-archive-card-single','sponsor-directory-card-marquee','resource-archive-card-single','board-directory-card','member-organization-directory-card','news-archive-card-single-post','search-no-results-404','contact-form-notification-routing','global-component-library'
];

const shell = (kind, id) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="NEVShe ${kind} mockup ${id} v1.1 — agency draft for review.">
  <title>NEVShe ${id.replaceAll('-', ' ')} v1.1</title>
  <link rel="stylesheet" href="../../assets/mockup-system.css">
</head>
<body data-artifact-kind="${kind}" data-artifact-id="${id}" data-version="v1.1">
  <div id="app"></div>
  <script src="../../assets/mockup-system.js?build=20260831b"></script>
</body>
</html>
`;

for (const id of pages) {
  const dir = join(root, 'pages', `${id}-v1.1`);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), shell('page', id), 'utf8');
}

for (const id of templates) {
  const dir = join(root, 'templates', `${id}-v1.1`);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), shell('template', id), 'utf8');
}

await writeFile(join(root, 'index.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="NEVShe complete website mockup review hub.">
  <title>NEVShe Complete Website Mockup Review</title>
  <link rel="stylesheet" href="assets/mockup-system.css">
</head>
<body data-artifact-kind="hub" data-artifact-id="review-hub">
  <div id="app"></div>
  <script src="assets/mockup-hub.js?build=20260831c"></script>
</body>
</html>
`, 'utf8');

console.log(`Generated ${pages.length} page wrappers and ${templates.length} template wrappers.`);
