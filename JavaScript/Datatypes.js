/* 
There are 2 data types in JS

1.  primitive data types

mool datatypes - memory allocation is in Stack (they are base)



a. string  - "collection of characters" - "anuj"
b. numbers  - 34
c. boolean  - true or false
d. null  - intentionally empty values
e. undefined  - var name ;  - So, here  value is undefined
f. symbol  - now uploaded on latest javascript

2. reference data types

memory allocation is in Heap  (they are object )

a. arrays  -
b. object literals  -
c. functions  -
d. dates  -


*/

//Primitive Data types

//string
let fname="anuj";
let lname='jha';
console.log(fname);
console.log(lname);
console.log("My Name is " + fname + " " +  lname);
console.log("My Datatype is " +(typeof name));

//numbers

/* let marks="30";  
this become a string;
*/
let marks=30;
// let marks=30.4;
console.log("marks is " + marks);
console.log("Datatype is " +(typeof marks));

//Boolean 

let isDriver= true;
console.log("He / she is a driver " +isDriver);
console.log("Datatype is " +(typeof isDriver));

//Null

let nullVar= null;
console.log("Value is " +nullVar);
console.log("Datatype is " +(typeof nullVar)); // it shows object but it is primitive data type (bogus return value)


//Undefined

let undef= undefined;
console.log("Value is " +undefined);
console.log("Datatype is " +(typeof undefined));


//Rference Data Types

//Arrays


// myarr =[1,2,3,4];
let myarr =[1,2,3,4 , false , 'string'];
console.log("Value is " + myarr);
console.log("Datatype is " +(typeof myarr));

// Object-Literals
let stMarks ={
    anuj:40,
    ritik:60,
    ayush:70
    /*
    "anuj jha "  - gives no error
    anuj jha - gives an error 
     */
}
console.log(stMarks);
console.log("Datatype is " +(typeof stMarks));

//functions

function findname() {
    
}
console.log("Datatype is " +(typeof findname));

//Dates

let date= new Date();
console.log("Datatype is " +(typeof date));