// 02 June 2023
// 1376. Time Needed to Inform All Employees

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const map = new Map();
    const visit = new Array(n).fill(false);
    for(let i = 0; i < manager.length; i++){
        const arr = map.get(manager[i]) || [];
        map.set(manager[i], arr.concat(i));
    };

    const dfs = (head) => {
        let time = informTime.at(head), result = time;
        visit[head] = true;
        const subs = map.get(head) || [];
        for(let item of subs) {
            if(!visit[item]) result = Math.max(result, dfs(item) + time);
        }
        return result;
    }
    return dfs(headID);
};
