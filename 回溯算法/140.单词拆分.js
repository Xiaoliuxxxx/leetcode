/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const path = [];
  const result = [];

  function divideHelper(startIndex) {
    if (startIndex >= s.length) {
      result.push(path.join(" "));
    }

    for (let j = startIndex; j < s.length; j++) {
      let str = s.substr(startIndex, j - startIndex + 1);
      if (!wordDict.includes(str)) continue;
      path.push(str);
      divideHelper(j + 1);
      path.pop();
    }
  }
  divideHelper(0);
  return result;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
