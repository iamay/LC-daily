// 09 June 2023
// 744. Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > target.charCodeAt(0)) return letters[i];
    }
    
    return letters[0];
};
