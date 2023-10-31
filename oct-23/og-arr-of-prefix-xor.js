// 31 Oct 2023
// 2433. Find The Original Array of Prefix Xor
/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let ans = [pref[0]];
    for(let i = 1; i < pref.length; i++){
        ans.push(pref[i] ^ pref[i - 1]) 
    }
    return ans
};
