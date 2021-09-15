/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 1.创建dp数组
  let m = matrix.length;
  let n = matrix[0].length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n));
  }

  //处理边界
  if (matrix[0][0] === "1") {
    dp[0][0] = 1;
  } else {
    dp[0][0] = 0;
  }

  //  横向
  for (let i = 1; i < n; i++) {
    dp[0][i] = matrix[0][i] === "1" ? 1 : 0;
  }
  // 纵向
  for (let i = 1; i < m; i++) {
    dp[i][0] = matrix[i][0] === "1" ? 1 : 0;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "0") {
        dp[i][j] = 0;
      } else {
        let min = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        if (min === 0) {
          dp[i][j] = 1;
        } else {
          let square = Math.sqrt(min) + 1;
          dp[i][j] = square * square;
        }
      }
    }
  }
  console.log(matrix);
  console.log(dp);
  const temp = dp.flat();
  return Math.max(...temp);
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
