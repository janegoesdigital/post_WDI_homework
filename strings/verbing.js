// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

// 1 find how long the string is
var word = "bubble";
var length = word.length;

//work out how to add "ing"

var newWord = word + "ing";
console.log("Add ing to word " + newWord);

//search for whether it contains "ing" ie is "ing" a substring ad the end of the word
word.endsWith("ing");




var verbing = function(word){
	var length = word.length;
	console.log("The length of the word: " + length);
	if (length > 3 ){
			if (word.endsWith("ing") === true) {
				newWord = word +"ly";
			} else {
				newWord = word + "ing";
			}
	}
	else {console.log("The word is too short.  It will just be " + word)}
};

verbing("pot");
