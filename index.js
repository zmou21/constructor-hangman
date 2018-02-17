// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");

// function guess() {
// 	inquirer.prompt([
// 	{
// 	type: "input",
// 	name: "letter",
// 	message: "Guess a letter:"	
// 	}	
// 	]).then(function(result) {
// 		if(result.letter){
// 			var letter = new Letter(result.letter.toLowerCase());
// 			console.log(result.letter);
// 		}
// 		else{
// 			console.log("guess again");
// 		}
// 	});
// };


var Word = require("./word.js");