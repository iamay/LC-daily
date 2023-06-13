// 13 June 2023
// 2352. Equal Row and Column Pairs

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const columns = new Map();
    const rows = new Map();
    let rowNums, colNums, rowHash, colHash;
    let ans = 0;

    for (let i = 0; i < grid.length; i++) {
        rowNums = [];
        colNums = [];
        
        for (let j = 0; j < grid[i].length; j++) {
            rowNums.push(grid[i][j]);
            colNums.push(grid[j][i]);
        }

        rowHash = rowNums.join(',');
        colHash = colNums.join(',');
        
        rows.set(rowHash, (rows.get(rowHash) || 0) + 1);
        columns.set(colHash, (columns.get(colHash) || 0) + 1);
    }

    for (const [row, value] of rows) {
        if (columns.has(row)) {
            ans += value * columns.get(row);
        }
    }

    return ans;
};
