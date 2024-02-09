"use strict";

const Node = require("./Node");
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * Utility Methods for the LinkedList
   */

  getHead() {
    return this.head;
  }

  search(value) {
    let Index = this.head;
    while (Index !== null) {
      if (Index.data == value) {
        return true;
      } else {
        Index = Index.nextElement;
      }
    }
    return false;
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
      str += "Null";
      return str;
    }
  }

  /** Methods for Insertion in a Linked List*/
  insertAtHead(data) {
    let tempNode = new Node(data);
    if (this.isEmpty()) {
      this.head = tempNode;
    } else {
      tempNode.nextElement = this.head;
      this.head = tempNode;
      this.length++;
    }
    return this;
  }

  insertAtTail(data) {
    let tempNode = new Node(data);
    if (this.isEmpty()) {
      this.head = tempNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = tempNode;
    return this;
  }

  /** Methods for Deletion in a Linked List*/

  deleteAtHead() {
    if (this.isEmpty()) {
      console.log("Deletion Not Possible, List is Empty");
      return this;
    }

    // Get the head of the list
    let firstElement = this.head;

    // Make the next element as the newHead
    this.head = firstElement.nextElement;
  }

  deleteByValue(value) {
    let currentNode = this.head;
    // If the First Node is the Element to be removed
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
    }

    // Else trasverse the List
    while (currentNode.nextElement !== null) {
      // If the nextNode of the Current Node is the Element to be removed,
      // then skip the nextNode of the Current Node and Make reference to the node after the one to be removed
      if (currentNode.nextElement.data === value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }

      currentNode = currentNode.nextElement;
    }
    // Else no node was found
    return false;
  }

  deletaAtTail() {
    // If the List is empty
    if (this.isEmpty()) {
      console.log("Empty List");
    }

    let firstNode = this.head;
    // If the List containes only one element
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
    }
    // Else traverse the list till the second last element.
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    firstNode.nextElement = null;
    return this;
  }
};
