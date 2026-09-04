/* Link-only review round. Historical assets and renderers remain unchanged. */
(() => {
  'use strict';
  const targets = {
  "pages/home": {
    "source": "v1.19",
    "current": "v1.20",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "pages/about-nevshe": {
    "source": "v1.26",
    "current": "v1.27",
    "approvedBaseline": null,
    "styling": false,
    "contentCorrection": false
  },
  "pages/board-of-directors": {
    "source": "v1.19",
    "current": "v1.20",
    "approvedBaseline": null,
    "styling": false,
    "contentCorrection": true
  },
  "pages/events": {
    "source": "v1.13",
    "current": "v1.14",
    "approvedBaseline": "v1.11",
    "styling": false,
    "contentCorrection": false
  },
  "pages/education": {
    "source": "v1.16",
    "current": "v1.17",
    "approvedBaseline": "v1.14",
    "styling": false,
    "contentCorrection": false
  },
  "pages/membership": {
    "source": "v1.14",
    "current": "v1.15",
    "approvedBaseline": "v1.12",
    "styling": false,
    "contentCorrection": false
  },
  "pages/member-directory": {
    "source": "v1.19",
    "current": "v1.20",
    "approvedBaseline": null,
    "styling": false,
    "contentCorrection": true
  },
  "pages/sponsorship": {
    "source": "v1.17",
    "current": "v1.18",
    "approvedBaseline": "v1.15",
    "styling": false,
    "contentCorrection": false
  },
  "pages/sponsor-directory": {
    "source": "v1.18",
    "current": "v1.19",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "pages/resources": {
    "source": "v1.19",
    "current": "v1.20",
    "approvedBaseline": "v1.17",
    "styling": false,
    "contentCorrection": false
  },
  "pages/news": {
    "source": "v1.19",
    "current": "v1.20",
    "approvedBaseline": "v1.17",
    "styling": false,
    "contentCorrection": false
  },
  "pages/contact": {
    "source": "v1.15",
    "current": "v1.16",
    "approvedBaseline": null,
    "styling": false,
    "contentCorrection": true
  },
  "pages/privacy-policy": {
    "source": "v1.6",
    "current": "v1.7",
    "approvedBaseline": "v1.4",
    "styling": false,
    "contentCorrection": false
  },
  "pages/terms-of-use": {
    "source": "v1.6",
    "current": "v1.7",
    "approvedBaseline": "v1.4",
    "styling": false,
    "contentCorrection": false
  },
  "pages/accessibility-statement": {
    "source": "v1.6",
    "current": "v1.7",
    "approvedBaseline": "v1.4",
    "styling": false,
    "contentCorrection": false
  },
  "pages/search-results": {
    "source": "v1.5",
    "current": "v1.6",
    "approvedBaseline": "v1.3",
    "styling": false,
    "contentCorrection": false
  },
  "pages/404": {
    "source": "v1.5",
    "current": "v1.6",
    "approvedBaseline": "v1.3",
    "styling": false,
    "contentCorrection": false
  },
  "templates/global-header-desktop-navigation": {
    "source": "v1.8",
    "current": "v1.9",
    "approvedBaseline": "v1.6",
    "styling": false,
    "contentCorrection": false
  },
  "templates/full-screen-mobile-navigation": {
    "source": "v1.8",
    "current": "v1.9",
    "approvedBaseline": "v1.6",
    "styling": false,
    "contentCorrection": false
  },
  "templates/global-footer": {
    "source": "v1.10",
    "current": "v1.11",
    "approvedBaseline": "v1.8",
    "styling": false,
    "contentCorrection": false
  },
  "templates/interior-page-hero": {
    "source": "v1.7",
    "current": "v1.8",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/event-archive-card-single": {
    "source": "v1.9",
    "current": "v1.10",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/sponsor-directory-card-marquee": {
    "source": "v1.10",
    "current": "v1.11",
    "approvedBaseline": "v1.8",
    "styling": true,
    "contentCorrection": false
  },
  "templates/resource-archive-card-single": {
    "source": "v1.8",
    "current": "v1.9",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/board-directory-card": {
    "source": "v1.9",
    "current": "v1.10",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": true
  },
  "templates/member-organization-directory-card": {
    "source": "v1.8",
    "current": "v1.9",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/news-archive-card-single-post": {
    "source": "v1.9",
    "current": "v1.10",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/search-no-results-404": {
    "source": "v1.4",
    "current": "v1.5",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/contact-form-notification-routing": {
    "source": "v1.8",
    "current": "v1.9",
    "approvedBaseline": null,
    "styling": true,
    "contentCorrection": false
  },
  "templates/global-component-library": {
    "source": "v1.11",
    "current": "v1.12",
    "approvedBaseline": "v1.9",
    "styling": true,
    "contentCorrection": false
  }
};
  function resolve(input, base) {
    let url, context;
    try { url=new URL(input,base); context=new URL(base); } catch { return input; }
    const local=url.origin===context.origin;
    const publicReview=url.origin==='https://bluenovamarketing.github.io' && url.pathname.startsWith('/NEVShe-mockups/');
    if(!local&&!publicReview)return input;
    const m=url.pathname.match(/^\/(mockups|NEVShe-mockups)\/(pages|templates)\/(.+)-(v1\.\d+)(?:\/index\.html|\/)?$/);
    if(!m)return input;
    const entry=targets[m[2]+'/'+m[3]];
    if(!entry)return input;
    const prefix=context.pathname.match(/^\/(mockups|NEVShe-mockups)(?:\/|$)/)?.[1]||m[1];
    url.protocol=context.protocol;url.host=context.host;
    url.pathname='/'+prefix+'/'+m[2]+'/'+m[3]+'-'+entry.current+'/';
    return url.href;
  }
  window.NEVSheReviewLinks=Object.freeze({targets,resolve});
  const body=document.body;
  if(body.dataset.linkSourceVersion)body.dataset.version=body.dataset.linkSourceVersion;
})();
