// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myInstrument = ["Martin Guitar", "Taylor Guitar", "Felix the fiddle", "Mandy the mandolin", "tin whistle"];

var myBooks = ["Pride and Prejudice", "Disc World - especially the Death series", "Lovely Bones", "MiddleMarch", "The Mill on the Floss"];

//This works - but I can only call it once from this file. 

	var suffix = function(list){

			for (var i = 0; i < list.length; i ++) {

		 		if ( i === 0 ) {
				suffix = i + 1 + "st";
				}
				else if (i === 1 ){
				suffix = i + 1 + "nd";
				}
				else if (i === 2 ) {
				suffix = i + 1 + "rd";
				}
				else {
				suffix = i + 1 + "th";
				}
				var message = "My " + suffix + " choice is: " + list[i] + ".";
				console.log(message);
		}
	};

suffix(myBooks);

// suffix(myInstrument);
