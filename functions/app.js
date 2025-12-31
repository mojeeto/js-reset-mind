function HrTagInConsole() {
  console.log("--------------------");
}

// constant variable that point to startGame button
const startGameBtn = document.getElementById("start-game-btn");

// directly function use
// function statement
function startGame(mode) {
  console.log(`${mode}: Starting Game...`);
}

startGame("Directly");

// inDirectly function use
startGameBtn.addEventListener("click", startGame.bind(this, "InDirectly"));

// <HR />
HrTagInConsole();

// objects can hold function inside of himeself
const exampleObject = {
  name: "Mojtaba",
  sayHello: function () {
    console.log(
      "This is a anonymouse function that holds in object, also it's said Hello, World!",
    );
  },
};

console.log("Object Property:", exampleObject.name);
console.log("Object Function:");
exampleObject.sayHello();

// <HR />
HrTagInConsole();

console.log("Functions are objects.");
console.log("For prove that look the next line:");
console.log(
  `Function is typeof ${typeof startGame} but they have object inside that means:`,
);
console.dir(startGame);

// <HR />
HrTagInConsole();

// Anonymouse Function Type 1
// function expression
const startGameAnonymouseFunction = function () {
  console.log("Starting Game...");
};

// <HR />
HrTagInConsole();

/*
 *
 * function statements are hoisted on top of the file
 * but expression function are not hoisted on top of the file
 * the u have to initialize expression function before to use
 * but the statement function you can use the function before
 * initialize or declare
 *
 * */
