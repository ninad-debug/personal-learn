// Q. https://leetcode.com/problems/two-sum/ 

Nini: 

var twoSum = function (nums, target) {
    let numsLength = nums.length;
    let arr = [];
    let total;

    for (let i = 0; i < numsLength; i++) {
        for(let k=1; k< numsLength; k++) {
            total = nums[i] + nums[k];
            if(total === target) {
                arr.push(i);
                arr.push(k);
                break;
            }
            total=0;
        }
        if(arr.length > 0) break;
        
    }
    return arr;
};

twoSum([2, 7, 11, 15], 9)

// ---------------------------------------------------------------------------------------------------------------------

Kruuu:

var twoSum = function(nums, target) {
    let arr = []
    for(let i = 0; i <= nums.length - 2; i++) {
        for(let j = 1; j <= nums.length - 1; j++) {
            if(i !== j && (nums[i] + nums[j]) == target)  return [i, j]
        }
    }
};
