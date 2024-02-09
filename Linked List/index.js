"use strict";
// Importing LinkedList and Node Class from thier respective files
const LinkedList = require("./LinkedList");
const Node = require("./Node");

function SperateLine() {
  console.log("------------------------------");
}

let list = new LinkedList();

for (let i = 0; i < 10; i++) {
  list.insertAtHead(i);
}
console.log(list.printList());

list.deleteAtHead();
console.log(list.printList());
list.deleteByValue(5);
console.log(list.printList());
