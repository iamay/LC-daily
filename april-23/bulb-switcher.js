// 27 April 2023
// 319. Bulb Switcher

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  let ret = 0
  for (let j = 0, k = 0; j < n; j = j + (2*(k+1)) + 1, k++) {
    ret++
  }
  return ret
};
