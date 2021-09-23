/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 有序，升序
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      end = middle - 1;
    } else if (nums[middle] < target) {
      start = middle + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 3, 5, 9, 12], 9));
