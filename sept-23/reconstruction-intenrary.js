// 14 Sept 2023
// 332. Reconstruct Itinerary

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let result = [];
    let adjacencyList = {};
    
    tickets.forEach(ticket => {
        if (!adjacencyList[ticket[0]]) {
            adjacencyList[ticket[0]] = []
        }
        adjacencyList[ticket[0]].push(ticket[1])
    })
    
    for (let ticket in adjacencyList) {
        adjacencyList[ticket].sort()
    }
    
    function dfs(ticket){
        let destination = adjacencyList[ticket] 
        while(destination && destination.length){
            dfs(destination.shift())
        }
        result.push(ticket)
    }
    dfs("JFK")
    return result.reverse();
};
