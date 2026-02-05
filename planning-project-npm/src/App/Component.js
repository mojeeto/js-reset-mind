import ProjectItem from "./ProjectItem.js";

export default class Component {
  constructor(parentElementId = null, insertAfter = false) {
    this.parentElement = parentElementId
      ? document.getElementById(parentElementId)
      : document.body;
    this.insertAfter = insertAfter;
  }

  detach() {
    if (this.division && this.division instanceof HTMLElement)
      this.division.remove();
    if (
      this.projectItemInstance &&
      this.projectItemInstance instanceof ProjectItem
    )
      this.projectItemInstance.hasActiveTooltip = false;
  }

  attach() {
    if (
      (!this.division && !(this.division instanceof HTMLElement)) ||
      (!this.projectItemInstance &&
        !(this.projectItemInstance instanceof ProjectItem))
    )
      return;
    this.parentElement.insertAdjacentElement(
      this.insertAfter ? "afterbegin" : "beforeend",
      this.division,
    );
    this.projectItemInstance.hasActiveTooltip = true;
  }
}
