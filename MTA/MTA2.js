
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


var lines = {
	line_N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	line_L: ["8th", "6th", "Union Square", "3rd", "1st"],
	line_6: ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"]
};

//function to find what line a station is on

var findLine = function(station){
	for (var prop in lines) {
		var testLine = lines[prop].indexOf(station);
		if (testLine >= 0 ){
			return prop;
		}
	}
};

//function to find how many lines the traveller needs
var numLines = function(startLine, endLine){
	if (startLine === endLine ) {
	var travelLine = startLine;
	console.log("You only have to travel on one line.  It is the " + startLine);
	return true;
}
else {
	console.log("You will need to travel on two lines.  They are " + startLine + " and " + endLine);
	return false;
}
};


// function - finds the stations on single line
var findStations = function(startNum, endNum, line){
	var stationList = [];
	for (var i = startNum; i < endNum + 1; i ++){
		var station = lines[line][i];
		stationList.push(station);
	}
	return stationList;
};


//find journey if only one line

var oneJourney = function(startNum,endNum, startLine){
	var stationList;
	if (startNum <  endNum ){
		stationList = findStations(startNum,endNum,startLine);

	}
	else {
		stationList = (findStations(endNum,startNum,startLine)).reverse();
	}
	return stationList;
};
//

var twoLineJourney = function(startNum, endNum, startLine, endLine){
	//first leg
	var changeNum = lines[startLine].indexOf("Union Square");
	var firstLeg = oneJourney(startNum, changeNum , startLine);
	console.log("The first leg of the journey is on " + startLine + " and has the following stops: "+ firstLeg);

	//second leg
	var reboardNum = lines[endLine].indexOf("Union Square");
	var secondLeg = oneJourney(reboardNum, endNum, endLine);
	console.log("The second leg of the journey is on " + endLine + " and has the following stops: " + secondLeg);

//whole journey
	var secondLegNoUnionSq = secondLeg.shift();
	var totalJourney =  firstLeg.concat(secondLeg);
	console.log("You need to change at Union Square.  You will travel through " + totalJourney.length + " stations in total. They are:" + totalJourney);
};


//function that finds the journey relying on the above functions

var yourJourney = function(start, stop ){
	var startLine = findLine(start);
	var startNum = lines[startLine].indexOf(start);
	var endLine = findLine(stop);
	var endNum = lines[endLine].indexOf(stop);
	var lineNumbers = numLines(startLine,endLine);
	if (lineNumbers === true){
		var journey = findJourney(startNum,endNum,startLine);
		console.log("The stations you will travel through are: " + journey + ". The total number of stops is: " + journey.length);
	}
	else {
		twoLineJourney(startNum, endNum, startLine,endLine);
	}
};

yourJourney("Times Square", "Grand Central");
