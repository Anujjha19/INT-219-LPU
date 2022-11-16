

//JQuery Events

$("#p1").mouseup(function(){
    alert("Mouse up Over p1 !");
});

$("#p1").hover(function(){
    alert("You entered p1 !");
},
function(){
    alert("Bye! You now leave p1 !");
});
$("input").focus(function(){
    $(this).css("background-color" , "red");
});
$(input).blur(function(){
    $(this).css("background-color" , "white");
})