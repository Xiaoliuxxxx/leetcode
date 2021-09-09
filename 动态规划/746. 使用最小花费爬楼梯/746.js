/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.push(0);
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;

  // 从2开始取小
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  console.log(Math.min(dp[cost.length - 1], dp[cost.length]));
  return Math.min(dp[cost.length]);
};

minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
