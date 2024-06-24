"use strict";

const { Stack, Queue } = require("./ExportIndex");

function ReverseK(queue, k) {
  let stack = new Stack();
  // Edge Cases
  if (k < 0 || k > queue.size() || queue.isEmpty()) {
    return null;
  }

  //   Reverse the First K Elements of the Queue
  for (let i = 0; i < k; i++) {
    // Removes first k elements from the Queue and puts into the Stack
    stack.push(queue.dequeue());
  }

  while (!stack.isEmpty()) {
    // Empties the Stack
    queue.enqueue(stack.pop());
  }

  // Add the Remaining Elements back to the Queue
  for (let i = 0; i < queue.size() - k; i++) {
    queue.enqueue(queue.dequeue());
  }

  return queue;
}

// Driver Code

function main() {
  const testCases = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [-2, 1, -5, 45, 6, 3, -9],
    [1, 2, 5, 0, 7, 4, 23],
    [7, 3, 5, 6, 8, 12],
    [5, 67, 43, 23, 12, 56, 78, 98, 6, 21, 9],
  ];

  const kValues = [4, 10, -7, 5, 2];

  for (let i = 0; i < testCases.length; ++i) {
    const testCase = testCases[i];
    const k = kValues[i];

    const queue = new Queue();
    testCase.forEach((item) => {
      queue.enqueue(item);
    });
    console.log(`\tQueue after reversal:${queue.printQueue()}`);
    console.log(`\tk value: ${k}`);
    const reversedQueue = ReverseK(queue, k);

    console.log(
      `\tQueue after reversal: ${
        reversedQueue ? reversedQueue.printQueue() : " "
      }`
    );
    console.log("-".repeat(20) + "\n");
  }
}
main();
