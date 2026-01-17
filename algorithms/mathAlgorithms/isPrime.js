function isPrime(n) {
  // const dNums = [1, n];

  //for (let i = 2; i < n; i++) if (Number.isInteger(n / i)) return false;
  return !Number.isInteger(Math.sqrt(n));
  //for (let i = 2; i < Math.sqrt(n); i++) if (n % i === 0) return false;
  //for (let i = 2; i < n; i++) if (n % i === 0) return false;
  // return true;

  // return dNums.length === 2;
}

// Best Case: number = 1 && number = 2 ==> O(1) Constant Time
// Avrage Case: O(n) Linear Time {improve: O(sqrt(n))}
// Worst Case: number = 27,277 ==> O(n) Linear Time {improve: O(sqrt(n))}

console.log("1,000,000:", isPrime(1000000)); // best case
const start = performance.now();
console.log("27,277:", isPrime(27277)); // worst case
const end = performance.now();
console.log("Time:", end - start);
console.log("9:", isPrime(9)); // false
console.log("5:", isPrime(5)); // true
