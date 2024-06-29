const { Stack } = require("./ExportIndex");
function applyOperator(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return Math.floor(num1 / num2); // Integer division
    default:
      return null;
  }
}

function evaluatePostfix(exp) {
  const stack = new Stack();

  for (let char of exp) {
    if (!isNaN(char)) {
      // Push numbers onto the stack
      stack.push(parseInt(char));
    } else {
      // Operator encountered
      // Pop top two numbers from stack
      const right = stack.pop();
      const left = stack.pop();
      // Apply operator to operands and push result back to stack
      const result = applyOperator(char, left, right);
      stack.push(result);
    }
  }
  // Final result is at the top of the stack
  return stack.pop();
}

function main() {
  const testCases = [
    "921*-8-4+",
    "53+62/*35*+",
    "543-3*+",
    "82/3-31*+",
    "92+31*-",
  ];
  let i = 1;
  for (const test of testCases) {
    console.log(i + ".\tExpression: " + test);
    const result = evaluatePostfix(test);
    console.log("\tResult: " + result);
    console.log("-".repeat(100));
    i++;
  }
}

main();
