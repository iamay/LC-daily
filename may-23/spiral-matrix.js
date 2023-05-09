// 09 May 2023
// 54. Spiral Matrix

const helper = (matrix, result, i, j, dir) => {
    //Exit conditions, index out of bound or value is 101, i.e. visited node
    if(i < 0 || i === matrix.length || j < 0 || j === matrix[0].length || matrix[i][j] === 101)
        return;
    result.push(matrix[i][j]); //push current value into matrix
    matrix[i][j] = 101;  //mark current as visited
    if(dir === 'R') {
        helper(matrix, result, i, j + 1, 'R');
        dir = 'D';  //change direction when R exhauts
    }
    if(dir === 'D') {
       helper(matrix, result, i + 1, j, 'D');
        dir = 'L';  //change direction when D exhauts
    }
    if(dir === 'L') {
        helper(matrix, result, i, j - 1, 'L');
        dir = 'T';   //change direction when L exhauts
    }
    if(dir === 'T') {
        helper(matrix, result, i - 1, j, 'T');
        dir = 'R';  //change direction when T exhauts and call R to loop inside
        helper(matrix, result, i, ++j, 'R');
    }
}

var spiralOrder = function(matrix) {
    let arr = [];  //Result array
    helper(matrix, arr, 0, 0, 'R'); //Call recursive method
    return arr;
};
