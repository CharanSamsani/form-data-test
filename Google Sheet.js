const scriptURL = 'https://script.google.com/macros/s/AKfycbz_ijiy_vp0vGA0LNfDvL5_Hh4x2m9FjRQMSZjjCeYEAXirccQdEzYAqGhP1djVq_tc4w/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
