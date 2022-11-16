console.log("Children, Parent & Traversing the DOM in JavaScript");

let cont = document.querySelector('.no'); //first element of class no
cont = document.querySelector('.container');
/*   Our childNode takes space , comment  and new line as text , comment

console.log(cont.childNodes);
console.log(cont.children); // It will not accept takes , comments , new line , only shows the element
 */

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
/*  console.log(nodeName);
    console.log(nodeType);  
 */


/*   //Node Types 
1.Element
2.Attribute
3.Text Node
8. comment
9. Document
10.docType
 */

let container = document.querySelector('div.container');
/* console.log(container.childNodes);
console.log(container.children);
console.log(container.children[1].children);
console.log(container.children[1].children[0].children); */
/* 
console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.childElementCount); //Count of child element
 */

/* 
console.log(container.firstElementChild);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling); */
