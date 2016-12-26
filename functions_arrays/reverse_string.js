// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


var reverseString = function(word){
	var toArray = word.split("");
	// console.log("The array is : "  + toArray);
	var reverseArray = toArray.reverse();
	// console.log("The reversed array is: " + reverseArray);
	var toString = reverseArray.join("");
	console.log("The reversed string is: " + toString);
	return toString;
};

reverseString("My lucky break");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function(wordList){
		var array = [];
		wordList.forEach(function(element) {
			var intoArray = array.push(element.length);
				// console.log(array);
	    	// console.log(element.length);
	});
	 var answer = Math.max.apply(null, array);
		console.log("The longest word has " + answer + " letters in it.");
};

findLongestWord(["good", "bad", "broken", "haversham"]);


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function(wordList, i) {
	var array = [];
	wordList.forEach(function(element){
		if(element.length > i){
		var intoArray = array.push(element);
		// 		console.log(element.length);
				// console.log(array);
			}
		});
console.log("The list of words with more than " + i + " letters is " + array);
};

filterLongWords(["good", "bad", "broken", "haversham"], 4);
