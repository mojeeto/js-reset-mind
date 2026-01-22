function knapsackFn(items, maxCapacity, itemIndex = items.length - 1, memo) {
  /* My Dummy Solution
  const itemResult = [];
  let weight = maxCapacity;
  let value = 0;

  for (const item of items) {
    if (item.weight <= weight) {
      value += item.value;
      weight -= item.weight;
      itemResult.push(item.name);
    }
  }

  return itemResult;
  */

  if (memo[maxCapacity][itemIndex]) return memo[maxCapacity][itemIndex];

  if (maxCapacity <= 0 || itemIndex < 0)
    return {
      items: [],
      value: 0,
      weight: 0,
    };

  if (items[itemIndex].weight > maxCapacity)
    return knapsackFn(items, maxCapacity, itemIndex - 1, memo);

  // yes option
  const sackWithItem = knapsackFn(
    items,
    maxCapacity - items[itemIndex].weight,
    itemIndex - 1,
    memo,
  );
  // no option
  const sackWithoutItem = knapsackFn(items, maxCapacity, itemIndex - 1, memo);

  const valueYesItems = sackWithItem.value + items[itemIndex].value;
  const valueNoItems = sackWithoutItem.value;

  let result = null;

  if (valueYesItems < valueNoItems) result = sackWithoutItem;
  else {
    result = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: valueYesItems,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
  }

  memo[maxCapacity][itemIndex] = result;

  return result;
}

function knapsack(items, capacity) {
  const memo = Array.from(Array(capacity + 1), () =>
    Array(items.length).fill(undefined),
  );
  return knapsackFn(items, capacity, items.length - 1, memo);
}

// time complexity without memoization => O(2^n);
// Time complexity with memoization => O(n*Capacity);

const items = [
  {
    name: "a",
    value: 8,
    weight: 7,
  },
  {
    name: "b",
    value: 10,
    weight: 3,
  },
  {
    name: "c",
    value: 4,
    weight: 1,
  },
  {
    name: "d",
    value: 6,
    weight: 10,
  },
];
const maxCapacity = 20;

console.log(knapsack(items, maxCapacity));
