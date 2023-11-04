// 04 Nov 2023
// 1503. Last Moment Before All Ants Fall Out of a Plank
const getLastMoment = (n, left, right) => {
  let max = 0;
  for (const val of left) {
    val > max && (max = val);
  }
  for (const val of right) {
    n - val > max && (max = n - val);
  }
  return max;
}
