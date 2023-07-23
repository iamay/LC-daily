// 23 July 2023
// 894. All Possible Full Binary Trees

var allPossibleFBT = function(n) {
    
    function helper(number){
        if(number==1){
            const node = new TreeNode(0);
            return [node];
        }
        let res = [];
        for(let idx=1; idx<number; idx+=2){
            const leftNodes = helper(idx);
            const rightNodes = helper(number-idx-1);
            for(leftItem of leftNodes){
              for(rightItem of rightNodes){
                  const node = new TreeNode(0, leftItem, rightItem);
                  res.push(node)
              } 
           }
        }
        return res;
    }
    return helper(n);
};
