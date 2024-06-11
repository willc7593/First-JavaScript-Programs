/* Assignment 2: Dog Age Converter (By Will Croll, Block 8)

This program is designed to tell you your own age in dog years, with the added bonus of cat years.
It takes your age in a prompt, and puts it through some operations to determine your dog/cat age.
With the prompt feature, the addition of a (random) breed assigner, and the choice to assign your prefered animal, it provides a fun and user friendly experience.

KEY Program Elements used:
- console.log
- Comments
- Data Types (Strings, Numbers, Booleans)
- Math Operators (+,-,*,/,%)
- BODMAS
- Variables (var, let, const)
- Interpolation and Concantenation
- Prompts
- parseInt
- if...else statements
- else if statements
- Comparison Operators (===, <=, >=)
- Math.random, floor, and ceil
- null
*/



//Begnning of Program




	//Variable Declarations || This is where variables are created
var myAge; // The variable where your original age is assigned to
let myPreference; // The user must decide wether they prefer dogs or cats here (For an extra console output)

//Dog Related Variables
const firstYears = 2 * 10.5; // The first two years of your life automatically equals 10.5 dog years each, so it won't need to be changed
var laterYears; // Then the amount of years after counts for 4 each, which will depend on the users age
var myAgeInDogYears; // Where the final age will be stored once all calculations are complete
let dogBreedDeterminer; // Where a random number will be stored, which 'determines' the breed outputted
let myDogBreed; // The random breed will be placed here to be outputted

//Cat Related Variables
const firstTwoYears = 24; //The first two years of a human life automatically equals 24 cat years, so it won't need to be changed
var otherYears; // The following variables function exactly like their dog counterparts
var myAgeInCatYears; // To show my knowledge of variables, for both dog and cat years, I used var 2 times...
let catBreedDeterminer; // ...and let 2 times to create variables since they act almost the same
let myCatBreed; // For every var and let, I only 'declared' a variable, nothing has been 'assigned' just yet





//Beginning of Main 



	//User Interface || The where user input is recorded
myAge = prompt("Please enter your age","16"); // The user's age can be typed in for personalized results. 16 is the default option as it's my age and the reccomended age for the assignment
parseInt(myAge); // parseInt lets the age recorded in the prompt to be turned from a string to a number. This way it can be used in arithmetic operations

myPreference = prompt("Which do you prefer, Dogs or Cats?"); // The user can input their animal preference here





	//Calculations || Where all the math is. The value of age and breed are determined below
	
//Dog Age and Breed Calculations
laterYears = (myAge - 2) * 4; // Since the first two years have a different value, 2 years are taken away from the age. To get an equivalent in dogs years, it's multiplied by 4
myAgeInDogYears = firstYears + laterYears; // To get the final year, we now add the two values together
dogBreedDeterminer = Math.floor(Math.random()* 100); // Math.random chooses a random number between a specified number, here it's 100. Math.floor rounds the decimal down

//Cat Age and Breed Calculations
otherYears = (myAge - 2) * 4; // Same as above
myAgeInCatYears = firstTwoYears + otherYears; // Same as above
catBreedDeterminer = Math.ceil(Math.random()* 100); // Math.random is used again, but here Math.ceil is used; this rounds the decimal up

