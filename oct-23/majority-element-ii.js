// 05 oct 2023
// 229. Majority Element II
var majorityElement = function(nums) {
    let X = null, countX = 0;
    let Y = null, countY = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === X) countX++;
        else if(nums[i] === Y) countY++;
        else if(!countX) { X = nums[i]; countX++; } 
        else if(!countY) { Y = nums[i]; countY++; } 
        else { countX--; countY--; }
    }
    const Xcount = nums.filter(z => z === X).length;
    const Ycount = nums.filter(z => z === Y).length;
    const limit = Math.floor(nums.length/3)
    const res = [];
    
    if(Xcount > limit) res.push(X);
    if(Ycount > limit) res.push(Y);
    return res;
};
