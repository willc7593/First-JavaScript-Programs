//Will's Pokemon Type Matchup Calculator

//Class Declaration
class Type {
	constructor(name, SE, NVE, NOE) {
		this.name = name;
		this.SE = SE;
		this.NVE = NVE;
		this.NOE = NOE;
	}
}


//Variable Declaratons

	//Basic Variables
let typeA;
let typeB;
let resultA = false;
let resultB = false;

let twoTypes = false;
let typeBa;
let typeBb;

	//All Types
var fire = new Type( "fire",
['bug', 'steel', 'grass', 'ice'],
['rock', 'fire', 'water', 'dragon']);

var water = new Type( "water",
['ground', 'rock', 'fire'],
['water', 'grass', 'dragon']);

var grass = new Type( "grass",
['ground', 'rock', 'water'],
['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon']);
	
var electric = new Type( "electric",
['water'],
['grass', 'electric', 'dragon'],
['ground']);

var normal = new Type( "normal",
[],
['rock','steel'],
['ghost']);

var fighting = new Type( "fighting",
['normal', 'rock', 'steel', 'ice', 'dark'],
['flying', 'poison', 'bug', 'psychic', 'fairy'],
['ghost']);

var rock = new Type( "rock",
['flying', 'bug', 'fire', 'ice'],
['fighting', 'ground', 'steel']);	

var ground = new Type( "ground",
['poison', 'rock', 'steel', 'fire', 'electric'],
['bug', 'grass'],
['electric']);

var dark = new Type( "dark",
['ghost', 'psychic'],
['fighting', 'dark', 'fairy']);

var bug = new Type( "bug",
['grass', 'psychic', 'dark'],
["fighting", "poison", "ghost", "steel", "fire", "fairy"]);

var ghost = new Type( "ghost",
['ghost', 'psychic'],
['dark'],
['normal']);

var poison = new Type( "poison",
['grass', 'fairy'],
["poison", "ground", "rock", "ghost"],
['steel']);

var ice = new Type( "ice",
['flying', 'ground', 'grass', 'dragon'],
['steel', 'fire', 'water', 'ice']);

var psychic = new Type( "psychic",
['fighting', 'poison'],
['steel', 'psychic'],
['dark']);

var steel = new Type( "steel",
['rock', 'ice', 'fairy'],
['steel', 'fire', 'water', 'electric']);

var fairy = new Type( "fairy",
['fighting', 'dragon', 'dark'],
['poison', 'steel', 'fire']);

var dragon = new Type( "dragon",
['dragon'],
['steel'],
['fairy']);

var flying = new Type( "flying",
['fighting', 'bug', 'grass'],
['rock', 'steel', 'electric']);

var allTypes = [fire, water, grass, electric, normal, fighting, rock, ground, dark, bug, ghost, poison, ice, psychic, steel, fairy, dragon, flying];


//Function Declaration
function calculate(type) {
		
		for(var i = 0; i < allTypes.length; i++) {
			if(typeA === allTypes[i].name) {
				typeA = allTypes[i];
				resultA = true;
			}

			if(type === allTypes[i].name) {
				resultB = true;
			}
		}

	  if((resultA === false) || (resultB === false)) {
		return "ERROR"
	  }
		
	  if(typeA.SE) {
		  for(var j = 0; j < typeA.SE.length; j++) {
			if(typeA.SE[j] === type) {
				return "It's Super Effective!";
			  }
		  }
	  }
		
	  if(typeA.NVE) {
		  for(var j = 0; j < typeA.NVE.length; j++) {
			if(typeA.NVE[j] === type) {
				return "It's Not Very Effective...";
			  }
		  }
	  }
		
	  if(typeA.NOE) {
		 for(var j = 0; j < typeA.NOE.length; j++) {
			  if(typeA.NOE[j] === type) {
				return "It Has No Effect.";
			}
		  }
	  }

	  return "It's Effective."
}

