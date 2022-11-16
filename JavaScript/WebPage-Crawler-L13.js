/* let a = document.scripts;
let b = "text";   //any string
Array.from(a).forEach((element) => {
    if ((element.src).includes(b))
        console.log(element.src)
}) */

let a = document.links;

Array.from(a).forEach(function (element) {
    if (element.href.includes("javascript")) {
        console.log(element.href);
    }
}
);
