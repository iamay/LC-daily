// 18 June 2023
// 2328. Number of Increasing Paths in a Grid

var countPaths = function(grid) {
  let m = grid.length, n = grid[0].length, mod = 10 ** 9 + 7;
  let ans = 0, memo = Array(m).fill(0).map(() => Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = (ans + dfs(i, j)) % mod;
    }
  }
  return ans;

  function dfs(i, j) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    if (memo[i][j] !== -1) return memo[i][j];
    let ans = 1;
    for (let [x, y] of directions) {
      let newX = i + x, newY = j + y;
      if (newX < 0 || newX >= m || newY < 0 || newY >= n || grid[newX][newY] <= grid[i][j]) continue;
      ans = (ans + dfs(newX, newY)) % mod;
    }
    return memo[i][j] = ans;
  }     
};
