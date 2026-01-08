const mainBox = document.getElementById("main-box");

// this method show use the width height and position of pixel in the browser window
console.log(mainBox.getBoundingClientRect());
console.log(
  "We have to know the browser render our page from top to bottom not bottom to top",
);

console.log(
  "offsetTop Property:",
  mainBox.offsetTop,
  "Show the first pixel of the element from top window not the viewport",
);

console.log(
  "offsetLeft Property:",
  mainBox.offsetLeft,
  "Show the first pixel of the element from left window not the viewport",
);

console.log(
  "clientTop Property:",
  mainBox.clientTop,
  "Show the first pixel of the element from top element to the main content, it's include border size and scrollbar",
);

console.log(
  "clientLeft Property:",
  mainBox.clientLeft,
  "Show the first pixel of the element from left element to the main content, it's include border size and scrollbar",
);

console.log(
  "offsetWidth Property:",
  mainBox.offsetWidth,
  "Show the actual width with border and padding and scrollbar and all thing in the element",
);

console.log(
  "offsetHeight Property:",
  mainBox.offsetHeight,
  "Show the actual height with border and padding and scrollbar and all thing in the element",
);

console.log(
  "clientWidth Property:",
  mainBox.clientWidth,
  "Show the actual width without border and scrollbar and all thing in the element",
);

console.log(
  "clientHeight Property:",
  mainBox.clientHeight,
  "Show the actual height without border and scrollbar and all thing in the element",
);

console.log(
  "scrollHeight Property:",
  mainBox.scrollHeight,
  "This property show the full content height, includes the hidden content behinde the box or not visible",
);
