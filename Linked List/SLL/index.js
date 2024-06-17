const SSL = require("./LinkedList");

// Creates a new SinglyLinkedList
const list = new SSL();

for (let i = 0; i < 10; i++) {
  list.insertAtHead(i);
}

console.log(list.getlength());
list.printList();
