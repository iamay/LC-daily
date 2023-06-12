// 12 June 2023
// 228. Summary Ranges

var summaryRanges = function(nums) {
    if (!nums.length) return [];
    
    const output = [];
    let currentValue = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!i || nums[i] === currentValue[currentValue.length - 1] + 1) {
            currentValue.push(nums[i]);
        } else {
            output.push(currentValue.length > 1 ? `${currentValue[0]}->${currentValue[currentValue.length - 1]}` : `${currentValue}`);
            currentValue = [nums[i]];
        }
    }
    
    output.push(currentValue.length > 1 ? `${currentValue[0]}->${currentValue[currentValue.length - 1]}` : `${currentValue}`);
    
    return output;
};
