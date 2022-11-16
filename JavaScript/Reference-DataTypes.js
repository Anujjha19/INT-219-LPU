//Objects
let animal ={
    name : " Lion " ,
    legs : 4      
};
console.log(animal);
console.log(animal.name);  //Dot Notation

let noOfLegs ="legs";
console.log(animal[noOfLegs]);   //Bracket Notation4

//Functions

function namasteWorld( name ) {
    console.log(" Namaste " + name);
}
namasteWorld( "Anuj ") ;


function addition(a,b){
    return a+b;
}
console.log(addition(5,5));