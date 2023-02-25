// 24 Feb 2023
// 121. Best Time to Buy and Sell Stock

def maxProfit(self, prices: List[int]) -> int:
	if not prices:
		return 0

	maxProfit = 0
	minPurchase = prices[0]
	for i in range(1, len(prices)):		
		maxProfit = max(maxProfit, prices[i] - minPurchase)
		minPurchase = min(minPurchase, prices[i])
	return maxProfit
