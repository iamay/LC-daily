// 27 Aug 2023
// 403. Frog Jump

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let last = stones.slice(-1);
    
    if(stones[1] != 1) return false;
    
    let dp = {
        0: true,
        1: true,
    };
	
    var isJumpable = (index, k) => {
        let current = stones[index]
        if(stones[index] == last){
            return true;
        }
        
		//This condition check if the distance to next stone is too far to jump
        if(stones[index+1] && index>1 && stones[index+1] > 2* stones[index]) {
            return false;
        }
     
	   //If the pair is present in hashmap, it means it was once checked and wasn't success
        if(dp[`${index},${k}`]){
            return false;
        }
        
        let tempIndex = index+1;
        
        while(stones[tempIndex] <= current+k+1){
		
		    //If next index is too far we can stop right here.
            if(stones[index+1]> current+k+1){
                return false;
            }
			
			// If we find a stone is jumpable, continue to check if we can jump further, from the next stone.
			// This will be repeated again from the next stone, till reaching the end,
			// and returns true if end is reached / other wise returns false at any failing point.
				
            if(stones[tempIndex] == current+k-1 && (k-1)>0){
                if(isJumpable(tempIndex, k-1)) return true;
            } else if(stones[tempIndex] == current+k){
                if(isJumpable(tempIndex, k)) return true;
            } else if(stones[tempIndex] == current+k+1){
                if(isJumpable(tempIndex, k+1)) return true;
            }
            tempIndex++;
        }
		//Store the pair in hashmap as non working.
        dp[`${index},${k}`] = true;
        return false;
    }
        
    return isJumpable(1,1);
};
