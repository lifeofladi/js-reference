//Time Complexity => O(1)
//Space Complexity => O(log n)

function recursiveBinarySearch(array, target) {
  if (array.length === 0) return false;
  else {
    var midPoint = Math.floor(array.length / 2);
    if (array[midPoint] === target) return true;
    else {
      if (array[midPoint] < target)
        return recursiveBinarySearch(array.slice(midPoint + 1), target);
      else return recursiveBinarySearch(array.slice(0, midPoint), target);
    }
  }
}

function verify(result) {
  console.log("Target found: ", result);
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8];
result = recursiveBinarySearch(numbers, 10);

verify(result);
