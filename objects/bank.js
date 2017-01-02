//Ask BEN - I DON'T KNOW WHY THAT DEPOSIT FUNCTION IS ACTUALLY WORKING!


// // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// //
// // The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// //
// // Accounts
// //
// // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
//

//all of the bank accounts
var allAccounts = [
	{name: "Jane",
		balance: 240
	},
	{name: "Jim",
		balance: 36
	},
];

//total amount in all the acounts - find the balance of each account - need to find the value for each key called balance push to an array - use the reduce functionality to add them all up

var sumArray = function(array){
	var sum = array.reduce(function(a, b) {
	  return a + b;
	},
	0);
	// console.log("The sum of the array is: " + sum);
	return sum;
};


var allBalances = [];

var totalBank = function(accountArray){
	for (var prop in accountArray) {
	var balance  = accountArray[prop].balance;
	allBalances.push(balance);
	}
	var answer = sumArray(allBalances);
	console.log("The total currently held in the bank is $" + answer);
	return answer;
};

// totalBank(allAccounts);

// console.log(allBalances);

//add a new account - add it to allAccounts with right details

var addAccount = function(accountName, balance){
	var newAccount = {
		name: accountName,
		balance: balance
	};
	console.log(newAccount);
	allAccounts.push(newAccount);
};

// addAccount("Jill", 754);
// console.log(allAccounts);

//deposit to a specific account

//
var deposit = function(accountName, deposit){
	//find the right account
	var account = allAccounts.filter(function(allAccounts){
		return allAccounts.name === accountName;
		}
		);
	console.log(account);
	// var accountAsObj = account[0];
	// console.log(accountAsObj);

	var currentBalance = account[0].balance;
	console.log("The current balance is " + currentBalance);
	console.log("The deposit is " + deposit);
	var newBalance = currentBalance + deposit;
	// accountAsObj.balance = newBalance;
	account[0].balance = newBalance;
	// console.log(accountAsObj);
	console.log("The new balance is " + newBalance);

};

// deposit("Jim", 90);

// console.log("The new balance for " + allAccounts[1].name + " is " + allAccounts[1].balance);


// withdraw money
//
//
var withdraw = function(accountName, withdrawal){
	//find the right account
	var account = allAccounts.filter(function(allAccounts){
		return allAccounts.name === accountName;
		}
		);
	console.log(account);
	var currentBalance = account[0].balance;
	console.log("The current balance is " + currentBalance);
	console.log("The withdrawl is " + withdrawal);
	var newBalance = currentBalance - withdrawal;
	account[0].balance = newBalance;
	console.log("The new balance is " + newBalance);

};

withdraw("Jane", 90);
withdraw("Jane", 50);

console.log("The new balance for " + allAccounts[0].name + " is " + allAccounts[0].balance);
