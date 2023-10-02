// 02 Oct 2023
// 2038. Remove Colored Pieces if Both Neighbors are the Same Color

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let countA = 0;
    let countB = 0;

    for (let i = 1; i < colors.length - 1; i++) {
        countA += colors[i - 1] === 'A' &&
                  colors[i] === 'A' &&
                  colors[i + 1] === 'A';
        
        countB += colors[i - 1] === 'B' &&
                  colors[i] === 'B' &&
                  colors[i + 1] === 'B';
    }

    return countA > countB;
};
