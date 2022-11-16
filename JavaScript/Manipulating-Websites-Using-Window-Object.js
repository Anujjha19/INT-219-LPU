console.log(" Manipulating Websites Using JS Window Object L-11 ");

//Window object is global and has global scope in JS . So, inspite of writing " a=window.anything " we can simply write " a=anything "

// let a = window;
let a= window.document; //it gives document window and which is a tree like structure

//window.alert('Hello , Good Morning');
//alert('Hello , Good Morning');

// a = prompt('This will Destroy'); //It gives you Prompt , And in this whatever you write it  get stored in " variable "

// a=confirm('Are you sure , you wanted to delete this ! '); //It assigns a boolean value  ok= true || cancel =false

a=window.innerHeight; //it gives height of window , & if we resize the window the height get increases / decreases accordingly 
//a=innerHeight;

a=window.innerWidth; //it gives width of window , & if we resize the window the width get increases / decreases accordingly 
//a=innerWidth;

a=scrollX;  //How much you have scroll in x-axis  - bydefault 0
a=scrollY;  //How much you have scroll in y-axis  - bydefault 0

a=location; //gives location
/* 
a=location.reload();  //Page gets reload
a=location.href;      // Gives URL of the page
a=location.href =    '//google.com';
a=location.toString(); //It gives location as string in console 

 */

a=history; //Prints History
a=history.go(-1); //takes you where you were before i.e 1 step back
a=history.go(1); //takes you next history i.e 1 step front if we have move bac early

console.log(a);
