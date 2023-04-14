// 14 April 2023
// 516. Longest Palindromic Subsequence

var longestPalindromeSubseq = function(s) {
    let n = s.length;
    
    //initiate a 1d array.

    let dp = new Array(n).fill(1);
    
    for (let i=n-2;i>=0;i--){
        let prev = 0;
        for (let j =i+1;j<n;j++){
            let temp = dp[j];
            if (s[i] == s[j]){
                dp[j] = prev + 2;
            }else{
                dp[j] = Math.max(dp[j], dp[j - 1]);
            };
            prev = temp;
        }
    }
    return dp[n - 1];
};
