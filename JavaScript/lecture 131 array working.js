
var stNames = ["anuj", "ritik", "ayush"];
console.log(stNames);
console.log(stNames.length);
console.log(stNames[0]);

console.log(stNames.includes("anuj"));

var find = prompt("Write your name? ");

if (stNames.includes(find)) {
    alert(" Student is Present");
}
else {
    alert(" Student is Not Present");
}