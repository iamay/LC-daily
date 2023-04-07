// 07 April 2023
// 1020. Number of Enclaves

var numEnclaves = function (grid) {
    const col = grid.length;
    const row = grid[0].length;

    // 1. find all the 1s on the boundary
    // 2. find all the 1s connected to the boundary and set them to 0
    // 3. count the rest 1s
    // 4. return the count

    let checkNeighboursDFS = (i, j) => {
        if (i < 0 || i >= col || j < 0 || j >= row || grid[i][j] === 0) {
            return;
        }
        grid[i][j] = 0;
        checkNeighboursDFS(i - 1, j);
        checkNeighboursDFS(i + 1, j);
        checkNeighboursDFS(i, j - 1);
        checkNeighboursDFS(i, j + 1);
    };

    // 1. find all the 1s on the boundary
    for (let i = 0; i < col; i++) {
            checkNeighboursDFS(i, 0);
            checkNeighboursDFS(i, row - 1);
    }
    for (let i = 0; i < row; i++) {
            checkNeighboursDFS(0, i);
            checkNeighboursDFS(col - 1, i);
    }

    // 3. count the rest 1s
    let isolatedIslandCount = 0;
    // isolatedIslandCount = grid.flat().reduce((a, b) => a + b);
    for (let i = 1; i < col - 1; i++) {
        for (let j = 1; j < row - 1; j++) {
            if (grid[i][j] === 1) {
                isolatedIslandCount++;
            }
        }
    }

    return isolatedIslandCount;
};
