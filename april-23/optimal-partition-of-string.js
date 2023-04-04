// 04 April 2023
// 2405. Optimal Partition of String

const partitionString = (s) => {
    const freq = new Array(26).fill(0);
    let result = 1;
    
    for(let i = 0; i < s.length; i++) {
        const index = s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
        freq[index]++;
        
        if(freq[index] > 1) {
            result++;
            freq.fill(0);
            freq[index]++;
        }
    }
    
    return result;
};
