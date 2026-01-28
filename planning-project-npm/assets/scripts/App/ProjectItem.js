export default class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, projectListInstance) {
    this.id = id;
    this.projectListInstance = projectListInstance;
    this.projectItemElement = document.getElementById(this.id);
    this.connectSwitchButton();
    this.connectMoreButton();
    this.connectDrag();
  }

  showMoreInfoHandler() {
    // App.analytics();
    if (this.hasActiveTooltip) return;
    // avoid to download more file in module mode
    import("./Tooltip.js").then((module) => {
      const tooltip = new module.default(this);
      tooltip.attach();
    });
  }

  connectDrag() {
    this.projectItemElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });
  }

  connectMoreButton() {
    const moreInfoBtn = this.projectItemElement.querySelector(
      "button:first-of-type",
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
    // just for learning Dynamic Add JavaScript Code
  }

  connectSwitchButton() {
    // this.projectItemElement = DOMHelper.clearEvents(this.projectItemElement);
    const switchBtn = this.projectItemElement.querySelector(
      "button:last-of-type",
    );
    switchBtn.textContent =
      this.projectListInstance.listType === "active" ? "Active" : "Finish";
    switchBtn.addEventListener(
      "click",
      this.projectListInstance.switchProject.bind(
        this.projectListInstance,
        this.id,
      ),
      { once: true },
    );
  }

  update(changedInstance) {
    this.projectListInstance = changedInstance;
    this.connectSwitchButton();
  }
}
