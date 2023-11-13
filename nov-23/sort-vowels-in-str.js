// 13 Nov 2023
// 2785. Sort Vowels in a String
/**
 * @param {string} s
 * @return {string}
 */
const vowels = {
    "a": "a",
    "e": "e",
    "i": "i",
    "o": "o",
    "u": "u",
    "A": "A",
    "E": "E",
    "I": "I",
    "O": "O",
    "U": "U",
}
var sortVowels = function(s) {
    let temp = [];
    const indexArr = [];
    let output = [];
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        if (vowels[character]) {
            temp.push(character);
            indexArr.push(i)
        } else {
            output[i] = character;
        }
    }
    temp = temp.sort();
    for (let i = 0; i < indexArr.length; i++) {
         output[indexArr[i]] = temp[i];
    }
    return output.join('');
};
