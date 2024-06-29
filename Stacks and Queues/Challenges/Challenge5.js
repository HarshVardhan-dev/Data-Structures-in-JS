const { Stack } = require("./ExportIndex");

function sortStack(stack) {
  let tempStack = new Stack();
  let value;

  while (!stack.isEmpty()) {
    value = stack.pop();

    if (tempStack.isEmpty() || value >= tempStack.getTop()) {
      tempStack.push(value);
    } else {
      while (!tempStack.isEmpty() && value < tempStack.getTop()) {
        stack.push(tempStack.pop());
      }
      tempStack.push(value);
    }
  }

  //   Retreive the Stack Element Back
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return stack;
}
function main() {
  const inputs = [
    [10, 30, 5, 20, 50],
    [-1, -2, -3, -4, -5, -6],
    [3, 2, -1],
    [12],
    [1, -2],
  ];

  for (const stackValues of inputs) {
    const stack = new Stack();
    for (const value of stackValues) {
      stack.push(value);
    }
    console.log("Original Stack:", stackValues);
    const sortedStack = sortStack(stack);
    const sortedItems = [];
    while (!sortedStack.isEmpty()) {
      sortedItems.push(sortedStack.pop());
    }
    console.log("Sorted Stack:", sortedItems);
    console.log("-".repeat(75));
  }
}

main();
