function showTheMinimalNumber(ns = []) {
  let smallest = ns[0]; // 1 time
  // ns.forEach((value) => (smallest > value ? (smallest = value) : smallest));
  for (
    let i = 1;
    i < ns.length;
    i++ // 1 time
  )
    if (smallest > ns[i]) smallest = ns[i]; // n - 1
  return smallest; // 1 time

  // time complexity => O(n) Linear Time
}

function oddOrEven(n) {
  return n % 2 === 0; // 1 time
  // time complexity => O(1) Constant Time
}

console.log(
  "Smallest of Array(1,2,3,4,5,6): ",
  showTheMinimalNumber([1, 2, 3, 4, 5, 6]),
);
console.log(
  "Smallest of Array(32, 6, 632, 21, 1, 0, 521, 0): ",
  showTheMinimalNumber([32, 6, 632, 21, 1, 0, 521, 0]),
);
console.log("-------------------------");
console.log("Is 2 is even?", oddOrEven(2));
console.log("Is 3 is even?", oddOrEven(3));
console.log("Is 1234 is even?", oddOrEven(1234));
