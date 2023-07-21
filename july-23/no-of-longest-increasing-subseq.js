// 21 July 2023
// 673. Number of Longest Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1)
    const paths = Array(nums.length).fill(1)
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i-1; j >= 0; j--) {
            if(nums[j] < nums[i]) {
                if(dp[i] === dp[j]+1) paths[i] += paths[j]
                else if(dp[i] < dp[j]+1) paths[i] = paths[j]
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    const max = Math.max(...dp);
    let totalPaths = 0;
    
    for(let i = 0; i < dp.length; i++) {
        if(dp[i] === max) totalPaths += paths[i];
    }
    return totalPaths
};
