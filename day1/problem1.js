var prompt = require('prompt-sync')();

const age=prompt("Enter a number: ");

if (age<18){
      console.log("You are not old enough to vote.");
}
else{
      console.log("You are old enough to vote.");
}
