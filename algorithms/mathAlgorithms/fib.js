function fib(index) {
  // program way
  /*
  let firstIndex = 1;
  let secondIndex = 1;
  let result = 0;
  if ([0, 1].includes(index)) return 1;
  for (let _ = 0; _ <= index - 2; _++) {
    result = firstIndex + secondIndex;
    firstIndex = secondIndex;
    secondIndex = result;
  }
  return result;
    */
  // recursion way
  /*
  if ([0, 1].includes(index)) return 1;
  return fib(index - 1) + fib(index - 2);
  */
  const numbers = [1, 1];
  for (let i = 2; i <= index; i++)
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  // console.log(numbers);
  return numbers[index];
}

console.log(fib(4)); // should return 5
