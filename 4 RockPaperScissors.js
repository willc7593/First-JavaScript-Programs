/* Assignment 4: Rock, Paper, Scissors (By Will Croll, Block 8)

Welcome to the program. This is an easy to use Rock Paper Scissors machine.
Users can choose between rock, paper, and scissors, as well as bomb and nuke.

KEY Program Elements used:
- Strings, Numbers
- variables (let, const, var)
- Math.floor, Math.random
- functions
- if... else statements
- else if
- Helper functions, function equations
- parameters, arguments
- Comparisons
- prompt
- toLowerCase, toUpperCase
- Concantenation, Interpolation
*/



//Beginning of Program




	//Variable Declarations || Only two variables are needed in this program
let userInput; // The user will write in their choice to be stored here
const computerThing = Math.floor(Math.random() * 2); // The computer's choice is random, Math.floor rounds the decimal down



	//Function Declarations || Here is where the different functions used are declared
function getComputerChoice() {// This function truns the random number into an actual choice 
 if (computerThing === 0) {// If the random number equals 0...
	 return "rock"; // ...the function will return as "rock"
 } else if (computerThing === 1) {// The same goes for paper and scissors
	 return "paper";
 } else if (computerThing === 2) {
	 return "scissors";
 }// END OF choice assignment
}// END OF getComputerChoice

function determineWinner(userChoice, computerChoice) {// This function determines the winner, userChoice and computerChoice are used as perameters
	if (userChoice === computerChoice) {// First of all, if the user and the computer choose the same thing...
	return "Tie."; // ...it ends up in a tie
	
	} else if (userChoice === "rock") {// If the user chooses rock...
		if (computerChoice === "paper") {// ...and if the computer chooses paper...
			return "You Lose..."; // ...the user would lose
		} else {// Otherwise, it would mean the computer chose scissors, and the user would win
			return "You Win!";
		}// END OF if the user chose rock
	
	} else if (userChoice === "paper") {// The same goes for the rest of the trio
		if (computerChoice === "scissors") {
			return "You Lose...";
		} else {
			return "You Win!";
		}// END OF is the user chose paper
	
	} else if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			return "You Lose...";
		} else {
			return "You Win!";
		}// END OF if the user chose scissors
		
	} else if (userChoice === "bomb") {// Here is a secret response. If the user wrote "bomb"...
		return "You automatically won, cheater."; // ...they would automatically win
	
	} else if (userChoice === "nuke") {// If the user wrote "nuke"...
	return "You blew everything up. Nobody won."// ...it would be a bad idea
	
	} else {// And if none of the above apply, meaning the user wrote nothing the computer can recognize...
		return "You failed to input a valid choice. You lose.";// ...they would still lose
	}//END OF alternate responses
}// END OF determineWinner

function playGame() {// This function simply activates the 'rock, paper, scissors' process
	var userChoice = userInput; // A variable is created within the function, meaning it can only be used within it. Here, it is set to equal the users choice
	var computerChoice = getComputerChoice(); // This variable is set to equal a function, a function equation, so it will equal the result of the randomly assigned computer choice
	
	return determineWinner(userChoice, computerChoice);// This activates and returns the outcome of the determineWinner function, using the newly created variables, userChoice and computerChoice as arguments
}// END OF playGame





//Beginning of Main 

	

	
	//User Interface || Here the user interacts with the program by inputting their choice
userInput = prompt("Choose: Rock, Paper, or Scissors"); // The player can write "rock", "paper", "scissors", and (Shhh don't tell anyone) "bomb" and "nuke". They could also write nothing at all or complete nonsense to face the consequences
userInput= userInput.toLowerCase(); // In case the user writes anything in upper case, .toLowerCase turns the entire string into lower case



	//Output || Where everything is recorded into the console
console.log("You chose: " + userInput.toUpperCase()) // The computer reminds the player what they chose here. To look fancy, .toUpperCase turns the entire string to upper case
console.log(`Computer chose: ${getComputerChoice().toUpperCase()}`) // The user finds out what the computer chose here. Unlike the concantenation above, this console.log uses interpolation
console.log() // Break for nice formatting
console.log(playGame())// This console outputs the wole chain of computing by calling upon the playGame function by including brackets. In return (Literally), the outcome of the user is computed

	

	
//End of Main
	
	
	
	
//End of program





/* Some notes:
- This program is greatly replayable, even without inputting the cheat commands, due to it's random nature.
- As stated above, "bomb' and 'nuke' are two extra cheat commands to make the interaction more interesting.
- A list of the KEY Syntax concepts can be found at the top.
*/