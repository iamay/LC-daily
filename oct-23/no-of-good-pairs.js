// 03 Oct 2023
// 1512. Number of Good Pairs
var numIdenticalPairs = function(nums) {
    nums.sort();
    let totalCount = 0; 
    let curCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            totalCount += curCount;
            curCount++;
        } else {
            curCount = 1;
        }
    }
    
    return totalCount;
};
