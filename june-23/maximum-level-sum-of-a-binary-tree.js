// 15 June 2023
// 1161. Maximum Level Sum of a Binary Tree

var maxLevelSum = function(root) {
    const sums = [-Infinity];
    callDFS(root, 1);
    return sums.indexOf(Math.max(...sums));
      
    function callDFS(node, level) {
        if(!node) return;
        if(sums[level] === undefined) sums.push(node.val);
        else sums[level] += node.val;
        
        callDFS(node.left, level+1);
        callDFS(node.right, level+1);
    }
};
