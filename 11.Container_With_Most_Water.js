/*You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). */
/*Find two lines that together with the x-axis form a container, such that 
the container contains the most water.
Return the maximum amount of water a container can store. */
Solution: -1;
var maxArea = function (height) {
  let ans = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  return ans;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))