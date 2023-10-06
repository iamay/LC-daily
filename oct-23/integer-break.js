// 06 Oct 2023
// 343. Integer Break
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n <= 2) return 1
    if(n === 3) return 2
    const cache = {
        1:1,
        2:2,
        3:3,
        4:4
    }
    const getMax = (num) => {
        if(cache[num] === undefined) {
            let x1 = Math.trunc(num/2)
            let x2 = num-x1
            let max = 0
            let tot = getMax(x1)*getMax(x2)
            while(tot > max) {
                max = tot
                x1--
                x2++
                tot = getMax(x1)*getMax(x2)
            }
            cache[num]=max
        }
        return cache[num]
    }
    return getMax(n)
};
