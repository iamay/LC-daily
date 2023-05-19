// 19 May 2023
// 785. Is Graph Bipartite?

var isBipartite = function(graph) {
    const n = graph.length;
    const color = Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        if(color[i]) continue;
        const queue = [i];
        color[i] = 1;
        
        while(queue.length) {
            const curr = queue.shift();

            for(let next of graph[curr]) {
                if(color[next] === color[curr]) return false;
                if(!color[next]) {
                    color[next] = color[curr] === 1 ? 2 : 1;
                    queue.push(next);
                }
            }
        }
    }
    return true;    
};
