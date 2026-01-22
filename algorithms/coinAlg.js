function computeChange(coins, amount, removeIndex) {
  /*
  let counter = 0;
  const result = {};
  for (const coin of coins) {
    result[coin] = 0;
    if (counter < amount)
      while (true) {
        if (counter + coin > amount) break;
        counter += coin;
        result[coin]++;
      }
  }
  return result;
    */
  // other solution
  let remaningAmount = amount;

  const result = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  let counterIndex = 0;

  for (const coin of coins) {
    if (counterIndex === removeIndex - 1) {
      counterIndex++;
      result.selectedCoins[coin] = 0;
      continue;
    }
    const counter = Math.floor(remaningAmount / coin);
    result.numberOfCoins += counter;
    result.selectedCoins[coin] = counter;
    remaningAmount -= coin * counter;
    counterIndex++;
  }

  return result;
}

function computeChangeBruteForce(availableCoins, targetAmount) {
  const availableOptions = [];
  for (let i = 0; i < availableCoins.length; i++)
    availableOptions.push(computeChange(availableCoins, targetAmount, i));
  let smallestNumber = Number.MAX_SAFE_INTEGER;
  let result = null;
  for (const option of availableOptions) {
    if (option.numberOfCoins < smallestNumber) {
      smallestNumber = option.numberOfCoins;
      result = option;
    }
  }
  return result;
}

// time complexity for greedy solution is O(n)
// time complexity for brute force is O(n^2)

// const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const availableCoins = [8, 6, 5, 1];
const targetAmount = 11;

const change = computeChangeBruteForce(availableCoins, targetAmount);
console.log("Target Amount is:", targetAmount, "\n", change);
