import ProjectList from "./App/ProjectList.js";

class App {
  static analyticState = "Not-Active";

  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");

    activeProjects.setSwitchHandler(
      finishedProjects.addProject.bind(finishedProjects),
    );
    finishedProjects.setSwitchHandler(
      activeProjects.addProject.bind(activeProjects),
    );

    // const timerID = setTimeout(this.analytics, 3000);
    // we can stop the timer with id with clearTimeout(timerID);
  }

  static analytics() {
    if (this.analyticState === "Active") return;
    const analyticScript = document.createElement("script");
    analyticScript.src = "assets/scripts/analytics.js";
    analyticScript.defer = true;
    document.head.append(analyticScript);
    this.analyticState = "Active";
  }
}

App.init();
