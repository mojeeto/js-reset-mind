let counter = 0;
const memo = {};

function fib(number, memory = {}) {
  counter++;
  let result = null;
  if (memory[number]) return memory[number];
  if (number == 0 || number == 1) result = 1;
  else result = fib(number - 1, memory) + fib(number - 2, memory);
  memory[number] = result;
  return result;
}

console.log("Index 30 of fib:", fib(30, memo));
console.log("For fib(30) function counter is", counter);
counter = 0; // reset the counter

console.log("Index 50 of fib:", fib(50, memo));
console.log("For fib(50) function counter is", counter);
counter = 0; // reset the counter

console.log("Index 100 of fib:", fib(100, memo));
console.log("For fib(100) function counter is", counter);
counter = 0; // reset the counter

console.log("Index 40 of fib:", fib(40, memo));
console.log("For fib(40) function counter is", counter);
counter = 0; // reset the counter

console.log("Index 73 of fib:", fib(73, memo));
console.log("For fib(73) function counter is", counter);
counter = 0; // reset the counter

console.log(memo);
