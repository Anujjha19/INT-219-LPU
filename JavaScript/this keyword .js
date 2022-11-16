/* 
In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

Inside a function, the value of this depends on how the function is called.

 */

/* 
let counter={
    count : 0 , 
    increment : function(){
        counter.count++;
    }
}
// counter.increment();
// console.log(counter); //{count: 1, increment: ƒ} 


counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter); //{count: 4, increment: ƒ}

*/
//Factory function

let counter = createCounter();
let counter1 = createCounter();
function createCounter() {
    return {
        count: 0,
        increment: function () {
            counter.count++;
        }
    }
}
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter);   //{count: 4, increment: ƒ}

// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1);   //{count: 0, increment: ƒ}

//Using this keyword we can fix the above error

let counter2 = createCounter();
let counter3 = createCounter();
function createCounter() {
    return {
        count: 0,
        increment: function () {
            this.count++;
        }
    }
}


counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1);   //{count: 0, increment: ƒ}
//Now how many objects we will make the output gonna gives same for all

/* 
var total = 0;
function incrementCounter(){
    total++;
}
incrementCounter();
console.log(total); //1

 */

// whenever we  use this keyword in context of function then this will target  window object i.e global object
var total = 0;
function incrementCounter() {
    this.total++;
    //console.log(this);
}
incrementCounter();
console.log(total); //1


function Car(name) {
    this.name = name;
    this.start = function () {
        console.log(this.name + " Engine started");
        console.log(this);
    }
}
let swift = new Car("Swift");
swift.start();
// console.log(swift);

// this keyword change in references from where do you call it 

