/* Function hoisting

One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
    console.log(`My cat's name is ${name}`);
}
The result of the code above is: "My cat's name is Tiger"

*/

/* 
Without hoisting you would have to write the same code like this:

function catName(name) {
    console.log(`My cat's name is ${name}`);
}

catName("Tiger");

The result of the code above is the same: "My cat's name is Tiger"
 */
/* Variable hoisting

Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.
 */

sayHello(); 
console.log(i); //The default initialization of the var is undefined.
function sayHello(){
    console.log("Hello");
}
var i=10;

/* 
Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value 
var was used before ES6 
const and let was introduced in ES6

let is also hoisted as in 2nd line , in global execution concontex, in script the i is already allocated a memory

*/
/* sayHi(); 
console.log(j);  // Cannot access i before initialization  - it is in temporal deadZone
function sayHi(){
    console.log("Hi");
}
let j=10; */

/* 
sayHey(); 
console.log(k);  
var  sayHey= function(){
    console.log("Hey");
} // Error - sayHey is not an option
let k=10;
 */
/* 

console.log(k);  
var  sayHey= function(){
    console.log("Hey");
} // Error - sayHey is not an option
sayHey(); 
let k=10; 
*/

//Variable Shadow - variable scoping

let foo='bar';
if(true) {
    let foo= 'baz';
    console.log(foo); //baz
}
console.log(foo); // bar

//var keyword does not work with block scope

let hooka='bar';
var bar = 'hooka';
if(true) {
    let hooka= 'baz';
    var bar ='hooka bar';
    console.log(hooka); //baz
    console.log(bar);  //hooka bar
}
console.log(hooka); //bar
console.log(bar);  // hooka bar

/*  //var keyword  work with function scope

let hooka='bar';
var bar = 'hooka';
function drinkHinB{
    let hooka= 'baz';
    var bar ='hooka bar';
    console.log(hooka); //baz
    console.log(bar);  //hooka bar
}
drinkHinB();
console.log(hooka); //bar
console.log(bar);  // hooka
 */


//  Illegal Shadowing 

let bat='ball';
var ball = 'bat';
if(true) {
    // var bat= 'runs';  // Error - as bat has been declared already
    //with the help of var  in global scope we cannot make the same name variable i.e illegal shadowing
    var ball ='bat ball';
    console.log(bat); 
    console.log(ball); 
}
console.log(bat);
console.log(ball); 

// const key word is a read only keyword

let king;
var queen;
// undefined also they will work with let , var

const prince; // Error - Missing Initializer in const declaration ,  = Value initialize is necessary