// Solution 1.
function findProduct2(arr){
    let productArr = []

    let leftSideProduct = 1
    for(let i = 0 ; i < arr.length ; i++){
        let currentproduct =  1

        for(let j = i+1 ; j < arr.length ; j++){
            currentproduct = currentproduct * arr[j]
        }
        productArr.push(currentproduct * leftSideProduct)

        // Update the LeftSideProduct after Each Iteration.
       leftSideProduct *= arr[i]

    }
    
    return productArr
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
  
