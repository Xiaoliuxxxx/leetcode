/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[n]);
};

// 类似与斐波那契数列
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  let first = 0,
    second = 1,
    sum = 2;
  for (let i = 3; i <= n; i++) {
    first = second;
    second = sum;
    sum = first + second;
  }
  console.log(sum);
};

climbStairs(4);
