# **JavaScript CheatSheet**

This document contains Javascript functions and methodologies I have learned and used while getting my hands dirty with the language.

## Functions

Removes a pre-determined array of values from another array and stores
that removed value(s) in another array.

> **NB**: `.includes()` method is case sensitive when comparing strings and characters.

```javaScript
var junkArray = [];
const removeJunkChar = array => {
  let value = ['\'',' ']; //pre-determined array of values.
  for(let elem of array)
    if(value.includes(elem) array.splice(elem, 1));
  return array;
}
```

Removes all instances of a passed in value(s) from an array.

```javaScript
//CASE SENSITIVE
const removePassedValue = (array, value) => {
  for(let i = 0; i < array.length; i++) {
    if(value.includes(array[i])) {
      array.splice(i,1);
    } else {
      continue;
    }
  }
  return array;
}

//CASE INSENSITIVE
const removePassedValue = (array, value) => {
  for(let i = array.length - 1; i >= 0; i--) {
    let valueLow = value.toLowerCase();
    let arrayLow = array[i].toLowerCase();
    if(valueLow.includes(arrayLow)) {
      array.splice(i,1);
    }
  }
  return array;
}
```

#### Higher Order Functions

These are functions that accept functions as a parameter or returns the value of a function or both!

> **NB**: The functions that are passed into a higher order function as parameters are also known as **callback functions** or **helper functions**.

```javaScript
const multiplier = factor => x => x * factor;

let doubler = multiplier(2); // doubler(3) => 6
let tripler = multiplier(3); // tripler(4) => 12
```

#### Iteration Methods

`filter()` - creates a new array with all elements that pass the test implemented by the callback function.

> **NB**: Any callback function passed into `filter()` **MUST** evaluate to `true` for the result to be passed into the new array `filter()` creates.

```javaScript
var words = ['chair', 'music', 'pillow', 'brick', 'pen'];

var shortWords = words.filter(word => word.length < 6;);

console.log(shortWords);  // Output: ['chair','music','brick','pen']
```

`map()` - creates a new array with the result of executing the callback function on each element in the array on which it was called.

```javaScript
let arr = [1,2,4,10];

var arrSquared = arr.map(digit => digit ** 2);

console.log(arrSquared); // Output: [ 1, 4, 16, 100 ]
```

`reduce()` - Iterates through elements in an array and returns a single value. Can be used to add all digits in an array. Can also be used to fish out elements in an array, integer or string. Use case:

> **NB**: Calling `reduce()` on an empty array without an `initialValue` will throw a `TypeError`

###### Case 1

add all digits in an array.

```javaScript
let arr = [1,2,4,10];

var arrSum = arr.reduce((acc, val) => acc + val);

console.log(summedNums) // Output: 17
```

| iteration | `acc` | `val` | return value |
| --------- | ----- | ----- | ------------ |
| first     | 1     | 2     | 3            |
| second    | 3     | 4     | 7            |
| third     | 7     | 10    | 17           |

###### Case 2

count occurrences of a string in an array.

```javaScript
let arr = ['r','e','e','a','a','a','l','l','y'];

//Short version
const countOccurrences = (arr, char) => {
  return arr.reduce((acc, val) => (val === char ? acc + 1 : acc), 0);
}

let eCount = countOccurrences(arr, 'e');
let aCount = countOccurrences(arr, 'a');
let lCount = countOccurrences(arr, 'l');

console.log(eCount); // Output: 2
console.log(aCount); // Output: 3
console.log(lCount); // Output: 2
```

#### Objects

> **NB**: avoid using arrow functions when using `this` in a method

method - a function property in an object.
