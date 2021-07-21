/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and 
two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements 
denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/*
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

const merge = (arr1, arr2, m, n) => {
  const newArray = [];
  let left = 0;
  let right = 0;
  while (left < m && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      newArray.push(arr1[left]);
      left++;
    } else {
      newArray.push(arr2[right]);
      right++;
    }
  }
  // if we still haven't pushed all of arr1
  while (left < m) {
    newArray.push(arr1[left]);
    left++;
  }
  // if we still haven't pushed all of arr2
  while (right < arr2.length) {
    newArray.push(arr2[right]);
    right++;
  }
  arr1 = newArray;
  return arr1;
};

console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
