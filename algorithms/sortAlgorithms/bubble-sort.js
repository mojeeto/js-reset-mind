function sort(unSortedArray) {
  const sortedArray = [...unSortedArray]; // copy the array not change the reference array
  for (let outer = 0; outer < sortedArray.length; outer++)
    for (let inner = outer + 1; inner < sortedArray.length; inner++)
      if (sortedArray[outer] > sortedArray[inner]) {
        const outerValue = sortedArray[outer];
        sortedArray[outer] = sortedArray[inner];
        sortedArray[inner] = outerValue;
      }
  return sortedArray;
}

// Time Complexity
// Best Case: O(n)
// Worst Case: O(n^2)

const unSortedList = [5, 10, -3, -10, 1, 100, 99];
const sortedList = sort(unSortedList);
console.log(unSortedList);
console.log(sortedList);
