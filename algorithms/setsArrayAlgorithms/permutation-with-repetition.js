function getPermutations(options, length) {
  const permutations = [];
  if (length === 1) {
    return options.map((option) => [option]);
  }
  const partialPermutations = getPermutations(options, length - 1);

  for (const option of options)
    for (const permutation of partialPermutations)
      permutations.push([option].concat(permutation));

  return permutations;
}

// Time Complexity => O(n^r) n is the number options, r is length

const digits = [1, 2, 3];
const resultLength = 3;

const result = getPermutations(digits, resultLength);

console.log(result, result.length);
