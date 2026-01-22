function knapsack(items, maxCapacity, itemIndex) {
  if (maxCapacity <= 0 || itemIndex < 0)
    return {
      items: [],
      value: 0,
      weight: 0,
    };

  if (items[itemIndex].weight > maxCapacity)
    return knapsack(items, maxCapacity, itemIndex - 1);

  // yes option
  const sackWithItem = knapsack(
    items,
    maxCapacity - items[itemIndex].weight,
    itemIndex - 1,
  );
  // no option
  const sackWithoutItem = knapsack(items, maxCapacity, itemIndex - 1);

  const valueYesItems = sackWithItem.value + items[itemIndex].value;
  const valueNoItems = sackWithoutItem.value;

  if (valueYesItems < valueNoItems) return sackWithoutItem;

  return {
    items: sackWithItem.items.concat(items[itemIndex]),
    value: valueYesItems,
    weight: sackWithItem.weight + items[itemIndex].weight,
  };
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
const maxCapacity = 8;

console.log(knapsack(items, maxCapacity, items.length - 1));
