import { SinglyLinkedList as LinkedList} from "./Singly_Linked_List.js";
import { ListNode } from "./Nodes.js";

// remember this won't return an array so you cannot find val by index, it will just give you the first val in q and able to add val at end via SLL;
export class Queue { 
  constructor() {
    this.Que = new LinkedList();
    this.length = 0;
  }

  add(value) {  // add new to list at the end (works as push in array)
    var newNode = new ListNode(value);
    if (!this.Que.head) {
      this.Que.head = newNode;
      this.Que.tail = this.Que.head;
    } else {
      this.Que.tail.next = newNode;
      this.Que.tail = newNode;
    }
    this.length++;
    this.Que.length++;
    return this;
  }

  remove() { // removing from beginning (works as shift in array)
    if (!this.Que.head) return undefined;
    let currentHead = this.Que.head;
    this.Que.head = currentHead.next;
    this.Que.length--;
    this.length--;
    if (this.Que.length === 0) this.Que.tail = null;
    return currentHead.val; // will return the first value from begining
  }
}

// Driver code:
export let que = new Queue(); // craeting new que object from class Queue

que.add(10); // adding values to the created object
que.add(25);
que.add(11);
que.add(30);
que.add(50);
que.remove() // will return value 10 
// console.log(que, 'from Queue.js') //?

