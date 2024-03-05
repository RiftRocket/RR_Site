const closeBTN: HTMLElement | null = document.querySelector('.menu__button-close');
const menuSlider: HTMLElement | null = document.querySelector('.menu__slider');
const menuBTN: HTMLElement | null = document.querySelector('.header__menu-icon');

menuBTN?.addEventListener('click', function() {
	if (menuSlider) {
		menuSlider.style.width = '100%';
	}
});

closeBTN?.addEventListener('click', function() {
	if (menuSlider) {
		menuSlider.style.width = '0';
	}
});