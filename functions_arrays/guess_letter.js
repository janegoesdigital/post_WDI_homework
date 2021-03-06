// The Word Guesser - first part
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// 	 Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

//Second part
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

//Third part - like hangman

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.



// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.





var mysteryWord = ["f", "o", "x"];
var guessedLetters = [];
var rewardArray = [];
var allGuesses = [];
var numGuesses = 0;

var multiplyArray = function(array){
	var sum = array.reduce(function(a, b) {
	  return a * b;
	},
	1);
	console.log("The sum of all the amounts you have won is : $" + sum.toFixed(2));
	return sum.toFixed(2);
};



var reward = function(){
	randomNum = (Math.random() * 100).toFixed(2);
	rewardArray.push(randomNum);
	// console.log("The amount you have won is : $" +randomNum);
	// console.log("All of the amounts you have won are $ "+ rewardArray);
	multiplyArray(rewardArray);
	return randomNum;
};


var guessLetter = function(userGuess){
	allGuesses.push(userGuess);

	console.log(allGuesses);
	var checkLetter = mysteryWord.indexOf(userGuess);
	if (checkLetter >= 0){
			console.log("You picked correctly - the letter is " + userGuess + " is in the mystery word!");
			guessedLetters.push(userGuess);
			reward();
				if (mysteryWord.length === guessedLetters.length) {
					var finalReward = multiplyArray(rewardArray);
					numGuesses = 0;
					console.log("You've picked all the letters! They are " + guessedLetters + ". You have won " + finalReward + " The game is now over! Can you now pick the word?");
				}
	}
	else {
		numGuesses = numGuesses + 1 ;
		remainingGuesses = 6 - numGuesses;
		console.log("Sorry the letter " + userGuess + " is not in the mystery word");
		if (remainingGuesses > 0){
		console.log("The number of guesses you have got wrong  is " + numGuesses + ". You have " + remainingGuesses + " left. Good luck!");
		}
		else {
			numGuesses = 0;
			console.log("Oh oh...You have no guesses left, which means the hangman wins and the game is over !");
		}
		return numGuesses;

	}
	// console.log(test);
	console.log(guessedLetters);
};

guessLetter("o");
guessLetter("p");
guessLetter("f");
guessLetter("x");
guessLetter("c");
guessLetter("d");
guessLetter("e");
// guessLetter("g");
// guessLetter("h");
// guessLetter("i");
// guessLetter("j");
guessLetter("x");


multiplyArray(rewardArray);

//
