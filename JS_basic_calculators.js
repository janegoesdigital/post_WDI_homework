
//How old are people

var currYear = 2016;
var birthYear = 1967;
var age1 = currYear - birthYear;
var age2 = age1 - 1;
var ageMessage = "They are either " + age1 + " or " + age2 + ".";
console.log(ageMessage);


//How many snacks will you eat every day!
var currAge = 49;
var oldAge = 90;
var snacksPerDay = 1;
var years = oldAge - currAge;
var days = years * 365;
var snacksEaten = days * snacksPerDay;
var messageSnacks = "Oh my goodness! You will eat " + snacksEaten + " snacks before you croak!";
console.log(messageSnacks);

//Some geometry
var radius = 20;
var circumference = radius * 2 * Math.PI;
var messageCircum = "The circumference based on the radius is " + circumference;
console.log(messageCircum);

var area = Math.PI * radius * radius;
var messageArea = "The area based on the radius is " + area;
console.log(messageArea);


//Temperature converter

var tempInF = 100;
var tempInC = 32;
var tempCtoF = (tempInC * 9 /5 ) + 32;
var tempFtoC = (tempInF - 32) * 5 / 9;
var messageTemp = "The temperature in celcius is " + tempFtoC + " degrees celcius. The temperature in fahrenheit is " + " degrees fahrenheit.";
console.log(messageTemp);


function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

var cowString = String(7);
console.log(cowString);

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);
