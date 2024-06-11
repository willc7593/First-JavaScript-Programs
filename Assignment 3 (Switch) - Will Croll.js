/* Assignment 3: Magic Crystal Ball (By Will Croll, Block 8)

Welcome. This program is designed to tell the future by answering the users own questions.
It takes the question of a user, and asigns a random answer to "tell their fortune".

KEY Program Elements used:
- variables (var, let)
- prompt
- Math.random, Math.ceil
- switch statements
- Concantenation
- Comaprisons
- console.log
*/



//Beginning of Program




	//Variable Declarations || Where variables are stated, not yet defined
var userQuestion; // A user's question string is assigned in this variable
var randomNumber; // Where the random number is assigned
let crystalBall; // The variable for the computers fortune message


		

//Beginning of Main 

	

	
	//User Interface || Where user input is recorded
userQuestion = prompt('What would you like to ask the Magic Crystal Ball? (Must be a Yes or No question)'); // Here, users can type their question



	//Calculations || Random math and variable assgining is done here
randomNumber = Math.ceil(Math.random() * 10); //A random number between 0 and 10 is chosen, and rounded up

switch (randomNumber) { // The switch calls upon the randomNumber variable...

case 0: // ...and for every different case...
crystalBall = "Yes."; // ...is a different outcome
break; // Break terminates the command

case 1: // For every case from 0 to 10 is  a different outcome
crystalBall = "No.";
break;

case 2:
crystalBall = "Try again.";
break;

case 3: 
crystalBall = "It is not certain.";
break;

case 4:
crystalBall = "Cannot predict now.";
break;

case 5:
crystalBall = "The answer will come soon.";
break;

case 6:
crystalBall = "Maybe...";
break;

case 7:
crystalBall = "It is certain.";
break;

case 8:
crystalBall = "It is decidedly not.";
break;

case 9:
crystalBall = "Outlook not so good.";
break;

case 10:
crystalBall = "Signs point to yes.";
break;

default:
crystalBall ="Uh... try again.";
break;
} //END OF random response assigner (switch version)



	//Output || Where all console outputs are computed
console.log("You asked: " + userQuestion); // Here, the computer reminds you what answer you asked so you won't forget
console.log() // Blank space for nice formatting
console.log("The Magic Crystal Ball says: " + crystalBall); // And finally, your question is answered
console.log()
console.log("Thank you for asking the Magic Crystal Ball."); // With this final output, the interaction is ended



	
	
//End of Main
	
	
	
	
//End of program




/* Some notes:
- Because of the nature of the computer assigned responses, user questons must be yes ir no questions
- You can still ask any kind of question, but the aznswer you may get may be immersion breaking
- With many radndom outputs, this program can be used multiple times to see all outcomes
- The other version of this program uses if...else statements and Math.floor for the same outcome
- A list of KEY syntax elements can be found at the top
*/

