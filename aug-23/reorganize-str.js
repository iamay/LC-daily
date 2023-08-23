// 23 Aug 2023
// 767. Reorganize String

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    var letters = {} // char => frequency

    for(var c of s) letters[c] = letters[c] + 1 || 1 //initialize hashmap 
    var keys = Object.keys(letters) 
    keys.sort((a, b) => letters[b]-letters[a]) //sort the keys

    if(letters[keys[0]] > (s.length + 1)/2) return "" //if a letter has more appearances than half, there aren't enough spacing characters

    var res = [], i = 0
    for(var c of keys) {
        var numChars = letters[c] //find the occurences of a character
        while(numChars--) {
            if(i >= s.length) i = 1 //set to one or else we will be overrinding characters
            res[i] = c; //set the index to the character
            i += 2 //space them two apart
        }
    }
    return res.join("")

};
