// constant variable that point to startGame button
const startGameBtn = document.getElementById("start-game-btn");

// Default constants for user input
const ROCK = "ROCK";
const PAPAER = "PAPAER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_INPUT = ROCK;

// result default constants
const RESULT_DRAW = "DRAW";
const RESULT_COMPUTER_WIN = "COMPUTER WIN";
const RESULT_PLAYER_WIN = "PLAYER WIN";

const playerSelection = () => {
  // get propmt from user
  const userInput = prompt(
    `${ROCK} OR ${PAPAER} OR ${SCISSORS}`,
    "",
  ).toUpperCase();
  // check the use input is valid
  if (userInput !== ROCK && userInput !== PAPAER && userInput !== SCISSORS) {
    alert(`inValid choise! We choose ${DEFAULT_USER_INPUT} for you!`);
    return DEFAULT_USER_INPUT;
  }
  // return
  return userInput;
};

const computerSelection = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) return ROCK;
  else if (randomNumber < 0.67) return PAPAER;
  else return SCISSORS;
};

const getWinner = (computerChoise, playerChoise) => {
  if (computerChoise === playerChoise) return RESULT_DRAW;
  else if (
    (playerChoise === ROCK && computerChoise === SCISSORS) ||
    (playerChoise === PAPAER &&
      computerChoise === ROCK &&
      playerChoise === SCISSORS &&
      computerChoise === PAPAER)
  )
    return RESULT_PLAYER_WIN;
  else return RESULT_COMPUTER_WIN;
};

// show the game is runnig or not
let isGameRunning = false;

startGameBtn.addEventListener("click", () => {
  // check if game is running then returun and do not run it again
  if (isGameRunning) return;
  // underwise make it true
  isGameRunning = true;
  const playerChoise = playerSelection();
  const computerChoise = computerSelection();
  const winner = getWinner(computerChoise, playerChoise);
  console.log(winner);
  isGameRunning = false;
});

// function HrTagInConsole() {
//   console.log("--------------------");
// }
//
// // constant variable that point to startGame button
// const startGameBtn = document.getElementById("start-game-btn");
//
// // directly function use
// // function statement
// function startGame(mode) {
//   console.log(`${mode}: Starting Game...`);
// }
//
// startGame("Directly");
//
// // inDirectly function use
// startGameBtn.addEventListener("click", startGame.bind(this, "InDirectly"));
//
// // <HR />
// HrTagInConsole();
//
// // objects can hold function inside of himeself
// const exampleObject = {
//   name: "Mojtaba",
//   sayHello: function () {
//     console.log(
//       "This is a anonymouse function that holds in object, also it's said Hello, World!",
//     );
//   },
// };
//
// console.log("Object Property:", exampleObject.name);
// console.log("Object Function:");
// exampleObject.sayHello();
//
// // <HR />
// HrTagInConsole();
//
// console.log("Functions are objects.");
// console.log("For prove that look the next line:");
// console.log(
//   `Function is typeof ${typeof startGame} but they have object inside that means:`,
// );
// console.dir(startGame);
//
// // <HR />
// HrTagInConsole();
//
// // Anonymouse Function Type 1
// // function expression
// const startGameAnonymouseFunction = function () {
//   console.log("Starting Game...");
// };
//
// // <HR />
// HrTagInConsole();
//
// /*
//  *
//  * function statements are hoisted on top of the file
//  * but expression function are not hoisted on top of the file
//  * the u have to initialize expression function before to use
//  * but the statement function you can use the function before
//  * initialize or declare
//  *
//  * */
