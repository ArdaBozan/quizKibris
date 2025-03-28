const $ = s => document.querySelector(s),
      languageBtn = $('header .languageBtn'),
      otherLanguages = $('header .otherLanguages'),
      nav = $('header nav'),
      navList = $('header nav ul'),
      hamburgerBtn = $('header .hamburgerBtn'),
      body = document.body;

languageBtn.onclick = e => {
  otherLanguages.classList.toggle('show');
  e.stopPropagation();
};

document.onclick = e =>
  ![languageBtn, otherLanguages].some(el => el.contains(e.target)) &&
    otherLanguages.classList.remove('show');

hamburgerBtn.onclick = e => {
  e.stopPropagation();
  hamburgerBtn.classList.toggle('active');
  const active = hamburgerBtn.classList.contains('active');
  [nav, navList].forEach(el => el.classList.toggle('show', active));
  
  // Body'ye noScrollBody sınıfını ekleme/çıkarma
  body.classList.toggle('noScrollBody', active);
};

nav.onclick = () => {
  hamburgerBtn.classList.remove('active');
  [nav, navList].forEach(el => el.classList.remove('show'));
  
  // Body'den noScrollBody sınıfını kaldır
  body.classList.remove('noScrollBody');
};
