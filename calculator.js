// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//
// Bonus: Round the result so there are only two digits after the decimal.


var squareNumber = function(number){
	var calculation = number * number;
	var result = calculation.toFixed(2);
	console.log("The result of squaring the number " + number + " is " + result);
	return result;
};

squareNumber(0.7777);


var halfNumber = function(half) {
	var calculation = half / 2;
	var result = calculation.toFixed(2);
	console.log("Half of " + half + " is " + result);
	return result;
};

halfNumber(123333);


var percentOf = function(numerator, denominator) {
	var calculation = numerator / denominator * 100;
	var result = calculation.toFixed(2);
	console.log(numerator + " is " + result + " per cent of " + denominator);
	return result
};

percentOf(17,253);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function(radius){
	var calculation = Math.PI * radius * radius;
	var result = calculation.toFixed(2);
	console.log("The area of a circle with a radius of " + radius + " is " + result);
	return result;
};

areaOfCircle(676);


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var calculator = function(number){
	var square = squareNumber(number);
	var half = halfNumber(square);
	var area = areaOfCircle(half);
	var percent = percentOf(area,square);


};

calculator(10);
