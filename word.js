// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an 
// object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object
	// (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	// takes word and splits it and use a map to create instance for letter constructor for each letter 
// A function that takes a character as an argument and calls the guess function on each letter object 
	// (the second function defined in Letter.js)
	// guess a letter method and takes in character that sets a bool

var Letter = require("./letter.js");

var Word = function(word) {
	this.array = [];
	this.word = function() {
		var word = new Letter(letter);
		word.join();
	};
	this.guess = function() {

	};	

}