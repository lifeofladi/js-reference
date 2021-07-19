function linearSearch(list, targetValue) {
  //returns  the index position of the target if found, else returns None

  for (let i = 0; i <= list.length; i++) if (list[i] === targetValue) return i;
  return "None";
}

function verify(index) {
  if (index !== "None") console.log("Target found at index: ", index);
  else console.log("Target not found in list");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = linearSearch(numbers, 12);

verify(result);
