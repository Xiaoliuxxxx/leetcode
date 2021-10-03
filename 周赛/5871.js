/*
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  const result = [];
  for (let i = 0; i < m; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(original[i * n + j]);
    }
    result.push(temp);
  }
  return result;
};

console.log(construct2DArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3));
