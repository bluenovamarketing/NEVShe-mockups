/* Todd's explicit corrections. Frozen wrappers do not load this file. */
(() => {
  'use strict';
  const {artifactId:id,version}=document.body.dataset;
  const revised={home:'v1.16','about-nevshe':'v1.19','board-of-directors':'v1.17','member-directory':'v1.17'};
  if(revised[id]!==version)return;
  if(id==='about-nevshe'){
    const heading=[...document.querySelectorAll('.card h3')].find(h=>h.textContent.trim()==='Find the NEVShe path that fits you.');
    heading?.closest('.card').classList.add('start-here-gray');
  }
  if(id==='board-of-directors'||id==='member-directory'){
    const job='National Account Manager, BELFOR Property Restoration';
    const summary='A Nevada native with over 30 years in disaster recovery, Brian leads BELFOR’s Catastrophe Triage Team.';
    document.querySelectorAll('.board-person-copy,.member-profile-copy').forEach(copy=>{
      if(copy.querySelector('h3')?.textContent.trim()!=='Brian Foote')return;
      copy.querySelector('.meta').textContent='Director at Large';
      copy.querySelector('p').textContent=job;
      const bio=document.createElement('p');bio.textContent=summary;
      copy.querySelector('p').after(bio);
      copy.dataset.source='brian-supplied-bio';
    });
    const profile=document.querySelector('.board-profile-copy');
    if(profile?.querySelector('h1')?.textContent.trim()==='Brian Foote'){
      profile.querySelector('.meta').textContent='Director at Large';
      profile.querySelector('.board-profile-role').textContent=job;
      const bio=document.createElement('p');bio.className='brian-supplied-biography';
      bio.textContent='Brian Foote, a Nevada Native, has been involved in the disaster recovery industry for over 30 years. He is a Certified Healthcare Constructor (CHC), Water Remediation Technician (WRT), Applied Microbial Remedial Technician (AMRT), and holds an M.B.A. Brian is on the national accounts team for BELFOR Property Restoration, the world’s largest disaster recovery contractor. He heads BELFOR’s Catastrophe Triage Team and has been directly involved in major recovery efforts after hurricanes, earthquakes, polar vortexes, western wildfires, and other major disasters over the past two decades.';
      profile.querySelector('.notice')?.replaceWith(bio);
    }
  }
  document.querySelectorAll('a[href]').forEach(a=>{
    const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
    const m=u.pathname.match(/\/pages\/(.+)-v1\.\d+\//);
    if(m&&revised[m[1]]){u.pathname=u.pathname.replace(m[0],'/pages/'+m[1]+'-'+revised[m[1]]+'/');a.href=u.href;}
  });
})();
