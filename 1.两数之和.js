/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 暴力解法
  for (var i = 0; i < nums.length; i++) {
    // 获取另一个数的值和索引值
    var rest = target - nums[i];
    var restIndex = nums.indexOf(rest);
    // 当存在且没有重复的情况下返回
    if (restIndex >= 0 && i !== restIndex) {
      return [i, restIndex];
    }
  }
};
// @lc code=end
