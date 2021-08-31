function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let char of first) {
    lookup[char] ? lookup[char]++ : (lookup[char] = 1);
  }
  console.log(lookup);

  for (let char of second) {
    if (!lookup[char]) return false;
    else --lookup[char];
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
