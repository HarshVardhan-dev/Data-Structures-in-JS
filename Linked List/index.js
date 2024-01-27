"use strict";
// Importing LinkedList and Node Class from thier respective files
const LinkedList = require("./LinkedList");
const Node = require("./Node");

let list = new LinkedList();

for (let i = 0; i < 10; i++) {
  list.insertAtHead(i);
}

list.printList();
console.log(list.getListStr());
console.log("Current-Head", list.getHead());
