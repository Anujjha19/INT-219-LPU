console.log("HTML Element Selectors in JavaScript ");
//If the selectors having multiple elments then it will select the first
/* 
Element Seletor
1. Single Element Seletor
2. Multi Element Seletor
*/

//Single Element  DOM  Selector
let element = document.getElementById("myfirst");
// element=element.className; // Gives the Child Name
// element=element.childNodes; // One Text node i.e Child1
// element=element.parentNode; // Parent node get print i.e div.container
element.style.color = 'red'; //With the help of "Js" we can change "CSS"
element.innerText = 'This is Lecture 14 '; //This will change "child1" to " the given text ";
element.innerHTML = '<b> This is Lecture 14 </b>'; //The change text will become Bold - to give html
/* 
console.log(element.innerHTML); //will print inner html
console.log(element.innerText);  //will print inner text
*/

// console.log(element);
/* 
let sel = document.querySelector('#myfirst');  // gives u child of all id "#myfirst"
sel = document.querySelector('.child'); // gives u child of all class ".class"
sel = document.querySelector('b');// gives u "b" all b tag in html
sel = document.querySelector('h1');// gives u heading of all html "h1"
sel = document.querySelector('div');// gives first div of an html "div" i.e div.container in our case
sel.style.color='green';
console.log(sel);
 */

//Multi Element  DOM  Selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');

//console.log(elems[0]); // gives you collection of all the class with child 

//console.log(elems[0].getElementsByClassName('child')); //will give all the child inside container

// console.log(elems[3]); // gives you class child having 3rd index i.e "Child 4"
elems=document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color='blue';
});
/* 
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    
} */