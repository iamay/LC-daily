// 24 Oct 2023
// 515. Find Largest Value in Each Tree Row
function largestValues (root) {
    let ans = [];
    if(!root) return ans;
    let q = [ root ];
    
    while(q.length){
        let next = [], max = -Infinity;
        while(q.length){
            let cur = q.pop();
            
            max = Math.max(max, cur.val);
            
            if(cur.left) next.unshift(cur.left);
            if(cur.right) next.unshift(cur.right);
        }
        ans.push(max);
        q = next;
    }
    return ans;
};
