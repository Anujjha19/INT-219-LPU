function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    //var bmi= weight / (Math.pow(height ,2));

    return bmi;
}
console.log(bmiCalculator(68, 2.4));
//11.805555555555555



var bmi = bmiCalculator(65, 1.8);
console.log(Math.round(bmi)); //20





function bmiCalculator(weight, height) {
    return (Math.round((weight / (height * height))));
}
let val = bmiCalculator(65, 1.8);

if (val < 18.5) {
    console.log("Your BMI is " + val + ",so you are underweight");
} else {
    if (val >= 18.5 && val <= 24.9) {
        console.log("Your BMI is " + val + ",so you have a normal weight");
    } else {
        if (val > 24.9) {
            console.log("Your BMI is " + val + ",so you are overweight");
        }
    }
}