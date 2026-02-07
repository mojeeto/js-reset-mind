export default class Modal {
    constructor(contentId) {
        this.contentTemplate = document.getElementById(contentId);
        this.modalTemplate = document.getElementById("modal-template");
    }

    show() {
        const modalElements = document.importNode(this.modalTemplate.content, true);
        const modalElement = modalElements.querySelector('.modal');
        const backdropElement = modalElements.querySelector('.backdrop');
        const contentElement = document.importNode(this.contentTemplate.content, true);

        modalElement.appendChild(contentElement);
        document.body.insertAdjacentElement('afterbegin', modalElement);
        document.body.insertAdjacentElement('afterbegin', backdropElement);
    }
}