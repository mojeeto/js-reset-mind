const button = document.querySelector("button");
const div = document.querySelector("div");

// Other ways to add event to button
/*
button.onclick = () => {
  console.log("Hello, World!");
};
*/

function someFunction(event) {
  /* 
  event.target.disabled = true;
  event.target.style.backgroundColor = "gray";
  */
  console.log("Some Function Event");
}

// button.onclick = someFunction;

// after click on button the div event listener also runs
// because of bubbling feature in js
button.addEventListener("click", someFunction);
div.addEventListener("click", () => {
  console.log("Hello, Im Dive");
});

/* 
setTimeout(() => {
  button.removeEventListener("click", someFunction);
}, 2000);
*/

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(this, event);
});
