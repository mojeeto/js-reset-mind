// setA: colors
// setB: sizes
function cartProduct(setA, setB) {
  if (setA.length < 1 || setB.length < 1) return [];
  const sets = [];
  for (const itemA of setA) {
    for (const itemB of setB) {
      sets.push([itemA, itemB]);
    }
  }
  return sets;
}

const colors = ["blue", "red"];
const sizes = ["m", "l"];
console.log(cartProduct(colors, sizes)); // [[blue, m], [blue, l], ...]
