console.log("Learning For, While, Do-While Loop - Lecture 9");

/* let a=5;
console.log(a);
a+=1;
console.log(a);
a++;
let b=a;
console.log(b);
 */

/* There are 3 General Loops 
        for , while , do-while

        In d0-while it will print once for sure then it will check condition

        In while it will  first check the condition then it will start printing

*/

for(let i=0; i<5;i++)
{
    console.log(i);
}


let j=0;
while(j<5){
    console.log(j);
    j+=1;
}


let k=0;
do{
    
    if(k===3){
        break;
    }
    console.log(k+1);
    k+=1;

}while(k<5);
console.log('Break');
let l=0;
do{
    
    if(l===3){
        continue;
    }
    console.log(l+1);
    l+=1;

}while(l<5);
console.log('Continue');


let arr=[2,5,6,4,2,3];

/* for (let m = 0; m < arr.length; m++) {
    const element = arr[m];
    console.log(element);
} */


arr.forEach(function(element){
    console.log(element);
});

/* arr.forEach(function(element , index , array){
    console.log(element , index , array);
});
 */

let obj={
    name: "anuj jha",
    age : 22,
    type : "Learner",
    editor : "VS-Code"
}
for(let key in obj){
    // console.log(obj[key]);
    console.log(`The ${key} or object is &{obj[key]}`);
}
