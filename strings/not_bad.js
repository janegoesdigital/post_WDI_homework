console.log("this is the not_bad.js file")
// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'



//3 if the index position of not is a lower number than bad ie < replace the whole sequence with good.


//1 find whether not and bad appear in the string
// var sentence = "here is a not very bad string";
//
// var wordsPresent = function(){
// 	var not = sentence.includes("not");
// 	console.log("Not is in the sentence is " + not);
// 	var bad = sentence.includes("bad");
// 	console.log("bad is in the sentence is " + bad)
//
// }


//2 if they both appear, find the index position of both of them


	//3 delete the whole set of words - will be from index of not to index of bad + 2
	// var numOfCharacters = indexBad - indexNot + 3;
	// console.log(numOfCharacters);
	// var deletedPortion = sentence.substr(indexNot, numOfCharacters);
	// console.log(sentence);
	// console.log(deletedPortion);

	//add good at the same place that



var notBad = function(sentence){
	var not = sentence.includes("not");
		// console.log("Not is in the sentence is " + not);
	var bad = sentence.includes("bad");
		// console.log("bad is in the sentence is " + bad);
	var indexNot = sentence.indexOf("not");
		// console.log("Index number of not: " + indexNot);
	var indexBad = sentence.indexOf("bad");
		// console.log("index number of bad: " + indexBad);
	var numOfCharacters = indexBad - indexNot + 3;
		// console.log(numOfCharacters);
	var deletedPortion = sentence.substr(indexNot, numOfCharacters);
		// console.log(sentence);
		// console.log(deletedPortion);

	if ((not === true && bad ===true) && (indexNot < indexBad)){
			var newSentence = sentence.replace(deletedPortion, "good");
			console.log("The old sentence was: " + sentence);
			console.log("The new sentence is:  " + newSentence);
			return newSentence;
			} else {
	console.log("No change.  The sentence stays the same: " + sentence);
	return(sentence);
	}
};

notBad("It's not bad that I did it?")
