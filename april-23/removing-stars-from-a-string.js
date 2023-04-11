// 11 April 2023
// 2390. Removing Stars From a String

var removeStars = function (s, stk = []) {
    s.split('').forEach(char=>char === "*" ? stk.pop() : stk.push(char)) 
    return stk.join("");
};
