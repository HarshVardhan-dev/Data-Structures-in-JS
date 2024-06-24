const { Stack, Queue } = require("./ExportIndex");

// Solution with Efficient Dequeue

class newQueue {
  constructor() {
    this.tempStack = new Stack();
    this.mainStack = new Stack();
  }

  enqueue(value) {
    //Traverse elements from mainStack to tempStack
    //Push given value to mainStack
    //Traverse back the elements from tempStack to mainStack
    while (this.mainStack.isEmpty() == false) {
      this.tempStack.push(this.mainStack.pop());
    }

    this.tempStack.push(value);
    while (this.tempStack.isEmpty() == false) {
      this.mainStack.push(this.tempStack.pop());
    }
  }

  dequeue() {
    //If mainStack is empty then we have no elements.
    //else return top element of mainStack as we always put oldest entered
    //element at the top of mainStack
    if (this.mainStack.isEmpty() == false) {
      return this.mainStack.pop();
    }
  }
}

// Driver Code

function main() {
  const calls = [
    ["NewQueue", "enqueue()", "enqueue()", "enqueue()", "dequeue()"],
    ["NewQueue", "enqueue()", "dequeue()", "enqueue()", "dequeue()"],
    ["NewQueue", "enqueue()", "enqueue()", "dequeue()", "dequeue()"],
    ["NewQueue", "enqueue()", "enqueue()", "dequeue()", "enqueue()"],
    [
      "NewQueue",
      "enqueue()",
      "dequeue()",
      "enqueue()",
      "enqueue()",
      "dequeue()",
    ],
  ];

  const inputs = [
    [null, 3, 4, 5, null],
    [null, -1, null, -4, null],
    [null, 200, 700, null, null],
    [null, -100, -100, null, -100],
    [null, 100000, null, -100000, 4000, null],
  ];

  for (let i = 0; i < calls.length; i++) {
    const queueObj = new newQueue();
    console.log(i + 1 + "     Starting operations:\n");

    for (let j = 0; j < calls[i].length; j++) {
      if (calls[i][j] == "enqueue()") {
        let inputstr = "enqueue" + "(" + inputs[i][j] + ")";
        console.log("\t\t", inputstr, (sep = ""));
        queueObj.enqueue(inputs[i][j]);
      }
      if (calls[i][j] == "dequeue()") {
        let inputstr = "dequeue" + "(" + ")";
        console.log(
          "\t\t",
          inputstr,
          "   returns ",
          queueObj.dequeue(),
          (sep = "")
        );
      }
    }

    console.log("-".repeat(100));
  }
}

main();
