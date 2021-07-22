/*
Binary Search - Medium 

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function longestSubstring(string) {
  // temp substring
  let temp = new Set();
  let maxLength = 0;
  let start = 0;
  let end = 0;

  while (end < string.length) {
    if (!temp.has(string[end])) {
      temp.add(string[end]);
      end++;
      maxLength = Math.max(maxLength, temp);
    } else {
      temp.delete(string[start]);
      start++;
    }
  }
  return maxLength;
}

console.log(longestSubstring('abcabcbb'));
