// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.


var basket = {
  banana: "1.25",
  handkerchief: "0.99",
  Tshirt: "25.01",
  apple: "444",
  nalgene: "10.34",
  proteinShake: "22.36"
};



var sumArray = function(array){
	var sum = array.reduce(function(a, b) {
	  return a + b;
	},
	0);
	// console.log("The sum of the array is: " + sum);
	return sum;
};

var costs = [];

var costsTotal = function(cart){

	for (var prop in cart) {
	var cost = cart[prop];
	var costToNum = parseFloat(cost, 10);
	costs.push(costToNum);
	// console.log("Costs inside the function" + costs);
	  }
		var answer = sumArray(costs);
		console.log("Your total cost for today is $" + answer);
 		return answer;
};


costsTotal(basket);
