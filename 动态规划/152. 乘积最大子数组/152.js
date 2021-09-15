/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  function getMax(nums) {
    const dp = [];
    dp[0] = nums[0];
    if (nums.length > 1) {
      dp[1] = Math.max(nums[1], dp[0] * nums[1]);
    }
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(
        nums[i],
        nums[i] * dp[i - 1],
        nums[i] * nums[i - 1] * dp[i - 2]
      );
    }
    console.log(Math.max(...dp));
    return Math.max(...dp);
  }
  const nums2 = nums.reverse();
  Math.max(getMax(nums), getMax(nums2));
};

maxProduct([-2, 3, -4]);
maxProduct([2, 3, -2, 4]);
