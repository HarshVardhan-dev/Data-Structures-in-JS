function findFirstUnique(arr) {
  let index2;
  for (let index = 0; index < arr.length; index++) {
    index2 = 0;

    // Transverse the whole array
    while (index2 < arr.length) {
      if (arr[index] == arr[index2] && index2 !== index) {
        console.log("Index2 on Break", index2, "---------", "Break Values", [
          arr[index],
          arr[index2],
        ]);
        break;
      }
      console.log("Indexs", [index, index2]);
      index2 += 1;
    }

    if (index2 === arr.length) {
      console.log("Index2 Reached at the end.!!");
      return arr[index];
    }
  }

  return null;
}
console.log(findFirstUnique([2, 3, 3, 1, 2, 4]));
