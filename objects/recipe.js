// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
	title: "mojito",
	servings: 2,
	ingredients:
		[	"mint", "bacardi", "sugar syrup", "soda water"]
	};

// for (var prop in recipe) {
//   console.log(  prop + ": " +  recipe[prop] );
// }
console.log("title: " + recipe.title);
console.log("servings: " + recipe.servings);
console.log("ingredients: ");
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);
