// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function(num1, num2){
	var message = "The highest number is: ";
	if (num1 > num2 ){
		console.log(message + num1);
	}
	else if (num2 > num1){
		console.log(message + num2);
	}
	else {
		console.log("The numbers are even!");
	}

};

// maxOfTwoNumbers(16,16);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them - first iteration - done as a series of if statements

//Answer - I did this first as a series of if statements. It got too complicated - so I rewrote it using arrays

var maxOfThreeSecond = function (num1, num2, num3){
	var array = [num1, num2, num3];
	console.log("Here is the array " + array);
	var answer = Math.max.apply(null, array);
	var message = "The highest number is " + answer;
	console.log(message);
	};

maxOfThreeSecond(10,100, 129);

//Here is the original version of this function using arrays.

// var maxOfThreeNumbers = function(num1, num2, num3){
// 	var message = "The highest number is: ";
// 	if (num1 > num2 && num1 > num3)
// 		{
// 			console.log(message + num1);
// 		}
// 	else if (num2 > num1 && num2 > num3)
// 		{
// 			console.log(message + num2);
// 		}
// 	else if (num3 > num1 && num3 > num2)
// 		{
// 		console.log(message + num3);
// 		}
// 	else if (num1 === num2 && num3 > num1)
// 		{
// 		console.log(message  + num3);
// 		}
// 	else if (num1 === num2 && num1 > num3)
// 		{
// 			console.log(message  + num1);
// 		}
// 	else if (num3 === num2 && num1 > num2)
// 		{
// 		console.log(message + num1);
// 		}
// 	else if(num3 === num2 && num3 > num1){
// 		console.log(message + num3);
// 	}
// 	else if (num1 === num2 && num2 === num3)
// 		{
// 		console.log("The numbers are all the same!" + message + num1);
// 		}
//
// };
//
// maxOfThreeNumbers(15,15,14);
