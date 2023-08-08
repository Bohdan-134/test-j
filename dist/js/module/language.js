
const langBtn=document.querySelector('.language');const languageButtons=document.querySelectorAll('.language_btn');langBtn.addEventListener('click',function(){this.classList.toggle('active');})
languageButtons.forEach(button=>{button.addEventListener('click',function(){const selectedLanguage=this.getAttribute('data-lan');document.querySelector('.language_text').textContent=selectedLanguage;});});