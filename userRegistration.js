const userInput = require('prompt-sync')();
let regexName = new RegExp("^[A-Z]{1}[A-Za-z]{2}");


function checkValidUserInput( userInput, regexPattern){
		if( regexName.test(userInput))
			console.log("Valid")
		else
			console.log("invalid")
}

let firstName = userInput("Enter First Name");
checkValidUserInput( firstName, regexName);

let lastName = userInput("Enter last name");
checkValidUserInput( lastName, regexName);


