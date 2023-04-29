// 29 April 2023
// 1697. Checking Existence of Edge Length Limited Paths

/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    function find(idx) {
        return group[idx] === -1 ? idx : find(group[idx]);
    }

    function union(i1, i2) {
        const g1 = find(i1);
        const g2 = find(i2);
        if (g1 === g2) {
            return;
        }
        if (groupCount[g1] < groupCount[g2]) {
            group[g1] = g2;
            groupCount[g2] += groupCount[g1];
            groupCount[g1] = 0;
        } else {
            group[g2] = g1;
            groupCount[g1] += groupCount[g2];
            groupCount[g2] = 0;
        }
    }

    const group = new Array(n).fill(-1);
    const groupCount = new Array(n).fill(1);
    const qLen = queries.length;
    const edgeLen = edgeList.length;
    const ans = new Array(qLen).fill();
    const queriesSort = new Array(qLen).fill().map((_v, i) => i);
    queriesSort.sort((a, b) => queries[a][2]-queries[b][2]);
    const edgeListSort = new Array(edgeLen).fill().map((_v, i) => i);
    edgeListSort.sort((a, b) => edgeList[a][2] - edgeList[b][2]);
    let edgeIdx = 0;
    for (let i = 0; i < qLen; ++i) {
        let queryIdx = queriesSort[i];
        let [g1, g2, limit] = queries[queryIdx];
        while (edgeIdx < edgeLen && edgeList[edgeListSort[edgeIdx]][2] < limit) {
            union(edgeList[edgeListSort[edgeIdx]][0], edgeList[edgeListSort[edgeIdx]][1]);
            ++edgeIdx;
        }
        ans[queryIdx] = find(g1) === find(g2);
    }
    return ans;
};
