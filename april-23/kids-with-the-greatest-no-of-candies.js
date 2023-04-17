// 17 April 2023
// 1431. Kids With the Greatest Number of Candies

const kidsWithCandies = (candies, extraCandies, max = Math.max(...candies)) => candies.map(candy => candy + extraCandies >= max);
