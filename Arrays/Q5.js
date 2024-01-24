// Solution 1

function findMinimum(arr) {
  let currentMinVal = arr[0];

  for (let val of arr) {
    if (val < currentMinVal) {
      currentMinVal = val;
    }
  }
  return currentMinVal;
}
console.log(findMinimum([9, 2, 36, 7]));


// Solution 2

function findMinimum2(arr) {
    arr.sort((a, b) => a -b)
    console.log("Sorted Array: " + arr)
    return arr[0]
}
console.log(findMinimum2([9, 2, 36, 7]));