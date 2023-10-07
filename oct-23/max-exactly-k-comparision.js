// 07 Oct 2023
// 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function (n, m, k) {
    const map = new Map()


    return track(n, k, 0)
    
    function track(n, k, max) {
        if (k < 0) return 0

        const t = m - max
        if (n < k || t < k) return 0

        if (n === 1) return k === 0 ? max : t

        const key = (n << 16) + (k << 8) + max
        if (map.has(key)) return map.get(key)
        let [a, i] = [0, 1]
        for (; i <= max; i++) a += track(n - 1, k, max)
        for (; i <= m; i++) a += track(n - 1, k - 1, i)

        return map.set(key, a %= 10 ** 9 + 7), a
    }
}
