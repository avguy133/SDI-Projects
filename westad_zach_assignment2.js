// Author: Zach Westad
// Created On: 03-1-2012
// Last Edit: 03-7-2012
// Deliverable 2
// Custom Car Audio

// function to shorten 'console.log()' statements wit say().
var say = function(message) { console.log(message); };

var customerNames = ["Ryan", "Bill", "Jack"];  // person's name of the car i will be working on

customerName = customerNames[1];

var totalBill = []; // puts the total bill in one array 


var projectTools = ["Drill", "Wire Cutter", "Multimeter"];  // different tools i need
var findCarHead = false;  // true = I need to find a new head unit, false = I do not need a new head unit
var carSpeaker = 3;  // number of car speakers needed
var carSub = true;  // true = sub is needed, false = no sub needed
var carSubType = false;  // true = wooden box, false = fiberglass box

say("I now need to have " + customerName + " pick out a subwoofer from this list.");

var productNames = ['8" sub', '10" sub', '12" sub', '15" sub'];
var productCosts = [60, 80, 110, 140];

for (var i = 0; i < productNames.length; i++) {
	say( "The " + productNames[i] + " is $" + productCosts[i]);
};

productName = productNames[2];
productCost = productCosts[2];
totalBill.push(productCosts[2]);

say("Since " + customerName + " picked out the " + productName + " from the list, $" + productCost + " will be added to his total.");

say("His total is now " + );

var screwsTotal = 8;
say("Now I need to put in the screws.");
while ( screwsTotal > 0 ) {
	say(screwsTotal + " screws left to screw in.")
	screwsTotal-=2;
};
say("Now all the screws are screwed in!");











if (projectTools === true)  {
	var toolsAnswer = ("and I have all the tools I need to get started!");
} else {
	var toolsAnswer = ("but I need to find my tools first.");
}

if (findCarHead === true)  {
	var headAnswer = ("I'm going to have to find a new Head Unit ");
} else {
	var headAnswer = ("The Head Unit will work ");
}

if (carSpeaker > 0)  {
	var speakerAnswer = ("and I need to purchase ", carSpeaker, " speakers for this car." );
} else {
	var speakerAnswer = ("and all the speakers are good!");
}

if (carSub === true)  {
	var subAnswer = ("I will need to get a subwoofer ");
	if (carSubType === true)  {
	var boxAnswer = ("and make a wooden box for the Sub.");
	} else {
	var boxAnswer = ("and make a fiberglass box for the Sub.");
	}
} else {
	var subAnswer = ("No subwoofer will be needed. :(");
}

console.log ("I am working on a project for ", customerName[0], ", ", toolsAnswer, headAnswer, speakerAnswer, subAnswer, boxAnswer);

// Activity: Boolean Logic
//var p = true, q = false, r = false;
// Given: (p and q) or r
// if ((p && q) || r) {
//     console.log("The expression is true");
//  } else {
//     console.log("The expression is false");
// }

var p = true, q = false, r = false;

console.log("Given p = true, q = false, r = false,");
// for p and (q or r), example..
if ((p && q) || r) {
    console.log("The expression 'p and (q or r)' is true");
} else {
    console.log("The expression 'p and (q or r)' is false");
}

// for (p and not q) or (q and r), example..
if ((p && !q) || (q && r)) {
    console.log("The expression '(p and not q) or (q and r)' is true");
} else {
    console.log("The expression '(p and not q) or (q and r)' is false");
}

// for not(p or r), example..
if (!(p || r)) {
    console.log("The expression 'not(p or r)' is true");
} else {
    console.log("The expression 'not(p or r)' is false");
}
