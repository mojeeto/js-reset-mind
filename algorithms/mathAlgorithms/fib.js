function fib(index) {
  // program way
  /*
  let firstIndex = 1; // 1 time
  let secondIndex = 1; // 1 time
  let result = 0; // 1 time
  if ([0, 1].includes(index)) return 1; // 1 time
  for (let _ = 0; _ <= index - 2; _++) { // 1 time initilization
    result = firstIndex + secondIndex; // n - 2
    firstIndex = secondIndex; // n - 2
    secondIndex = result; // n - 2
  }
  return result; // 1 time

  // T = 1 + 1 + 1 + 1 + 1 + 3(n - 2) + 1
  // T = 5 + 3n - 2 = 3 + 3n = (3n) fastest growing term and remove the coefficent ==> final result the T is (n)
  // so it's linear time Complexity
    */
  // recursion way O(2^n) very bad
  /*
  if ([0, 1].includes(index)) return 1;
  return fib(index - 1) + fib(index - 2);
  */
  const numbers = [1, 1]; // 1 time
  for (
    let i = 2;
    i <= index;
    i++ // 1 time initilization
  )
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
  // console.log(numbers);
  return numbers[index]; // 1 time
}

// T = 1 + 1 + (n-1) + 1 = 3 + 1*(n-1) = 3 + n - 1 = 2 + n = n
// Big O(n) => Linear Time Complexity

console.log(fib(4)); // should return 5
