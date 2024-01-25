// Solution 1
// Transverse the array twice
function findSecondMaximum(arr) {
  let firstMaximum = Number.NEGATIVE_INFINITY;
  let secondMaximum = Number.NEGATIVE_INFINITY;
  console.log(firstMaximum, secondMaximum);

  for (let val of arr) {
    if (val > firstMaximum) {
      firstMaximum = val;
    }
  }

  for (let val of arr) {
    if (val > secondMaximum && val < firstMaximum) {
      secondMaximum = val;
    }
  }

  return secondMaximum;
}

console.log(findSecondMaximum([2, 3, 4, 5, 6, 6, 9, 3, 2, 9, 4]));
// Solution 2
// Transverse the array once
function findSecondMaximum2(arr) {
  let firstMaximum = Number.NEGATIVE_INFINITY;
  let secondMaximum = Number.NEGATIVE_INFINITY;

  for (let val of arr) {
    if (val > firstMaximum) {
      secondMaximum = firstMaximum;
      firstMaximum = val;
    } else if (val > secondMaximum && val != firstMaximum) {
      secondMaximum = val;
    }
  }
  return secondMaximum;
}

console.log(findSecondMaximum2([9, 2, 3, 6, 4, 5, 3, 6, 8, 9]));
