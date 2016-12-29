// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


var rectangle = {
  length: 7,
  width: 7
};

var length = rectangle.length;
var width = rectangle.width;


var isSquare = function(){
	if ( length === width ) {
		console.log("Hurray! It's square");
		return true;
	}
	else {
		console.log("Nope. It's not square");
	}
};

// isSquare();

var area = length * width;
// console.log("The area of the rectangle is " + area);

var perimeter = 2 * (length + width);
// console.log("The perimeter is " + perimeter);

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle

// isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 6,
  sideB: 7,
  sideC: 8
};

var sideA = triangle.sideA;
var sideB = triangle.sideB;
var sideC = triangle.sideC;

console.log(sideA, sideB, sideC);

var isEquilateral = function(){
	if ( (sideA === sideB) && (sideB === sideC )) {
		// console.log("Hurray! It's an equilateral triangle");
		return true;
	}
	else {
		// console.log("Nope.  It's not an equilateral triangle");
	return false;
}
};


// var answer = isEquilateral();
// console.log(answer);

var isIsosceles = function(){
	if (isEquilateral() === true ) {
		console.log("Nope. It's not isosceles, because it's equilateral");
	}
	else if ( (sideA === sideB) || (sideA === sideC) || (sideB === sideC))
		{
			console.log("It's isosceles");
	}
	else {
		console.log("Nope it's not isosceles!");
}
};

isIsosceles();

// This uses a formula called Heron's formula

var s = (sideA + sideB + sideC) / 2;
console.log(s);

var area = Math.sqrt(s * (s - sideA ) * (s - sideB) * (s - sideC));

console.log(area);


// // We use the "angle" version of the Law of Cosines:
// //
// // cos(C) =  a2 + b2 − c22ab
// //
// // cos(A) =  b2 + c2 − a22bc
// //
// // cos(B) =  c2 + a2 − b22ca
//
// angle1 = Math.cos((Math.pow(sideA,2) + Math.pow(sideB,2) - Math.pow(sideC,2))/( 2 * sideA * sideB));
// console.log(angle1);
