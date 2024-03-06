export class NavigationSlider {
	private readonly menuSlider: HTMLElement | null;
	private readonly menuSliderCloseButton: HTMLElement | null;
	private readonly menuButton: HTMLElement | null;
	private readonly menuNav: HTMLElement | null;

	constructor() {
		this.menuSliderCloseButton = document.querySelector(
			'.navigation-slider__button-close'
		);
		this.menuSlider = document.querySelector('.navigation-slider__slider');
		this.menuButton = document.querySelector('.header__menu-icon');
		this.menuNav = document.querySelector(
			'.navigation-slider__slider-item-container'
		);

		this.menuSlider?.setAttribute('aria-expanded', 'false');

		if (this.menuButton) {
			this.menuButton.addEventListener('click', () => {
				this.toggleMenu();
			});
		}

		if (this.menuSliderCloseButton) {
			this.menuSliderCloseButton.addEventListener('click', () => {
				this.toggleMenu();
			});
		}
	}

	toggleMenu() {
		if (this.menuSlider) {
			this.menuSlider.classList.toggle(
				'navigation-slider__slider--active'
			);
			let hasActiveClass = this.menuSlider.classList.contains(
				'navigation-slider__slider--active'
			);

			if (hasActiveClass) {
				this.menuNav?.focus();
			}

			const IsAriaExpanded =
				this.menuSlider.getAttribute('aria-expanded') === 'true';
			this.menuSlider.setAttribute('aria-expanded', `${!IsAriaExpanded}`);
		}
	}
}
