const languageBtn = document.querySelector('header .languageBtn');
const otherLanguages = document.querySelector('header .otherLanguages');

languageBtn.addEventListener('click', function() {
    otherLanguages.classList.toggle('show');
});


const nav = document.querySelector('header nav');
const navList = document.querySelector('header nav ul');
const hamburgerBtn = document.querySelector('header .hamburgerBtn');

hamburgerBtn.addEventListener('click', function() {
    nav.classList.toggle('show');
    navList.classList.toggle('show');
    hamburgerBtn.classList.toggle('active');
});