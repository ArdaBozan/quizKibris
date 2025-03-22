const asideNavMoreBtnClick = document.querySelector('.asideNavMoreBtnClick');
const asideNavMoreArea = document.querySelector('.asideNavMoreArea');

asideNavMoreBtnClick.addEventListener('click', function (event) {
    asideNavMoreArea.classList.toggle('active');
    asideNavMoreBtnClick.classList.toggle('active');
    event.stopPropagation(); // Butona tıklanınca document'e tıklamayı engelle
});

document.addEventListener('click', function (event) {
    // Eğer tıklanan öğe asideNavMoreArea veya asideNavMoreBtnClick değilse class'ları kaldır
    if (!asideNavMoreArea.contains(event.target) && !asideNavMoreBtnClick.contains(event.target)) {
        asideNavMoreArea.classList.remove('active');
        asideNavMoreBtnClick.classList.remove('active');
    }
});
