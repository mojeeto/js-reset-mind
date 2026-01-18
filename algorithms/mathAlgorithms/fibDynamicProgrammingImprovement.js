let counter = 0;

function fib(number, memory = {}) {
  counter++;
  let result = null;
  if (memory[number]) return memory[number];
  if (number == 0 || number == 1) result = 1;
  else result = fib(number - 1, memory) + fib(number - 2, memory);
  memory[number] = result;
  return result;
}

console.log("Index 30 of fib:", fib(30));
console.log("For fib(30) function counter is", counter);
counter = 0; // reset the counter
