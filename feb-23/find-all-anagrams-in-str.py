// 05 Feb 2023
// 438. Find All Anagrams in a String

from collections import defaultdict

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(s) < len(p) : 
            return []
        
        res = []
        pDict = defaultdict(int)
        sDict = defaultdict(int)

        for i in p : pDict[i] += 1
        for i in s[:len(p)-1] : sDict[i] += 1
        
        for i in range(len(p)-1, len(s)) : 
            sDict[s[i]] += 1
            if sDict == pDict : 
                res.append(i-len(p)+1)
            sDict[s[i-len(p)+1]] -= 1
            if sDict[s[i-len(p)+1]] == 0 : 
                del sDict[s[i-len(p)+1]]
            
        return res
