console.log('Variables')
// Variable in JS

// var , let , const - are the keywords
var name = 'anuj'
// var name =`Anuj "jha"`;
console.log(name)

var channel //name define

//channel=('LB CWH');  // value assign

// if we comment out the value means we only have initialize so it will show undefined

console.log(name, channel) // printing the name , value
var marks = 34

/* marks=10;
    here the value of marks has been change but 
    in const it do not gonna change
 */
console.log(name, channel, marks)
/* 
    -- Rules for creating JS variables
1. cannnot start with numbers .
2. can start with letter , numbers , underscore(_) or $ .
3.  variables are Case sensitive .

---Var is less use than const and more used is "let".
     */
var city = 'Punjab'
console.log(city)

const college = 'LPU'
// college='lpu'; It gives error as const we cannot change name

console.log(college);

/* 
make const to those variables where the name gonna be same everywhere in your code 

const place;
it will give error . So, whenever we make 'const' variable we need to assign it with some value.

 */


/* 
let has a block level scope, also const has same
var has a global level scope


*/
{
    let city='India';
    city= 'Jalandhar';
    //(if we comment out let part , then the "city"  of global part will override the block scope and it will take city as Punjab)
    console.log(city);
}
console.log(city);

//object , array , string , number are important Datatypes

const arr1=[12,23,12,53,5];
arr1.push(45);
/* 
So const basically is that , we cannot make same arr1 again - but we can delete or insert values in it
*/
console.log(arr1);

/* 

most common programming case-types -

1. camelCase - first letter in first word is small but when we take next word th first letter should be capital always.
(mostly used)

2. kebab-case - 

3. snake_case

4. PascalCase

*/
