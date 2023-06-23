// 23 June 2023
// 1027. Longest Arithmetic Subsequence

/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    const LEN = A.length;
    if (LEN < 3)
        return LEN;
    
    let ans = 0, dp = [];
    for(let i = 0; i < LEN; i++)
        dp.push(new Map([[0, 1]]));    

    for(let i = 1; i < LEN; i++) {
        let ai = A[i], dpi = dp[i];
        for(let j = 0; j < i; j++) {
            let aj = A[j], dpj = dp[j];
            let dif = ai - aj;
            if(dpj.has(dif)) {
                dpi.set(dif, 1 + dpj.get(dif));
                ans = Math.max(ans, dpi.get(dif));
            }
            else{
                dpi.set(dif, 2);
                ans = Math.max(ans, 2);
            }
        }
    }
    
    return ans;
};
