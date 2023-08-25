// 25 Aug 2023
// 97. Interleaving String

var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
    const memo = new Map()
    
    function run(i1, i2, i3) {
        if(i1 === s1.length) return s3.slice(i3) === s2.slice(i2);
        if(i2 === s2.length) return s3.slice(i3) === s1.slice(i1);
        const key = `${i1}-${i2}`;
        if(memo.has(key)) return memo.get(key)
        
        let res = false;
        
        if(s1[i1] === s2[i2] && s1[i1] === s3[i3]) res = run(i1+1, i2, i3+1) || run(i1, i2+1, i3+1);
        else if(s1[i1] === s3[i3]) res = run(i1+1, i2, i3+1);
        else if(s2[i2] === s3[i3]) res = run(i1, i2+1, i3+1);
        
        memo.set(key, res);
        return res;
    }
    return run(0, 0, 0)
};
