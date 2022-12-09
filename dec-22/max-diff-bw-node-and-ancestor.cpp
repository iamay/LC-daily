// 09 Dec 2022
// 1026. Maximum Difference Between Node and Ancestor

class Solution {
public:
    int maxAncestorDiff(TreeNode* root, int curMin = INT_MAX, int curMax = INT_MIN) {
        if(!root) return curMax - curMin;
        curMin = min(curMin, root -> val);
        curMax = max(curMax, root -> val);
        return max(maxAncestorDiff(root -> left,  curMin, curMax), 
                   maxAncestorDiff(root -> right, curMin, curMax));
    }
};
