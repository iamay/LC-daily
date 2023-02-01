// 1 Feb 2023
// 1071. Greatest Common Divisor of Strings

class Solution:
    def gcdOfStrings(self, s1: str, s2: str) -> str:
        return s1[:math.gcd(len(s1), len(s2))] if s1 + s2 == s2 + s1 else ''
