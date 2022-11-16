console.log('This is If else Condition & Switches - Lecture 8');

const age=39;
// const age='39';
if(age==19){
    console.log('Age is 19');
}
else if(age==65){
    console.log('Age is 65');
}
else{
    console.log('Age is not  19');
}
/* 
in case of "string " too it will give right answer as " == " checks for only value not its types\

" === " checks for both value and its types

" != " as if it get one condition true so it will not check further condition

" !== "  either value or its types are not matching - it will print its statement


if we use multiple  "if"  then it will check all the condition ahead but 

if we use  "else if"  then after checking that condition it will break
*/

/*
// const vari =34;



if(vari){
    console.log('Vari is Defined'); //It will give error as vari is not defined
} */

//To check whether the variable is defined or not 

//const vari =34;
if(typeof vari !== 'undefined'){
    console.log('Vari is defined');
}
else{
    console.log('Vari is not defined');
}
const doesDrive=true;

if(doesDrive){

    // if(doesDrive && age >18){ Both Condition True
    // if(doesDrive ||  age >18){  One of the Condition True

    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}
/* 
let room1 = 23;
let room2 = 'Sam';
let stu = true;

if((room1 == 23 || room2 == 'Sam')&& stu ){
    console.log('Printed all terms')
}
else{
    console.log('Not Printed');
} */


//Ternary Operator
console.log(age ==45? 'Age is 45 ' : 'Age is not 45');

//Switch Case

//If we do not use "break" , then condition getting true will print and after that all other console will get print 

switch (age) {
    case 18:
        console.log("Age is 18");
        
        break;
    case 28:
        console.log("Age is 28");
        
        break;
    case 39:
        console.log("Age is 39");
        
        break;

    default:
        console.log("Age is not in Data")
        break;
}
