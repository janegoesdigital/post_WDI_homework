
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


var lines = {
	line_N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	line_L: ["8th", "6th", "Union Square", "3rd", "1st"],
	line_6: ["Grand Central", "33rd", "28th", "23rd", "Union Square",  "Astor Place"]
};

// console.log("This logs the entire nested array" + lines.lineN);
// console.log("This logs the entire nested array and takes in a string " + lines["lineN"]);
// console.log(" This logs a single station within the nesterd array " +  lines.lineN[3]);


var findLine = function(station){
	for (var prop in lines) {
		var testLine = lines[prop].indexOf(station);
		// console.log("The index of the station on the testline is : " + testLine);
		if (testLine >= 0 ){
			return prop;
		}
		// else {
		// 	console.log("Sorry we cannot find " + station + "station");
		// }
	}
};




var startLine = findLine("34th");
// console.log("The start line is :" + startLine);

var startNum = lines[startLine].indexOf("34th");
// console.log("The index number of the starting Station is " + startNum);

var endLine = findLine("3rd");
// console.log("The end line is :" + endLine);

var endNum = lines[endLine].indexOf("3rd");
// console.log("The index number of the ending Station is " + endNum);

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

numLines(startLine,endLine);

var journey = function(){
	if (numLines === true){
		findJourney();
	}
	else {

	}
};

var reboard = function(endNum, endLine){
	var unionSqIndex = lines[endLine].indexOf("Union Square");
	// console.log("The union sqare number is " + unionSqIndex);
	var index;
	if (endNum > unionSqIndex){
		index = unionSqIndex + 1;
	}
	else {
		index = unionSqIndex - 1;
	}
	return index;
};

// console.log("The index number of the reboard station is " + reboard(endNum, endLine));

//worker function - test which way they are travelling on a single line
var direction = function(startNum,endNum){
if (startNum > endNum ){
	console.log("You are travelling backwards along the line");
	startStation = endNum;
	endStation = startNum;
	direction = true;
}
else {
	console.log("You are travelling forwards along the line");
	startStation = startNum;
	endStation = endNum;
	direction = false;
}
};

// direction(1,3);

//worker function - prints out station list
var findStations = function(startNum, endNum, line){
	var stationList = [];
	for (var i = startNum; i < endNum + 1; i ++){
		var station = lines[line][i];
		// console.log("Stations from find stations" + station);
		stationList.push(station);
	}
	// console.log(stationList);
	return stationList;
};


// print out stations if travelling in one line

var findJourney = function(startNum,endNum, startLine){
	var stationList;
	// console.log(stationList);
	direction(startNum,endNum);
	if (direction === false ){
		stationList = findStations(startNum,endNum,startLine);
	// console.log("The stations you will through are: " + stationList + ". The total number of stops is: "+ stationList.length);
	}
	else {
		stationList = (findStations(endNum,startNum,startLine)).reverse();
		// console.log("The stations you will travel through are: " + stationList + ". The total number of stops is: " + stationList.length);
	}
};

// findJourney(startNum,endNum,startLine);



// findStations(1,4,startLine);
// console.log(stationList);

// //print out all the stations if two lines
// //find the stations on first line between startNum and union square
// //then find the station on the second line, between endNum and union square

var twoLineJourney = function(startNum, endNum, startLine,endLine){
	var changeStopNum = lines[startLine].indexOf("Union Square");
	// console.log("The index number of union square on the start line is " + changeStopNum);

	var firstLeg = findStations(startNum, changeStopNum, startLine);
	// console.log("The first leg of the journey is " + firstLeg);

	var reboardNum = reboard(endNum,endLine);
	// console.log("The index number of the station after the reboard stationis: " + reboardNum);
	var secondLeg = findStations(reboardNum, endNum, endLine);
	// console.log(typeof secondLeg);
	// console.log("The second leg of the journey is " + secondLeg);
	var totalJourney =  firstLeg.concat(secondLeg);
	console.log("You will change at Union Square, and will travel through " + totalJourney.length + " stations. The stations you will travel on are:" + totalJourney);
};
//

twoLineJourney(startNum,endNum, startLine,endLine);
//
//
