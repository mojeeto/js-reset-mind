const button = document.querySelector("button");

// Other ways to add event to button
/*
button.onclick = () => {
  console.log("Hello, World!");
};
*/

function someFunction(event) {
  event.target.disabled = true;
  event.target.style.backgroundColor = "gray";
  console.log("Some Function Event");
}

// button.onclick = someFunction;

button.addEventListener("click", someFunction);

setTimeout(() => {
  button.removeEventListener("click", someFunction);
}, 2000);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(this, event);
});
