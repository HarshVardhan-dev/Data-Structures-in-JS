/**
 * 
  Operation	    Time Complexity
  isEmpty	            O(1)
  getTop	            O(1)
  size	              O(1)
  push	              O(1)
  pop	                O(1)
 * 
 */

class Stack {
  constructor() {
    this.top = null;
    this.items = [];
  }

  getTop() {
    if (this.top == null || this.items.length == 0) {
      return null;
    } else {
      return this.top;
    }
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
    this.top = item;
  }

  pop() {
    if (this.items.length !== 0) {
      // If the length of the Array is One
      if (this.items.length == 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else {
      return null;
    }
  }
}
