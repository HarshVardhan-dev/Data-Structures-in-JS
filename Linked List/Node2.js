"use strict";

module.exports = class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
};
