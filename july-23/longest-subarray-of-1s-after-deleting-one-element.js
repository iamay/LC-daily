// 05 July 2023
// 1493. Longest Subarray of 1's After Deleting One Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, right = 0;
    let max = 0;
    let zeroIdx = null;
    while (right < nums.length) {
        if (nums[right] === 0) {
            if (zeroIdx == null) zeroIdx = right;
            else {
                left = zeroIdx + 1;
                zeroIdx = right;
            }
        }
        max = Math.max(max, right - left);
        right++;
    }
    return max;
};
