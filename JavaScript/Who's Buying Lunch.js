
var names = ["anuj", "raj", "ritik", "yogesh", "ayush"];
function whosPaying(names) {

    var noOfPeople = names.length;
    var randomChose = Math.floor(Math.random() * noOfPeople);

    var personBuying = names[randomChose] + " is going to buy lunch today!";
    return personBuying;

    //console.log(noOfPeople);
    //console.log(randomChose);
}

whosPaying(names);


/* ------------------------------------------------------------------------ */

