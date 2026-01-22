function computeChange(coins, amount) {
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
}

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 130;

const change = computeChange(availableCoins, targetAmount);
console.log(change);
