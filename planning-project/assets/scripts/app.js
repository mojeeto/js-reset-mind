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

  constructor(type) {
    const projects = document.querySelectorAll(`#${type}-projects li`);
    for (const project of projects)
      this.#projects.push(new ProjectItem(project.id, this));
  }

  addProject(projectId) {}

  switchProject(projectId) {
    // get index of project id
    const targetIndex = this.#projects.findIndex(({ id }) => id === projectId);
    const deletedProject = this.#projects[targetIndex];
    this.#projects.splice(targetIndex, 1);
  }
}

class App {
  static init() {
    new ProjectList("active");
    new ProjectList("finished");
  }
}

App.init();
