// 06 Sept 2023
// 725. Split Linked List in Parts

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {

    let len = 0;
    let cur = head;

    while(cur!=null) {
        len++;
        cur = cur.next;
    }

    // get remainder
    let m = len % k;
    // get size
    let s = Math.floor(len / k);

    let sourceCurr = head;
    let r = [];

    for(let i=0;i<k;i++) {
        // set the size
        let t = s;
        // distribute the remainder
        if(i<m && s!=0)
            t+=1;
        // if s is 0, set to 1
        if(s==0)
            t=1;
            
        let targetHead = new ListNode(null);
        let targetCurr = targetHead;
        for(let j=0;j<t;j++) {
            if(sourceCurr != null)
                targetCurr.next = new ListNode(sourceCurr.val);
            else
                targetCurr.next = null

            targetCurr = targetCurr.next;
            
            if(sourceCurr != null)
                sourceCurr = sourceCurr.next;
        }
        r.push(targetHead.next);        
    }

    return r;
    
};
