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

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

//outputResult(currentResult, calculationDescription);
