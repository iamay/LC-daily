// 02 Nov 2023
// 2265. Count Nodes Equal to Average of Subtree

const averageOfSubtree = function(root) {
    let res = 0;
    const dfs = (node) => {
        if(!node) return [0, 0];
        const [sumLeft, countLeft] = dfs(node.left);
        const [sumRight, countRight] = dfs(node.right);
        const sum = node.val + sumLeft + sumRight;
        let count = 1 + countLeft + countRight;
        const avg = Math.floor(sum / count);
        if(node.val == avg) res++;
        return [sum, count];
    }
    dfs(root);
    return res;
};
