/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function (nums, k) {
  //不替换的情况
  const preSum = [];
  const sufSum = [];
  var originCount = 0;
  var count = 0;
  // 从前往后加
  for (let i = 0; i < nums.length; i++) {
    preSum[i] = i === 0 ? nums[i] : preSum[i - 1] + nums[i];
  }
  // 从后往前加
  for (let i = nums.length - 1; i >= 0; i--) {
    sufSum[i] =
      i === nums.length - 1 ? nums[nums.length - 1] : sufSum[i + 1] + nums[i];
  }
  for (let i = 0; i < preSum.length / 2; i++) {
    if (preSum[i] === sufSum[nums.length - i]) {
      originCount++;
    }
  }

  // 替换的情况
  for (let i = 0; i < preSum.length / 2; i++) {
    if (preSum[i] - nums[i] + k === sufSum[nums.length - i]) {
      count++;
    }
  }
  for (let i = 0; i < sufSum.length / 2; i++) {
    if (sufSum[i] - nums[i] + k === preSum[nums.length - i]) {
      count++;
    }
  }
  console.log(preSum, sufSum);
  console.log(originCount);
  console.log(count);
};

waysToPartition([1, 1, 2], 1);
