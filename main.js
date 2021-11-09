import {BST, BT, SLL, QUE, DLL, BinarySearchTree, BinaryTree, SinglyLinkedList, Queue, DoublyLinkedList} from './Package.js';

/* Examples of how above imports will work:
first 5 (BST, BT, SLL, QUE, DLL) are ready made objects to be used which has values added in from the respective files.
next 5 (BinarySearchTree, BinaryTree, SinglyLinkedList, Queue, DoublyLinkedList) are classes which are created in respective files, you can use those classes to create your own objects. */

// How to:

console.log(SLL, 'already created linked list from Singly_Linked_list.js file'); //use the same ready made objects created in the Singly_Linked_List file.
SLL.push('adding new vlaues to alredy created Linked List'); // you can also use SinglyLinkedList's class functions here to add new values/remove etc. from the old object created in Singly_Linked_List file.

// or 

let newSLL = new SinglyLinkedList(); // Create new Object of singly linked List from the class 
newSLL.push('something New'); //and then use its push method to add in values you want or use any methods from the SinglyLinkedList class.
console.log(newSLL, 'newly created Linked List from Template.js')