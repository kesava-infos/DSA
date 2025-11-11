import { SingleLinkedList } from "./LinkedList/singleLinkedList.js";  // include `.js` in ESM

let list1 = new SingleLinkedList();

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.forEach((val) => list1.createNode(val));

list1.printLinkedList();
list1.searchLinkedList(5);
list1.searchLinkedList(34);
list1.deleteValueFromList(6);
list1.printLinkedList()