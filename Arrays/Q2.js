// Solution 1
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort(function (a, b) {
    return a - b;
  });
}

let arr1 = [1, 2, 3, 4, 5, 7];
let arr2 = [2, 4, 6, 7, 8];
console.log(mergeArrays(arr1, arr2));

// Solution 2
function mergeArrays2(arr1, arr2) {
  let merged = [];
  let i = 0;
  j = 0;

  // Transvers both the arrays simultaneously.

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Copies the remaining elements to the merged array.

  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    merged = merged.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    merged = merged.concat(arr2);
  }

  return merged;
}

console.log("Solution 2", mergeArrays2(arr1, arr2));
