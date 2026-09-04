/* Required-field correction only. Local mockup does not send messages. */
(() => {
  const form=document.querySelector('form.contact-form');
  if(!form)return;
  const fields=[...form.querySelectorAll('input,select,textarea')];
  fields.forEach(field=>{
    field.required=true;
    field.setAttribute('aria-required','true');
    field.name=field.id;
    const label=form.querySelector('label[for="'+field.id+'"]');
    if(label)label.append(' (required)');
  });
  const topic=form.querySelector('#topic');
  topic.options[0].value='';
  form.noValidate=false;
  const notice=document.createElement('p');
  notice.className='form-note';notice.setAttribute('role','status');
  notice.textContent='All fields are required. Mockup only — no message is sent.';
  form.append(notice);
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(form.checkValidity())notice.textContent='Required fields complete. Mockup only — no message was sent.';
  });
})();
