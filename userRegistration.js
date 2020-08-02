const userInput = require('prompt-sync')();
let regex = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
const firstName = userInput("Enter first Name -  ");

if(regex.test(firstName))
	console.log("Valid");
else
	console.log("Invalid");


