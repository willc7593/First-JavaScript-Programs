/* Assignment 8 : Cactus Club Cafe Meal Maker  (By Will Croll, Block 8)

Welcome to the 'Make-Your-Own-Meal' Program. This is a program designed to create a 3-course meal for the user based off their choices.
The user can choose to randomize their meal or choose each dish in the meal themselves. At the end, the program returns their meal, and the price.

KEY Program Elements used:
- comments
- varibles
- objects/nested objects/
- methods
- using _ for important members
- numbers, strings, booleans
- prompt(), alert(), confirm()
- \n
- functions
- for/in loops/incrementors
- break
- comparison operators
- .toLowerCase(), .indexOf()
- Object.keys()
- Math.floor(), Math.random()
- if/else statements
- open()
- do/while loops
- string interpolation/concantenation
- console.log()
*/





//Beginning of Program




	//Variable Declarations || Variables will be created and maybe defined

let menu = { // The first variable created is the menu itself; it includes a list of each course, and the dishes they include, as well as an order() method
	
	_appetizers: { // This object includes all the appetizers; the _ indicates its importance
		fries: 10.50, // Each member has their own price attatched
		calamari: 16.25, 
		ribs: 13.00, 
		wings: 15.75, 
		salad: 19.75
	},//END OF _appetizers
		
	_mains: { // This object includes all the mains; the _ indicates its importance
		taco: 18.75, // Each member has their own price attatched
		burger: 19.00, 
		salmon: 25.75, 
		spaghetti: 23.75, 
		steak: 33.75
	},//END OF _mains
		
	_desserts: { // This object includes all the desserts; the _ indicates its importance
		mousse: 7.00, // Each member has their own price attatched
		pie: 9.75, 
		cake: 10.00
	},//END OF _desserts
	
	order() { // This is an object method within menu that initaites the ordering sequence; Each prompt lists the options and asks for the user's choice; so th eprogram can read the input, .toLowerCase is used
		userChoice.appetizer = prompt("What appetizer would you like? The options are: \n - Fries: $10.50 \n - Calamari: $16.25 \n - Ribs: $13.00 \n - Wings: $15.75 \n - Salad: $19.75 \nType in the exact keyword of your choice.", "Fries").toLowerCase();
		userChoice.main = prompt("What main course would you like? The options are: \n - Taco: $18.75 \n - Burger: $19.00 \n - Salmon: $25.75 \n - Spaghetti: $23.75 \n - Steak: $33.75 \nType in the exact keyword of your choice.", "Taco").toLowerCase();
		userChoice.dessert = prompt("What dessert would you like? The options are: \n - Mousse: $7.00 \n - Pie: $9.75 \n - Cake: $10.00 \nType in the exact keyword of your choice.", "Pie").toLowerCase();
	}//END OF order()
	
};//END OF menu
const userChoice = { // This variable is where the user's choices are recorded
		appetizer: '', // Each member of the object is blank for now, and will be filled later in a prompt
		main: '',
		dessert: ''
};//END OF userChoice
let price = 0; // The price of the meal will be added up into this variable

let isRandom; // This variable determines wether the user wants a random meal or not
const randomChoice = { // If the user wants a random meal, the program's random choices are stored here
	appetizer: 0, // The members are defined by 0 since they will be asigned a random number later which coincides with the random dish
	main: 0,
	dessert: 0
}//END OF randomChoice

let isError = false; // This varaible determines wether there is an error in the user's input; if there is, the loop is reset



	
	//Function Declarations || Here is where the different functions used are declared

