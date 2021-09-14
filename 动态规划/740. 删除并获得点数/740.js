/**
 * @param {number[]} nums
 * @return {number}
 */

//  将每个数据的和加起来，转换成打家劫舍的问题
var deleteAndEarn = function (nums) {
  // 获取最大的数
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  const total = new Array(max - min + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    total[nums[i] - min] = total[nums[i] - min] + nums[i];
  }
  const dp = [];
  console.log(total);
  if (total.length >= 1) {
    dp[0] = total[0];
  }
  if (total.length >= 2) {
    dp[1] = Math.max(total[0], total[1]);
  }
  if (total.length >= 3) {
    for (let i = 2; i < total.length; i++) {
      dp[i] = Math.max(total[i] + dp[i - 2], dp[i - 1]);
    }
  }
  console.log(dp);
  return dp[dp.length - 1];
};
