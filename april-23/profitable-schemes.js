// 21 april 2023
// 879. Profitable Schemes

var profitableSchemes = function(n, minProfit, group, profit) {
    const m = group.length;
    const MOD = 10 ** 9 + 7;
    let dp = [...new Array(n + 1)].map(() => new Array(minProfit + 1).fill(0));

    // base case
    for (let i = 0; i < n + 1; i++) {
        dp[i][minProfit] = 1;
    }

    for (let i = m - 1; i >= 0; i--) {
        let temp = [...new Array(n + 1)].map(() => new Array(minProfit + 1).fill(0));
        for (let remain = 0; remain < n + 1; remain++) {
            for (let total = minProfit; total >= 0; total --) {
                let notTake = dp[remain][total];
                let take = 0;
                if (group[i] <= remain) take = dp[remain - group[i]][Math.min(minProfit, total + profit[i])];
                temp[remain][total] = (notTake + take) % MOD;
            }
        }
        dp = temp;
    }
    return dp[n][0];
};
