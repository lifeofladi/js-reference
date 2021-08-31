/**
*Write a function which takes in a string and returns counts of each character in the string.

example;
input => "ladi"
output => {l:1, a:1, d:1, i:1}
 */

/**Problem Solving Approach
 => Understand the Problem - interprete it in your own words.
 => Explore concrete examples
 => Break it down
 => Simplify/Solve
 => Look back and Refactor
 */

function charCount(str) {
  const result = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

// console.log();
let obj = charCount("Heloo Hie there!");
