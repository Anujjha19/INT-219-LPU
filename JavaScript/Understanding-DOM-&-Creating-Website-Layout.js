console.log("Understanding DOM  & Creating Website Layout");
let a=document; // structure of html
//Html Collection

/* 
a=document.all; //Got all the nodes of html
a=document.body; //It gives body part of html
a=document.forms; //It gives form part of html
a=document.forms[0]; //It gives 1st form  of html    */

/* // It gives error
a.forEach(function (element) {
    console.log(element);
}); */

/* Array.from(a).forEach(function (element) {
    console.log(element);
}); //This makes an array from the html Collection with the help of "from(a)" */

/* // a=document.links;  //Shows all the links i.e there in html
a=document.links[0];  //Shows the " Very " first link of html
a=document.links[0].href;  //It gives the href attribute of " Very " first link
 */
// Printing Images
a = Array.from(document.images);

a.forEach(function(element) {
    console.log(element)
});

// Printing Scripts
let b = Array.from(document.scripts);

b.forEach(function(element) {
    console.log(element)
});
console.log(a);