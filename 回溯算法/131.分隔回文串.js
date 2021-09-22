/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。
 * 返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 示例 1：
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 示例 2：
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 提示：
 * 1 <= s.length <= 16
 * s 仅由小写英文字母组成

 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  //定义单个解和解集
  const path = [];
  const result = [];

  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  function divideHelper(startIndex) {
    if (startIndex >= s.length) {
      result.push(Array.from(path));
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      let str = s.substr(startIndex, i - startIndex + 1);
      if (!isPalindrome(str)) continue;
      path.push(s.substr(startIndex, i - startIndex + 1));
      divideHelper(i + 1);
      path.pop();
    }
  }
  divideHelper(0);
  return result;
};

console.log(partition("aab"));
