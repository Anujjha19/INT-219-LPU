/* const course ={
    lecture: 10,
    section: 3,
    title: "JavaScript",

    notes:{
        introduction: "Welcome to Lecture 20 Video no 44"
    },
    enroll(){
        console.log("You are successfully enrolled");
    }

} */

/* function enroll(){
    console.log("You are successfully enrolled");
} */
/* 
course.enroll();
console.log(course);

course.price =999; */

//Factory Function

function createCourse(title){ //CamelCase
    return{
        
        title: title,
        enroll(){
            console.log("You are successfully enrolled");
        }
    }
}
const newCourse = createCourse("JavaScript");
newCourse.enroll();
console.log(newCourse);

//Constructor

function Course(title){ //PascalCase
    this.title =this.title,
    this.enroll=function(){
    console.log("You are successfully enrolled");
    }
}
// new keyword point this keyword to empty object and the new keyword automatically gives return
//const course= new Course("JavaScript");
//course.enroll();


//Delete keyword
/* delete course.title;
console.log(course.title); */

/* course.checkEnrollment= function(){
    console.log(" 30 student are enrolled");
}
course.enroll();
console.log(course);  */

const course = new Course("JavaScript");
console.log(course.constructor);
console.log(newCourse.constructor);

/* 
const course = {  //Externally we write this
    {
        
        title: title,
        enroll(){
            console.log("You are successfully enrolled");
        }
    }
}
const course= new Object {  //Internally Js write this
        title: title,
        enroll(){
            console.log("You are successfully enrolled");
        }
    }
 */

const Course_1 =new Function('title', `{
    this.title =this.title,
    this.enroll=function(){
    console.log("You are successfully enrolled");
    }
}
`);
const course_2 = new Course_1('JavaScript');
course_2.enroll();


//Primitive Data Type

let number=10;

let number_2= number; //Pass By Value
number=15;  // Here Both value will not chane due to pass by value
console.log(number);
console.log(number_2);

//Refernence Data Type
let obj= { number :10};

let obj2 = obj;  //Pass By Reference
obj.number =20;  // Here Both value will get chane due to pass by reference
console.log(obj);
console.log(obj2);


const course_3={
    title: "JavaScript",
        enroll(){
            console.log("You are successfully enrolled");
        }
}

/*   //  WAY 1 
const course_4 = { ...course_3};
console.log(course_3);
console.log(course_4);

course_3.title ="C++";
console.log(course_3);
console.log(course_4); */

/*    //  WAY 2
const course_5 =Object.assign({}, course_3);
console.log(course_5); */


    //  WAY 3

/* for(let key in course_3){
    console.log(key, course_3[key]);
} */

/* for(let key of Object.keys(course_3)){
    console.log(key, course_3[key]);
} */

const course_5 ={}
for(let key of Object.keys(course_3)){
    course_5[key]=course_3[key];
}
console.log(course_5)

