// 03 May 2023
// 2215. Find the Difference of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const n1 = convertToObj(nums1);
  const n2 = convertToObj(nums2);  
  let ans = [];  
  ans[0] = keysOnlyPresentInFirstArr(Object.keys(n1),n2);
  ans[1] = keysOnlyPresentInFirstArr(Object.keys(n2),n1);

  return ans;  
};

const convertToObj = (arr) =>{
    let obj = {}
    for(let i=0;i<arr.length;i++){
        obj[arr[i]] = 1;
    }
    return obj;
}

const keysOnlyPresentInFirstArr = (arr,obj2) =>{
    let result = [];
      for(let i=0;i<arr.length;i++){
        if(!obj2.hasOwnProperty(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
