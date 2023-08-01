// 01 Aug 2023
// 77. Combinations

var combine = function(n, k) {
    let res = [];
    function backtrack(start = 1, path = []){
        if(path.length == k){
            res.push(Array.from(path));
        }else {
            for(let i=start; i<=n; i++){
                path.push(i);
                backtrack(i + 1, path);
                path.pop();
            }
        }
    }
    backtrack();
    return res;
};
