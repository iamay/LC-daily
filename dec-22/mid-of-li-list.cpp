// 05 Dec 2022
// 876. Middle of the Linked List

class Solution {
public:
     ListNode* middleNode(ListNode* head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next)
            slow = slow->next, fast = fast->next->next;
        return slow;
    }
};
