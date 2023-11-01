// 01 Nov 2023
// 501. Find Mode in Binary Search Tree

var findMode = function(root) {
    let ans = []
    let map = new Map()
    let max = 0
    
    const traverse = node => {
        if(!node) return
        
        map.set(node.val, map.get(node.val) + 1 || 1)
        max = Math.max(max, map.get(node.val))
        
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
    
    traverse(root)
    
    for(let [key, value] of map) if(value === max) ans.push(key)
    
    return ans
};
