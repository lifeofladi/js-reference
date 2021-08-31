/** Challenge
 * Implement a function called countUnique, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in th array, but it will always be sorted.
 */

// Time Complexity - O(n)
// Space Complexity - O(n)
function countUnique(arry) {
  const occurence = {};

  for (let val of arry) {
    occurence[val] = ++occurence[val] || 1;
  }
  return Object.keys(occurence).length;
}

function countUnique1(arry) {
  if (arry.length === 0) return 0;
  let pOne = 0,
    pTwo = 1;
  while (pTwo < arry.length) {
    if (arry[pTwo] !== arry[pOne]) {
      arry[++pOne] = arry[pTwo];
    }
    pTwo++;
  }
  return ++pOne;
}

function countUnique2(arry) {
  if (arry.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arry.length; j++) {
    if (arry[j] !== arry[i]) {
      arry[++i] = arry[j];
    }
  }
  return ++i;
}

console.log(countUnique2([1, 1, 2, 4, 4]));
