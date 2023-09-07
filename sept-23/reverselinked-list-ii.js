// 07 Sept 2023
// 92. Reverse Linked List II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let currNode = head, start = head, counter = 1;
    while(counter < left) {
        start = currNode; 
        currNode = currNode.next;
        counter++;
    }
    let tail = currNode, prev = null;
    while(counter >=  left && counter <= right){
        const next = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = next;
        counter++;
    }
    start.next = prev;
    tail.next = currNode;
    if(left > 1){
        return head;
    }else{
        return prev
    }
};
