// 27 July 2023
// 486. Predict the Winner

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let memo = new Map();
    var dfs = function(start, finish, turn){
        if (start=== finish) return turn*nums[start]; 

        if(memo.has(start+'_'+finish))
            return memo.get(start+'_'+finish);
        let a = turn*nums[start] + dfs(start + 1, finish, -1*turn);
        let b = turn*nums[finish] + dfs(start, finish-1, -1*turn);
        memo.set(start+'_'+finish, turn* Math.max(turn * a, turn * b));
        return turn* Math.max(turn * a, turn * b);
    }

    let sum = dfs(0, nums.length-1, 1);
    return sum>=0;
};
