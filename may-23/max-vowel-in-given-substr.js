// 05 May 2023
// 1456. Maximum Number of Vowels in a Substring of Given Length

const maxVowels = (s, k) => {
  const weight = new Uint8Array(123);
  let max = 0;
  weight[97] = weight[101] = weight[105] = weight[111] = weight[117] = 1;
  for (let i = 0; i < k; ++i) {
    max += weight[s.charCodeAt(i)];
  }
  for (let i = 0, cur = max; i < s.length - k; ++i) {
    cur += weight[s.charCodeAt(i + k)] - weight[s.charCodeAt(i)];
    cur > max && (max = cur);
  }
  return max;
};
