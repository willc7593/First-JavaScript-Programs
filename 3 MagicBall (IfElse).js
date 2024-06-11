/* Assignment 3: Magic Crystal Ball (By Will Croll, Block 8)

Welcome. This program is designed to tell the future by answering the users own questions.
It takes the question of a user, and asigns a random answer to "tell their fortune".

KEY Program Elements used:
- variables (var, let)
- prompt
- Math.random, Math.floor
- if...else statements
- Concantenation
- Comaprisons
- console.log
*/



//Beginning of Program




	//Variable Declarations || Where variables are stated, not yet defined
var userQuestion; // A user's question string is assigned in this variable
var randomNumber; // Where the random number is assigned
var randomNumberTwo;

	//Function Declarations || Where functions are declared
function fortune() { // This function decides the answer recieved by the computer
if (randomNumber === 0) { // If the random number is 0...
	return "Yes."; // ...this will be your answer, returned to the console
} else if (randomNumber === 1) { // For every number between 0 and 10, there is a personalized response
	return "No.";
} else if (randomNumber === 2) {
	return "Try again.";
} else if (randomNumber === 3) {
	return "It is not certain.";
} else if (randomNumber === 4) {
	return "Cannot predict now.";
} else if (randomNumber === 5) {
	return "Definetly";
} else if (randomNumber === 6) {
	return "Maybe...";
} else if (randomNumber === 7) {
	return "It is certain.";
} else if (randomNumber === 8) {
	return "It is decidedly not.";
} else if (randomNumber === 9) {
	return "Outlook not so good.";
} else if (randomNumber === 10) {
	return "Signs point to yes.";
} else {
	return "Uh... try again.";	
} //END OF random response assigner (if...else version)
} //END OF fortune()	

function timeCalculation () {
	if ((randomNumber === 1) ||(randomNumber === 2) || (randomNumber === 3) || (randomNumber === 1)
}
		
//Beginning of Main 

	
	

	//User Interface || Where user input is recorded
alert("Welcome to The Magic Crystal Ball. Here, your wildest queries may be answered by this magical program.")	
	
userQuestion = prompt('What would you like to ask the Magic Crystal Ball? (Must be a Yes or No question)'); // Here, users can type their question



	//Calculations || Random math and variable assgining is done here
randomNumber = Math.floor(Math.random() * 10); //A random number between 0 and 10 is chosen, and rounded down

randomNumberTwo = [
Math.floor(Math.random() * 10),
Math.floor(Math.random() * 10),
Math.floor(Math.random() * 10),
Math.floor(Math.random() * 10),
Math.floor(Math.random() * 10),
Math.floor(Math.random() * 10)
]



	//Output || Where all console outputs are computed
console.log("You asked: " + userQuestion); // Here, the computer reminds you what answer you asked so you won't forget
console.log() // Blank space for nice formatting
console.log("The Magic Crystal Ball says: " + fortune()); // And finally, your question is answered
console.log()
console.log("Thank you for asking the Magic Crystal Ball."); // With this final output, the interaction is ended



	
	
//End of Main
	
	
	
	
//End of program




/* Some notes:
- Because of the nature of the computer assigned responses, user questons must be yes ir no questions
- You can still ask any kind of question, but the aznswer you may get may be immersion breaking
- With many radndom outputs, this program can be used multiple times to see all outcomes
- The other version of this program uses switch statements and Math.ceil for the same outcome
- A list of KEY syntax elements can be found at the top
*/

