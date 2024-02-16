"use strict";

const { Node, DoublyLinkedList, Queue } = require("./ExportIndex");

function findBin(n) {
  let result = [];
  let myQueue = new Queue();
  var s1, s2;
  myQueue.enqueue("1");
  for (var i = 0; i < n; i++) {
    console.log("Loop Body Start");

    console.log(`Value to be Dequeued: ${myQueue.getFront()}`);
    result.push(myQueue.dequeue());

    s1 = result[i] + "0";
    s2 = result[i] + "1";
    console.log("----------", result[i]);
    myQueue.enqueue(s1);
    myQueue.enqueue(s2);

    console.log("Result", result, "s1-->", s1, "s2-->", s2);
    console.log(
      "***********",
      `Completion of ${i + 1}th iteration and value of i is ${i}`
    );
  }

  return result;
}

console.log(findBin(4));
