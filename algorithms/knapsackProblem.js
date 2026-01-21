function knapsack(items, maxCapacity) {
  let result = [];
  let value = 0;
  let capacity = 0;
  for (const item1 of items) {
    for (const item2 of items) {
      if (item1 === item2) continue;
      if (item1.weight <= maxCapacity) {
        if (item1.value > value) {
          value = item1.value;
          capacity = item1.weight;
          result.push(item1);
        }
      }

      if (item2.weight <= maxCapacity) {
        if (item2.value > value) {
          value = item2.value;
          capacity = item2.weight;
          result.pop();
          result.push(item2);
        }
      }

      if (item1.weight + item2.weight <= maxCapacity) {
        if (item1.value + item2.value > value) {
          value = item1.value + item2.value;
          capacity = item1.weight + item2.weight;
          result = [item1, item2];
        }
      }
    }
  }
  return result;
}

const items = [
  {
    name: "a",
    value: 3,
    weight: 3,
  },
  {
    name: "b",
    value: 6,
    weight: 8,
  },
  {
    name: "c",
    value: 10,
    weight: 3,
  },
];
const maxCapacity = 14;

console.log(knapsack(items, maxCapacity));
