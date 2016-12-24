//Which number is bigger

var numOne = 10;
var numTwo = 10;

if (numOne > numTwo) {
	console.log("The biggest number is " + numOne);
}
else if (numTwo > numOne){
	console.log("The biggest number is " + numTwo);
}
else {console.log("The numbers are equal and it's " + numOne);
}

//word translator

var language = "Russian";

if (language ==="French") {
	console.log("Bonjour mon amor");
}
else if (language === "English")
{console.log("Hello");
}
else {console.log("G'day");
}

var score = "F"

if (score === "A") {
	console.log("Great job");
}
else if (score === "B"){
	console.log("Well done. You've worked hard!");
}
else if (score === "C") {
	console.log("A good solid performance");
}
else if (score === "D") {
	console.log("Ok.  YOu need to study a bit more")
}
else {
	console.log("Oh dear!")
}


//
var noun = "cow";
var numOfNoun = 1;
var message = "You have " + numOfNoun + " " + noun;

if (numOfNoun >  1){
	console.log(message + "s.");
}
else {
	console.log(message + ".");
}