function findPrice() {// This function is used to calculate the price of the meal
	
		for(var j in menu._appetizers) { // This for/in loop goes through the list of appetizers
			if(userChoice.appetizer === j) { // If the user choice matches the current dish...
				price += menu._appetizers[j]; // ...the price will be added to the variable...
				isError = false; // ... there won't be an error...
				break; // ... and the loop is broken so the loop doesn't continue and write "ERROR" over the error checker
			}else { // If the requirements aren't met...
				isError = true; // ... there will be an error
			}//END OF if appetizer
		}//END OF for/in appetizers
		
		for(var j in menu._mains) { // This for/in loop goes through the list of mains
			if(userChoice.main === j) { // This loop is the exact same as the loop previous, but for the main
				price += menu._mains[j];
				isError = false;
				break;
			}else {
				isError = true;
			}//END OF if main
		}//END OF for/in mains
		
		for(var j in menu._desserts) { // This for/in loop goes through the list of desserts
			if(userChoice.dessert === j) { // This loop is the exact same as the loop previous, but for the dessert
				price += menu._desserts[j];
				isError = false;
				break;
			}else {
				isError = true;
			}//END OF if dessert
		}//END OF for/in desserts
	
}//END OF findPrice()
function findRandomMeal() {// This function assigns random meals if selected
	
	for(var i in randomChoice) { // This for/in loop goes through the randomChoice object
		
		for(var j in menu._appetizers) { // This for/in loop goes through the list of appetizers
			if(randomChoice[i] === Object.keys(menu._appetizers).indexOf(j)) { // If the random number equals the index of an element if the object was an array...
				userChoice.appetizer = j; // ... userChoice is used (for convenience) to store the corresponding choice
			}//END OF if appetizer
		}//END OF for/in appetizers
		
		for(var j in menu._mains) { // This for/in loop goes through the list of mains
			if(randomChoice[i] === Object.keys(menu._mains).indexOf(j)) { // This loop is the exact same as the previous loop, but for mains
				userChoice.main = j;
			}//END OF if main
		}//END OF for/in mains

		for(var j in menu._desserts) { // This for/in loop goes through the list of desserts
			if(randomChoice[i] === Object.keys(menu._desserts).indexOf(j)) { // This loop is the exact same as the previous loop, but for desserts
				userChoice.dessert = j;
			}//END OF if dessert
		}//END OF for/in desserts

	}//END OF for/in random
	
}//END OF findRandomMeal()

function programReset() {// This function is used at the beginning of each program loop to reset values as to not confuse the computer
	price = 0; // The price...
	isRandom = false; // and random chooser are reset...
	randomChoice.appetizer = Math.floor(Math.random()* 5); // ...and random appetizer...
	randomChoice.main = Math.floor(Math.random()* 5); // ...random main...
	randomChoice.dessert = Math.floor(Math.random()* 3); // ... and random dessert are randomized again for the new loop
}//END OF programReset





//Beginning of Main 



alert("Welcome to Cactus Cafe's 'Make-Your-Own-Meal' Program! \n\nHere, you can make your own meal using our select dishes, including an appetizer, a main course, and a dessert. Your total will be added up for you."); // This alert welcomes the user and explains how the program works	

if(confirm("Would you like to take a look at our full menu? 'Make-Your-Own-Meal' only includes pre-selected dishes, but our full menu can give you a good idea of what to select.")) { // This if statement asks if the user wants to check the official menu before starting
	open('https://www.cactusclubcafe.com/menus/north-vancouver/food/full-menu/'); // If the user chooses yes, the program opens this site in a new window
}//END OF if menu



do{ programReset(); // This do/while loop is where the main part of th eprogram takes place; if the loop is reset, the program starts here again; programReset() is used at the very beginning to account for as the name implies

if(confirm("Would you like your order to be randomized?")) { // This if statement asks if the user wants a random meal; if they choose yes...
	isRandom = true; // ... isRandom is set to 'true'
}//END OF if random
	
	
	
	//User Interface || Here the user interacts with the program by inputting their choice

if(isRandom === false) { // If the user does not want a random meal...
	menu.order(); // ...The order method of menu is initiated and the user inputs their choices
}else { // If the user wanted a random answer...
	findRandomMeal(); // ...findRandomMeal() is initiated to find a random meal instead
}//END OF if order

	
	
	//Output || Where everything is recorded to the user

findPrice(); // findPrice() is called to calculate the price

if(isError === false) { // If there aren't any errors...
	alert(`Your meal is: \n - Start with ${userChoice.appetizer}, \n - A main course of ${userChoice.main}, \n - And finish with ${userChoice.dessert}. \n\nYour total comes to: $${price}.`); // ... The results are recorded to the user, custom or random
}else { // If there was an error...
	alert("There was an error in your order. Please try again."); // ...the user is notified and asked to try again 
}//END OF if error
	

	
	
//End of Main

}while(confirm("Would you like to order again?")); // If the user wishes to use the program again, the confirm will read as 'true', and the program is sent back to 'do{'
	
alert("Thank you for using Cactus Cafe's 'Make-Your-Own-Meal' Program! We hope you use it again for your next visit!"); // If the user wishes to end the program, the program says goodbye

console.log("Your meal will cost $" + price); // The cost is recorded to the conole...
console.log("Have that amount of money prepared... or else..."); // ...and the interaction with the program is ended
	
	
	
	
	
//End of Program






/* Some notes:
- There is a list of KEY Syntax concepts at the top
- The prompts can work in Repl.it when 'HTML,CSS,JS' is selected in '+new repl'
- There is an error catcher and randomizer
- The program does have many differences from the original Assignment outline, but I still beleive I acheived the original goal in a unique way
- The open() won't work if pop-ups are blocked; you can trust me, and turn pop-ups on
- Opening a new window to see the official menu cancels the program, so try it out once and reset the program
*/