// 22 Feb 2023
// 1011. Capacity To Ship Packages Within D Days

def shipWithinDays(self, weights: List[int], days: int) -> int:
    
    # check if the current capacity is possible or not via "Greedy"
    def is_possible(weights, days, capacity) -> int:
        days_needed, current_load = 1, 0
        for weight in weights:
            if current_load + weight > capacity:
                current_load = 0
                days_needed += 1
            current_load += weight
        return days_needed <= days

    # find the leftBoundary and rightBoudary of the search range
    left, right = max(weights), sum(weights)

    # search the range and each time to check if the current mid point is possible or not
    while left < right:
        mid = left + (right - left) // 2
        if is_possible(weights, days, mid):
            right = mid
        else:
            left = mid + 1
    
    return left     
