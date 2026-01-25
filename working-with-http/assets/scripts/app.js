const url = "https://jsonplaceholder.typicode.com/";
const postItemTemplate = document.getElementById("post-item-template");
const postList = document.querySelector(".posts");
const fetchPostButton =
  document.getElementById("available-posts").firstElementChild;

function sendHttpRequest(method, path, data = {}) {
  const url = "https://jsonplaceholder.typicode.com" + path;
  // create XMLHttpRequest Instance
  const xhrInstance = new XMLHttpRequest();
  // configure the instance of xhr
  xhrInstance.open(method, url);
  // this line make the response JSON.parse(xhrInstance.response) as default
  // so we don't need to write it again
  xhrInstance.responseType = "json";
  return new Promise((resolve, reject) => {
    // add listener for when xhr response
    xhrInstance.onload = () => {
      resolve(xhrInstance.response);
    };
    // send the request
    // send data as JSON to api
    xhrInstance.send(JSON.stringify(data));
  });
}

async function getPosts() {
  const items = await sendHttpRequest("GET", "/posts");
  for (const item of items) {
    const postItemNode = document.importNode(postItemTemplate.content, true);
    postItemNode.querySelector("h2").textContent = item.title.toUpperCase();
    postItemNode.querySelector("p").textContent = item.body;
    postList.appendChild(postItemNode);
  }
}

async function postData(title, body) {
  const userId = 1;
  const newPostData = {
    title,
    body,
    userId,
  };
  sendHttpRequest("POST", "/posts", newPostData);
}

fetchPostButton.addEventListener("click", getPosts);

postData("Example title", "Example Body");
