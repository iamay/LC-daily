// 15 May 2023
// 1721. Swapping Nodes in a Linked List


var swapNodes = function(head, k) {
	const newHead = new ListNode(0, head);
    
    let slow = newHead, fast = newHead;
    let firstNode = null, secondNode = null;
    
    while(k > 0) {
        fast = fast.next;
        k -= 1;
    }
    
    firstNode = fast;
    
     while(fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    secondNode = slow;
    
    let temp = secondNode.val;
    secondNode.val = firstNode.val;
    firstNode.val = temp;
    
    return newHead.next;
}
