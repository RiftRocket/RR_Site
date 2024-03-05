export class Header {
	private readonly closeBTN: Element | null;
	private readonly menuSlider: Element | null;
	private readonly menuBTN: Element | null;

	constructor() {
		this.closeBTN = document.querySelector('.header-menu__button-close');
		this.menuSlider = document.querySelector('.header-menu__slider');
		this.menuBTN = document.querySelector('.header__menu-icon');

		if (this.menuBTN) {
			this.menuBTN.addEventListener('click', () => {
				this.toggleMenu();
			});
		}

		if (this.closeBTN) {
			this.closeBTN.addEventListener('click', () => {
				this.toggleMenu();
			});
		}
	}

	toggleMenu() {
		if (this.menuSlider) {
			this.menuSlider.classList.toggle('header-menu__slider--active');
		}
	}
}
