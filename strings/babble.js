
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// //
// fixStart('babble'): 'ba**le'

//first go

var word = "bumblebbbbee";
//

//find the first letters
var firstLetter = word.charAt();
console.log("The first letter is " + firstLetter);
// /

//get part of the string only ie without the first letter
var partWord = word.substr(1,word.length);
console.log("The new string without the first letter is " + partWord);

var partWordArray = partWord.split("");
console.log("The array without the first letter is " + partWordArray);

var changeArray = partWordArray.map(function(x){
	if (x ===firstLetter){
		return "*";
	}
	else {
		return x;
	}
}
);
console.log("The array with the letters changed is: " + changeArray);
console.log(typeof change);
var arrayToString = changeArray.join("");
console.log(arrayToString);

//need to join the word again


var newWord = firstLetter + arrayToString;
console.log("The newWord joined with the old word is " + newWord);

//creating a single function

var fixStart = function(word){
	var firstLetter = word.charAt();
	// console.log("The first letter is " + firstLetter);
	//get part of the string only ie without the first letter
	var partWord = word.substr(1,word.length);
	// console.log("The new string without the first letter is " + partWord);
	var partWordArray = partWord.split("");
	// console.log("The array without the first letter is " + partWordArray);
	var changeArray = partWordArray.map(function(x){
		if (x ===firstLetter){
			return "*";
		}
		else {
			return x;
		}
	}
	);
	// console.log("The array with the letters changed is: " + changeArray);
	// console.log(typeof change);
	var arrayToString = changeArray.join("");
	// console.log(arrayToString);

	//need to join the word again


	var newWord = firstLetter + arrayToString;
	console.log("The oringal word was " + word +  " and the new word is " + newWord);
	return newWord;
};

fixStart("acacia");
