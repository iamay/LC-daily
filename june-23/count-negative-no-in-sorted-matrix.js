// 08 June 2023
// 1351. Count Negative Numbers in a Sorted Matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let [x,y] = [grid.length, grid[0].length];
    let output = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (grid[i][j] < 0) {
                output += (y - j)*(grid.length - i);
                y = j;
                break;
            }
        }
    }
    return output;
};
