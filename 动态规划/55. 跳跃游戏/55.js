/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dp = new Array(nums.length).fill(false);
  let falseCount = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === dp.length - 1) {
      dp[i] = true;
    } else {
      if (nums[i] >= falseCount) {
        dp[i] = true;
        falseCount = 1;
      } else {
        falseCount++;
      }
    }
  }
  return dp[0];
};
