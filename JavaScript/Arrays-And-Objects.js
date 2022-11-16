console.log('Welcome to JS array and Objects');

//Methods when we r applying it is getting change to main array  i.e The value in main array is getting alttered

let marks=[34,23,24,93,73, 25];
const fruits=['Orange', 'Apple' , 'Mango'];
const mixed=['str', 89 , [3,5]];

const arr =new Array(23,123,21,'Orange');

console.log(marks);

console.log(fruits);
console.log(fruits[0]);

console.log(mixed);

console.log(arr); //Method

console.log(arr.length)  // ans 4 i.e It is Property 

console.log(Array.isArray(arr)) // true i.e  whether the arr is the Array   or not
console.log(Array.isArray('dfs')) //  false i.e whether the Array is string or not

arr[0]='anuj';
console.log(arr); 

let arrElement=arr[0];
console.log('Element :', arrElement); //Element : anuj

let value= marks.indexOf(34);
console.log(value); //0




//Mutating Or Modifying  arrays

marks.push(35); // add single element to end of an array
// marks.push(35, 99 , 0 ); // add multiple element to end of an array
console.log(marks)  

marks.unshift(1009) // add  element to first of an array
console.log(marks)  

marks.pop()  // remove  last element from the erray
console.log(marks)  

marks.shift()  // remove  first element from the erray
console.log(marks)  

/* 
marks.splice(1,2) // start from index  1 and remove  2 element  from array
console.log(marks) 
  */

marks.splice(2,3)// start from index  2 and remove  3 element  from array

console.log(marks) 

marks.reverse() // reverse the array
console.log(marks);

/* 
const marks;  to concate let marks;   isn't possible

we cannot change marks if we use "const" but with the help of "method" we can change, modify our marks

*/
let marks2=[1,2,3,7];
console.log(marks2);

marks =marks.concat(marks2); // arr of marks2 get merge with arr of marks at end
console.log(marks);

//Object
//In object we can put string, boolean , arrays all we can keep
let myobj={
    name:'Anuj',
    'college' : 'LPU',
    surname:'jha',
    isDoing: true,
    marks: [10,9,8,7]

}
console.log(myobj)

console.log(myobj['college']) // 1st way to access the name
console.log(myobj.name)  // 2nd way to access the name

console.log(myobj.surname)
console.log(myobj.isDoing)
console.log(myobj.marks)

/* 

array  -  when to store elements  i.e  anuj , ritik 
object - key value store krna hai   i.e name - anuj

*/