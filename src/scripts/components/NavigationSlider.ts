export class NavigationSlider {
	private readonly menuSlider: HTMLElement | null = null;
	private readonly menuSliderCloseButton: HTMLElement | null = null;
	private readonly menuButton: HTMLElement | null = null;
	private readonly menuItems: NodeListOf<HTMLElement> | null = null;

	private readonly firstMenuItem: HTMLElement | null = null;
	private readonly lastMenuItem: HTMLElement | null = null;

	private headerLogoLink: HTMLElement | null = null;

	constructor() {
		this.menuSliderCloseButton = document.querySelector(
			'.navigation-slider__button-close'
		);
		this.menuSlider = document.querySelector('.navigation-slider');
		this.menuButton = document.querySelector('.header__menu-icon');
		this.headerLogoLink = document.querySelector('.header__logo-link');

		this.menuItems = document.querySelectorAll(
			'.navigation-slider__nav-item'
		);
		if (this.menuItems) {
			this.firstMenuItem = this.menuItems[0] || null;
			this.lastMenuItem =
				this.menuItems[this.menuItems.length - 1] || null;
		}

		this.menuSlider?.setAttribute('aria-expanded', 'false');
		this.addListeners();
	}

	addListeners() {
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

		if (this.lastMenuItem) {
			this.lastMenuItem.addEventListener('blur', () => {
				this.firstMenuItem?.focus();
			});
		}
	}

	toggleMenu() {
		if (this.menuSlider) {
			this.menuSlider.classList.toggle('navigation-slider--active');

			const hasActiveClass = this.menuSlider.classList.contains(
				'navigation-slider--active'
			);

			if (hasActiveClass) {
				this.firstMenuItem?.focus();
			} else {
				this.headerLogoLink?.focus();
			}

			const IsAriaExpanded =
				this.menuSlider.getAttribute('aria-expanded') === 'true';
			this.menuSlider.setAttribute('aria-expanded', `${!IsAriaExpanded}`);
		}
	}
}
