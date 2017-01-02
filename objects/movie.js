// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes

var movies = [
	{
		name: "Puff the Magic Dragon ",
		duration: 20,
		stars: ["Puff"]
	},
	{
		name: "The Lord of the Rings",
		duration: 120,
		stars: ["Frodo", "Gandalf"]
	},
	{
		name: "James Bond",
		duration: 120,
		stars: ["Bond, James Bond", "Pussy Galore"]
	},
	{
		name: "Braveheart",
		duration: 60,
		stars: ["Awful Mel", "Pretty girl"]
	}
];

var movieMessage = function(object){
	for (var prop in object) {
		var message = object[prop].name + " lasts  " + object[prop].duration + " minutes and stars: " + object[prop].stars;
		console.log(message);
		}
	};

	movieMessage(movies);
