function computeChange(coins, amount) {
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

  for (const coin of coins) {
    const counter = Math.floor(remaningAmount / coin);
    result.numberOfCoins += counter;
    result.selectedCoins[coin] = counter;
    remaningAmount -= coin * counter;
  }

  return result;
}

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 129;

const change = computeChange(availableCoins, targetAmount);
console.log("Target Amount is:", targetAmount, "\n", change);
