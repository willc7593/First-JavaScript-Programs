/* Assignment 5: Personal Wellness (By Will Croll, Block 8)

Welcome to the program. This is a calculator designed to take the amount of hours the user has slept 
and match it with their ideal hour count. It includes words of advice, and a secret or two.

KEY Program Elements used:
- do/while loops
- variables (var, let, const)
- arrays
- functions
- parameters and arguments
- switch statements
- .reduce() (Iterators)
- arithmetic operators (+, -, *, /)
- if...else statements
- comparison operators (===, <, >, <=, >=, &&)
- string concantenation and interpolation
- alert, prompt, open, confirm
- for loops
- parseInt
- comments
*/




//Beginning of Program 




	//Variable Declarations || Variables will be created and maybe defined

const daysOfWeek = ['Sunday', 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'] // This variable simply holds a list of the days of the week. Their purpose is to later be used in prompts displaying a specific day, and will be iterated through
	
let weekHours = []; // The list of hours spent sleeping by the user will be pushed into this array
let idealHours; // The user's ideal amount of hours will simply be stored here
var day; // This variable will be used later in a for loop



	//Function Declarations || Here is where the different functions used are declared
	
/* function getSleepHours(day){ // This function will actually not be used. It was originally in the instructions for the assignment, but because of the way I decided to write this program, it's useless. However, I have left it in to demonstrate my understanding of it's original purpose
	switch(day) { // The parameter in this function asks for day. The argumant would've been one of the 7 days of the week, and woould activate this switch statement
		
		case 'Sunday': return weekHours[0]; // If the day was 'Sunday', the function would return the value of the hours the user spent sleeping that day
		break; // This would end the function
		
		case 'Monday': return weekHours[1]; // The same goes for each subsequent day
		break;
		
		case 'Tuesday': return weekHours[2];
		break;
		
		case 'Wednesday': return weekHours[3];
		break;
		
		case 'Thursday': return weekHours[4];
		break;
		
		case 'Friday': return weekHours[5];
		break;
		
		case 'Saturday': return weekHours[7];
		break;
	}//END OF day switch statement
}//END OF getSleepHours || This function would have been useful if the program had a function to display the hour count recporded for a specific day
*/

function getActualSleepHours() { // This function will return the value of all the hours added up, or 'reduced'
	var allDays = weekHours.reduce((accumulator, currentValue) => { // .reduce adds every element of an array together. Here, this array is stored in the variable allDays
      return accumulator + currentValue; // accumulator and currentValue are used in the iterator as parameters to continually add together each array element
});
	return allDays; // When its finished, this function returns the value of the new variable
}//END OF getActualSleepHours

function getIdealSleepHours() { // This function simply returns the amount of hours a week the user would sleep if they slept their ideal amount of hours
	return idealHours * 7; // It takes the ideal hours and multiplies it by the amount of days in a week, 7
}//END OF getIdealSleepHours

function calculateSleepDebt() { // This function finalizes the result of the program through a couple steps
	var actualSleepHours = getActualSleepHours();// First executes the two previous functions and sets their return value to two new variables
	var idealSleepHours = getIdealSleepHours();
	var remainderHours = idealSleepHours - actualSleepHours;// This variable is used to tell how many hours the user must catch up on if they do not meet their requirements. It simply subtracts their hours from their ideal hours
	
	if(actualSleepHours === idealSleepHours) { // IF the user meets their ideal requirements...
		alert("You are meeting your sleep requirements. Keep it up!"); // ...the program congratulates them
		
	}else if((actualSleepHours > idealSleepHours) && (actualSleepHours < 70)) { // IF the user sleeps more than their goal...
		alert("You're sleeping more than neccessary. Good job!"); // ...the program tells them that
		
	}else if((actualSleepHours < idealSleepHours) && (actualSleepHours > 25)) { // IF the user does not meet their requirements... 
		alert(`You aren't meeting your requirements. To meet them, try to sleep an extra ${remainderHours} hours next week. Good luck!`); // ...the program uses remainderHours and tells them how many more hours they need
		
	}else if(actualSleepHours >= 70) { // IF the user oversleeps...
		alert("How do you get anything done in the day?"); // ...the program makes fun of them and sends them to this website using open()
		open("https://www.amazon.ca/s?k=amazon+alarm+clocks&gclid=EAIaIQobChMInKOEyJaY5wIVENtkCh1I5Q1XEAAYASAAEgLatfD_BwE&hvadid=267351218863&hvdev=c&hvlocphy=9001579&hvnetw=g&hvqmt=e&hvrand=15177598829286863876&hvtargid=kwd-301152116771&hydadcr=20636_10072778&tag=googcana-20&ref=pd_sl_18r1uodk0q_e");
	
	}else if(actualSleepHours <= 25) { // IF the user sleeps a very short amount...
		alert("Are you ok?"); // ...the program sends them to this website
		open("https://www.mayoclinic.org/diseases-conditions/insomnia/symptoms-causes/syc-20355167");
		
	}else { // IF nothing else works...
		alert("Whoops! Something went wrong in the calculations. Please try again."); // ...this error message will appear
		
	}//END OF response if...else statement
}//END OF calculateSleepDebt





 //Beginning of Main 

	

do{ // The 'do' activates the loop; if a loop is restarted, the program begins here
weekHours = []; // If the user reactivates the loop, this wipes the previous array as to not confuse the program
	
	
	
	//User Interface || Here the user interacts with the program by inputting their hours
	
alert("Welcome to the Personal Wellness Calculator! This program is designed to record the amount of hours you got this week and calculate your personal wellness!"); // The program starts by welcoming the user...
alert("The program will ask for how many hours of sleep you got each day, as well as the amount of ideal hours you desire. It will compare your hours and the ideal hours and tell you how you're doing."); // ...and explaining how the program works
	
for(i = 0; i < 7; i++){ // This for loop starts an interaction where you input your amount of hours slep for each day; the 'i' acts as an incrementor, and increases with every loop in order to keep track of how many times it was looped and to interact with the array
	day = daysOfWeek[i]; // This varible is used to display a different day of the week each time in the same prompt code
    
	weekHours.push(parseInt(prompt("How many hours of sleep did you get on " + day + "?"))); // Every input from the user is 'pushed' into the weekHours array; parseInt turns the string into a number
}//END OF weekHours for loop

idealHours = parseInt(prompt("Ideally, how many hours a night do you WANT to sleep?","8")); // This prompt records the users desired sleep hour count and stores it in the variable

	
	
	
	//Output || Where everything is recorded to the user

calculateSleepDebt(); // This function call starts all the functions in order to calculate the amount of hours slept, and to display a message to the user
	
}while(confirm("Do you want to calculate again?")); // If the user wishes to calculate again, the confirm outputs 'true', and sends them to the very start of the program. This way, every variable is reset





//End of Main
	

	
alert("Thank you for using the Personal Wellness Calculator. Please use it again sometime!"); // If the user wants to end the program, this is the final message that ends the program

	
	
//End of Program





/* Some notes:
- The prompts can work in Repl.it when 'HTML,CSS,JS' is selected in '+new repl'
- Since the two 'joke messages' send the user to a website, the search engine may block the transfer. Allow the browser to let the website to open a new tab
- If the program in simply being tested, the program allows ludicrously large numbers to be calculated
- A large part of this assignment was improvised by me; there are many loops and iteration syntax used that was not neccessary
- A list of the KEY syntax concepts can be found at the top 
*/