import ProjectItem from "./ProjectItem.js";
import DOMHelper from "../Utils/DOMHelper.js";

export default class ProjectList {
  #projects = [];
  listType = null;
  #switchHandler = null;

  constructor(type) {
    this.listType = type;
    const projects = document.querySelectorAll(`#${type}-projects li`);
    for (const project of projects)
      this.#projects.push(new ProjectItem(project.id, this));
    this.connectDraggable();
  }

  connectDraggable() {
    const itemsList = document.querySelector(`#${this.listType}-projects ul`);

    itemsList.addEventListener("dragenter", (e) => {
      if (e.dataTransfer.types[0] !== "text/plain") return;
      itemsList.classList.add("droppable");
      e.preventDefault();
    });

    itemsList.addEventListener("dragover", (e) => {
      if (e.dataTransfer.types[0] !== "text/plain") return;
      e.preventDefault();
    });

    itemsList.addEventListener("dragleave", (e) => {
      if (
        !e.relatedTarget ||
        e.relatedTarget.closest(`#${this.listType}-projects ul`) === itemsList
      )
        return;
      itemsList.classList.remove("droppable");
    });

    itemsList.addEventListener("drop", (event) => {
      const projectId = event.dataTransfer.getData("text/plain");
      // it's check if the project that dropped on that own list
      // the list it's dragged
      if (this.#projects.find((project) => project.id === projectId)) return;
      document
        .getElementById(projectId)
        .querySelector("button:last-of-type")
        .click();
      itemsList.classList.remove("droppable");
    });
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
