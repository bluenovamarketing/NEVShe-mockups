/* Hub-only client guidance v1.1. No mockup or approval-record changes. */
(() => {
  if(document.body.dataset.artifactKind!=='hub')return;
  document.body.dataset.clientReviewGuide='v1.1';
  const main=document.querySelector('main');
  const sections=[...main.querySelectorAll(':scope > section')];
  const pageSection=sections.find(s=>s.querySelector('a.review-card[href*="/pages/"]'));
  const sharedSection=sections.find(s=>!s.classList.contains('detail-spotlight')&&s.querySelector('a.review-card[href*="/templates/"]'));
  const spot=main.querySelector('.detail-spotlight');
  if(!pageSection||!sharedSection)return;
  const hero=main.querySelector('.hub-hero');
  hero.querySelector('h1').textContent='Review your NEVShe website.';
  hero.querySelector('.container > p').textContent='Start with the pages below. Check that the information is accurate, the website represents NEVShe, and nothing important is missing. No technical knowledge is needed.';
  hero.querySelector('.hub-approval-summary').innerHTML='<span><strong>17</strong> pages · waiting client approval</span><span><strong>13</strong> shared features · optional reference</span>';
  const steps=document.createElement('div');
  steps.className='client-review-guide';
  steps.innerHTML='<h2>What we need from you</h2><ol><li><strong>Review the pages.</strong> Check the wording, names, photos and overall appearance.</li><li><strong>Try the menus and links.</strong> Tell us if something feels confusing or is missing.</li><li><strong>Send your feedback.</strong> Reply with the page name and either “Approved” or the changes you want. A question is welcome too.</li></ol><p>Blue Nova handles the technical implementation and testing. If we need a business decision—such as who receives contact messages or what member information can be public—we will ask you directly.</p>';
  hero.querySelector('.container').append(steps);
  const heading=pageSection.querySelector('.section-heading');
  heading.querySelector('h2').textContent='Start here: review the pages.';
  heading.querySelector('p').textContent='Open a page to review its content and appearance. You only need to approve each page once; the shared examples below do not add a separate approval checklist.';
  pageSection.id='review-pages';
  hero.after(pageSection);
  const sharedHeading=sharedSection.querySelector('.section-heading');
  sharedHeading.querySelector('.eyebrow').textContent='Optional reference';
  sharedHeading.querySelector('h2').textContent='Shared website features — optional preview';
  sharedHeading.querySelector('p').textContent='These examples show how menus, buttons, forms, and listings will look throughout your website. You don’t need technical knowledge or separate approvals for each example. Please flag anything confusing or missing; Blue Nova handles the technical implementation.';
  sharedSection.id='shared-features';
  const container=sharedSection.querySelector('.container');
  function disclosure(label,note){
    const d=document.createElement('details');d.className='client-preview-disclosure';
    const s=document.createElement('summary');s.textContent=label;d.append(s);
    const p=document.createElement('p');p.textContent=note;d.append(p);return d;
  }
  const features=container.querySelector('.review-grid');
  const all=disclosure('View all 13 shared features (optional)','These are the same examples Blue Nova uses to keep the website consistent. You may leave this section closed and focus on the pages above.');
  all.append(features);container.append(all);
  if(spot){
    const examples=disclosure('See what opens after a click (optional)','Preview a profile, news story, resource or event detail. These are examples—not four additional approvals.');
    const grid=spot.querySelector('.review-grid');if(grid)examples.append(grid);
    const extras=spot.querySelector('[aria-label="Separate template state examples"]');if(extras)examples.append(extras);
    all.before(examples);spot.remove();
  }
  const labels={
    'global-header-desktop-navigation':['Top menu','The main menu visitors use to move between pages on a computer.'],
    'full-screen-mobile-navigation':['Phone and tablet menu','The menu visitors open on a smaller screen.'],
    'global-footer':['Bottom-of-page links','The links and useful information repeated at the bottom of each page.'],
    'interior-page-hero':['Page introductions','The title and opening area that help visitors understand each page.'],
    'event-archive-card-single':['Event listings and details','How visitors find an event and open its information.'],
    'sponsor-directory-card-marquee':['Sponsor displays','How sponsor names and logos appear across the website.'],
    'resource-archive-card-single':['Resource listings and previews','How visitors find and open helpful documents and resources.'],
    'board-directory-card':['Board listings and profiles','How visitors meet board members and read their profiles.'],
    'member-organization-directory-card':['Member listings','How visitors browse and search the public member directory.'],
    'news-archive-card-single-post':['News listings and stories','How a short news preview opens into a full story.'],
    'search-no-results-404':['Search and helpful fallback pages','What visitors see when they search or a page cannot be found.'],
    'contact-form-notification-routing':['Contact form','The form visitors use to contact NEVShe. We will confirm any needed message-recipient decisions separately.'],
    'global-component-library':['Shared design examples','A collection of buttons, cards, listings and other details used throughout the website.']
  };
  sharedSection.querySelectorAll('a.review-card').forEach(card=>{
    card.dataset.optionalPreview='true';
    const match=card.getAttribute('href').match(/templates\/(.+)-v1\.\d+/);
    const copy=match&&labels[match[1]];
    if(copy){card.querySelector('h3').textContent=copy[0];card.querySelector('p').textContent=copy[1];}
    const footer=card.querySelector('footer span:first-child');if(footer)footer.textContent='Open preview';
  });
})();

