// 22 Aug  2023
// 168. Excel Sheet Column Title

var convertToTitle = function(columnNumber) {
    let ans = ''

    while(columnNumber>0){
        let code = (--columnNumber)%26
        ans = String.fromCharCode(code+65) + ans
        columnNumber = (columnNumber-code)/26
    }
    
    return ans
};
