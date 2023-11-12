// 12 Nov 2023
// 815. Bus Routes
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */

function checkIfIntersect (seen, route2) {
    for (let bus of route2) {
        if (seen.has(bus)) {
            return true;
        }
    }
    return false;
}

var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;
    const n = routes.length;
    const adj = {};

    const queue = new Queue();
    const targets = new Set(), visited = new Set();

    // build graph
    for (let i = 0; i < n; i++) {
        const seen = new Set(routes[i]);

        if (seen.has(source)) {
            queue.enqueue([i, 0]);
            visited.add(i);
        }
        if (seen.has(target)) targets.add(i);
    
        for (let j = i+1; j < n; j++) {
            if (checkIfIntersect(seen, routes[j])) {
                if (!adj[i]) adj[i] = [];
                if (!adj[j]) adj[j] = [];
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    while (!queue.isEmpty()) {
        const [node, dist] = queue.dequeue();
        if (targets.has(node)) return dist+1;

        if (node in adj) {
            for (let v of adj[node]) {
                if (!visited.has(v)) {
                    queue.enqueue([v, dist+1]);
                    visited.add(v);
                }
            }
        }
    }
    return -1;
};
