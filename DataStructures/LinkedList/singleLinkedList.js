class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

export class SingleLinkedList {
    head = null;
    tail = null;

    createNode(val) {
        const node = new Node(val);
        console.log(`Node created for ${val} - ${node}`)
        if (this.head == null) {
            this.head = node;     // <== fixed: must use this.head
        } else {
            if (this.tail == null) {
                this.head.next = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
        }
    }

    getHead() { return this.head; }
    getTail() { return this.tail; }

    printLinkedList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    searchLinkedList(val) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.data == val) {
                console.log("found value", temp.data);
                return temp;
            }
            temp = temp.next;
        }
        console.log(`not found ${val}`);
        return null;
    }
    deleteValueFromList(val) {
        let temp = this.head;
        if (temp.data == val) {
            this.head = this.head.next;
        } else {
            while (temp.next !== null) {
                if (temp.next.data == val) {
                    console.log("deleted value", temp.next.data);
                    temp.next = temp.next.next;
                    return temp;
                }
                temp = temp.next;
            }
        }
        console.log(`not found ${val}`);
        return null;
    }
}
