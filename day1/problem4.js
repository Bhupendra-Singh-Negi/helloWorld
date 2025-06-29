// Problem 4: Arrays
// You're organizing a party and want to keep track of the guest list. Create an array called "guestList" and add the names of at least five guests. Then, write a program that checks if a given name is on the guest list. If the name is found, display "Welcome to the party, [name]!"; otherwise, display "Sorry, you're not on the guest list."
var prompt = require('prompt-sync')();
const guestList = ['alice', 'bob', 'charlie', 'diana', 'ethan'];
const nameToCheck = prompt("Enter a name to check if they are on the guest list: ").trim().toLowerCase();
if (guestList.includes(nameToCheck)) {
    console.log(`Welcome to the party, ${nameToCheck}!`);
}
else{
    console.log("Sorry, you're not on the guest list.");
}