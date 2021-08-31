//Time Complexity => O(log n)
//Space Complexity => O(1)

function binarySearch(array, target) {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let midPoint = Math.floor((first + last) / 2);
    if (array[midPoint] === target) return midPoint;
    else if (array[midPoint] < target) {
      first = midPoint + 1;
    } else last = midPoint - 1;
  }
  return "None";
}

function verify(index) {
  if (index !== "None") console.log("Target found at index: ", index);
  else console.log("Target not found in list");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = binarySearch(numbers, 9);

verify(result);
