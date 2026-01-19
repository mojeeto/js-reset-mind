function findElement(sortedArray, element, offset = 0) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  let middleIndex = Math.floor((endIndex - startIndex) / 2);
  if (sortedArray[middleIndex] === element) return middleIndex + offset;
  else if (endIndex === 1) return -1;
  if (sortedArray[middleIndex] < element) startIndex = middleIndex + 1;
  else endIndex = middleIndex; // just for array.slice
  return findElement(
    sortedArray.slice(startIndex, endIndex + 1),
    element,
    startIndex,
  );
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));
console.log(findElement(arr, 55));
