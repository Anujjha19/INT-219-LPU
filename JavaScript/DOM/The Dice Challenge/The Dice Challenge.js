//For Dice 1
var randomNumber1= Math.floor(Math.random() * 6) +1; // 1-6

var randomDiceImage= "dice" + randomNumber1 +".png";
var randomImageSource= "DiceImages/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

//For Dice 2 

var randomNumber2= Math.floor(Math.random() * 6) +1;

var randomImageSource2= "DiceImages/dice"+randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩  Player1 Wins !";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML=" Player2 Wins !  🚩 ";
}
else{
    //randomNumber1 = randomNumber2
    document.querySelector("h1").innerHTML=" 🚩  DRAW ! 🚩 ";
}