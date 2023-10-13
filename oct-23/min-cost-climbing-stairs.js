// 13 Oct 2023
// 746. Min Cost Climbing Stairs
const minCostClimbingStairs = cost => {
  const dp = cost.reduce((dp, val, idx) => {
    dp[idx] = Math.min((dp[idx - 1] || 0) + val, (dp[idx - 2] || 0) + val)
    return dp;
  }, []);
  return Math.min(dp.pop(), dp.pop())
}
