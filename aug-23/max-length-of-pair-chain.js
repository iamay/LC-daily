// 26 Aug 2023
// 646. Maximum Length of Pair Chain

var findLongestChain = function(pairs) {
    // sort by the earliest finish time
    pairs.sort((a, b) => a[1] - b[1]);
    let prev = pairs[0], chain = 1;
    
    for(let i = 1; i < pairs.length; i++) {
        const [prevS, prevE] = prev;
        const [currS, currE] = pairs[i];
        if(prevE < currS) {
            prev = pairs[i];
            chain++;
        }
    }
    return chain;
};
