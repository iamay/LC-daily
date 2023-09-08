// 08 Sept 2023
// 118. Pascal's Triangle

var generate = function(numRows) {
    const output = [];
    
    for (let i = 0; i < numRows; i++) {
        const rowValue = [];
        
        for (let j = 0; j < i + 1; j++) {
             if (j === 0 || j === i) {
                 rowValue[j] = 1;
             } else {
                 rowValue[j] = output[i - 1][j - 1] + output[i - 1][j];
             }
        }
        output.push(rowValue)
    }
    
    return output;
};
