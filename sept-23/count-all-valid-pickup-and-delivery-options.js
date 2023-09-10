// `0 Sept 2023
// 1359. Count All Valid Pickup and Delivery Options

var countOrders = function(n) {
var dp = new Array(n+1).fill(1);
    var MOD = 10**9+7;
    for(var i =2;i<=n;i++){
        dp[i] = (dp[i-1] * i *(2*i-1))%MOD;
    }
    return dp[n];
};
