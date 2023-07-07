// 07 July 2023
// 2024. Maximize the Confusion of an Exam

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    const n = answerKey.length 
    const counts = {"T": 0, "F": 0}
    let maxConsecutive  = 0
    let maxCount = 0
    let left = 0, right = 0
    while (right < n){
        counts[answerKey[right]] += 1
        maxCount = Math.max(maxCount, counts[answerKey[right]])
        if((right - left + 1 - maxCount) > k){
            counts[answerKey[left]] -= 1
            left += 1
        }
        maxConsecutive = Math.max(maxConsecutive, right - left + 1)
        right += 1
    }
    return maxConsecutive
};
