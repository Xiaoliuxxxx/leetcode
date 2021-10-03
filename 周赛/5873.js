/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  var changeIndex = [];
  var resultF = [];
  var resultT = [];
  // F优先
  for (let i = 0; i < answerKey.length; i++) {
    if (answerKey[i] === "F") {
      resultF[i] = i === 0 ? 1 : resultF[i - 1] + 1;
    } else {
      if (changeIndex.length < k) {
        changeIndex.push(i);
        resultF[i] = i === 0 ? 1 : resultF[i - 1] + 1;
      } else if (changeIndex.length === k) {
        var index = changeIndex.shift();
        resultF[i] = i - index;
        changeIndex.push(i);
      }
    }
  }

  // D 优先
  changeIndex = [];
  for (let i = 0; i < answerKey.length; i++) {
    if (answerKey[i] === "T") {
      resultT[i] = i === 0 ? 1 : resultT[i - 1] + 1;
    } else {
      if (changeIndex.length < k) {
        changeIndex.push(i);
        resultT[i] = i === 0 ? 1 : resultT[i - 1] + 1;
      } else if (changeIndex.length === k) {
        var index = changeIndex.shift();
        resultT[i] = i - index;
        changeIndex.push(i);
      }
    }
  }

  // console.log(resultF);
  // console.log(resultT);

  return Math.max(...resultF, ...resultT);
};
console.log(maxConsecutiveAnswers("TTFTTFTT", 1));
