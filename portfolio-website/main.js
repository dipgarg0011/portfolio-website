// tiny enhancement: copy email on click (optional)
document.addEventListener('click', (e)=>{
  if(e.target.matches('[data-copy]')){
    navigator.clipboard?.writeText(e.target.dataset.copy).then(()=> alert('Copied!'))
  }
})
