// pure function

function sum(num1, num2) {
  return num1 + num2;
}

console.log(
  "Pure function always takes some arguments and return the same result and does'nt change after any refresh or something\n",
  sum,
  sum(2, 2),
);

function sumUnPure(num1) {
  return num1 + Math.random() * 100;
}

console.log(
  "In unPure function the arguments are the same but the result after any refresh will changed\n",
  sumUnPure,
  sumUnPure(5),
);

let someVariable = 5;

function anotherSumFunction(num1, num2) {
  const sum = num1 + num2;
  someVariable = sum; // side-effect
  // it's can be array or objects that belongs to outside of the function
  return sum;
}

console.log(
  "If we change some thing in function that belongs to outside of function like arrays or some variables like this function, and change it, it's called side-effects",
  anotherSumFunction,
  anotherSumFunction(5, 10),
);

// factory function can save time and clear code
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// in this line idont need to re-write the tax again
// if i want to write it more than one time
console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));
