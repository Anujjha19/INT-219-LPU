
//Create a variable that store the first letter

var name = prompt("What is Your Name? ");

// Capitalise the first letter

var firstChar= name.slice(0,1);

var UpperCaseFirst= firstChar.toUpperCase();

// Make sure all other letter after first letter is in lower case'

var restName= name.slice(1, name.length);

var restLowerCase = restName.toLowerCase();

var capitalisedName = UpperCaseFirst + restLowerCase;

// We use new modified version name to greet users using alert

alert(" Hello " + capitalisedName);
