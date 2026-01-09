const button = document.querySelector("button");

// Other ways to add event to button
button.onclick = () => {
  console.log("Hello, World!");
};

function someFunction() {
  console.log("Some Function Event");
}

button.onclick = someFunction;
