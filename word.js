// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an 
// object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object
	// (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
	// takes word and splits it and use a map to create instance for letter constructor for each letter 
// A function that takes a character as an argument and calls the guess function on each letter object 
	// (the second function defined in Letter.js)

var Letter = require("./letter.js");

var Word = function(word) {
	this.wordSplit = [];	
	this.word = function() {

// Split each incoming letter into the array wordSplit

		wordSplit = word.split("");

		console.log(wordSplit);
		//console.log(letterConcat);
		//console.log(letterSplit.display());

// loop through the split word array and use the Letter.js function .display() to replace the word with 
// the character or an underscore and concatenate	

		for (var i = 0; i < wordSplit.length; i++) {
			
			//var letterConcat = wordSplit[i].join();
			//var letterSplit = new Letter(wordSplit[i]);
			//letterSplit.join(" ");
			console.log(letterSplit);
		};
	};
// checks each word and with the Letter.js function .guess() takes in character that sets a bool and compares it to true or false
	this.guess = function() {
		var wordGuess = Letter.guess();

	};
}

// Test files
	//var h = new Word("hello");

	//h.word();
	// h.guess();

module.exports = Word;
