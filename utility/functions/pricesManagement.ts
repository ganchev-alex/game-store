export function getRandomSalePrice(prices: number[], percentages: number[]) {
  const price = prices[Math.floor(Math.random() * prices.length)];
  const percentage =
    percentages[Math.floor(Math.random() * percentages.length)];

  return {
    salePrice: (price - price * (percentage / 100)).toFixed(2),
    actualPrice: price,
    percentage,
  };
}

export function getRandomPrice(prices: number[]) {
  return prices[Math.floor(Math.random() * prices.length)];
}
