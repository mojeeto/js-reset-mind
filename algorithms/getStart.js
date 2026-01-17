/*
 * Time Complexity => Big O
 * Linear Time     => O(n)
 * Constant Time   => O(1)
 * Quadratic Time   => O(n^2)
 * Cubie Time      => O(n^3)
 */

function linearTimeSumUpAlg(number) {
  let result = 0; // 1 time for each number
  for (
    let i = 0;
    i <= number;
    i++ // 1 time for each number
  )
    result += i; // (n) time for each number
  return result; // 1 time for each number
}

// the function above Time Complexity(T) = 1 + 1 + n + 1
// T = 3 + n => 3 + 1*n => ax + b
// T = ax + b
// ax => fastest growing term and we avoid a because of
// remove the coefficient
// T = x ==> T = n ==> Time Complexity Depends on N

function constantTimeSumUpAlg(number) {
  return (number / 2) * (number + 1); // 1 time for each number
}

// the function above Time Complexity(T) = 1
