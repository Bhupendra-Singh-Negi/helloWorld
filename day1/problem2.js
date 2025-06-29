var prompt=require('prompt-sync')();

let length=prompt("Enter the length of the rectangle: ");
let width=prompt("Enter the width of the rectangle: ");

function calculateArea(length, width) {
    return length * width;
}

console.log("The area of the rectangle is: " + calculateArea(length, width));
length++;
width++;
console.log("The area of the rectangle is: " + calculateArea(length, width));