function calcTwo() {
    
    if((calculate(typeBa) === "It's Super Effective!") && (calculate(typeBb) === "It's Super Effective!")) {
        return "IT'S 4X EFFECTIVE!";
        
    }else if(((calculate(typeBa) === "It's Super Effective!") && (calculate(typeBb) === "It's Effective.")) || ((calculate(typeBa) === "It's Effective.") && (calculate(typeBb) === "It's Super Effective!"))) {
        return "It's Super Effective!";
        
    }else if(((calculate(typeBa) === "It's Super Effective!") && (calculate(typeBb) === "It's Not Very Effective...")) || ((calculate(typeBa) === "It's Not Very Effective...") && (calculate(typeBb) === "It's Super Effective!"))) {
        return "It's Effective.";
        
    }else if((calculate(typeBa) === "It's Effective.") && (calculate(typeBb) === "It's Effective.")) {
        return "It's Effective.";
        
    }else if(((calculate(typeBa) === "It's Effective.") && (calculate(typeBb) === "It's Not Very Effective...")) || ((calculate(typeBa) === "It's Not Very Effective...") && (calculate(typeBb) === "It's Effective."))) {
        return "It's Not Very Effective...";
        
    }else if((calculate(typeBa) === "It's Not Very Effective...") && (calculate(typeBb) === "It's Not Very Effective...")) {
        return "It's 1/4x Effectice...";
        
    }else if((calculate(typeBa) === "It Has No Effect.") || (calculate(typeBb) === "It Has No Effect.")) {
        return "It Has No Effect.";
        
    }else {
        return "ERROR";
    }
}

function duplicate(){
    if(typeBa === typeBb) {
        twoTypes = false;
        typeB = typeBa;
    }
}



// Main

if(confirm("Randomize?")) {
  typeA = allTypes[Math.floor(Math.random()*18)].name;
    if(confirm("Two Types?")) {
        twoTypes = true;
        typeBa = allTypes[Math.floor(Math.random()*18)].name;
        typeBb = allTypes[Math.floor(Math.random()*18)].name;
        duplicate();
    }else {
        typeB = allTypes[Math.floor(Math.random()*18)].name;
    }
    
}else {
  typeA = prompt("Choose your ATTACKING type: \n\nFire | Water | Grass | Electric | Normal | Fighting | Flying | Rock | Ground \n       Ghost | Bug | Ice | Dark | Psychic | Poison | Steel | Fairy | Dragon").toLowerCase();
  
  if(confirm("Two types?")) {
      twoTypes = true;
      typeBa = prompt("Choose your FIRST DEFENDING type: \n\nFire | Water | Grass | Electric | Normal | Fighting | Flying | Rock | Ground \n       Ghost | Bug | Ice | Dark | Psychic | Poison | Steel | Fairy | Dragon").toLowerCase();
      typeBb = prompt("Choose your SECOND DEFENDING type: \n\nFire | Water | Grass | Electric | Normal | Fighting | Flying | Rock | Ground \n       Ghost | Bug | Ice | Dark | Psychic | Poison | Steel | Fairy | Dragon").toLowerCase();
      duplicate();
      
  }else {
		typeB = prompt("Choose your DEFENDING type: \n\nFire | Water | Grass | Electric | Normal | Fighting | Flying | Rock | Ground \n       Ghost | Bug | Ice | Dark | Psychic | Poison | Steel | Fairy | Dragon").toLowerCase();
  }
}

if(twoTypes === false) {
	console.log(`Attacking type: ${typeA.toUpperCase()} 
	\nDefending type: ${typeB.toUpperCase()} 
	\nResult: ${calculate(typeB)}`);
    
}else {
	console.log(`Attacking type: ${typeA.toUpperCase()} 
	\nDefending type: ${typeBa.toUpperCase()}/${typeBb.toUpperCase()} 
	\nResult: ${calcTwo()}`);
}