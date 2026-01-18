function fact(number) {
  // recursive
  if (number === 1) return 1;
  return number * fact(number - 1);
  // In every function call => O(1)
  // But we trigger multiple function calls => n functions call
  // T = n * O(1) => O(n)
  // without recursive
  /*
  let result = number;
  for (let i = 1; i < number; i++) result *= i;
  return result;
  */
  // O(n)
}

console.log(fact(3)); // 6
console.log(fact(5)); // 120
