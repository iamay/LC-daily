// 25 Oct 2023
// 779. K-th Symbol in Grammar
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthGrammar(n, k){
    if(n === 1){
        return false;
    }
    return (k % 2 === 0) ^ kthGrammar(n-1, Math.ceil(k/2)) 
}
