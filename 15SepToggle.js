
document.addEventListener("readystatechange" , event => {
    if(event.target.readyState === "complete"){
        console.log("readyState : complete");
        initApp();
    }
});
const initApp = () => {
    const view = document.querySelector("#view2");
    const div= view.querySelector("div");
    const h2= div.querySelector("h2");

view.addEventListener("click" , event => {
    //view.style,background =" green " 
    view.classList.toggle("purple"); // access the class
    view.classList.toggle("red");
} , false );

div.addEventListener("click" , event => {
    //event.stopPropagation();
    // div.style.backgroundColor="blue";
    div.classList.toggle("aqua");
    div.classList.toggle("black");
} , false);

h2.addEventListener("click" , event => {
    const myText=event.target.textContent;
    myText==="My 2nd view" ? (event.target.textContent = "clicked")
    : (event.target.textContent = "my 2nd view");

}, false);

const nav = document.querySelector("nav");
/* nav.addEventListener("mouseover" , event => {
    event.target.classList.add("height100");
} , false)


nav.addEventListener("mouseout" , event => {
    event.target.classList.add("height100");
} ); */

nav.addEventListener("click" , event => {
    nav.classList.toggle("height100");
} , false)



};
