// 17 Jan 2023
// 926. Flip String to Monotone Increasing

class Solution:
    def minFlipsMonoIncr(self, S):
        #     Explanation: Our array "S" must be generally sorted as [0]*a + [1]*b
        #         - Examples: 000, 001, 011, 111
        #         - We can sweep through each configuration computing their cost
        # To get started, we assume that we have an array of 1's (111), and every zero must be changed
        # Compute this cost:
        cost = 0
        for x in S:
            if x=='0':
                cost += 1
        # This is our baseline guess for the best answer
        best = cost
        #     Now we will start allowing zeros up to x=S[i] (last allowed zero)
        #         Check how many zeros can stay for free, and..
        #         How many 1's must be force to change as we advance
        #
        for x in S: # last 0 allowed
            if x=='0':
                cost -= 1 # this "zero" no longer is a problem (subtract from original cost)
            else:
                cost += 1 # this "one" must be forced to change (higher cost)
            best = min(best,cost)
        return best
