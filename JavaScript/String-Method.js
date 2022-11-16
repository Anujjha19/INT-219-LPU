let hello=" Hello! ";
let welcome = "\"Anuj\" ";

// hello + welcome
//let outputMssg =hello + welcome + hello + welcome;

let outputMssg =hello + welcome;
console.log(outputMssg);

let numberString ="123";
//Converting String to Number
Number(numberString);
console.log(numberString)

numberString =Number(numberString);

//Converting Number to String
numberString.toString();
console.log(numberString)

//Concating String of ame and other data type
let mssg = hello + welcome + " Id is :- " + numberString ;
console.log(mssg);

//Other way to do it  i.e Template Literals
let newMssg= `${hello + welcome } Id is ${numberString} `;
console.log(newMssg);

//Important Methods in JavaScript

//Length
var favShow= "Game Of Thrones" ;
console.log(favShow.length);

//See character with the help of index
console.log(favShow[0]);

console.log(favShow[favShow.length-1]);

console.log(favShow.indexOf("Of"));

console.log(favShow.slice(5 , 7)); //Returning a substring beteeen the indexes

var name= "my name is anuj";
console.log(name.toUpperCase());
var surname= "IS JHA";
console.log(surname.toLowerCase());