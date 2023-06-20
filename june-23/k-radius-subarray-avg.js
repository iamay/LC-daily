// 20 JUne 2023
// 2090. K Radius Subarray Averages

const getAverages = (nums, k) => {
    const avgs = new Array(nums.length).fill(-1);
    const windowLen = 2*k + 1;

    let sum = 0;
    nums.forEach((num, i) => {
        sum += num;
        if (i > 2*k) sum -= nums[i-windowLen];
        if (i >= 2*k) avgs[i-k] = Math.floor(sum / windowLen);
    })

    return avgs;
}
