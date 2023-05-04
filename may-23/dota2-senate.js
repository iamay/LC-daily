// 04 May 2023
// 649. Dota2 Senate

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    //Here we use stack to solve this question
    //The key for this question is the one who can vote can vote out the the one will vote
    //Example
    //RDD => R voute out D, senate became RD, and D vote out R winner is D
    //in stack and senate we can see:
    //stack = [] senate = RDD
    //stack = [R] senate = DD
    //stack = [] senate = DR
    //stack = [D] senate = R
    //then D vode out R winner is D

    //Approch
    //when stack is empty we push senate[i]
    //when stack.lastOne == senate[i] we push senate[i]
    //when stack.lastOne != senate[i] we pop stack.lastOne push into senate
    //Finally we check who is left in stack then that is winner

    senate = senate.split('')
    let stack = []
    let win = null

    for(let i = 0; i < senate.length; i++){
        if(!stack[stack.length - 1]){
            stack.push(senate[i])
        }else if(stack[stack.length - 1] && stack[stack.length - 1] == senate[i]){
            stack.push(senate[i])
        }else if(stack[stack.length - 1] && stack[stack.length - 1] != senate[i]){
            senate.push(stack.pop())
        }
    }

    win = stack[0]
    if(win == 'R') return 'Radiant'
    if(win == 'D') return 'Dire'
};
