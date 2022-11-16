// Scope is by default "Global"

//variable written in function or in { curly braces } is a block or local scope

var marks = 10;
var name= 'Anuj';
function sayName(){
    //var marks = 10; error as it is local variable
    console.log(name);
}
sayName();
console.log(marks);



//Global Scope
var x=100;
function first(){
    //local Scope #1
    var x=1;
    console.log(x);
    function childOfFirst(){
        //no var x here than it will take x=1
        var x=10;
        //Local Scope #2
        console.log(x);
    }
    childOfFirst();
}
first();

//Global Scope
function second(){
    //Local Scope #3
    console.log(x);
}
second();

//Block Scope - code written in block
//It is applicable with const and let keyword
//not used with var keyword

/* var y=10;
{
    var y=1;
    console.log(y); //1
} */

let y=10;
{
    let y=1;
    console.log(y); //1
}
console.log(y); //10


if(true){
    //this 'if' conditional block doesn't create a new scope
    // let foo='bar';  // Error 
    var foo ='bar';
}
console.log(foo);


//Lexical Scope
//child having its parent properties
//nested properties of earlier child and parents 

function Dada(){
    var name= 'Dada Ji ';
    // likes is not accessible here 
    function Papa(){
        console.log( name);
        //name is accessible here
        // likes is not accessible here
        function Beta(){
            //Innermost level of the scope chain
            // name is also accessible here
            var likes ='Coding';
            console.log(likes); 
        }
        // console.log(likes);  //Error as likes is only in a scope of Beta not outside that
        Beta();
    }
    Papa();
}
Dada();