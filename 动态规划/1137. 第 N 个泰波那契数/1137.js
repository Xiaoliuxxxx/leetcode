/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) {
    return n;
  } else if (n === 2) {
    return 1;
  } else {
    var first = 0,
      second = 0,
      third = 1,
      sum = 1;
    for (let i = 3; i <= n; i++) {
      first = second;
      second = third;
      third = sum;
      sum = first + second + third;
    }
    return sum;
  }
};
console.log(tribonacci(25));
