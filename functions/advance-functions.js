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

// all function in javascript is closures because every function accept all enviroments
// surrender it and it dont throw away that enviroments also if it's not use
let multiplier = 50;

// factory function can save time and clear code
function createTaxCalculator(tax) {
  let multiplier = 10000;
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 100;

// in this line idont need to re-write the tax again
// if i want to write it more than one time
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// recursion function

//function powerOf(x, n) {
// if (n === 1) return x;
// return x * powerOf(x, --n);
//}
const powerOf = (x, n) => (n === 1 ? x : x * powerOf(x, --n));

console.log("Recursion function", powerOf);
console.log("The result of 2 power 3 times:", powerOf(2, 3));
console.log("The result of 5 power 3 times:", powerOf(5, 3));

const myself = {
  name: "Mojtaba",
  friends: [
    {
      name: "Sajjad",
      friends: [
        {
          name: "Nima",
          friends: [
            {
              name: "Mojtaba Salehi",
            },
            { name: "Mohammad" },
          ],
        },
      ],
    },
    {
      name: "Amir Mohammad",
    },
  ],
};

function printFriendsName(person) {
  const collectedNames = [];

  if (!person.friends) return [];

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendsName(friend));
  }
  return collectedNames;
}

console.log(printFriendsName(myself));

// 0, 1, (0+1) = 1, (1+1) = 2, (1,2) = 3, (2,3) = 5, (3,5) = 8, ...
function fib(step) {
  if (step === 0) return 0;
  if (step === 1) return 1;
  return fib(step - 1) + fib(step - 2);
}

function stringFib(step) {
  const collectionFeb = [];
  for (let i = 0; i < step; i++) collectionFeb.push(fib(i));
  console.log(...collectionFeb);
}

stringFib(10);
