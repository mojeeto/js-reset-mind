const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

// all numbers in javascript is float
console.log("Max Safe Integer(2^53)-1:", Number.MAX_SAFE_INTEGER);
console.log("Max Min Safe Integer(2^53)-1:", Number.MIN_SAFE_INTEGER);
console.log("Max Max Value:", Number.MAX_VALUE);
console.log("Max Min Value:", Number.MIN_VALUE);

console.log("BigInt:", 8972163549875632897146328n);

function RandomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(RandomIntNumber(5, 50));

function productDescription(string, productName, productPrice) {
  console.log(string, productName, productPrice);
  return "This is a product.";
}

const productName = "JavaScript Course";
const productPrice = 29.99;

const prodDesc = productDescription`This is a productName ${productName} and this is a product price ${productPrice}.`;

console.log(prodDesc);
