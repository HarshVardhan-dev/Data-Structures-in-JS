// Solution 1
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort(function (a, b) {
    return a - b;
  });
}

let arr1 = [11, 102, 145, 23, 32, 54];
let arr2 = [92, 14, 66, 71, 84];
console.log(mergeArrays(arr1, arr2));

// Solution 2
function mergeArrays2(arr1, arr2) {
  arr1.sort(function (a, b) {
    return a - b;
  })
  arr2.sort(function (a, b) {
    
  })
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
  
  console.log("merged: " + merged)
  // Copies the remaining elements to the merged array.

  if (i <= arr1.length - 1) {
    // Cutout the remaining elements.
    arr = arr1.splice(0, i);
    console.log("Remainin elements from arr1: " + arr1.splice(0, i));
    merged = merged.concat(arr);
  } else if (j <= arr2.length - 1) {
    arr = arr2.splice(0, j);
    console.log("Remainin elements from arr2: " + arr2.splice(0, i))
    merged = merged.concat(arr);
  }

  return merged;
}

console.log("Solution 2", mergeArrays2(arr1, arr2));
