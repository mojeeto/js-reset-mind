/*
 * Variable names must be camelCase, it's can be start with:
 *  $, _, Characters
 * Valid Variable Names:
 *  userName, numberGroup5, $kindOfOptional, _intervalValue
 *
 * InValid Variable Names:
 *  Snake_Case, start with - (Dashes), or Whitespace in name
 *  and don't use reserved keywords
 * */
const defaultResult = 0;
let currentResult = defaultResult;
// let name = "Mojtaba";
// declare the first array
const logEntries = [];

// Create custom Function
/*function sum(num1, num2) {
  // result is local variable for fucntion
  // but we can use the global variable from outside of function
  // also we can use shadowing
  result = num1 + num2;
  // let name = "Hossein"; this is shadowing;
  // alert("The result is " + result);
  return result;
}*/

// Call the custom function
//currentResult = sum(1, 2);

// do mathematical operaitors
//currentResult = ((currentResult + 10) * 3) / 2 - 1;

//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// this function is for extract user input and cast it to integer
function getUserInput() {
  // using parseInt
  //currentResult = currentResult + Number.parseInt(userInput.value);
  // easy way
  //currentResult = currentResult + +userInput.value;
  return parseInt(userInput.value);
}

// this function generate log and show the result in html
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calucationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calucationDescription); // from vendor js file
}

// this function help to log calcuation via logEntries
function writeToLog(
  operaionIndentifier,
  prevResult,
  operationNumber,
  newResult,
) {
  const logEntry = {
    operaionIndentifier,
    prevResult,
    operationNumber,
    newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  console.log("The result is " + logEntry.result);
}

/*
 * in if statement we use boolean condition
 * == => is for check equlity
 * != => will return true if two variable not equal
 * === => check value and type also
 * >= & <= || < & > ==> their are greater than and less than
 * their are so essential
 * */

// this function is calculate two numbers by their options
// i think this function not neccessry but i write new if statement
/*function calucation(operation, prevResult, number) {
  let signOperation;
  if (operation === "ADD") {
    currentResult = prevResult + number;
    signOperation = '+';
  }
  if (!signOperation) return;
}*/

// this function is for sum calcaution
function add() {
  const enteredNumber = getUserInput();
  // store the last calucation input
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  // create an object that describe math operation
  /*const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  // add to our logEntries array
  logEntries.push(logEntry);
  // also check the logEntries data via console.log api
  console.log(logEntries);
  // use a data from our object
  console.log("The result is " + logEntry.result);
  */
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

// this function is for subtract calcaution
function subtract() {
  const enteredNumber = getUserInput();
  // store the last calucation input
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

// this function is for multiply calcaution
function multiply() {
  const enteredNumber = getUserInput();
  // store the last calucation input
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

// this function is for divide calucation
function divide() {
  const enteredNumber = getUserInput();
  // store the last calucation input
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// assign function to buttons in index.html
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//outputResult(currentResult, calculationDescription);
