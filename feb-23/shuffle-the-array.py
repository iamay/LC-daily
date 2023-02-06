// 06 Feb 2023
// 1470. Shuffle the Array
class solution:
  def shuffle(self, nums: List[int], n: int) -> List[int]:
          res = []
          for i, j in zip(nums[:n],nums[n:]):
              res += [i,j]
          return res
