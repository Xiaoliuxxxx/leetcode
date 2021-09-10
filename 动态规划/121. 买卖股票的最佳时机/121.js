/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = prices[0];
  var max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  console.log(max);
  return max;
};
