// 18 Sept 2023
// 1337. The K Weakest Rows in a Matrix
const kWeakestRows = (mat, k) => {
  const m = mat.length;
  const n = mat[0].length;
  const ret = new Uint8Array(k);
  const visited = new Uint8Array(m);
  let idx = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (visited[j] === 0 && mat[j][i] === 0) {
        ret[idx] = j;
        visited[j] = 1;
        if (++idx === k) return ret;
      }
    }
  }
  for (let i = 0; i < m; ++i) {
    if (visited[i] === 0) {
      ret[idx] = i;
      if (++idx === k) return ret;
    }
  }
};
