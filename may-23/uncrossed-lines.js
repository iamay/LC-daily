// 11 May 2023
// 1035. Uncrossed Lines

var maxUncrossedLines = function(A, B) {
    const dpTable = [...Array(A.length+1)].map(() => Array(B.length+1).fill(0));
    
    for(let i = 1; i < dpTable.length; i++) {
        for(let j = 1; j < dpTable[0].length; j++) {
            if(A[i-1] === B[j-1]) dpTable[i][j] = dpTable[i-1][j-1] + 1;
            else dpTable[i][j] = Math.max(dpTable[i-1][j], dpTable[i][j-1]);
        }
    }
    return dpTable[A.length][B.length];
};
