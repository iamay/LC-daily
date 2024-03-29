// 26 May 2023
// 1140. Stone Game II

var stoneGameII = function(piles) {
    var n = piles.length;
    var dp = new Array(n+1).fill(0).map(el=>new Array(n+1).fill(0));
    
    // sum[i]: sum from i to n-1
    var sum = new Array(n).fill(0);
    for(var i = n-1; i>=0 ; i--)
    {
        if(i == n-1) {
            sum[i] = piles[i];
        }
        else
        {
                sum[i] = piles[i] + sum[i+1];
        }
    }
    
    // DP
    for(var i=n-1;i>=0;i--)
    {
        for(var m=1;m<=n; m++)
        {
            // alice take x piles
            // then bob's next value = dp[i+1][max(m,x)]
            // bob's starting index: i+x
            // bob's M = max(M,x)
            for(var x=1; x<=2*m && i+x<=n; x++)
            {
                dp[i][m] = Math.max(dp[i][m], sum[i]-dp[i+x][Math.max(m,x)]);
            }
        }
    }
    return dp[0][1];
};
