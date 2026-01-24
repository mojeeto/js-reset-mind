// create XMLHttpRequest Instance
const xhrInstance = new XMLHttpRequest();
// configure the instance of xhr
let method = "GET";
const url = "https://jsonplaceholder.typicode.com/";
let path = "/posts";
xhrInstance.open(method, `${url}${path}`);
// send the request
xhrInstance.send();
