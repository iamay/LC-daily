// 11 Nov 2022
// 26. Remove Duplicates from Sorted Array

class Solution {
public:
 int removeDuplicates(vector<int>& nums) {
    int i = 0;
    for (int n : nums)
        if (!i || n > nums[i-1])
            nums[i++] = n;
    return i;
}
};
