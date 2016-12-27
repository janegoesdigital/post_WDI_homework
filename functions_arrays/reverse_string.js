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
 
