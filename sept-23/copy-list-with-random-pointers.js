// 05 Sept 2023
// 138. Copy List with Random Pointer
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let visited = new Map();
    
    let helper = (node) => {
        if (!node) return null;
        if (visited.has(node)) return visited.get(node);
        
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        newNode.next = helper(node.next);
        newNode.random = helper(node.random);
        return newNode;
    }
    return helper(head);
};
