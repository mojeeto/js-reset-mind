class ProjectItem {
  constructor(id) {
    this.id = id;
  }
}

class ProjectList {
  #projects = [];

  constructor(type) {
    const projects = document.querySelectorAll(`#${type}-projects li`);
    for (const project of projects) {
      this.#projects.push(new ProjectItem(project.id));
    }
    console.log(this.#projects);
  }
}

class App {
  static init() {
    new ProjectList("active");
    new ProjectList("finished");
  }
}

App.init();
