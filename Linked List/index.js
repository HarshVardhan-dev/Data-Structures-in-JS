"use strict";
// Importing LinkedList and Node Class from thier respective files
const LinkedList = require("./LinkedList");
const Node = require("./Node");

function SperateLine() {
  console.log("------------------------------");
}

let list = new LinkedList();

for (let i = 0; i < 4; i++) {
  list.insertAtHead(i);
}
console.log(list.printList());

list.reverseList();

console.log(list.printList());
