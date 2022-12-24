// 24 Dec 2022
// 790. Domino and Tromino Tiling

class Solution {
public:
	const int MOD = 1e9+7;
    int numTilings(int n) {
        vector<vector<int>> dp(n+2, vector<int>(2));
        dp[1] = {1, 1}, dp[2] = {2, 2};                 
        for(int i = 3; i <= n; i++) {
            dp[i][0] = (dp[i-1][0] + dp[i-2][0] + 2l*dp[i-2][1]) % MOD;
            dp[i][1] = (dp[i-1][0] + dp[i-1][1]) % MOD;
        }
        return dp[n][0];
    }
};
