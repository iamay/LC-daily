// 13 July 2023
// 207. Course Schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
	// create a graph using an adjacency list
	// and create a hash map of all in degrees
    const graph = {},
		  inDegreeMap = Array(numCourses).fill(0);
    
    prerequisites.forEach(req => {
        if(!graph[req[1]]) {
            graph[req[1]] = [];
        }
        graph[req[1]].push(req[0]);
        ++inDegreeMap[req[0]];
    });
	
    // all the courses with no in-degree are sources, add them to the queue
    const queue = [];
    inDegreeMap.forEach((course, idx) => {
        if(!inDegreeMap[idx]) {
            queue.push(idx);
        }
    })
    
    // dequeue from queue (FIFO), increment the count as course completed and decrement the in degrees from its children
    // if indegrees equal 0, add it to the queue as a source
	let count = 0;
    while(queue.length) {
        const course = queue.shift();
		++count;
        
        graph[course] && graph[course].forEach(c => {
            --inDegreeMap[c];
            
            if(!inDegreeMap[c]) {
                queue.push(c);
            }
        })
    }

    // if we are able to finish all courses, the count will be equal to numCourses
    return count === numCourses;
};
