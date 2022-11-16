//Loop
const scores = [22, 54, 76, 92, 43, 33];

//FOR LOOP
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

//FOR OF LOOP
for (score of scores) {
    console.log(score);
}

//FOR EACH LOOP
scores.forEach((score) => {
    console.log(score);
});

/* scores.forEach(function(score , index){
    console.log(name , index);
}) */

//FOR IN LOOP
for (i in scores) {
    console.log(scores[i]);
}

//WHILE LOOP
let i = 0;
while (i < scores.length) {
    console.log(scores[i]);
    i++;
}

//DO WHILE LOOP
let j = 0;
do {
    console.log(scores[j]);
    j++;
} while (j < scores.length);

/* //Continue 
let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
    continue;
    }
    n += i;
    console.log(n);
}   //1,3,7,12 
*/

/* //BREAK
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
        break;
    }
  } */

/* //LABEL
markLoop:
while (theMark) {
doSomething();
} */
