// 15 July 2023
// 1751. Maximum Number of Events That Can Be Attended II
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  const n = events.length;
  events.sort((a, b) => a[0] - b[0]);

  const dp = new Array(n).fill().map((_) => new Array(k + 1).fill());
  return helper(events, k, dp, 0);
};

function helper(events, k, dp, idx) {
  if (idx >= events.length || k === 0) return 0;
  if (dp[idx][k] !== undefined) return dp[idx][k];

  const nextIdx = binarySearch(idx, events);
  const take = events[idx][2] + helper(events, k - 1, dp, nextIdx);
  const skip = helper(events, k, dp, idx + 1);

  return (dp[idx][k] = Math.max(take, skip));
}

function binarySearch(idx, events) {
  let low = idx + 1;
  let high = events.length - 1;
  let nextIdx = events.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (events[mid][0] > events[idx][1]) {
      nextIdx = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return nextIdx;
}
