// 14 Oct 2023
// 2742. Painting the Walls
/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    let totalCost = new Array(cost.length + 1).fill(2000000000);
    totalCost[0] = 0;

    for (let i = 0; i < cost.length; i++){
        for (let j = totalCost.length - 1; j >= 0; j--){
            let newTime = Math.min(totalCost.length - 1, j + time[i] + 1);
            totalCost[newTime] = Math.min(totalCost[newTime], totalCost[j] + cost[i]);
        }
    }

    return totalCost[totalCost.length - 1];
};
