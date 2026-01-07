class ProjectItem {
  constructor(id, projectListInstance) {
    this.id = id;
    this.projectListInstance = projectListInstance;
    this.connectMoreButton();
    this.connectSwitchButton();
  }

  connectMoreButton() {}

  connectSwitchButton() {
    const switchButton = document
      .getElementById(this.id)
      .querySelector("button:last-of-type");
    switchButton.addEventListener(
      "click",
      this.projectListInstance.switchProject.bind(
        this.projectListInstance,
        this.id,
      ),
    );
  }
}

class ProjectList {
  #projects = [];
  #listType = null;
  #switchHandler = null;

  constructor(type) {
    this.#listType = type;
    const projects = document.querySelectorAll(`#${type}-projects li`);
    for (const project of projects)
      this.#projects.push(new ProjectItem(project.id, this));
  }

  setSwitchHandler(callback) {
    this.#switchHandler = callback;
  }

  addProject(projectId) {
    console.log(projectId, this);
  }

  switchProject(projectId) {
    // get index of project id
    const targetIndex = this.#projects.findIndex(({ id }) => id === projectId);
    const deletedProject = this.#projects[targetIndex];
    this.#switchHandler(deletedProject.id);
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
