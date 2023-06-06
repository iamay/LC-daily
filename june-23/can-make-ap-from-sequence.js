// 06 June 2023
//
const canMakeArithmeticProgression = (arr) => {
  const EDGE = 10 ** 6;
  const bucket = new Uint16Array(EDGE * 2);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (const val of arr) {
    ++bucket[val + EDGE];
    val + EDGE < min && (min = val + EDGE);
    val + EDGE > max && (max = val + EDGE);
  }
  const diff = (max - min) / (arr.length - 1);
  for (let prev = min, i = min + 1; i <= max; ++i) {
    if (bucket[i] === 0) continue;
    if (bucket[i] > 1 || diff !== i - prev) return false;
    prev = i;
  }
  return true;
};
