// 16 Jan 2023
// 57. Insert Interval

class Solution(object):
    def insert(self, intervals, newInterval):
        # Concept - Just insert the new interval and call merge interval
        
        #   Base case when no input interval is given
        if not intervals:
            return [newInterval]
        
        merged = False
        
        temp = []
        
        # Insert the given interval where it's start is less than interating interval start
        for i in intervals:
            if not merged and newInterval[0] < i[0]:
                temp.append(newInterval)
                merged = True
            
            temp.append(i)
        
        # If we reach at this point, it means we have not yet inserted it and given interval
        # start is greater than every start from the intervals array
        if not merged:
            temp.append(newInterval)
        
        # This is basically the exact same thing we have already done before
        res = []
         
        # Iterate through the inserted list and keep updating the end point till there's
        # an overlap
        for i in temp:
            if res and i[0] <= res[-1][-1]:
                res[-1][-1] = max(i[1], res[-1][-1])
            
            else:
                res += [i]
        return res
