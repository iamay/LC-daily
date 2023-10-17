// 17 Oct 2023
// 1361. Validate Binary Tree Nodes
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let visited = {};

    var dfs = (i, leftChild, rightChild) => {
        if( visited[i] ) return false;
        visited[i] = true;
        const left = leftChild[i];
        const right = rightChild[i];
        if(left > -1) {
            if(!dfs(left, leftChild, rightChild)) return false;
        }
        if(right > -1) {
            if(!dfs(right, leftChild, rightChild)) return false;
        }
        
        return true;
    }
    
    const root = findRoot(leftChild, rightChild);
    return dfs(root, leftChild, rightChild) && Object.keys(visited).length === n;
};

var findRoot = (leftChildren, rightChildren) => {
    let root = 0;
    for(let i = 0; i < leftChildren.length; i++) {
        const left = leftChildren[i];
        const right = rightChildren[i];
        
        if(left === root || right == root) root = i;
    }
    
    return root;
}
