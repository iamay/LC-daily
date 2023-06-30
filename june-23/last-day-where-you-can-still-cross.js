// 30 June 2023
// 1970. Last Day Where You Can Still Cross

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
  const n = row * col;
  const parents = Array.from({ length: n + 2 }, (_, i) => i);
  const grid = new Array(row).fill(0).map(x => new Array(col).fill(1));
  const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const index = (i, j) => i * col + j + 1;
  const inside = (i, j) => 0 <= i && i < row && 0 <= j && j < col;
  const union_set = (i, j) => (parents[find_set(i)] = find_set(j));
  const find_set = i => (parents[i] == i ? i : (parents[i] = find_set(parents[i])));

  cells = cells.map(x => [x[0] - 1, x[1] - 1]);

  for (let day = n - 1; 0 <= day; --day) {
    const [i, j] = cells[day];
    grid[i][j] = 0;
    const ix = index(i, j);
    for (const [di, dj] of neighbors) {
      const [ni, nj] = [i + di, j + dj];
      const nix = index(ni, nj);
      if (inside(ni, nj) && grid[ni][nj] == 0) union_set(nix, ix);
      if (i == 0) union_set(0, ix);
      if (i == row - 1) union_set(n + 1, ix);
    }

    if (find_set(0) == find_set(n + 1)) return day;
  }

  return -1;
};
