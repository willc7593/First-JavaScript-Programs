/* Assignment 7: Password Validator (By Will Croll, Block 8)

Welcome to the program. This is a program designed to read a user's password of choice and determine whether it meets certain requirements.
Based on the amount of requirements met, they will receive a rating, some which are secret.

KEY Program Elements used:
- comments
- variables
- arrays
- data types (Strings, numbers, booleans)
- functions
- parameters/arguments
- if/else statements
- arithmetic and comparison operators
- switch statements
- for loops/nested for loops
- .length
- .toUpperCase()/.toLowerCase()
- alert, prompt, confirm
- do/while loops
- string interpolation/concantenation
- \n
- console.log
*/




//Beginning of Program




	//Variable Declarations || Variables will be created and maybe defined

let userPassword; // This is where the user's inputted password is stored 
let passwordRating = 0; // This is the counter for the password's rating; the number will count up the better the password

let upperCase; // Will include the results of if: an uppercase letter is present
let lowerCase; // Will include the results of if: an lowercase letter is present
let longEnough; // Will include the results of if: the password is 8 characters
let hasSChar; // Will include the results of if: an special character is present

const specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "?", "/", ".", ":", ";"]; // An unchangable list (array) of special characters the user may use


	//Function Declarations || Here is where the different functions used are declared

function isPasswordValid(input) { // This function activates every function to check if the password meets the requirements, an will record each answer to the corresponding variable
	
	if(hasUpperCase(userPassword)) { // IF the hasUpperCase() function returns as true...
		upperCase = "- The password includes a capital letter."; //... this message will be recorded...
		passwordRating++; //... and the rating goes up
		
	}else { // IF it does not include an uppercase...
		upperCase = "! This password does not include a capital letter."; // ... this message will be recorded
	}//END OF if upperCase
	
	
	if(hasLowerCase(userPassword)) { // The next 3 blocks of code follow the exact same logic as the block previously; this block checks for lowercases...
		lowerCase = "- The password includes a lowercase letter.";
		passwordRating++;
		
	}else {
		lowerCase = "! This password does not include a lowercase letter.";
	}//END OF if lowerCase
	
	
	if(isLongEnough(userPassword)) { // This block checks if it is 8 characters long...
		longEnough = "- The password is 8 characters long.";
		passwordRating++;
		
	}else {
		longEnough = "! This password does not meet the 8 character limit.";
	}//END OF if longEnough
	
	if(hasSpecialChar(userPassword)) { // And this block checks for special characters
		hasSChar = "- The password includes a special character.";
		passwordRating++;
		
	}else {
		hasSChar = "! This password does not include a special character.";
	}//END OF if specialChar
	
	
	if(userPassword === "#WillIsVeryCool!") { // This is a secret input. IF the password is #WillIsVeryCool!...
		passwordRating++; // The password rating goes once to access the secret message...
		passwordRating++; // ...and another time to bypass the 8 character limit checker
	}//END OF if secret requirement
	
	
	if(userPassword === "#coolBro") { // This secret input checks for #coolBro
		passwordRating++; // The password rating goes up to access the secret message...
		passwordRating++; //...and another time to bypass #WillIsVeryCool! since it meets all the requirements
	}//END OF if super-secret requirement
	
}//END OF isPasswordValid()
function ratePassword() { // This function gives a rating to the password depending on all the requirements met
	
	switch(passwordRating) { // This switch statement checks if passwordRating meets any of the cases
		
		case 0: passwordRating = "Non-existent"; // If it is at 0, meaning the user didn't put in anything, it sets this rating
		break; // This terminates the computer from continuing to read the switch statement
		
		case 1: passwordRating =  "Poor"; // As the numbers get higher...
		break;
		
		case 2: passwordRating =  "Okay"; // ...so does the rating...
		break;
		
		case 3: passwordRating =  "Good"; // ...until...
		break;
		
		case 4: passwordRating =  "Great"; // ...the max amount of points granted to a regular passowrd is reached
		break;
		
		case 5: passwordRating = "Un-hackable!"; // If #WillIsVeryCool! was inputted, it's rating would be 6, and this message would be recorded
		break;
		
		case 6: passwordRating = "Very cool, bro"; // If #coolBro was inputted, it's rating would be 7, and this message would be recorded
		break;
	}//END OF switch statement
	
}//END OF ratePassword()

