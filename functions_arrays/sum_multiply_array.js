// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.



var sumArray = function(array){
	var sum = array.reduce(function(a, b) {
	  return a + b;
	},
	0);
	console.log("The sum of the array is: " + sum);
};

var array = [10,3,11,56];

sumArray(array);

var multiplyArray = function(array){
	var sum = array.reduce(function(a, b) {
	  return a * b;
	},
	1);
	console.log("The product of the elements of the array is: " + sum);
};

multiplyArray(array);
