const userInput = require('prompt-sync')();
let regexName = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
let mobilePattern = new RegExp("^[0-9][0-9] [0-9]{10}$");
let passwordPattern = new RegExp("[a-zA-Z0-9@_$#%]{8,}$");

function checkValidUserInput( userInput, regexPattern){
		if( regexPattern.test(userInput))
			console.log("Valid")
		else
			console.log("invalid")
}

let firstName = userInput("Enter First Name  ");
checkValidUserInput( firstName, regexName);

let lastName = userInput("Enter last name  ");
checkValidUserInput( lastName, regexName);

let email = userInput("Enter email  ");
checkValidUserInput( email, emailPattern);

let phoneNumber  = userInput("Enter mobile with country code");
checkValidUserInput(phoneNumber,  mobilePattern);

let password = userInput("Enter password with min 8 character");
checkValidUserInput(password, passwordPattern);

