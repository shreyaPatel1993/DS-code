//  This is a TreeNode which has val & left and/or right nodes or null
export class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = this.right = null;
  }
}

// This is ListNode for SinglyLinkedList which has val & next nodes or null.
export class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// This is ListNode for DoublyLinkedList which has val & next and prev nodes or null.
export class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
