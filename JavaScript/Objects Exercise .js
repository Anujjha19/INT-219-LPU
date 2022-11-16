
//Objects Exercises

//Object Created
const product={
    itemname: "iwatch",
    price: 15000,
    discount : 25,
    itemCode : "#iw-15K"
}
console.log(product);

//Factory Function Created
function createProduct_1(name , price , discount , itemCode){
    return {
    itemname: name,
    price: price,
    discount : discount,
    itemCode : itemCode
    }
}
const oldProduct = createProduct_1("Iphone" , 139999 , 10 , "#ip-139K");
console.log(oldProduct);

//Constructor Function

function createProduct_2(name , price , discount , itemCode){
    this.itemname=name;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;

    this.discountValue= function(){
        return ((price * discount )/100);
    }
}
const newProduct =new  createProduct_2("Mac" , 150000 , 5 , "#mac-150K");
console.log(newProduct);
console.log( newProduct.discountValue());
console.log(newProduct.price- newProduct.discountValue())


// Objects Exercises 54/58

//Finding area of square
let square={
    side: 5,
    get area(){
        //return this.side * this.side;
        return  this.side ** 2;
    }
}
square.side=10;
console.log(square.area);

//Create a join Function
function stringConcat(separator , ...strings){
    let returnVal='';
    strings.forEach((string , i) => {
        if(i == strings.length -1){ 
        returnVal += string;
        }else{
        returnVal += string + separator;
        }
    })
    return returnVal;
}
console.log(stringConcat( '+' , ' this ' , ' is ' , ' invalid '));

// takeout first 3 element of an array and rest all element into other array 

/* //Without de structuring
let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
let first = arr[0];
let second = arr[1];
let third = arr[2];
let other = arr.slice(3); */

//With the help of de structure
let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
let[ first , second , third , ...other]=[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

console.log(first);
console.log(second);
console.log(third);
console.log(other);

//Matchstick Houses
// if 1 house then 5 matchstick
// if 2 house then 11 matchstick
/* 
function matchStickHouses(step){
    if(step===0){
        return 0;
    }
    else{
        return (step * 6) - (step -1);
    }
} */
function matchStickHouses(house){
    if(house <= 0){
        return 0;
    }
    else{ 
    return house * 6 - house + 1;
    }
}
console.log(matchStickHouses(0));
console.log(matchStickHouses(1));
console.log(matchStickHouses(2));
console.log(matchStickHouses(4));
console.log(matchStickHouses(87));