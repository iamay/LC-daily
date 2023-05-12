// 12 May 2023
// 2140. Solving Questions With Brainpower

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const n = questions.length;

  const dp = new Array(n);

  let points, brainpower;
  for (let i = n - 1; i >= 0; i--) {
    [points, brainpower] = questions[i];

    dp[i] = points + (dp[i + brainpower + 1] || 0);
    if (dp[i + 1] > dp[i]) dp[i] = dp[i + 1]
  }

  return dp[0]
};
