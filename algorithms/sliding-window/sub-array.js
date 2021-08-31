/** Challenge
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 */

/** 
* 1. Understand the problem
    - find the largest sum of n consecutive numbers.
* 2. Explore concrete examples
* 3. Break down
* 4. Simplify/solve
* 5. Look back and refactor
*/

//O(n)
function maxSubarraySum(arry, n) {
  let maxSum = 0,
    tempSum = 0;
  if (n > arry.length) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arry[i];
  }
  tempSum = maxSum;

  for (let i = n; i < arry.length; i++) {
    tempSum = tempSum - arry[i - n] + arry[i];
    console.log("temp: ", tempSum);

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
//maxsum = 300
//[100, 200, 300, 400]
//            -     -

//maxSum = 17

console.log(maxSubarraySum([100, 200, 300, 400], 2));
