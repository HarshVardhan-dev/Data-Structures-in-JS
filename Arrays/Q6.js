function findFirstUnique(arr) {
    let index2;
    for (let index = 0; index < arr.length; index++) {
        index2 = 0;

        // Transverse the whole array
        while (index2 < arr.length) {
            if (arr[index] == arr[index2] && index2 !== index) {
                console.log("---------","Break Values",[arr[index], arr[index2]])
                break;
            }
            console.log("Index ON break: " + index2, "Indexs", [index, index2]);
            index2 += 1;
        }

        if (index2 === arr.length) {
            return arr[index];
        }
    }

    return null;
}
console.log(findFirstUnique([2,6,3,4,6,2]))