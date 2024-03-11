import './index.scss';
import { Footer } from './scripts/components/Footer.ts';
import { NavigationSlider } from './scripts/components/NavigationSlider.ts';

document.addEventListener('DOMContentLoaded', function () {
	new Footer();
	new NavigationSlider();
});