function hasUpperCase(input) { // This function checks for the uppercase letter

	for(var i = 0; i < input.length; i++) { // This for loop loops through every character of the password; i (the incrementor) will get bigger every loop
		
		if(input[i] === input[i].toUpperCase()) { // IF the current character is capital...
			return true; // It will return 'true', and the requirement is immediately met
		}//END OF if statement
		
	}//END OF for loop
	
}//END OF hasUpperCase
function hasLowerCase(input) { // This function checks for the lowercase letter
	
	for(var i = 0; i < input.length; i++) { // This for loop loops through every character of the password; i (the incrementor) will get bigger every loop
		
		if(input[i] === input[i].toLowerCase()) { // IF the current character is lowercase...
			return true; // It will return 'true', and the requirement is immediately met
		}//END OF if statement
		
	}//END OF for loop
	
}//END OF hasLowerCase
function isLongEnough(input) { // This function checks the character length for 8
	
	if(userPassword.length === 8) { // IF the password's length is exactly 8...
		return true; // It will return 'true', and the requirement is immediately met
	}//END OF if statement
	
}//END OF isLongEnough()
function hasSpecialChar(input) { // This function checks for the special character
	
	for(var i = 0; i < userPassword.length; i++) { // The outer for loop runs through every character of the password; i (the incrementor) gets bigger every loop
		
		for (var j = 0; j < userPassword.length; j++) { // The inner for loop runs through every special character in the specialChars array; j (the second incrementor) gets bigger every loop
			
			if(userPassword[i] === specialChars[j]) { // If the current character of the password equals the current character of the specialChars array...
				return true; // It will return 'true', and the requirement is immediately met
			}//END OF if statement
		
		}//END OF inner for loop
	
	}//END OF outer for loop
	
}//END OF hasSpecialChar() 




//Beginning of Main 

alert("Welcome to the Password Validator Program. This program is designed to read a password of your choosing and rate it based off certain requirements."); // This alert starts the program by welcoming the user and explaining the program
alert("Your password must meet the following requirements: \n\n - It must include at least one uppercase letter \n - It must include at least one lowercase letter \n - It must be exactly 8 characters long \n - It must include at least one of the following special characters: \n ~,  !,  @,  #,  $,  %,  ^,  &,  *,  _,  -,  +,  =,  ?,  /,  .,  :,  ;"); // This alert notifies the user of the specific requirements their password must meet


do{ // The 'do' activates the loop; if a loop is restarted, the program begins here again
passwordRating = 0; // This resets the value of the password rating as to not confuse the computer when the loop is restarted
	
	
	//User Interface || Here the user interacts with the program by inputting their choice

userPassword = prompt("Please enter the password you wish to create."); // Here the user records their desired password

isPasswordValid(); // This executes the entire calculation to determine whether or not the passowrd meets all the requirements
ratePassword(); // This executes the calculation of rating the password

	
	
	//Output || Where everything is recorded to the user

alert(`Your password has been scanned: \n\n ${upperCase} \n ${lowerCase} \n ${longEnough} \n ${hasSChar} \n\n Password rating: ${passwordRating}`); // Here, the requirements the password met/did not meet and rating are recorded to the user

	
//End of Main
}while(confirm("Do you want to try making a different password?")); // If the user wishes to verify a different password, they can restart the loop and do it again

	
alert("Thank you for using the Password Validator. Please consider using it again."); // If the user did not activate the loop again, the program bids them farewell
console.log("Your password: " + userPassword); // As a reminder, their password is recorded to the console...
console.log("Use it wisely!"); // ... and the interaction with the program ends
	
	
	
	
	
//End of Program





/* Some notes:
- The prompts can work in Repl.it when 'HTML,CSS,JS' is selected in '+new repl'
- There are two secret passwords: #WillIsVeryCool! and #coolBro; try them out!
- A list of the KEY syntax concepts can be found at the top 
*/