export class Queue{
    data = [];
    isEmpty() {
        return this.data.length === 0;
    }
    enQueue(val){
        this.data.push(val);
        console.log(`added element to Queue ${val}`)
    }
    deQueue(){
        if(!this.isEmpty()){
            const d = this.data.shift();
            console.log(`removed element from Queue ${d}`);
            return d
        }
        return "Queue is empty"
    }
}