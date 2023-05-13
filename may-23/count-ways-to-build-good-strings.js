// 13 May 2023
// 2466. Count Ways To Build Good Strings

var countGoodStrings = function(low, high, zero, one) {
    let dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    let mod = 1e9 + 7;
    
    for (let end = 1; end <= high; ++end) {
        if (end >= zero) {
            dp[end] += dp[end - zero];
        }
        if (end >= one) {
            dp[end] += dp[end - one];
        }
        dp[end] %= mod;
    }
    
    let answer = 0;
    for (let i = low; i <= high; ++i) {
        answer += dp[i];
        answer %= mod;
    }
    return answer;
};
