// 20 May 2023
// 399. Evaluate Division

const calcEquation = function(equations, values, queries) {
    const hash = {};
    const output = [];
    
   for(let idx = 0; idx < values.length; idx++){
       const [node1, node2] = equations[idx];
       const ratio = values[idx];
        
       let [group1, wt1] = find(node1);
       let [group2,wt2] = find(node2);
       if(group1 !== group2){
           hash[group1] = [group2, wt2*ratio/wt1]
       }
    }
    
    for(let [dividend, divisor] of queries){
        if(!hash[dividend] || !hash[divisor]){
          output.push(-1);
            continue;
        } 
        let [dividendGroup, dividentValue] = find(dividend);
        let [divisorGroup, divisorValue] = find(divisor);
        if(dividendGroup !== divisorGroup){
          output.push(-1);
            continue;
        } 
        output.push(dividentValue/divisorValue);
    }
    
    function find(node){
        if(!hash[node]) hash[node] = [node,1];
        const [currentGroup, currentWt] = hash[node]
        if(currentGroup !== node){
           let [newgroup, newWt] = find(currentGroup);
            hash[node] = [newgroup, currentWt*newWt]     
        }
        return hash[node]
   } 
    return output;

};
