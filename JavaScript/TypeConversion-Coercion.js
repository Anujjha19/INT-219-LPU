// Type Conversion 

console.log('Welcome to L5');
let myVar;
myVar = 43;
console.log(myVar, (typeof myVar));

let myNum;

// Converting it into String 

myNum = String(43);
console.log(myVar, (typeof myNum));

// let booleanVar=true;
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

// let date =new Date();
let date = String(new Date());
console.log(date, (typeof date));

// let arr=[1,2,3,4,5];    length = 5
let arr = String([1, 2, 3, 4, 5]); //length = 9 i.e comma also counted
console.log(arr, (typeof arr));

let i = 8;
console.log(i); //number
console.log(i.toString()); //string

// Converting it into Number 

/* 
 // let stri="3434";  it is string
let stri=Number("3434"); //converting it into number
console.log(stri,(typeof(stri))); */


let stri = Number("3434");
stri = Number("343d4");  //It will show NaN- not a number
/*  stri=Number("[1,2,3,4]);  //It will show NaN- not a number */
stri = Number(true);  //1
console.log(stri, (typeof (stri)));

//parse-int and parse-float

/*  it will give 34 , type is string
let number ='34';
console.log(number , (typeof number)); 
*/
/* let number =parseInt('34'); // 34,  type change to number
let number =parseInt('34.098'); // 34,  type change to number  & it will give iteger vakue because of parseInt 
let number =Number('34.098'); // 34.098, number type  */
/* let number =parseFloat('34.098'); // 34.098,  type change to number  & it will print complete number
console.log(number , (typeof number)); */

let number =parseFloat('34.098');

console.log(number.toFixed() , (typeof number)); // 34         no decimal point
/* 
console.log(number.toFixed(3) , (typeof number)); // 34.038     3 decimal point
console.log(number.toFixed(10) , (typeof number));  // 34.098756864no  10 decimal point 
*/


//  Type Coercion



/*
let mystr="697";
let myValue=34;

two option-
string ko number mai convert kr k add kr de 
or
number ko string mai convert kr k concatenate kr de (Basically Follows) 
here,
69734 as ans

console.log(mystr + myValue); // 69734

*/
let mystr= Number("697");
let myValue=34;
console.log(mystr + myValue); //731 It will add both 