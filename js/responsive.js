var mobileMenu = document.querySelector('.mobile-menu');
var hamburgerMenu = document.querySelector('header .header-wrapper .header-sections .hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});
