function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function modulo(a,b){
    return a%b;
}

function calculator( a, b , operator){
    return operator(a,b);
}

calculator(4,5, multiply);