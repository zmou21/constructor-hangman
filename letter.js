// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character 
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the 
// constructor should define:

	// A string value to store the underlying character for the letter
	// A boolean value that stores whether that letter has been guessed yet
	// A function that returns the underlying character if the letter has been guessed, 
	// 		or a placeholder (like an underscore) if the letter has not been guessed
	// A function that takes a character as an argument and checks it against the underlying character, 
	// 		updating the stored boolean value to true if it was guessed correctly

	// letter has a guess function flip it over 

var inquirer = require("inquirer");


var Letter = function(letter) {
	this.letter = letter.toLowerCase();
	this.value = false;
	this.display = function() {
		var placeholder = "_";
		if(this.letter === letter) {
			//console.log("continue");
			return letter;
		}
		else if (this.letter !== letter){
			return placeholder;
		}
	};
	this.character = function() {
		if (this.letter === letter) {
			value = true;
		}
		else {
			value = false;
		}
	};
};

var letter = new Letter("B");
//console.log(letter.letter);
//console.log(letter.value);
// console.log(letter.display());
// console.log(letter.character());

module.exports = Letter;

// split the word 
// look into a .map for word.js