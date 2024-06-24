"use strict";

const { Queue } = require("./ExportIndex");

function findBin(n) {
  let result = [];
  let myQueue = new Queue();
  var s1, s2;
  myQueue.enqueue("1");
  for (var i = 0; i < n; i++) {
    console.log("Que", myQueue.printQueue(), "Que-length", myQueue.size());
    result.push(myQueue.dequeue());

    console.log("resultsArrValue", result[i], "resultsArr", result);
    s1 = result[i] + "0";
    s2 = result[i] + "1";

    myQueue.enqueue(s1);
    myQueue.enqueue(s2);
    console.log("S1->", s1, "S2->", s2);

    console.log(`Completed ${i + 1} iteration `);
    console.log("-".repeat(100) + "\n");
  }

  return result;
}

console.log(findBin(4));
