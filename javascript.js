//Preperation: Click Button, Generate a Random quote from the array list item.

//Create a list of arrays
var quotes = ["Believe in Yourself", "Stay Goal-Oriented", "You are great!",
"Let your Haters, hate.", "Haters, are our biggest fans.", "Never Give Up.", 
"Fake it, Till you make it!"
];

//Create a function to display a quote from the array 
function clickHere() {
	var randomQuote = Math.floor(Math.random() * (quotes.length));
	document.getElementById('showQuote').innerHTML = quotes[randomQuote];
}

