// A programmer wife tell him : "While u r at the store, get solme milk."


var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


/* var noOfBottles=99;

while(noOfBottles >=0){
    var bottledWord= "bootles";
    if(noOfBottles ===1){
        bottledWord="bottle";
    }
    console.log(noOfBottles + " " + bottledWord + " of beer on the wall ," );
    console.log(noOfBottles + " " + bottledWord +" of beer , ");
    console.log("Take 1 down , pass it around ,");
    noOfBottles--;
    console.log(noOfBottles + " " + bottledWord + " of beer on the wall " );

} */