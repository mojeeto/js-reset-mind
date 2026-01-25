const url = "https://jsonplaceholder.typicode.com/";
const postItemTemplate = document.getElementById("post-item-template");
const postList = document.querySelector(".posts");
const form = document.querySelector("#new-post form");
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
      const { status, response } = xhrInstance;
      if (status >= 200 && status < 300) resolve(response);
      else reject(new Error("Something went wrong!"));
    };
    // network error handling
    // for response error or bad status code handling
    // we have to handle it in onload
    // xhrInstance.onerror = () => {}
    xhrInstance.onerror = () => {
      throw new Error("Please check your internet.");
    };
    // send the request
    // send data as JSON to api
    xhrInstance.send(JSON.stringify(data));
  });
}

async function getPosts() {
  try {
    const items = await sendHttpRequest("GET", "/posts");
    for (const item of items) {
      const postItemNode = document.importNode(postItemTemplate.content, true);
      postItemNode.querySelector("h2").textContent = item.title.toUpperCase();
      postItemNode.querySelector("p").textContent = item.body;
      postItemNode.querySelector("li").id = item.id;
      postList.appendChild(postItemNode);
    }
  } catch (error) {
    console.log(error.message);
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.currentTarget.querySelector("#title").value;
  const body = e.currentTarget.querySelector("#content").value;
  postData(title, body);
});

postList.addEventListener("click", ({ target }) => {
  if (target.tagName === "BUTTON") {
    const postId = target.closest("li").id;
    sendHttpRequest("DELETE", "/posts/" + postId);
  }
});
