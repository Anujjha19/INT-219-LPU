/* const view =document.querySelector('#view2');
console.log(view);
const div= view.querySelector("div");
const h2= div.querySelector("h2");

const doSomething=() => { 
    alert("oing Something");
};

h2.addEventListener("click" , doSomething);
h2.removeEventListener("click " , doSomething , false);

h2.addEventListener("click" , (event) =>{
console.log(event.target);
event.target .textContent = "Clicked";
}); */
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
        view.style.backgroundColor = "purple"
    } , false );
    
    div.addEventListener("click" , event => {
        view.style.backgroundColor = "blue"
    } , false );
    
    h2.addEventListener("click" , event => {
        // h2.style.backgroundColor = "black";
        event.target.textContent = "Clicked "
    } , false );
     
} 

/* view.addEventListener("click" , event => {
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

}, false); }*/
