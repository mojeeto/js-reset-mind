function isPowerOfTwo(number) {
  // return Number.isInteger(Math.log2(number));
  if (number < 1) return false;
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    // console.log('Execution...')
    if (dividedNumber % 2 !== 0) return false;
    dividedNumber /= 2;
  }
  return true;
}

// time complexity => O(log2 n)

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));
