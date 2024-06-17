class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Add node to the end of the list

  insertTail(item) {
    const newNode = new Node(item);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;

      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  // Remove node from the beginning of the list
  removeHead() {
    if (this.length === 0) {
      return null;
    }

    const nodeToRemove = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToRemove.next;

      this.head.prev = null;
      nodeToRemove.next = null;
    }

    this.length--;

    return nodeToRemove.item;
  }

  getHead() {
    if (!(this.head == null)) {
      return this.head.item;
    } else return null;
  }

  tailNode() {
    if (!(this.head == null)) {
      return this.tail.item;
    } else return null;
  }

  // Return list items
  toString() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(JSON.stringify(currentNode.item));
      currentNode = currentNode.next;
    }

    return list.toString();
  }
}

class Queue {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.items.getHead();
    } else return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    return this.items.insertTail(element);
  }

  dequeue() {
    return this.items.removeHead();
  }

  printQueue() {
    return this.items.toString();
  }
}

module.exports = {
  Node,
  DoublyLinkedList,
  Queue,
};
