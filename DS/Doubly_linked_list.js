import { DoublyListNode } from "./Nodes.js";

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new DoublyListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }
  shift() {
    //remove from beginning
    if (!this.head) return undefined;
    let currentHead = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }
  unshift(val) {
    //adding a node to the beginning
    let newNode = new DoublyListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    // get the node by its  position/index
    if (index < 0 || index >= this.length) return undefined;
    let midpoint = Math.floor(this.length / 2);
    let counter, check;

    if (index > midpoint) {
      counter = this.length - 1; //from tail
      check = this.tail;
      while (counter !== index) {
        check = check.prev;
        counter--;
      }
      return check;
    } else {
      counter = 0; //from head
      check = this.head;
      while (counter !== index) {
        check = check.next;
        counter++;
      }
      return check;
    }
  }
  set(val, i) {
    // changing/updating the value of node based on its position in the list
    let foundNode = this.get(i);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(val, i) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    let newNode = new DoublyListNode(val); //j
    let previousNode = this.get(i - 1); //a
    let next = previousNode.next; // a.next = b

    previousNode.next = newNode; // a.next = j
    newNode.prev = previousNode; //j.pre = a
    newNode.next = next; // j.next = b
    next.prev = newNode; // b.pre = j

    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i >= this.length) return null;
    if (i === this.length - 1) return !!this.pop();
    if (i === 0) return !!this.shift();

    let previous = this.get(i - 1); //a
    let removed = previous.next; //b
    let next = removed.next; //c
    previous.next = next; // a.next = c
    next.prev = previous; // c.prev = a
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
  reverse() {
    if (!this || this.length <= 1) return this;

    let n = this.head;
    do {
      [n.next, n.prev] = [n.prev, n.next];
       n = n.prev;
    } while (n);
    [this.tail, this.head] = [this.head, this.tail];
    return this;
  }
} // end of doubly class

// Driver Code:
export var list = new DoublyLinkedList(); // creating new object of DoublyLinkedList class
list.push("A"); list.push("B"); list.push("C"); // adding values to it
list.push("D"); list.push("E"); list.push("F");
// list: {A(head) <=> B <=> C -> D <=> E <=> F (tail)}

console.log(list.reverse(), " reversed list from Doubly_linked_list.js");
console.log(list, "list from Doubly_linked_list.js");
