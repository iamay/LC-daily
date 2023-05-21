// 21 May 2023
// 934. Shortest Bridge

/**
 * @param {number[][]} grid
 * @return {number}
 */
const DIRECTIONS = [[-1,0],[1,0],[0,-1],[0,1]];
const shortestBridge = (grid) => {
    const M = grid.length;
    const N = grid[0].length;

    let nextQueue = [];

    // Builds a queue consisting of every space in the first island found
    const buildQueueDFS = () => {
        // DFS method to find all the spaces in an island
        const findIslandDfs = (i,j) => {
            if(grid[i][j] !== 1) return false;
            // Generate a queue consisting of all the spaces in the first island detected
            nextQueue.push([i,j]);
            // Reuse the grid to track visited spaces
            grid[i][j] = 2;

            // Search in all 4 directions
            if(i > 0) findIslandDfs(i-1,j);
            if(j > 0) findIslandDfs(i,j-1);
            if(i+1 < M) findIslandDfs(i+1,j);
            if(j+1 < N) findIslandDfs(i,j+1);

            return true;
        }

        for(let i = 0; i < M; i++) {
            for(let j = 0; j < N; j++) {
                if(findIslandDfs(i,j)) {
                    // Just need to find the location of the first island
                    return;
                }
            }
        }
    };
    
    // Runs a BFS to figure out how long it takes to get to the second island
    const buildBridgeBFS = () => {
        let distance = -1;
        let queue = [];
        while(nextQueue.length) {
            // We could alternatively track the queue length and use queue.shift()
            // But queue.shift() is an O(N) operation so it is faster to use two queue objects
            queue = nextQueue;
            nextQueue = [];

            // Perform BFS against the current queue space
            for(let [i,j] of queue) {

                for(let [x,y] of DIRECTIONS) {
                    const nextX = i+x;
                    const nextY = j+y;
                    if(nextX >= 0 && nextX < M && nextY >= 0 && nextY < N) {
                        switch(grid[nextX][nextY]) {
                            case 2:
                                // Don't return to squares already visited
                                break;
                            case 1:
                                // Found the square, we can exit without continuing the BFS!
                                return distance + 1;
                            case 0:
                                // If the square is empty then we add it to the queue and mark as visited
                                nextQueue.push([nextX, nextY]);
                                grid[nextX][nextY] = 2;
                                break;
                        }
                    }
                }
            }
            distance++;
        }
    }

    // Run our two methods to get the result
    buildQueueDFS();
    return buildBridgeBFS();
};
