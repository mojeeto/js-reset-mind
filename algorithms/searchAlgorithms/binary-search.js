function findElement(sortedArray, element) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  while (startIndex <= endIndex) {
    console.log("STEP>>>");
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (sortedArray[middleIndex] === element) return middleIndex;
    if (sortedArray[middleIndex] < element) startIndex = middleIndex + 1;
    else endIndex = middleIndex - 1;
  }
  return -1;
}

// Base Case: O(1)
// Avg Case: O(log n)
// Worst Case: O(log n)

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 9));
