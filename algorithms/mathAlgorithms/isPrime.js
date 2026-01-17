function isPrime(n) {
  // const dNums = [1, n];

  //for (let i = 2; i < n; i++) if (Number.isInteger(n / i)) return false;
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;

  // return dNums.length === 2;
}

console.log(isPrime(9)); // false
console.log(isPrime(5)); // true
