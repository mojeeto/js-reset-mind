export default class Modal {
    constructor(contentId) {
        this.contentTemplate = document.getElementById(contentId);
        this.modalTemplate = document.getElementById("modal-template");
    }

    show() {
        const modalElements = document.importNode(this.modalTemplate.content, true);
        this.modalElement = modalElements.querySelector('.modal');
        this.backdropElement = modalElements.querySelector('.backdrop');
        const contentElement = document.importNode(this.contentTemplate.content, true);

        this.modalElement.appendChild(contentElement);
        document.body.insertAdjacentElement('afterbegin', this.modalElement);
        document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    }

    hide() {
        if (this.modalElement || this.backdropElement) {
            document.body.removeChild(this.modalElement);
            document.body.removeChild(this.backdropElement);
            this.modalElement = null;
            this.backdropElement = null;
        }
    }
}