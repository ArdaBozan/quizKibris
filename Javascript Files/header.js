const languageBtn = document.querySelector('header .languageBtn');
const otherLanguages = document.querySelector('header .otherLanguages');

languageBtn.addEventListener('click', function() {
    otherLanguages.classList.toggle('show');
});