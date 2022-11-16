
function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 !== 0) {
                console.log(year + " is not a Leap Year. ");
            }
            else {
                console.log(year + " is a Leap Year. ");
            }
        }
        else {
            console.log(year + " is a Leap Year. ");
        }
    }
    else {
        console.log(year + " is not a Leap Year. ");
        // return " is not a Leap Year. ";
    }
}
isLeap(2600);