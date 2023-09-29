// 29 Sept 2023
// 896. Monotonic Array
var isMonotonic = function(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (!increasing && !decreasing) {
            return false;
        }
    }

    return true; 
};
