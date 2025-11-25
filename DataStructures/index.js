import { SingleLinkedList } from "./LinkedList/singleLinkedList.js";
import { Stack } from "./Stack/stack.js";
import {Queue} from "./Queue/queue.js";
import { BinarySearch } from "./BinarySearch/binarySearch.js";

// Test Single Linked List
let list1 = new SingleLinkedList();

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.forEach((val) => list1.createNode(val));

list1.printLinkedList();
list1.searchLinkedList(5);
list1.searchLinkedList(34);
list1.deleteValueFromList(6);
list1.printLinkedList()


// Test Stack
let stack1 = new Stack();
let arr2 = ["a", "b", "c", "d", "e", "f"];
arr2.forEach((val) => stack1.push(val));

for (let i = 0; i < arr2.length; i++) {
    console.log(stack1.pop())
}

// Test Queue

let queue = new Queue();
let arr3 = ["AA","BB", "CC", "DD", "EE", "FF"]
arr3.forEach((val)=>{
    queue.enQueue(val)
});
for (let i = 0; i < arr3.length; i++) {
    console.log(queue.deQueue())
}


// binary tree
const binaryArr = [30, 10, 20, 40, 35];
const binarySearchObj = new BinarySearch();
binaryArr.forEach((item)=>{
    binarySearchObj.createNode(item);
})
binarySearchObj.print();