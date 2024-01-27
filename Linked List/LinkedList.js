"use strict";

const Node = require("./Node");
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty list");
      return false;
    } else {
      let temp = this.head;

      while (temp !== null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(String("-->"));
        temp = temp.nextElement;
      }
      console.log("Null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }

  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty list");
      return null;
    } else {
      let str = "";
      let temp = this.head;
      while (temp !== null) {
        str += String(temp.data);
        str += "-->";
        temp = temp.nextElement;
      }
      str += "null";
      return str;
    }
  }

  insertAtHead(data) {
    let tempNode = new Node(data);
    if (this.isEmpty()) {
      this.head = tempNode;
    } else {
      tempNode.nextElement = this.head;
      this.head = tempNode;
    }
    return this;
  }
};
