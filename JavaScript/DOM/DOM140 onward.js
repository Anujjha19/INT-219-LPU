/* // Lecture 140 - 
document.querySelector("h1").innerHTML;
document.querySelector("h2").innerHTML= " Continue To Learn !" ;

*/


/* 
document;
document.firstElementChild;
document.firstElementChild.firstElementChild;//Head

document.firstElementChild.lastElementChild;//Body
document.firstElementChild.lastElementChild.firstElementChild;//H1


//Changing h1
var newH1 = document.firstElementChild.lastElementChild.firstElementChild;
newH1.innerHTML = "  Good  Bye  !  ";
newH1.style.color = "red";



document.querySelector("input").click();


document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angela"
 */

//Selecting HTML element using js


document.getElementsByTagName("li");
// HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByTagName("li")[2].style.color = "red";
//'red'

document.getElementsByTagName("li").length;
//3

document.getElementsByClassName("list");
// HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByClassName("btn");
// HTMLCollection [button.btn]

document.getElementById("title");
// <h1 id="title">​Hello​</h1>​

document.getElementById("title").innerHTML = "Anuj";
// 'Anuj'


document.querySelector("title");
//<title>DOM No 140 onwards​</title>​
document.querySelector("h1");
//<h1 id="title"></h1>Anuj</h1>
document.querySelector("#title");
//<h1 id="title">​Anuj​</h1>​
document.querySelector(".btn");
// <button class="btn">Click Me</button>

//queryselector -PesudoSelector
document.querySelector("li a");
// <a href=​"https./​/​www.google.com">​ Google​</a>​
document.querySelector("a");
// <a href=​"https./​/​www.google.com">​ Old Google​</a>​


document.querySelector("li.item");
// <li class=​"item">​::marker​<a href=​"https./​/​www.google.com">​ Google​</a>​</li>​

document.querySelector("#list1 a");
// <a href=​"https./​/​www.google.com">​ Google​</a>​

document.querySelector("#list1 .item ");
//Gives only first list
// <li class=​"item">​::marker​<a href=​"https./​/​www.google.com">​ Google​</a>​</li>​document.querySelectorAll("#list1 .item ");

document.querySelectorAll("#list1 .item ");
//With the help of "All" , now we get all the least
// NodeList(3) [li.item, li.item, li.item]
// 0: li.item
// 1: li.item
// 2: li.item
// length: 3
// [[Prototype]]: NodeList



//Alternating CSS properties

document.querySelector("h1").style.color="green";
//'green'
document.querySelector("h1").style.fontSize="2rem";
//'5rem'
document.querySelector("h1").style.padding="3%";
//'30%'
document.querySelector(".btn").style.backgroundColor="yellow";
//'yellow'


//

document.querySelector("button").classList;
//DOMTokenList ['btn', value: 'btn']
document.querySelector("button").classList.add("invisible");
//

document.querySelector("button").classList;
// DOMTokenList(2) ['btn', 'invisible', value: 'btn invisible']
// 0:"btn"
// 1:"invisible"
// length:2
// value : "btn invisible"
// [[Prototype]] :DOMTokenList

document.querySelector("button").classList;
//DOMTokenList(2) ['btn', 'invisible', value: 'btn invisible']
document.querySelector("button").classList.remove("invisible");
//undefined
document.querySelector("button").classList;
//DOMTokenList ['btn', value: 'btn']


//Manipulating and Changing Styles of HTML Elements with Javascrip

document.querySelector("button").classList.toggle("invisible");
//true
document.querySelector("button").classList.toggle("invisible");
//false
document.querySelector("button").classList.toggle("invisible");
//true
document.querySelector("button").classList.toggle("invisible");
//false

// adding class to h2
document.querySelector("h2").classList.add("htwo");
//undefined
document.querySelector(".htwo").style.fontSize= "2rem";
//'2rem'

//Text Manipulatioon And Text Content

document.getElementById("title").innerHTML="Anuj Jha";
//'Anuj Jha'

document.getElementById("title").textContent=`Anuj "FrOst"Jha`;
//'Anuj "FrOst"Jha'

document.querySelector("h2").innerHTML= "<em> Let's Go !</em>";
//"<em> Let's Go !</em>"


//Manipulating HTML element Attributes

document.querySelector("a").attributes;
//NamedNodeMap {0: href, href: href, length: 1}0: hrefhref: hreflength: 1[[Prototype]]: NamedNodeMap
document.querySelector("a").getAttribute("href");
//'https.//www.google.com'
document.querySelector("a").setAttribute("href", "https://www.bing.com");
//undefined
document.querySelector("a").getAttribute("href"); //Link has been changed
//'https://www.bing.com'