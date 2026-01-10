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
  // bubbling and capturing is disabled
  event.stopPropagation();
  // stop other listener for this button throwed
  event.stopImmediatePropagation();
  console.log("Some Function Event");
}

// button.onclick = someFunction;

// after click on button the div event listener also runs
// because of bubbling feature in js
div.addEventListener(
  "click",
  () => {
    console.log("Hello, Im Dive");
  },
  // the true value in the third argument of method is for when child of this element
  // triggered for click event then this going to run first then the child
  // it's enable capturing feature and disable bubbling feature
  // true,
);

button.addEventListener("click", someFunction);

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
