// 10 May 2023
// 59. Spiral Matrix II

/**
 * @param {number} n
 * @return {number[][]}
 */
const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const invalidRow = (row, n) => row < 0 || row >= n;
const invalidCol = (col, n) => col < 0 || col >= n;

var generateMatrix = function(n) {
    const output = new Array(n).fill(false).map(item => new Array(n).fill(null));
    const seenMatrix = new Array(n).fill(false).map(item => new Array(n).fill(false));
    let count = 1;
    let indexDirection = 0;
    
    const dfs = (row, col, values, seen) => {      
        if (invalidRow(row, n) || invalidCol(col, n) || seen[row][col]) return;
        
        seen[row][col] = true;
        
        values[row][col] = count;
        count++;

        dfs(row + direction[indexDirection][0], col + direction[indexDirection][1], values, seen);

        if (invalidRow(row, n) || invalidCol(col, n) || seen[row][col]) {
            indexDirection++;
            if (indexDirection > 3) indexDirection = 0;
            dfs(row + direction[indexDirection][0], col + direction[indexDirection][1], values, seen);
        }
    };

    dfs(0, 0, output, seenMatrix);

    return output;
};
