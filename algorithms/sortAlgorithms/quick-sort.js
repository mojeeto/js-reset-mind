function sort(unSortedArray) {
  const copiedArray = [...unSortedArray];
  if (copiedArray.length <= 1) return copiedArray;
  const pvotElement = copiedArray.shift();
  const centerElements = [pvotElement];
  const smallerElements = [];
  const biggerElements = [];
  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pvotElement) centerElements.push(currentElement);
    else if (currentElement > pvotElement) biggerElements.push(currentElement);
    else smallerElements.push(currentElement);
  }
  const smallestElementsArray = sort(smallerElements);
  const biggestElementsArray = sort(biggerElements);
  return smallestElementsArray.concat(centerElements, biggestElementsArray);
}

// Best Case: O(n*log(n))
// Avg Case: O(n*log(n))
// Worst Case: O(n^2)

const unSortedArray = [-3, 10, 1, 100, -3, -10, 22, 15];
const sortedArray = sort(unSortedArray);
console.log("Un-Sorted Array", unSortedArray);
console.log("Sorted Array", sortedArray);
