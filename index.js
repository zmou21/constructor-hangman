// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");

var craftBeers = ["avery", "breckenridge", "oskar", "reverend", "banananut"];

var chosenWord = craftBeers[Math.floor(Math.random() * wordsList.length)];

//Takes in user input using inquirer and compare 

var Random = function() {
	this.select = Word.wordSplit(chosenWord);
	this.guess = function() {
		inquirer.prompt([
		{
		type: "input",
		name: "letter",
		message: "Guess a letter:"	
		}	
		]).then(function(result) {
			if(result.letter){
				var letter = new Word(result.letter);
				console.log(result.letter);
			}
			else{
				console.log("guess again");
			}
		});
	};
}

var Word = require("./word.js");