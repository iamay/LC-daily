// 03 July 2023
// 859. Buddy Strings

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
   if(s.length !== goal.length) 
   return false;
   if(s === goal) {
       let set = new Set();
       for(let i =0; i< s.length; i++) {
         set.add(s.charAt(i));
       }
       return set.size < s.length
   } else {
       let first = -1, second = -1;
       for(let i = 0; i<s.length; i++) {
           if(s[i] !== goal[i]) {
               if(first === -1) {
                   first = i
               } else if(second === -1) {
                   second = i
               }else {
                   return false;
               }
           }
       }
     return (second != -1 && s[first] === goal[second] && s[second] === goal[first])
   }

};
