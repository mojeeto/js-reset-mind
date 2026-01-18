function fact(number) {
  // recursive
  // if (number === 1) return 1;
  // return number * fact(number - 1);
  // without recursive
  let result = number;
  for (let i = 1; i < number; i++) result *= i;
  return result;
  // O(n)
}

console.log(fact(3)); // 6
console.log(fact(5)); // 120
