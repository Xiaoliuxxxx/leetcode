/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target.indexOf(nums[i]) < 0) continue;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        count++;
      }
    }
  }
  return count;
};

console.log(numOfPairs(["777", "7", "77", "77"], "7777"));
console.log(numOfPairs(["123", "4", "12", "34"], "1234"));
console.log(numOfPairs(["1", "1", "1"], "11"));
