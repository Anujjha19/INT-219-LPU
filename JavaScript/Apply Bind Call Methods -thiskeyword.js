
// JavaScript Function call()
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());  // This will return "John Doe":

// The JavaScript call() Method
const people = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const people1 = {
    firstName: "John",
    lastName: "Doe"
}
const people2 = {
    firstName: "Mary",
    lastName: "Doe"
}
people.fullName.call(people1); // This will return "John Doe":

//The call() Method with Arguments

const human = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const human1 = {
    firstName: "John",
    lastName: "Doe"
}
human.fullName.call(human1, "Oslo", "Norway"); //John Doe,Oslo,Norway

// JavaScript Function apply()
const humans = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const humans1 = {
    firstName: "Mary",
    lastName: "Doe"
}
humans.fullName.apply(humans1); // This will return "Mary Doe":

/*
The call() method takes arguments separately.

The apply() method takes arguments as an array. 
*/

//The apply() Method with Arguments
const newperson = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const newperson1 = {
    firstName: "John",
    lastName: "Doe"
}
newperson.fullName.apply(newperson1, ["Oslo", "Norway"]);

//JavaScript Function bind()

//With the bind() method, an object can borrow a method from another object.

const individual = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}
let fullName = individual.fullName.bind(member); //Hege Nilsen

/* 
Preserving this :-  Sometimes the bind() method has to be used to prevent loosing

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
    }
}
person.display(); // John Doe

When a function is used as a callback, this is lost.
Example
const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
    }
}
setTimeout(person.display, 3000); // undefined undefined 

*/
/* 
The bind() method solves this problem.
In the following example, the bind() method is used to bind person.display to person
This example will display the person name after 3 seconds:'

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
    }
}

let display = person.display.bind(person);
setTimeout(display, 3000);
 */