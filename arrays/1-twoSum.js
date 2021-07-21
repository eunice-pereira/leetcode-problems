/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// nums = [2,7,11,15], target = 9, output [0,1] because 7 + 2 = 9

function twoSum(nums, target) {
  let arr = nums.sort((a, b) => b - a);
  // create left and right pointers
  let left = 0;
  let right = arr.length - 1;

  // iterate
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return false;
}

console.log(twoSum([3, 2, 4], 6));
// [1,2]
