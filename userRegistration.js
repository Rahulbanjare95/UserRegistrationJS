const userInput = require('prompt-sync')();
let regexName = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");

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


