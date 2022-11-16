/* //Print no 1 to 100
var points = new Array(100);
        var label = points.length;//100
        for (var i = 0; i < label; i++) {
            console.log(points[i]);
        }
 */

var noUpto100 = [];
var addNo = 1;

function fizzBuzzGame() {

    while (addNo <= 100) {
        if (addNo % 3 === 0 && addNo % 5 === 0) {
            noUpto100.push("FizzBuzz");
        }
        else if (addNo % 3 === 0) {
            noUpto100.push("Fizz");

        }
        else if (addNo % 5 === 0) {
            noUpto100.push("Buzz");
        }
        else if (addNo % 3 === 0 && addNo % 5 === 0) {
            noUpto100.push("FizzBuzz");
        }
        else {
            noUpto100.push(addNo);
        }
        addNo++;

    } 
    console.log(noUpto100);
}
fizzBuzzGame();
/* ---------------------------------------------------------------------- */

var noUpto100 = [];
var addNo = 1;

function fizzBuzzGame() {
    if (addNo % 3 === 0 && addNo % 5 === 0) {
        noUpto100.push("FizzBuzz");
    }
    else if (addNo % 3 === 0) {
        noUpto100.push("Fizz");

    }
    else if (addNo % 5 === 0) {
        noUpto100.push("Buzz");
    }
    else if (addNo % 3 === 0 && addNo % 5 === 0) {
        noUpto100.push("FizzBuzz");
    }
    else {
        noUpto100.push(addNo);
    }
    addNo++;
    console.log(noUpto100);

}

fizzBuzzGame();
/* 
------------------------------------------------------

 */



var noUpto100 = [];


function fizzBuzzGame() {

    for ( var addNo = 100; addNo< 101 ;addNo--) {
        if (addNo % 3 === 0 && addNo % 5 === 0) {
            noUpto100.push("FizzBuzz");
        }
        else if (addNo % 3 === 0) {
            noUpto100.push("Fizz");

        }
        else if (addNo % 5 === 0) {
            noUpto100.push("Buzz");
        }
        else if (addNo % 3 === 0 && addNo % 5 === 0) {
            noUpto100.push("FizzBuzz");
        }
        else {
            noUpto100.push(addNo);
        }
        

    } 
    console.log(noUpto100);
}
