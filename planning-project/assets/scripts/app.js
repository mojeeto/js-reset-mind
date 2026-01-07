class ProjectList {
  constructor(type) {
    const projects = document.querySelectorAll(`#${type}-projects li`);
    console.log(projects);
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");
  }
}

App.init();
