export default class DOMHelper {
  static clearEvents(element) {
    if (!(element instanceof HTMLElement)) return;
    const cloneElement = element.cloneNode(true);
    element.replaceWith(cloneElement);
    return cloneElement;
  }

  static moveElement(elementId, destinationElement) {
    const element = document.getElementById(elementId);
    document.querySelector(destinationElement).appendChild(element);
    element.scrollIntoView({ behavior: "smooth" });
  }
}
