/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dp = [];
  dp[0] = 1;
  dp[1] = nums[0];
  dp[2];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(nums[i - 1], nums[i - 1] * dp[i - 1]);
  }
  console.log(dp);
  dp.shift();
  dp.sort((a, b) => a - b);
  return dp[dp.length - 1];
};
