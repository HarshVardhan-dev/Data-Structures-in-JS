// Solution 1.
function findProduct2(arr){
  var result = []
  var left = 1, currentproduct;
  //To store product of all previous values from currentIndex
  for(var i=0;i<arr.length;i++){
    currentproduct = 1
    //To store current product for index i    
		//compute product of values to the right of i index of list
    for(var j=i+1;j<arr.length;j++){
      currentproduct = currentproduct * arr[j]
    }
    //currentproduct * product of all values to the left of i index
    result.push(currentproduct * left)
    //Updating `left`
    left = left * arr[i]
  }
    
  return result
}
console.log(findProduct2([1,3,4,5]))



// Solution 2 .
function findProduct(arr) {
    var temp = 1,
      product = [];
    
    console.log("Calculating Product to each of the elements to its Left")
    for (var i = 0; i < arr.length; i++) {
      product[i] = temp;
      temp = temp * arr[i];
      console.log("product", product[i], "temp", temp);
    }
  
    temp = 1;
    
    console.log("Calculating Product to each of the elements to its Right")
    for (var i = arr.length - 1; i > -1; i--) {
      product[i] *= temp;
      temp *= arr[i];
      console.log("product", product[i], "temp", temp);
    }
    
    return product;
  }
  findProduct([1, 3, 4, 5])
  console.log();
  
