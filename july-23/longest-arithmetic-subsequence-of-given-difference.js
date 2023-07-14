// 14 July 2023
// 1218. Longest Arithmetic Subsequence of Given Difference
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let result = 0;
    const map = {};

    for (const val of arr) {
        const target = val - difference;
        map[val] = (map[target] || 0) + 1;
        result = Math.max(result, map[val]);
    }

    return result;
};
