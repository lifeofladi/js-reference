/** Challenge
 * Write a function called sumZero which accepts a sorted
 * array of integers. The function should find the FIRST pair
 * where the sum is 0. Return an array that includes both values
 * that sum to zero or undefined if a pair doesn't exist.
 */

//NAIVE
/**Big O
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 */
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return "not pair found..:(";
}

//REFACTORED
/**Big O
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
function sumZero(arry) {
  let left = 0,
    right = arry.length - 1;

  while (left < right) {
    let sum = arry[left] + arry[right];
    if (sum === 0) return [[arry[left], arry[right]]];
    else if (sum > 0) right--;
    else left++;
  }
  return "not pair found..:(";
}
//avg/sum > target --
//avg/sum < target ++

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
