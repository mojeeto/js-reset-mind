function sort(arr) {
  if (arr.length < 2) return arr;
  if (arr.length === 2) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;

  const indexMiddle = Math.floor(arr.length / 2);
  const leftArraySliced = arr.slice(0, indexMiddle);
  const rightArraySliced = arr.slice(indexMiddle);
  // recursive part
  const sortedLeftArraySlice = sort(leftArraySliced);
  const sortedRightArraySlice = sort(rightArraySliced);

  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < sortedLeftArraySlice.length ||
    rightIndex < sortedRightArraySlice.length
  ) {
    if (
      leftIndex >= sortedLeftArraySlice.length ||
      sortedLeftArraySlice[leftIndex] > sortedRightArraySlice[rightIndex]
    )
      mergedArray.push(sortedRightArraySlice[rightIndex++]);
    else mergedArray.push(sortedLeftArraySlice[leftIndex++]);
  }
  return mergedArray;
}

// time complexity for all cases is => O(n*log n)

const unsortedArray = [-10, 33, 5, 10, 9, 3, -19, -99, 100];
const sortedArray = sort(unsortedArray);
console.log(unsortedArray);
console.log(sortedArray);
