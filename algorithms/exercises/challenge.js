/** 
Write a function calles sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

*Restrictions: T=O(n)
*/
function sameFrequency(num1, num2) {
  let freqNum1 = {};
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  for (let char of num1Str) {
    freqNum1[char] = ++freqNum1[char] || 1;
  }

  for (let char of num2Str) {
    if (!freqNum1[char]) return false;
    else --freqNum1[char];
  }

  return true;
}
// console.log(sameFrequency(182, 281));//true
// console.log(sameFrequency(22, 222));//false

/******************Challenge 2**********************/

/**
Implement a function called, areThereDuplicates which accepts a variable number of arguents, and checks whether there are any duplicates among the arguments passes in.

*Restrictions: T=O(n), S=O(n)
*/
function areThereDuplicates() {
  let occurence = {};
  for (let val of Object.values(arguments)) {
    occurence[val] = ++occurence[val] || 1;
  }
  return Object.values(occurence).some(e => e > 1);
}
// console.log(areThereDuplicates("a", "b", "c", "a"));//true

/******************Challenge 3**********************/

/**
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There maybe more than one pair that matches the average target.

*Restrictions: T=O(n), S=O(1)
*/
function averagePair(sortedArray, trgAvg) {
  let start = 0,
    end = sortedArray.length - 1;

  while (start < end) {
    let avg = (sortedArray[start] + sortedArray[end]) / 2;
    if (trgAvg === avg) return true;
    else if (trgAvg < avg) end--;
    else start++;
  }
  return false;
}
//if target more ++
//if target less --
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));

/******************Challenge 4**********************/

/**
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order chnaging.

*Restrictions: T=O(n) or S=O(1)
*/
function isSubsequence(str1, str2) {
  let i = 0,
    j = 0;

  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
  //              i
  // [h, e, l, l, o]
  // [h, e, l, l, o, w, o, r, l, d]
  //                 j
}

// console.log(isSubsequence("hello", "hello world"));

/**
Write a function called minSubArrayLen which accepts two paramenters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

*Restrictions: T=O(n) or S=O(1)
*/

function minSubArrayLen(array, n) {
  // 7
  //r i t h m s c h o o l
  //-    -
}
