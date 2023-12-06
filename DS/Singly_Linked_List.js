import { ListNode } from "./Nodes.js";

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // add new to list at the end
    var newNode = new ListNode(val);
    this.head 
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // remove one from the end.
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }
  shift() {
    // removing from beginning
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  unshift(val) {
    // add at the beginning
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    // get the node by its  position/index
    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let current = this.head;

    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current;
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
    // insert new node at given index
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    let newNode = new ListNode(val);
    let previousNode = this.get(i - 1);
    let oldNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = oldNode;
    this.length++;
    return true;
  }
  remove(i) {
    // remove by the index
    if (i < 0 || i >= this.length) return null;
    if (i === this.length - 1) !!this.pop();
    if (i === 0) !!this.shift();

    let previous = this.get(i - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    //reverse singlyLinked list
    let node = this.head;
    [this.tail, this.head] = [this.head, this.tail]; //swapping head and tail.
    let next;
    let previous = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
  }
}

// Driver code:
export var list = new SinglyLinkedList(); // creating new object of SinglyLinkedList class
list.push("HlistO"); // adding value to the object
list.push("GlistBYE");
list.push("!!!");
// list : {"HELLO"(head) -> "GOODBYE" -> "!!!"(tail)}

export let sllHead = list.head; // exporting head of created SLL Object
// console.log(list, 'from Singly_Linked_List.js'); 
list.shift()
console.log(list)