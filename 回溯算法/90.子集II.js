/**
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。 

示例 1：
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

示例 2：
输入：nums = [0]
输出：[[],[0]]
 

提示：
1 <= nums.length <= 10
-10 <= nums[i] <= 10

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  // 定义单个结果和结果集合
  const path = [];
  const result = [];

  function combineHelper(startIndex) {
    result.push([...path]);
    let previous = NaN;
    for (let i = startIndex; i < nums.length; i++) {
      if (previous === nums[i]) continue;
      path.push(nums[i]);
      previous = nums[i];
      combineHelper(i + 1);
      path.pop();
    }
  }

  combineHelper(0);
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
