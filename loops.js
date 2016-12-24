// Exercises: For loops



// The even/odd reporter
// //
// // Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

var evenTester = function(x,y){
	for (var x = 0; x < y; x ++ ) {
		if (x % 2 === 0){
		console.log(x + " is even");
		}
	}
}

evenTester(10, 10);


// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

var multiplier  = function(){
	for (var x = 0; x < 11; x++)
		{
			var calc = x * 9;
			console.log(x + " multiplied by 9 is " + calc);
		}
};

multiplier();
//
//
var multiplier  = function(){
	for (var x = 1; x < 11; x++)
		{
			for (var y = 1; y < 11; y++)
			{var calc = x * y;
			console.log(y + " times " + x + " is " + calc);
		}
	}
};

multiplier();


// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.



var assignGrade = function(score){
	if (score < 100 && score >= 90) {
		console.log("Great job! You got an A");
	}
	else if (score < 90 && score >=80){
		console.log("Well done. You've worked hard!  You got a B");
	}
	else if (score < 80 && score >=70) {
		console.log("A good solid performance.  You can a C");
	}
	else if (score < 70 && score >=60) {
		console.log("Ok.  YOu need to study a bit more.  You got a D");
	}
	else {
		console.log("Oh dear!  You failed!  You got an F");
	}
};



console.log(assignGrade(80));
