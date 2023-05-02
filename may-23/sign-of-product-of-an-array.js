// 02 May 2023
// 1822. Sign of the Product of an Array

function arraySign(nums) {
    let numbers = [];
    for (i of nums) {
        if (i < 0) numbers.push(-1)
        else if (i > 0) numbers.push(1)
        else numbers.push(0)
    }
    var product = 1
    for (i of numbers) product *= i
    if (product > 0) return 1
    else if (product < 0) return -1
    else return 0
}
