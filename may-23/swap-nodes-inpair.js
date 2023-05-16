// 16 May 2023
// 24. Swap Nodes in Pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // we've reached the last node or there is no following node to swap
  if (!head || !head.next) return head;
  
  // current order: n1 -> n2 -> n3
  const n1 = head, n2 = n1.next, n3 = n2.next; 
  
  // update the pointers to reflect the following new order: n2 -> n1 -> nextSwappedPair
  n2.next = n1;
  n1.next = swapPairs(n3);
  
  return n2;
};
