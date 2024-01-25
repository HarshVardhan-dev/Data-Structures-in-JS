// Solution 1
// Manual Rotation

function rightRotate(arr, n) {
  let rotatedArr = [];

  for (let index = arr.length - n; index <= arr.length - 1; index++) {
    rotatedArr.push(arr[index]);
  }
  console.log("First Slice", rotatedArr);
  //   Push the remaining elements

  for (let index = 0; index < arr.length - n; index++) {
    rotatedArr.push(arr[index]);
  }

  return rotatedArr;
}

// Solution 2
// Using Splice and Concat.

function rightRotate2(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}

console.log(rightRotate([1, 2, 3, 4, 5], 4));

console.log(rightRotate2([3, 2, 5, 1, 7, 8], 1));
