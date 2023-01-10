// 10 Jan 2023
// 100. Same Tree

class Solution:
    def isSameTree(self, p, q):
        def t(n):
            return n and (n.val, t(n.left), t(n.right))
        return t(p) == t(q)
