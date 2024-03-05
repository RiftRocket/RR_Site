import './index.scss';
import './scripts/components/header.ts';
import { Footer } from './scripts/components/footer.ts';
import { Header } from './scripts/components/header.ts';

document.addEventListener('DOMContentLoaded', function () {
	new Footer();
	new Header();
});
