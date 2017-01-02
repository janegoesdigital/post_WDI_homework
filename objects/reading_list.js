// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var readingList = [
	{
		title: "War of civilisations",
		author: "Somebody",
		alreadyRead: false
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		alreadyRead: true
	},
	{
		title: "Lord of the Rings",
		author: "J.R.R Tolkein",
		alreadyRead: true
	},
	{
		title: "My Brilliant Career",
		author: "Miles Franklin",
		alreadyRead: false
	},
	{
		title: "Dark Age Ahead",
		author: "Jane Jacobs",
		alreadyRead: false
	},
	{
		title: "Great Australian Speeches",
		author: "Michael Fullilove",
		alreadyRead: false
	}
];

for (var prop in readingList) {
	var message = readingList[prop].title + " by " + readingList[prop].author;
	if (readingList[prop].alreadyRead === true ){
		console.log("You champion you have read this: " + message);
	}
	else {
		console.log("Still got some reading to do of: " + message);
	}
}
