function findElement(arr, element, callBack) {
  /*
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
    */
  let result = -1;
  arr.forEach((item, index) => {
    if (
      typeof element === "object" &&
      element !== null &&
      callBack(element, item)
    ) {
      result = index;
      return;
    }

    if (item === element) result = index;
  });
  return result;
}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));

const objects = [
  {
    name: "Mojtaba",
    age: 24,
  },
  {
    name: "Wang Lin",
    age: 4321,
  },
];

console.log(
  findElement(objects, { name: "Wang Lin", age: 4321 }, (element, item) => {
    return element.name === item.name;
  }),
);
