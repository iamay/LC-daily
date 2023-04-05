// 05 April 2023
// 2439. Minimize Maximum of Array

var minimizeArrayValue = function(nums) {
    // for the first step arithmetic mean will be equal to the first element
    let minMax = nums[0];
    let sum = nums[0];
    let i = 1;
    while (i < nums.length) {
        // sum of all elements 0 to i
        sum += nums[i++];
        // calculate artithmetic mean and if it's bigger than the current one, update it.
        minMax = Math.max(minMax, Math.ceil(sum / i));
    }
    return minMax;
};
