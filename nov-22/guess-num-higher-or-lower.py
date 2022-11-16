// 16 Nov 2022
// 374. Guess Number Higher or Lower

class Solution:
    def guessNumber(self, n: int) -> int:
        return bisect_left(range(n), 0, key=lambda num: -guess(num))
