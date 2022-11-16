const num = [1, 2, 3, 5, 7, 9, 6];
console.log(num[num.length - 1]);

/* const num= new Array(1,2,3,5,7,9,6);
console.log(num[num.length-1]); */

//INCLUDES
const names = ['Aman', 'Anuj ', 'Ritik'];
console.log(names.includes('Aman'));


let channels = [{
    name: 'Apna College',
    subscriber: 10000
}, {
    name: 'Apni Kaksha',
    subscriber: 20000
}, {
    name: 'aman dhattarwal',
    subscriber: 50000
}];

//FIND

/* console.log(channels.includes({
    name:'Apna College',
    subscriber: 10000
})) 
Error because inludes we use only for primitive data types
for refernce data types  we use "find"
*/
console.log(channels.find(function (element) {
    return element.subscriber === 50000;
}))
console.log(channels.find(function (element) {
    return element.name === 'Apni Kaksha';
}))

//If not Present  - Undefined
console.log(channels.find(function (element) {
    return element.name === 'Apni Zayka';
}))

//Arrow Function
console.log(channels.find((element) => {
    return element.subscriber === 10000;
}))  //Normal Syntax

//If one argument we can remove braces  as well as return keyword too  
//[2 argument means  ( element  , index )]
console.log(channels.find(element => element.subscriber === 10000
))

//Concate Method
let names1 = ['Sharma', 'Jha ', 'Singh'];
let names2 = ['Aman', 'Anuj ', 'Ritik'];

console.log(names1.concat('Yash', 'Suraj'));
console.log(names1.concat(names2));

//Slice Method;
let names3 = ['Sharma', 'Jha ', 'Singh', 'Aman', 'Anuj ', 'Ritik', 'Manish'];
console.log(names3.slice(3, 5)); // [All element before 3 and after 5  get deleted]
//console.log(names3.slice(3)); // [All element before index3 will get deleted ]

//Spread Operators  == adding two arrays
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

let arr3 = [...arr1, ...arr2];
//let arr3 =[ ...["Cecilie", "Lone"], ...["Emil", "Tobias", "Linus"]];  //Other Way

console.log(arr3);

//Sort 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());


//Join
let student = ['A', 'N', 'U', 'J'];
// console.log(student.join()); //A , N , U , J
// console.log(student.join(''));  //ANUJ ''this helps to remove the commas
// console.log(student.join('-'));  //A-N-U-J'-'this helps to add (-) or q=any symbol betweeen the letter

//Split
student = student.join('-');
//console.log(student.split());  // ['A-N-U-J']
console.log(student.split('-'));  // ['A', 'N', 'U', 'J']


//FILTER method

/* The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. */

let cities = [
    { name: 'Kolkata ', population: 1500000 },
    { name: 'Jaipur ', population: 100000 },
    { name: 'Mumbai ', population: 130000 },
    { name: 'Chennai ', population: 1800000 },
    { name: 'Lucknow ', population: 2000000 },
];

console.log(cities.filter(city => city.population > 130000));


//MAP method 

/* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

operation we perform will return the value into another arrays

*/

console.log(cities.map(city => city.population * 2));
