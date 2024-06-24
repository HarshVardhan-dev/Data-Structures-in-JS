const { Queue } = require("./ExportIndex.js");

let queue = new Queue();
function createQueue() {
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
  }
}
createQueue();

console.log(queue.printQueue().join(" "));
