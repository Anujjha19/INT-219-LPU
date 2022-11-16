
/* document.querySelector("button").addEventListener("click" , handleClick);
function handleClick(){
alert("I got clicked  ! ");
} */


/*   // adding EventListener to One Button
document.querySelector("button").addEventListener("click" , function (){
alert("I got clicked  ! ");
});
*/

// adding EventListener to All the Button
// var noOfDrumButton=document.querySelectorAll(".drum").length;

/* for(var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click" , function (){
    alert("I got clicked  ! ");
    });
}; */

//For Sounds

//Detecting Button Press

for(var i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
    //console.log(this);
    //console.log(this.innerHTML);
    //this.style.color="green";

    var buttonInnerHTML= this.innerHTML;
        
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });
};

//Detecting KeyBoard Press 

document.addEventListener("keypress" , function(event){

    //alert("key Pressed !");
    //console.log(event);
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "w":
            var crash =new Audio('DrumSounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kickBass =new Audio('DrumSounds/kick-bass.mp3');
            kickBass.play();
            break;

        case "s":
            var snare =new Audio('DrumSounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 =new Audio('DrumSounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 =new Audio('DrumSounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 =new Audio('DrumSounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 =new Audio('DrumSounds/tom-4.mp3');
            tom4.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 1000);
}