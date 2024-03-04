export class Footer {
    private readonly footerYearElement: Element | null;
    constructor() {
        this.footerYearElement = document.querySelector('.footer__year');
        this.addCurrentYearFooter();
    }

    addCurrentYearFooter() {
        if (this.footerYearElement) {
            const currentYear = new Date().getFullYear();
            this.footerYearElement.textContent = currentYear.toString();
        }
    }
}