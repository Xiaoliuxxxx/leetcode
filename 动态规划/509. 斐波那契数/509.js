/**
 * @param {number} n
 * @return {number}
 */
// 暴力法
var fib1 = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[n]);
  return dp[n];
};
// fib1(4); //3

// 记忆优化
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let first = 0,
    second = 0,
    sum = 1;
  for (let i = 2; i <= n; i++) {
    first = second;
    second = sum;
    sum = first + second;
  }
  console.log(sum);
  return sum;
};
fib(4); //3
