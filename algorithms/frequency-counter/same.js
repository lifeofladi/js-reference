/**
 Write a function called same, which acccepts two arrays. The function should return true if every value in the array has a corresponding value squared in the second array. The frequency of vlues must be the same
 */

//NAIVE
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

//REFACTORED
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freqArr1 = {};
  let freqArr2 = {};

  for (let char of arr1) {
    freqArr1[char] = ++freqArr1[char] || 1;
  }

  for (let char of arr2) {
    freqArr2[char] = ++freqArr2[char] || 1;
  }

  for (let key in freqArr1) {
    if (!(key ** 2 in freqArr2)) return false;
    if (freqArr1[key] !== freqArr2[key ** 2]) return false;
  }
  return true;
}
