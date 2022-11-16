// document.addEventListener("DocumentContentLoaded" ,function(){};

let namasteButton = document.querySelector('button');
namasteButton.addEventListener('click' , inputMsg);


/*
namasteButton.addEventListener('click' , showMsg);
function showMsg(){
    alert("Namaste World ! - Anuj ");
} */
function inputMsg(){
    let name= prompt('Enter Name OF Student : ');
    namasteButton.textContent='Roll N0. 1: ' + name ;
} 