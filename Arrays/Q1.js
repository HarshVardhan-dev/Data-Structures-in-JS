// Solution 1
function removeEven(arr) {
  let odds = [];

  for (const elem of arr) {
    if (elem % 2 !== 0) {
      odds.push(elem);
    }
  }
  return odds
}

console.log(removeEven([2,3,4,58,9,13,11,4,7]))

// Solution 2
function removeEven2(arr) {

    return arr.filter( (elem) => elem % 2 !== 0)
}
console.log(removeEven2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
// Time Complexity is O(n) for both the solutions.