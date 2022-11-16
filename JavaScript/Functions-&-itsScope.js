console.log("Functions in JavaScript - Lecture 10 ");

/* 
    function greet(name , thank) It will Print  'Thanks a Lot' and by default thank="Thank You " we will write to make website look better, I we Pass the message as Parameter in function then this Thank You will Override this 

 */
/* // Function parameter Override  && return val 1
function greet(name , thank=" Thank You ") {
    console.log(`"Hello Good Morning ${name}, " "Greetings" "Allow me to introduce myself" "I hope you're doing well" ${thank } ! ` );
    return 1;
}
let name= 'SkillF';
let name2= 'Anuj';
greet(name);
greet(name2 , 'Thanks a Lot');

let val=greet(name2 ); 
console.log(val); //The return in function  will get store in here in val
 */
/*  // let msg return msg     
function greet(name , thank=" Thank You ") {
    let msg = (`"Hello Good Morning ${name}, " "Greetings" "Allow me to introduce myself" "I hope you're doing well" ${thank } ! ` );
    return msg;
}
let name= 'SkillF';
let name2= 'Anuj';
greet(name);
greet(name2 , 'Thanks a Lot');

let val=greet(name2 ); 
console.log(val); //The return in function  will get store in here in val
 */

/* //Keeping function inside variable
const myGreet = function(name , thank=" Thank You ") {
    let msg = (`"Hello Good Morning ${name}, " "Greetings" "Allow me to introduce myself" "I hope you're doing well" ${thank } ! ` );
    return msg;
}
let name= 'SkillF';
let name2= 'Anuj';


let val=myGreet(name  ); 
console.log(val);  // Return mssg inside the Function
 */

/* //Getting a function name or any parameter  called
const myObj={
    name: " Anuj ",
    game : function(){
        return " PUBG / BGMI ";
    }
}
console.log(myObj.game()); */

/* //ForEach -Function

arr=[' fruit ' , ' furniture ' , ' vegetable '];
arr.forEach(function(element , index , array){
    console.log(element , index );
}); */

/* var i=234;
console.log(i);
function ui(name)
{
    var i=9; //local
    console.log(i); //9

    return `'This is a ${name} ui ' `;
}
console.log(ui("Anuj") , i);//234 */

/* var i=234;
console.log(i);
function ui(name)
{
     i=9; //modify all i value
    console.log(i); //9

    return `'This is a ${name} ui ' `;
}
console.log(ui("Anuj") , i); //9 */

/* let i=234;
console.log(i);
function ui(name)
{
  let    i=9; //modify all i value
    console.log(i); //9

    return `'This is a ${name} ui ' `;
}
console.log(ui("Anuj") , i); //234 */

if(1){
    //let i=234; //error as let & const has block level scope
    var i = 234; //global i // It has function level Scope
    console.log(i);

}

console.log(i);
function ui(name) {
    let i = 9; //modify all i value
    console.log(i); //9

    return `'This is a ${name} ui ' `;
}
console.log(ui("Anuj"), i); //234



