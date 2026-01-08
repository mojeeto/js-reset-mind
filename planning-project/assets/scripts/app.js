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
  }
}

class ProjectItem {
  constructor(id, projectListInstance) {
    this.id = id;
    this.projectListInstance = projectListInstance;
    this.connectMoreButton();
    this.connectSwitchButton();
  }

  connectMoreButton() {}

  connectSwitchButton() {
    let projectItemElement = document.getElementById(this.id);
    projectItemElement = DOMHelper.clearEvents(projectItemElement);
    const switchButton = projectItemElement.querySelector(
      "button:last-of-type",
    );
    switchButton.textContent =
      this.projectListInstance.listType === "active" ? "Active" : "Finish";
    switchButton.addEventListener(
      "click",
      this.projectListInstance.switchProject.bind(
        this.projectListInstance,
        this.id,
      ),
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
