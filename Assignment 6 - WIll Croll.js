/* Assignment 6: Oceanic Translator (By Will Croll, Block 8)

Welcome to the program. This is a simple translation program that takes a sentence, checks it's vowels, and translates it into "Whale Talk", which it returns to the user

KEY Program Elements used:
- comments
- variables (let and const, var used for temporary variables in functions)
- arrays
- strings, numbers
- functions
- for loops/nested for loops
- arithmetic operators
- comparison operators
- if/else statements
- .push(), .join()
- alert, prompt, confirm
- do/while loops
- string concantenation
- .toUpperCase(), .toLowerCase()
*/



//Beginning of Program




	//Variable Declarations || Variables will be created and maybe defined

let input; // The user's message is recorded here
let resultArray = []; // All the vowels of the user's message are pushed into this array

const vowels = ['a', 'e', 'i', 'o', 'u']; // A list of vowels for the computer to refrence to


	//Function Declarations || Here is where the different functions used are declared

function checkVowels() { // This funciton checks the user's message in order to find the vowels
	
	for(var i = 0; i < input.length; i++) { // This starts a loop on every letter of the message
		
		//First step of the loop:
		for(var j = 0; j < vowels.length; j++) { // This is another loop inside the loop. For every letter of the larger loop... 
			if(input[i] === vowels[j]) { // ...this loop cycles through every vowel; if the current letter is a vowel... 
				resultArray.push(input[i]); // ...it's pushed into the resultArray.
			}//END OF if/else statement
		}//END OF inner for loop
		
		
		//Second step of the loop:
		if(input[i] === 'e') { // If the current letter is an 'e'...
			resultArray.push(input[i]); // ...a duplicate 'e' is pushed into the array.
		}//END OF if/else statement 1
		
		
		//Third step of the loop:
		if(input[i] === 'u') { // Same as above, if the current letter is a 'u'...
			resultArray.push(input[i]); // ...a duplicate u is pushed into the array.
		}//END OF if/else statement 2
		
	}//END OF outer for loop
	
}//END OF checkVowels()





//Beginning of Main 

alert("Welcome to the Whale Talk Program. This is an oceanic translator that will take your sentence and translate into the majestic language of Whale."); // To start the program, the program greets the user with an explanation of the program
alert("This program will take only the vowels from your inputted message and return them. E's and U's will be doubled as well."); // This tells the user how the program works

do{ // The 'do' activates the loop; if a loop is restarted, the program begins here again
resultArray = []; // If the loop was restarted, this wipes the previous array as to not confuse the program

	
	
	//User Interface || Here the user interacts with the program by inputting their choice

input = prompt("Please enter the messase you want translated.").toLowerCase(); // The user can input whatever kind of sentence they want here; .toLowerCase() turns the message all to lowercae to make sure every vowel can be read
checkVowels(); // This activates the checkVowels() function to find all the vowels



	//Output || Where everything is recorded to the user

if(resultArray != "") { // IF the array DOES NOT equal "" ("" would mean the user didn't write anything, or there were no vowels)...
	alert("Your translation is: " + "\"" + resultArray.join('').toUpperCase() + "\""); // ...then it means the array includes the vowels, and reports the translation; .join makes all the letters in the array one string, and .toUpperCase seems self explanatory

}else { // IF the above code read as false...
	alert("Whoops! There was an error in translating. Please try again."); // ...then this error message pops up
	
}//END OF if/else statement

	

	
//End of Main
}while (confirm("Do you want to make another translation?")); // If the user wishes to translate again, the confirm outputs 'true', and sends them to the very start of the program. This way, every variable is reset

alert("Thank you for using the Whale Talk Program. Please use it again sometime!"); // If the user chooses not to translate again, this message bids them farewell, and ends the program
	
	
	
//End of Program





/* Some notes:
- The prompts can work in Repl.it when 'HTML,CSS,JS' is selected in '+new repl'
- A list of the KEY syntax concepts can be found at the top 
*/