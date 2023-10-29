// 29 Oct 2023
// 458. Poor Pigs
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = (n, m, p) => Math.ceil(Math.log10(n) / Math.log10((p / m) + 1));
