// 09 Oct 2023
// 34. Find First and Last Position of Element in Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const search = (start, end) => {
        if (start > end) return [-1, -1];
        const mid = Math.floor((start + end)/2);

        if (nums[mid] > target) {
            return search(start, mid - 1);
        } else if (nums[mid] < target) {
            return search(mid + 1, end);
        } else {
            let currentStart = mid;
            let currentEnd = mid;
            while(nums[currentStart] === target) {
                currentStart--;
            }
            while(nums[currentEnd] === target) {
                currentEnd++;
            }
            return [currentStart + 1, currentEnd - 1];
        }
    }
    return search(0, nums.length - 1);
};
