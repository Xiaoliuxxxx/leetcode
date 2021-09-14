/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  // 考虑全负数
  if (nums.every((n) => n < 0)) {
    return Math.max(...nums);
  }
  // 原数组的最大子序和
  const dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
  }
  console.log(dp);

  let first = Math.max(...dp);
  let numsCopy = JSON.parse(JSON.stringify(nums));
  nums.pop();
  nums.shift();
  const dp2 = [];
  dp2[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp2[i] = Math.min(dp2[i - 1] + nums[i], nums[i]);
  }
  console.log(dp2);
  let min = Math.min(...dp2);
  let total = 0;
  numsCopy.forEach((n) => (total += n));
  console.log(total - min);

  let result = 0;

  result = Math.max(total - min, first);

  console.log(result);
  return result;
};
