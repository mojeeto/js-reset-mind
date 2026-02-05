import Component from "./Component.js";

export default class Tooltip extends Component {
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
    const projectExtraInfo = this.projectItemElement.dataset.extraInfo;
    const tooltipTemplate = document.getElementById("tooltip-template");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = projectExtraInfo;
    this.division.append(tooltipBody);

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
    // this.connectDrag();
  }
}
