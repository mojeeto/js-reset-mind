class DOMHelper {
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

class Component {
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

class Tooltip extends Component {
  projectItemElement = null;
  constructor(projectItemInstance) {
    super(projectItemInstance.id);
    // super("active-projects", true);
    this.projectItemInstance = projectItemInstance;
    this.projectItemElement = projectItemInstance.projectItemElement;
    this.create();
  }

  create() {
    // we can use the data- attribute in html via javascript with dataset property in object of
    // html element here
    // also we can set new data-attribute for element with just:
    // document.getElementById('someId').dataset.newKeyWord = 'value'; ==> refactor that key in html to: data-new-key-word='value'
    // set new data attribute
    //this.projectItemInstance.projectItemElement.dataset.someKey = 'Value';
    //console.log(this.projectItemInstance.projectItemElement.dataset.extraInfo);
    this.division = document.createElement("div");
    this.division.classList = "card";
    /*
    this.division.style.display = "flex";
    this.division.style.justifyContent = "space-between";
    const content =
      this.projectItemInstance.projectItemElement.dataset.extraInfo;
    this.division.innerHTML = `<span>${content}</span><span>x</span>`;
     */
    this.division.textContent = this.projectItemElement.dataset.extraInfo;

    // lets add position for this tooltip
    const { offsetTop, offsetLeft, clientHeight } = this.projectItemElement;
    const { scrollTop } = this.projectItemElement.parentElement;
    this.division.style.position = "absolute";
    // this.division.style.top = offsetTop + 16 + "px";
    const positionX = offsetLeft + 10;
    const positionY = offsetTop + clientHeight - scrollTop - 10;
    this.division.style.top = positionY + "px";
    this.division.style.left = positionX + "px";

    this.division.addEventListener("click", this.detach.bind(this));
    //document.body.appendChild(this.division);
    //this.projectItemInstance.hasActiveTooltip = true;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, projectListInstance) {
    this.id = id;
    this.projectListInstance = projectListInstance;
    this.projectItemElement = document.getElementById(this.id);
    this.connectSwitchButton();
    this.connectMoreButton();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) return;
    const tooltip = new Tooltip(this);
    tooltip.attach();
  }

  connectMoreButton() {
    const moreInfoBtn = this.projectItemElement.querySelector(
      "button:first-of-type",
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
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

class ProjectList {
  #projects = [];
  listType = null;
  #switchHandler = null;

  constructor(type) {
    this.listType = type;
    const projects = document.querySelectorAll(`#${type}-projects li`);
    for (const project of projects)
      this.#projects.push(new ProjectItem(project.id, this));
  }

  setSwitchHandler(callback) {
    this.#switchHandler = callback;
  }

  addProject(project) {
    this.#projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.listType}-projects ul`);
    project.update(this);
  }

  switchProject(projectId) {
    // get index of project id
    const targetIndex = this.#projects.findIndex(({ id }) => id === projectId);
    const deletedProject = this.#projects[targetIndex];
    this.#switchHandler(deletedProject);
    this.#projects.splice(targetIndex, 1);
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");

    activeProjects.setSwitchHandler(
      finishedProjects.addProject.bind(finishedProjects),
    );
    finishedProjects.setSwitchHandler(
      activeProjects.addProject.bind(activeProjects),
    );
  }
}

App.init();
