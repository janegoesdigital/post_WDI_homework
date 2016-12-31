
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

var journey = function(start, stop){
	var startStation;
	var endStation;
	//find out if the stations are on the line
	var startNum = lineN.indexOf(start);
	console.log("The starting station has an index of " + startNum + " and is " + lineN[startNum]);
	var endNum = lineN.indexOf(stop);
	console.log("The ending station has an index of "  + endNum + " and is " + lineN[endNum]);

	//test which way they are travelling
	var backwards;
	if (startNum > endNum ){
		console.log("You are travelling backwards along the line");
		startStation = endNum;
		endStation = startNum;
		backwards = true;
	}
	else {
		console.log("You are travelling forwards along the line");
		startStation = startNum;
		endStation = endNum;
		backwards = false;
	}

	// print out all the stations
	var stationList = [];
	var findStations = function(start, end){
		for (var i = start; i < end + 1; i ++){
		stationList.push(lineN[i]);
		// console.log(stationList);
	}
	};
	findStations(startStation,endStation);
	if (backwards === false ){
	console.log("The stations you will encounter are: " + stationList);
	}
	else {
		console.log("The stations you will encounter are: " + stationList.reverse());
	}
};

journey( "34th", "23rd");
