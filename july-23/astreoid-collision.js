// 20 July 2023
// 735. Asteroid Collision

function asteroidCollision (ast) {
    let ans = [];
    for(let x of ast){
        while(x < 0 && ans && ans.at(-1) > 0){
            let y = ans.pop();
            if(-x < y) x = y;
            else if(-x == y) x = 0;
        }
        if(x) ans.push(x);
    }
    return ans;
};
