// 03 March 2023
// 28. Find the Index of the First Occurrence in a String

class Solution(object):
    def strStr(self, haystack, needle):
        try:
            res = haystack.index(needle)
            return res
        except:
            return -1
