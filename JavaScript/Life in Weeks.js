function lifeInWeeks(age) {
        
        //Write your code here.
        var agesLeft= 90-age;
        var days=agesLeft *365;
        var weeks=agesLeft *52;
        var months=agesLeft *12;
        console.log("You have " + days+" days," +  weeks +" weeks, and " +  months+" months left." );
        
    }
    lifeInWeeks(12);