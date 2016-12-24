
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)


var drEvil = function(amount){
	var message = amount + " dollars";
	if (amount === 1000000) {
		var newMessage = message + " 	(pinky)";
		console.log(newMessage);
		return newMessage;
	}
	else {
		console.log(message);
		return message;
	}

};

// var divNode = document.getElementsByClassName("drEvilDiv");
//
// var newParagraph = document.createElement("p");
// console.log(divNode);
// console.log(newParagraph);
//
// var newText = document.createTextNode("Here is the text");
//
// newParagraph.appendChild(newText);
// divNode.innerHTML(newParagraph);




// var buttonClick = document.getElementById('button');
// var drEvilClick = function(event) {
// 		// var pageNode = document.getElementsByTagName('body')[0];
// 		var divEvil = document.getElementsByClassName('drEvilDiv');
// 		console.log(divEvil);
//    	var enteredValue = document.getElementById("amount").value;
// 		var amount = parseInt(enteredValue, 10);
// 		var answer = drEvil(amount);
// 		console.log(answer);
// 		var newParagraph = document.createElement("p");
// 		var paragraphText = document.createTextNode("Dr Evil says" + answer);
// 		newParagraph.appendChild(paragraphText);
// 		// divEvil.appendChild(newParagraph);
// };
// button.addEventListener('click', drEvilClick);

var button = document.getElementById('button');
var drEvilClick = function(event) {
		var evilNode = document.getElementsByTagName('drEvilLayout');
		console.log("The evil layout is " + evilNode);
    var amount = document.getElementById("amount").value;
		var toNumber = parseInt(amount,10);
		var answer = drEvil(toNumber);
		console.log(answer);
		var newParagraph = document.createElement('p');
		console.log("The new empty paragraph is " + newParagraph);
		var paragraphText = document.createTextNode("Dr Evil says" + answer);
		console.log("the paragraph text is");
		newParagraph.appendChild(paragraphText);

		evilNode.appendChild(newParagraph);
};
button.addEventListener('click', drEvilClick);

//drEvil function - add pinky






// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

//create a variable that holds a reference to the first two letter1stWord
//delete the first two letters

//working function passing in one word only - used to work out how to do some things

//





//This is the actual function - pass in two words - need to add the step for finding the replacement letters

var mixUp = function(word1,word2){
	//To put first letters (newLetters2) from second word (word2) into first word (newLetters1)
	var newLetters2 = word2.slice(0,2);
	var word1Array = word1.split("");
	var newWord1Array = word1Array.splice(0,2,newLetters2);
	var newWord1 = word1Array.join("");

		//To put first letters (newLetters2) from second word (word2) into first word (newLetters1)
		var newLetters1 = word1.slice(0,2);
		// console.log(newLetters1);
		var word2Array = word2.split ("");
		// console.log(word2Array);
		var newWord2Array = word2Array.splice(0,2,newLetters1);
		// console.log(newWord2Array);
		var newWord2 = word2Array.join("");
		console.log(newWord1, newWord2);
};

mixUp("crafty", "nifty");

//add the answer to screen

var mixUpButton = document.getElementById('mixUpButton');
var mixUpClick = function(event) {
		var pageNode = document.getElementsByTagName('body')[0];
    var word1 = document.getElementById("word1").value;
		var word2 = document.getElementById("word2").value;
		console.log(word1);
		console.log(word2);
		var answer = mixUp(word1,word2);
		console.log(answer);
		var newParagraph = document.createElement('p');
		var paragraphText = document.createTextNode("The mixed up words are :" + answer);
		newParagraph.appendChild(paragraphText);
		pageNode.appendChild(newParagraph);
};
button.addEventListener('click', mixUpClick);


//preceding function

// var mixUp1 = function(word1, word2){
// 	var findLetters = function(word){
// 		var newLetters = word.slice(0,2);
// 		return newLetters;
// 		};
// 	var mixUp = function(word,newLetters){
// 		var wordArray = word.split("");
// 		var newWordArray = wordArray.splice(0,2,newLetters);
// 		var newWord = wordArray.join("");
// 		return newWord;
// 		};
//
// 	var newLettersFor1 = findLetters(word2);
// 	var newLettersFor2 = findLetters(word1);
//
// 	var newWord1 = mixUp(word1,newLettersFor1);
// 	var newWord2 = mixUp(word2, newLettersFor2);
// 	console.log(newWord1, newWord2);
// 	var newWords = newWord1 + " " + newWord2;
// 	return newWords;
// };
//
// mixUp1("horatio", "gerrymander");
//
// var newWords = mixUp1("horatio", "gerrymander");


//This is to work out the basic logic

// var mixUp = function(word1,newLetters){
// 	// var letter1stWord = word1.slice(0,2)
// 	var word1Array = word1.split("");
// 	var newWord1Array = word1Array.splice(0,2,newLetters);
// 	var newWord1 = word1Array.join("");
// 	console.log(newWord1);
// };
