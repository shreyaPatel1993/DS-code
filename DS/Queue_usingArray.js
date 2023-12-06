// Implementation of Queue DS using array which has O(1) for add and remove Time Complexities:

export class Queue_Array{
    constructor(){
        this.array = []; // O(n) space complexity(it keeps on increasing as you add elements but won't decrease as you remove them)
        this.length = 0;
        this.startI = 0;
        this.endI = this.array.length-1; //?
    }
    // Enqueue/ add to Queue at end like push();
    add(value){
        this.array.push(value);
        this.endI++;
        this.length++;
        return this.array;
    }
    // Dequeue/ remove an element from the beginning of Queue like shift() - but with O(1) - time complexity.
    remove(){
        if(!this.length) return undefined;
        let item = this.array[this.startI];
        this.startI++; //just point startIndex to next one
        this.length--; //and reduce the length by 1.
        return item;
    }
}

// Driver code:

let q = new Queue_Array(); // creating new q object from class Queue_Array
q.add(10); // adding elements to the Object, will return the array created in Queue_Array class.
q.add(20);
q.add(30);
q.add(40);
q.add(50);
q.remove(); // returns first removed element - 10.
q.add(70);

// console.log(q.array[3 + q.startI], 'from Queue_usingSLL.js'); // to get value at index 3 -> do [3 + q.startI]
// console.log(q.array, 'from Queue_usingArray.js');