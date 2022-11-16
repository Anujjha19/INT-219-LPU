console.log("We are at Lecture - 6");

const name="Anuj";
const greeting="Good Morning";
console.log(greeting + " " + name);


let html;
/* 
Error not a valid way
html= "<h1> This is heading . </h1>
        <p> Learning Js With CWH</p>
"; 
*/
/*
// Way is correct but how many times we will add '+' to make it correct
html= "<h1> This is heading . </h1>" +
        "<p> Learning Js With CWH</p> ";
*/

html= "<h1> this is heading . </h1>" +
        "<p> Learning Js With CWH</p> ";

/*  String Functions  */

// Concatenate String


html=html.concat("this" ," is method"); //will add all the string
console.log(html); //print the string in console

//They are just returning the ans , not changing to main String

console.log(html.length); // 71 length of html
console.log(html.toLowerCase()); // all html letter in lower case
console.log(html.toUpperCase()); // all html letter in upper case


/* 
operation before this just returning value they do not making any changing in the html string

console.log(html); //print the original  string in console 
 */

console.log(html[0]); //<  -  1st char 
console.log(html[1]); //h
console.log(html[2]); //1

console.log(html.indexOf("this")); // 5  from where the index of "this" started 
console.log(html.indexOf("h1")); // 1   from where the index of ""h1"" started 
console.log(html.indexOf("anuj")); // -1  since "anuj" is not present so -1

console.log(html.indexOf("<")); // 0   [If there is multiple "<" - It will  give their first occurrence in string ]
console.log(html.lastIndexOf(">")); // 55  last occurrence
//[If there is multiple > - It will give  their last occurrence in string ]

console.log(html.charAt(0)); //<  -  1st char 
console.log(html.charAt(1)); //h
console.log(html.charAt(2)); //1 

//to check whether my string is ending with "is method"
console.log(html.endsWith("is method")); //true 
console.log(html.endsWith("is method124")); //false

// to check whether (" ") is present or not in my string

console.log(html.includes("is")); //true 
console.log(html.includes("anuj")); //false

// it gives their substring (0,3) i.e index 0 to (n-1) ans

console.log(html.substring(0,3)); // <h1 i.e 012
console.log(html.substring(1,3)); // h1  i.e 12
console.log(html.substring(1,6)); //h1> t  i.e 12345

//print part of String

console.log(html.slice(-4));  // thod  i.e last 4 characters
console.log(html.slice(0,4)); //<h1>  i.e letters from index 0 to (n-1);

/* 
---diff between slice and substring--

SLICE :  console.log(html.slice(-4));  // thod  i.e last 4 characters

Sub-String :  console.log(html.substing(-4));   // <h1> this is heading . </h1><p> Learning Js With CWH</p> this is method

i.e print all the string

*/
/*   //string ko we split in parts and put into an array -- When we use"split" it breaks the strings into array.
//split(""); it will break all leter
//split(" ") it will break word that is separated by given spaces

console.log(html.split(""));  //  (71) ['<', 'h', '1', '>', ' ', 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'h', 'e', 'a', 'd', 'i', 'n', 'g', ' ', '.', ' ', '<', '/', 'h', '1', '>', '<', 'p', '>', ' ', 'L', 'e', 'a', 'r', 'n', 'i', 'n', 'g', ' ', 'J', 's', ' ', 'W', 'i', 't', 'h', ' ', 'C', 'W', 'H', '<', '/', 'p', '>', ' ', 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'm', 'e', 't', 'h', 'o', 'd']


console.log(html.split(">")); //It will break words after ">" and replace the respective string or letter


 */ 

console.log(html.split(" ")); //  (13) ['<h1>', 'this', 'is', 'heading', '.', '</h1><p>', 'Learning', 'Js', 'With', 'CWH</p>', 'this', 'is', 'method']

// Replace 

console.log(html.replace("this " , " It ")); 
//  It only replaces the first occurrence in html  i.e<h1>  It is heading . </h1><p> Learning Js With CWH</p> this is method


// Template Literals

let fruit1='Orange';
let fruit3='Banana \' ';
let fruit2='Apple';
let myHtml= `Hello ${name }
        <h1>This is "the" Name of 'Fruits' </h1>
        <p>You like ${fruit1} , ${fruit2} and ${fruit3}</p>
        `;  // As we have used backTick So, we can now use "" , ''.
document.body.innerHTML = myHtml;

/* 
let Name = 'Anuj Jha'
let  message1 = 'I am learning JavaScript .'

let message2 = 'Trying to cop up my knowlwdge.'

let givenQuestion = `<h1> Hello ${Name} </h1> 

<p> ${message1}${message2} </p>

`;

document.body.innerHTML = givenQuestion; */

/* //Template
let str1='JAVASCRIPT';
let str2='JS TUTORIAL';
let sem=` <h3> I am learning ${str1} from CODE WITH HARRY ${str2}</h3> `
document.body.innerHTML=sem; */
