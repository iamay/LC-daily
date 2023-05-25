// 25 May 2023
// 837. New 21 Game

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */

var new21Game = function(N, K, W) {
let dp = new Array(K+W).fill(0)
let s = 0
for(let i = K;i<K+W;i++){
    //Fill (k~k+w-1), there is no chance of drawing at this time, just compare whether it is less than or equal to N
    if(i <= N){
        dp[i] = 1
    }else{
        dp[i] = 0
    }
    s += dp[i]
  }
for(let i = K-1;i >= 0;i--){
    dp[i] = s/W
    s = s + dp[i] - dp[i+W]
    }
return dp[0]
};
