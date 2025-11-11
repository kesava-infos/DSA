export class Stack {
    data = [];
    topp = -1;
    push(val) {
        this.data.push(val);
        console.log(`inserted into stack ${val}`)
        this.topp++; 
    }
    pop() {
        if (this.topp > -1) {
            console.log(`removed into stack ${this.data[this.topp]}`)
            return this.data[this.topp--]
        }
    }
    isEmpty() {
        return this.topp == -1
    }
}