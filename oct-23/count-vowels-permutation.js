// 28 Oct 2023
// 1220. Count Vowels Permutation
var countVowelPermutation = function(n) {
  const mod = 1e9 + 7;
  let [a, e, i, o, u] = [1, 1, 1, 1, 1];

  while (--n) {
    [a, e, i, o, u] = [e % mod, (a + i) % mod, (a + e + o + u) % mod, (i + u) % mod, a % mod];
  }

  return (a + e + i + o + u) % mod;
};
