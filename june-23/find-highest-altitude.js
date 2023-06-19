// 19 June 2023
// 1732. Find the Highest Altitude

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0, att = 0
    for (let i = 0; i < gain.length; i++) {
      att += gain[i]
      max = Math.max(max, att)
    }
    return max
};
