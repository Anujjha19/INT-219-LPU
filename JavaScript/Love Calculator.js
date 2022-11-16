
prompt("what is Boy name? ");
prompt("what is Girl name? ");

var loveScore = Math.random() * 100;
loveScore = (Math.floor(loveScore) + 1);
console.log(loveScore);
alert("Our LoveScore is : " + loveScore + " %.");


/* ------------------------------------------------------ */

/* 
var loveScore= Math.random() *100 ;
loveScore=(Math.floor(loveScore) + 1);
if(loveScore ===100){
    alert("Our LoveScore is : "+ loveScore + " %." + " You Both Looks sexy AF" ); 
}
else{
    alert("Our LoveScore is : "+ loveScore + " %."); 
}
 */

if (loveScore > 70) {
    alert("Our LoveScore is : " + loveScore + " %." + " You Both Looks sexy AF");
}
else {
    alert("Our LoveScore is : " + loveScore + " %.");
}

/* ------------------------------------------------------ */

var loveScore = Math.random() * 100;
loveScore = (Math.floor(loveScore) + 1);
if (loveScore > 80) {
    alert(loveScore + " % . Jod couple");
}
if (loveScore > 50 && loveScore <= 80) {
    alert(loveScore + " % . Op couple");
}
if (loveScore > 30 && loveScore <= 50) {
    alert(loveScore + " % . Improving couple");
}
if (loveScore <= 10) {
    alert(loveScore + " % . Couple for namesake");
}

