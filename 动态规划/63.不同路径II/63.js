/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 1.创建dp数组
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n));
  }

  //处理边界
  if (obstacleGrid[0][0] === 1) {
    dp[0][0] = 0;
  } else {
    dp[0][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] && obstacleGrid[0][i] === 0 ? 1 : 0;
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] && obstacleGrid[i][0] === 0 ? 1 : 0;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp);
  return dp[m - 1][n - 1];
};

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);

uniquePathsWithObstacles([
  [0, 1],
  [0, 0],
]);