//Breed Calculator
if((dogBreedDeterminer >= 0) && (dogBreedDeterminer < 10)){ // To assign a breed, the randomly chosen number has to be (In this case) greater than or equal to 0 and less than 10
	myDogBreed = "Labrador" // If the random number qualifies here, then the string is stored in the variable
	}else if ((dogBreedDeterminer >= 10) && (dogBreedDeterminer < 20)){ // The rest work the same, each raised by 10, until the final conditional at 100
		myDogBreed = "Bulldog";
	}else if ((dogBreedDeterminer >= 20) && (dogBreedDeterminer < 30)){
		myDogBreed = "Beagle";
	}else if ((dogBreedDeterminer >= 30) && (dogBreedDeterminer < 40)){
		myDogBreed = "Poodle";
	}else if ((dogBreedDeterminer >= 40) && (dogBreedDeterminer < 50)){
		myDogBreed = "Pug";
	}else if ((dogBreedDeterminer >= 50) && (dogBreedDeterminer < 60)){
		myDogBreed = "German Shepherd";
	}else if ((dogBreedDeterminer >= 60) && (dogBreedDeterminer < 70)){
		myDogBreed = "Boxer";
	}else if ((dogBreedDeterminer >= 70) && (dogBreedDeterminer < 80)){
		myDogBreed = "Chihuahua";
	}else if ((dogBreedDeterminer >= 80) && (dogBreedDeterminer < 90)){
		myDogBreed = "Dachshund";
	}else if ((dogBreedDeterminer >= 90) && (dogBreedDeterminer <= 100)){
		myDogBreed = "Scooby-Doo"; // Not an actual breed, this is a joke outcome
}//End of If 
 
if((catBreedDeterminer >= 0) && (catBreedDeterminer < 10)){ // Exactly the same as the dog breeds above works here
	myCatBreed = "Maine Coon";
}else if ((catBreedDeterminer >= 10) && (catBreedDeterminer < 20)){
	myCatBreed = "Ragdoll";
}else if ((catBreedDeterminer >= 20) && (catBreedDeterminer < 30)){
	myCatBreed = "Persian";
}else if ((catBreedDeterminer >= 30) && (catBreedDeterminer < 40)){
	myCatBreed = "Siamese";
}else if ((catBreedDeterminer >= 40) && (catBreedDeterminer < 50)){
	myCatBreed = "Sphynx";
}else if ((catBreedDeterminer >= 50) && (catBreedDeterminer < 60)){
	myCatBreed = "British Shorthair";
}else if ((catBreedDeterminer >= 60) && (catBreedDeterminer < 70)){
	myCatBreed = "Siberian";
}else if ((catBreedDeterminer >= 70) && (catBreedDeterminer < 80)){
	myCatBreed = "Bengal";
}else if ((catBreedDeterminer >= 80) && (catBreedDeterminer < 90)){
	myCatBreed = "Scottish Fold";
}else if ((catBreedDeterminer >= 90) && (catBreedDeterminer <= 100)){
	myCatBreed = "Garfield"; // A joke outcome
}

	
	
	
	
	//Output || Everything displayed on the console is recorded here
	
console.log("Your age in dog years is " + myAgeInDogYears + ", and your dog breed is " + myDogBreed + "!"); // Here is where the console outputs your age and breed using concantenation
console.log(); // Left blank to space out the lines; for aesthetic touch
console.log(`Your age in cat years is ${myAgeInCatYears}, and your cat breed is ${myCatBreed}!`); // Here, a different tactic is used to output the value of the variable, interpolation
console.log();
if ((myPreference === "Dog") || (myPreference === "Dogs")) { // Below is where the personalized message depending on the user's animal preference is outputted
	console.log("Woof Woof!");
}else if ((myPreference === "Cat") || (myPreference === "Cats")) {
	console.log("Meow Meow!");
}else if ((myPreference === null) || (myPreference === "Neither") || (myPreference === '')) { // If the user did not write down their preferred animal...
	console.log("You don't like Dogs or Cats?"); // ...this line computes
}else {
	console.log(`Please note, ${myPreference} is not a Dog or Cat.`); // And if a different answer was inputted, this will show up, somewhat mocking the user
}
console.log();
console.log();
console.log("Have a nice day!"); // Here, the final message and therefore final compution is recorded. Thus, the interaction is ended




//End of Main
	
	
	
	
//End of Program




/* Some Notes
- With the prompt feature, many different age outcomes are possible
- I noted that the Cat age equivalent was always 3 years older than Dog years. This would've been an easier way to write the program, but I decided I preffered bonus marks
- With the lack of limitation on age input, some outcomes can be very profound
- The feature of a random breed assignation provides some re-usability to try to get different outcomes
- A list of key syntax concepts can be found at the top
- The prompts can work in Repl.it when 'HTML,CSS,JS' is selected in '+new repl'
*/
