// 01 March 2023
// 912. Sort an Array

class Node:
    def __init__(self, val):
        self.val = val
	
	# lt means less than, le means less or equal than etc.
    def __lt__(self, other):
        return self.val < other.val
    # incase you need more logic
    # def __le__(self, other):
    #     return self.val <= other.val
    # def __eq__(self, other):
    #     return self.val == other.val
    # def __ne__(self, other):
    #     return self.val != other.val
    # def __gt__(self, other):
    #     return self.val > other.val
    # def __ge__(self, other):
    #     return self.val >= other.val

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        nodes = [Node(n) for n in nums]
        return [node.val for node in sorted(nodes)]
