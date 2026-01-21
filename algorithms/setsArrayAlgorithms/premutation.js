function getPermutation(options) {
  /*
  const result = [];
  for (let i = 0; i < options.length; i++) {
    const row = [options[i]];
    for (let j = 0; j < options.length; j++) {
      if (i === j) continue;
      row.push(options[j]);
    }
    result.push(row);
  }
  return result;
    */
  const permutations = [];

  if (options.length === 1) return [options];

  const partialPermutations = getPermutation(options.slice(1));
  const firstItem = [options[0]];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    for (let j = 0; j <= partialPermutation.length; j++) {
      const inFirst = partialPermutation.slice(0, j);
      const after = partialPermutation.slice(j);
      permutations.push(inFirst.concat(firstItem, after));
    }
  }

  return permutations;
}

// time complexity: O(n!) Very Bad

const todoListItems = [
  "Walk the dog",
  "Clean the toilet",
  "Buy Soda",
  "Order Food",
];

const result = getPermutation(todoListItems);

console.log(result, result.length);
