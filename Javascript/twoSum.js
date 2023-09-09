/**
 * Soo I changed this script to my own original,
 * the first was created using OpenAI's ChatGPT.
 * I faked understanding then😂, so now heres one I created myself. 
 * This is
 three days after starting my first leetcode soo don't judge me😏
 **/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === complement) {
        return [i, j];
      }
    }
  }
  return [];
}
