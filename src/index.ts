import './index.scss';
import { Footer } from './scripts/components/Footer.ts';
import { HeaderMenu } from './scripts/components/HeaderMenu.ts';

document.addEventListener('DOMContentLoaded', function () {
	new Footer();
	new HeaderMenu();
});
