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
button.addEventListener("click", () => {
  console.log("Other Click");
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

const lis = document.querySelectorAll("li");
const listItems = document.querySelector("ul");
// the line below it's not good for add listener
// it's better to use ul instead and use bubbling and capturing feature
/*lis.forEach((li) => {
  li.addEventListener("click", ({ target }) => {
    target.classList.toggle("highlight");
  });
});*/

listItems.addEventListener("click", ({ currentTarget, target }) => {
  // the currentTarget always refer to ul
  // and the target always refer to which element in ul i clicked
  // it's can be free space of ul that refer to ul
  // or tag h2 element that refer to h2 element or p tag and more
  console.log("Which element that have listener:", currentTarget);
  console.log("Which element that i clicked on listener:", target);

  // it's good if we don't have tag h2 or some other tags on this element as child
  // otherwise it's better to use closest('li') to refer to li tag and toggle the class
  //target.classList.toggle("highlight");
  target.closest("li").classList.toggle("highlight");
});
