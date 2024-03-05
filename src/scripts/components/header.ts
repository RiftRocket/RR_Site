const closeBTN = document.querySelector('.menu__button-close');
const menuSlider = document.querySelector('.menu__slider');
const menuBTN = document.querySelector('.header__menu-icon');

menuBTN?.addEventListener('click', function(){
    menuSlider.style.width = '15rem';
});

closeBTN?.addEventListener('click', function(){
    menuSlider.style.width = '0';
});


