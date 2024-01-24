// Solution 1.
function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}

let arr = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 81;
console.log(findSum(arr, value));

// Solution 2.
function findSum2(arr, value) {
  // Sort the array
  arr.sort((a, b) => a - b);

  let i = 0;
  j = arr.length - 1;

  let sum = 0;
  while (i != j) {
    sum = arr[i] + arr[j];
    if (sum < value) {
      i++;
    } else if (sum > value) {
      j--;
    } else {
      return [arr[i], arr[j]];
    }
  }

  return false;
}

console.log("Solution 2 ", findSum2(arr, value));
