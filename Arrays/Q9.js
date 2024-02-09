// Solution 1
// Making use of the auxiliary Array or space.

function reArrange(arr) {
  let negArr = [];
  posArr = [];

  for (let val of arr) {
    if (val < 0) {
      negArr.push(val);
    } else {
      posArr.push(val);
    }
  }

  return negArr.concat(posArr);
}
console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));

// Solution 2
// Changing the positions of the elements in the array without making use of the auxiliary Array.

function reArrange2(arr) {
  let leftMostPos = 0;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // Swapping positions of elements
      temp = arr[i];
      arr[i] = arr[leftMostPos];
      arr[leftMostPos] = temp;
      //   Only increment the value of leftMostPos when element is negative.
      leftMostPos++;
    }
  }
  return arr;
}

console.log(reArrange2([10, 3, -2, 3, 5, -3]));
