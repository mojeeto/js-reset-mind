// setA: colors
// setB: sizes
function cartProduct(setA, setB) {
  if (setA.length < 1 || setB.length < 1) return [];
  const sets = [];
  for (let itemA of setA) {
    if (!Array.isArray(itemA)) itemA = [itemA];
    for (const itemB of setB) {
      sets.push([...itemA, itemB]);
    }
  }
  return sets;
}

// Time Complexity: O(n*m)
// create new array per each array
// Space Complexity: O(n*m)

function cartesian(...sets) {
  let temp = sets[0];
  for (const items of sets.slice(1)) temp = cartProduct(temp, items);
  return temp;
}

// Time Complexity: O(n^x)
// Space Complexity: O(n^x)

const colors = ["blue", "red", "green", "black", "purple"];
const sizes = ["s", "m", "l", "x", "xl"];
const styles = ["round neck", "v neck"];
console.log(cartProduct(colors, sizes)); // [[blue, m], [blue, l], ...]
console.log(cartesian(colors, sizes, styles));
