const postItemTemplate = document.getElementById("post-item-template");
const postList = document.querySelector(".posts");
// create XMLHttpRequest Instance
const xhrInstance = new XMLHttpRequest();
// configure the instance of xhr
let method = "GET";
const url = "https://jsonplaceholder.typicode.com/";
let path = "/posts";
xhrInstance.open(method, `${url}${path}`);
// this line make the response JSON.parse(xhrInstance.response) as default
// so we don't need to write it again
xhrInstance.responseType = "json";
// add listener for when xhr response
xhrInstance.onload = () => {
  const { response: items } = xhrInstance;
  for (const item of items) {
    const postItemNode = document.importNode(postItemTemplate.content, true);
    postItemNode.querySelector("h2").textContent = item.title.toUpperCase();
    postItemNode.querySelector("p").textContent = item.body;
    postList.appendChild(postItemNode);
  }
};
// send the request
xhrInstance.send();
