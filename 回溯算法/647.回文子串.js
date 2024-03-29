/**
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 * 回文字符串 是正着读和倒过来读一样的字符串。
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  function isHuiwen(str) {
    return str === str.split("").reverse().join("");
  }

  const path = [];
  const result = [];

  function combineHelper(i) {
    for (let j = i; j < s.length; j++) {
      let str = s.substr(i, j - i + 1);
      if (isHuiwen(str)) {
        result.push(str);
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    combineHelper(i);
  }

  return result.length;
};

console.log(countSubstrings("abc"));
