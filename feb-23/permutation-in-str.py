// 04 Feb 2023
// 567. Permutation in String

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        c1 = Counter(s1)
        c2 = Counter()
        W = len(s1)
        
        for i,c in enumerate(s2):
            c2[c] += 1
            
            if i >= W:
                c2[s2[i-W]] -= 1
            
            if c1 == c2: 
                return True
        
        return False
