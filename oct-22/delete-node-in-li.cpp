// 13 Oct 2022
// 237. Delete Node in a Linked List



class Solution {
public:
    void deleteNode(ListNode* node) {
    *node = *node->next;
}
};
