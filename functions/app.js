function HrTagInConsole() {
  console.log("--------------------");
}

// constant variable that point to startGame button
const startGameBtn = document.getElementById("start-game-btn");

// directly function use
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
console.log(typeof startGame);

