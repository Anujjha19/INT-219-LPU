/* function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    }

getMilk(); */

function getMilk(bottles) {
    alert("leaveHouse");
    alert("moveRight");
    alert("moveRight");
    alert("moveUp");
    alert("moveUp");
    alert("moveUp");
    alert("moveUp");
    alert("moveRight");
    alert("moveRight");
    alert("buy " + bottles + "bottles of Milk ")
    alert("moveLeft");
    alert("moveLeft");
    alert("moveDown");
    alert("moveDown");
    alert("moveDown");
    alert("moveDown");
    alert("moveLeft");
    alert("moveLeft");
    alert("enterHouse");

}
getMilk(2);
/* function costMilk(bottles){
    var cost= bottles * 1.5;

}
costMilk(2); */

//---------------------------------------------------
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var noOfBottles = Math.floor(money / 1.5);
    console.log("buy " + noOfBottles + "bottles of Milk ")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");


}
getMilk(5);


//---------------------------------------------------




function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var noOfBottles = Math.floor(money / 1.5);
    console.log("buy " + noOfBottles + "bottles of Milk ")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5;
}
var change = getMilk(4);
console.log(change);


//---------------------------------------------------


function getMilk(money, costPerBottles) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, costPerBottles) + "bottles of Milk ")

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, costPerBottles);
}
function calcBottles(startingMoney, costPerBottles) {
    var noOfBottles = Math.floor(startingMoney / costPerBottles);

    return noOfBottles;
}

function calcChange(startingAmount, costPerBottles) {
    var change = startingAmount % costPerBottles;
    return change;
}

console.log(" Hello Master, here is your  " + getMilk(5, 2.5) + " change.");
