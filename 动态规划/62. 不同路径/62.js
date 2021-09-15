/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 1.创建dp数组
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n));
  }

  // 2.生成边界
  dp[0][0] = 1;
  //  横向
  for (let i = 1; i < n; i++) {
    dp[0][i] = 1;
  }
  // 纵向
  for (let i = 1; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp);
  return dp[m - 1][n - 1];
};

uniquePaths(3, 7);
