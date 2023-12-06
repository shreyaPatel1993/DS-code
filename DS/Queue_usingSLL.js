import { SinglyLinkedList as LinkedList} from "./Singly_Linked_List.js";
import { ListNode } from "./Nodes.js";

// This is Queue DS implementation using Singly Linked List.
// Remember this won't return an array so you cannot find val by index, it will just give you the first val in Queue and able to add val at end via SLL;

export class Queue_SLL extends LinkedList {
  constructor() {
    super(); // calling super() will call LinkedList's(aka Singly Linked List) constructor to create a Queue_SLL Object
    // now this will create a new LinkedList when a new Object is created using Queue_SLL class.
  }
  // This Queue_SLL Objects will be O(added nodes - removed nodes)/ O(length of linked list) space complexity(it will expand and shrink as you add & remove nodes/value)
  add(value) {
    // add new to list at the end (works as push in array) - O(1) time complexity
    var newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.head;
  }

  remove() {
    // removing from beginning (works as shift in array) - O(1) time complexity
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead.val; // will return the first value from begining
  }

  // Note: you can also reuse Linked List function to permoform add and remove by:

  adding(val){ // this works exactly same as above add function, this just reuses push method of SLL class.
    return super.push(val).head;
  }
  removing(){ // this works exactly same as above remove function, this just reuses shift method of SLL class.
    return super.shift().val;
  }

} // === class ends ===

// Driver code:
let Que = new Queue_SLL(); // creating new object from class Queue_SLL

Que.add(10); // adding values to the created object, will return head of linked list.
Que.add(25); 

Que.adding(60); //works same as add

Que.remove(); // will return value 10 
Que.removing(); // will return value 25


console.log(Que, 'from Queue_usingSLL.js') //Que Object
