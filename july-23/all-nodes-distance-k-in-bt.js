// 11 July 2023
// 863. All Nodes Distance K in Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    let treeGraph = {}
    let seen = {}
    let targetNode = null
    let ele = []
    let queue = []
    function Travers(node,prev){
        if(node == null){
            return
        }
        Travers(node.left,node)
        if(node.val == target.val){
            targetNode = node
        }
        treeGraph[node.val] = prev
        Travers(node.right,node)
    }
    
   
    
    function findK(node,depth){
        
        if(!node){
            return
        }
        if(seen[node.val]){
            return
        }else{
            seen[node.val] = true
        }
        if(depth == K){
            ele.push(node.val)
            return
        }else{
            findK(node.left,depth+1)
            findK(node.right,depth+1)
            findK(treeGraph[node.val],depth+1)
        }
    }
    Travers(root,null)
    findK(targetNode,0)
    return ele
};
