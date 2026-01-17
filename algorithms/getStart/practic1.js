function sumMembers(numbers) {
  // if we know that we just get 3 length array
  // we can just return numbers[1] + numbers[2] + numbers[3]
  // it's return a sum with just one line and it's Big O is O(1) constant time complexity
  return numbers.reduce((prevNumber, current) => prevNumber + current, 0);
  // if we use other function for solve the problem we have to check the built-in function code to find the time complexity for our function
  // the reduce method it's like the code below
  /*
    let result = 0; // 1 time
    for (const number of numbers) // 1 time (initialization of for loop)
        result += number; // numbers.length time that means (n)
    return result; // 1 time
    // then the time complexity is T = 1+1+n+1 = 3+n = 3+1*n => T = n
    // it's linear time complexity O(n)
  */
}

// linear complexity BIG O(n)

console.log(sumMembers([1, 3, 10])); // should yield 14
