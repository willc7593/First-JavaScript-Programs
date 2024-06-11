/* Assignment 1: Temperature Converter (By Will Croll, Block 8)

This program is designed to tell you the temperature in Farenheit. 
It taks the temperature in Kelvin, calculates it to Celsius, and finally calculates it to Farenheit.
Plus the extra feature of a "log-in" system, it provides a quick, user friendly experience.

KEY Program Elements used:
- console.log
- Comments
- Data Types (Strings, Numbers, Booleans)
- Math Operators (+,-,*,/,%)
- BODMAS
- Variables (var, let, const)
- Interpolation
- Prompts
- switch, case, and break
- parseInt
- if...else statements
- elseif statements
- Comparison Operators (===, <=, >=)
*/

//Beginning of Program


	//Variable Declarations || This is where variables are created (Note that no values are given just yet)

//Here are the main types of temperatures we will be using in our program:
let Kelvin; // The initial temperature to start the equation. In this program, the default will be set to 293, but you will be able to input your own temperature
let Celsius; // The values of next two temperatures will depend on the equation, so their values will be allowed to change
let Farenheit; // By the end of the program, we will know what the value of Farenheit equals

//You will be able to sign in to the program before finding out the temperature
let Name; // Where the written name is stored


	
	
	//Beginning of Main 


//User Interface || The where user input is recorded

Name = prompt("Please enter your name","Guest"); //The first thing that happens, the program asks for your name. Different outcomes are executed depending on special names

Kelvin = prompt("Enter the temperature outside in Kelvin to convert to Farenheit. 293 Kelvin is the default reccomendation",293); // Here is where you write the temperature you want to convert
parseInt(Kelvin); // Since the prompt only outputs strings, this turns the value of Kelvin into a number so it can be added to the equation


//Calculations || Where the value of the temperature is found

Celsius = Kelvin - 273; // Since Celsius is 273 degrees less than Kelvin, we get the value of Celsius by subtracting 273 from Kelvin
Farenheit = Celsius * (9/5) + 32; // By using BODMAS, or the order mathematical operations occur in, what happens in this equation, while daunting at first, is actually quite simple. Now we have the value for Farenheit!


//Output || Where most of the console messages are output

switch (Name) { //The swicth command searches each 'case' and checks if the values are shared

case 'Will' : //If Name equals Will...

console.log('Welcome back, O\' Creator'); // ...it outputs a specialized greeting!
break; // This stops the execution

 // And the same goes for each consecutive case

case 'Dr. Kelvin' : 

console.log('Welcome back, Mad Scientist'); 
break; 

 

default: // If none of the above cases are activated, the default executes

console.log(`Welcome, ${Name}`); 
break; 

} 

console.log(`The temperature today is ${Farenheit}, Farenheit!`); // Now you can find out what the temperature is!

if (Farenheit >= 80){ // This checks if the temperature is greater than or equal to 80
	console.log('That\'s hot!');// If it is, then you get this message
} else if (Farenheit <= 40){ // If the temperature is less than or equal to 40...
	console.log('That\'s cold!'); // Then you get this message
}else{ // Otherwise, the else command is executed
	console.log('Have a nice day!'); // Thus, the interaction with the program ends
}

console.log(`Thank you for using this program, ${Name}!`) // The final message thanks the user for using the program
	
	
	//End of Main
	
	
//End of program




/* Some notes:
- Because of the nature of choosing the temperature, you may get some hilariously ridiculous results
- There are a couple of name recognition outcomes, I recommend trying "Will" (Me), "Dr. Kelvin" (The scientist using the program), and Mr. Vatougios (The teacher who's definetly reading this)
- A list of the key syntax concepts can be found at the top 
- Because this script uses prompts, it is unusable in ReplIt, only jsconsole
*/

