// 24 July 2023
// 50. Pow(x, n)

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0) {
        return 1;
    }
    if(n % 2 == 0) {
        return myPow(x * x, n / 2)
    }
    if(n == 1) {
        return x
    }
    if(n < 0) {
        return 1 / myPow(x, Math.abs(n))
    }
    return x * myPow(x, n - 1);
};
