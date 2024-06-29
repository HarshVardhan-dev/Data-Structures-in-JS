const { Stack } = require("./ExportIndex");

function nextGreaterElement(arr) {
  let stack = new Stack();
  let res = new Array(arr.length).fill(-1);

  //   Transverse the array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    /**
     * While the Stack is not Empty and the top of the stack is less than the
     * element in the loop,keep poping the stack
     */
    while (!stack.isEmpty() && stack.getTop() <= arr[i]) {
      stack.pop();
    }
    /**
     * The top of the stack is greater than the element in the loop
     * ,put the greater element in the res array.
     */
    if (!stack.isEmpty()) {
      res[i] = stack.getTop();
    }
    stack.push(arr[i]);
  }
  return res;
}

function main() {
  const inputs = [
    [4, 6, 3, 2, 8, 1, 9, 9, 9],
    [33, 20, 105, 88],
    [12, 5, 44, 56, 46, 78],
    [1, 2, 3, 4, 5],
    [150, 125, 100, 75, 50, 25, 0],
  ];

  for (let i = 0; i < inputs.length; i++) {
    console.log(`${i + 1}\tArray: ${JSON.stringify(inputs[i])}`);
    console.log("\n\tResult:", nextGreaterElement(inputs[i]));
    console.log("-".repeat(100));
  }
}

main();
