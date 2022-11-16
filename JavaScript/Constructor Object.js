/* var houseKeeping1={
    yearsOfExperience:12,
    name:"Jane",
    cleaning:["bathroom" , "lobby" , "bedroom"],
};
houseKeeping1.name; */

//Constructor
function BellBoy( name, age , hasWorkPermit , yearsExperience,languages , cleaning){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.yearsExperience=yearsExperience;
    this.languages=languages;
    this.cleaning=cleaning;

    //methods
    this.moveLuggage= function() {
        alert("May I take your Luggage ?");
        pickUpSuitcase();
        move();
    }

    this.clean= function(){
        alert(" Cleaning in Process !!");
    }

};
function pickUpSuitcase() {
    alert( "Ok ! Taking your luggage .");
};
function move() {
    alert("Successfully Moved to your Place !!")
}

var bellBoy1= new BellBoy("Yimmy ", 21 , true , 4 , ["Hindi" , "English"] , ["bedroom" , "lobby" , "bathroom"]);

//bellBoy2.name ; --  calling object with its properties
//bellBoy2.clean(); -- calling method

//Function

function another(e){
    console.log("hi " + e);
};
another("Anuj");

function anotherAddEventListener(typeOfEvent , callback){
    //detect event code
    var eventThatHappened={
        eventType:"keypress",
        key:"p",
        duration: 2
    }

    if(eventThatHappened.eventType === typeOfEvent){ 
    callback(eventThatHappened);
}
}

anotherAddEventListener("keypress" , function(event){
    console.log(event);
});