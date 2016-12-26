// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowels = ["a", "e", "i", "o", "u"];

var findVowel = function(letter){
	var test = vowels.indexOf(letter);
	console.log(test);
	if (test >= 0 ){
		console.log("hello. This letter: " +  letter + " is a vowel!");
	}
	else {
		console.log("Nope. No vowel");
	}
};

findVowel("c");
