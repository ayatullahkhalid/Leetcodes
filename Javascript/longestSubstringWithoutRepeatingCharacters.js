/**
 * @param {string} s
 * @return {number}
 *
 * The Algorithm
 * *************
 * 
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let begin = 0;
  let max = 0;
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[begin]);
      begin++;
    }
    set.add(s[end]);
    max = Math.max(max, end - begin + 1);
  }
  return max;
};
