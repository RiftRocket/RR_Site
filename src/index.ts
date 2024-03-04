import './index.scss';

document.addEventListener('DOMContentLoaded', function() {
    addCurrentYearFooter();
});

function addCurrentYearFooter () {
    const footerYear = document.querySelector('.footer__year');
    if(footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear.toString();
    }
}
