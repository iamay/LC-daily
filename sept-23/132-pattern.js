// 30 Sept 2023
// 456. 132 Pattern
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    // sanity check
    if (nums.length < 3) return false;

    let N2 = []; // potential candidates, number 2
    let N1 = [nums[0]]; // the smallest number, number 3

    for (let i=1;i<nums.length;i++) { 
        N1.push(Math.min(N1[N1.length-1], nums[i]));
    }

    for (let i=nums.length-1;i>=0;i--) { // number 3
        if (nums[i] > N1[i]) {
            // remove useless N2 candidates
            while (N2.length!=0 && N2[N2.length-1] <= N1[i]) N2.pop();
            // found a pattern
            if (N2.length!=0 && N2[N2.length-1] < nums[i]) return true;
            N2.push(nums[i]);
        }
    }
    return false;
}
