/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var memo = {}
    for(var i=0; i<nums.length;i++){
        memo[target-nums[i]]=i
    }
    console.log(memo)
    for(var i = 0; i< nums.length; i++){
        if(nums[i]in memo){
            return [i, memo[nums[i]]]
        }
    }
};

console.log(twoSum([2,7,11,15],9))