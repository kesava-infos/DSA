class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearch {

    constructor() {
        this.root = null;
    }

    createNode(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(root, value) {
        if (root === null) return new Node(value);

        if (value < root.data) {
            root.left = this._insert(root.left, value);
        } else if (value > root.data) {
            root.right = this._insert(root.right, value);
        }

        return root;
    }

    print(node = this.root, level = 0) {
        if (node === null) return;

        this.print(node.right, level + 1);
        console.log("    ".repeat(level) + node.data);
        this.print(node.left, level + 1);
    }
}


// // Test
// const binaryArr = [30, 10, 20, 40, 35];
// const binarySearchObj = new BinarySearch();

// binaryArr.forEach(item => binarySearchObj.createNode(item));

// binarySearchObj.print();
