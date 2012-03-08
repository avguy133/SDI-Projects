// Author: Zach Westad
// Created On: 03-1-2012
// Last Edit: 03-7-2012
// Deliverable 2
// Custom Car Audio

// function to shorten 'console.log()' statements wit 'say()'.
var say = function(message) { console.log(message); };

// This if the function to list the Head Units and their cost.
var pickOneHead = function() {
	var headName = headNames[headNumber];
	var costThisDeck = headCosts[headNumber];
	say( "The " + headNames[headNumber] + " is $" + headCosts[headNumber]);
};
// This if the function to list the Subs and their cost.
var pickOneSub = function() {
	var subName = subNames[subNumber];
	var costThisSub = subCosts[subNumber];
	say( "The " + subNames[subNumber] + " is $" + subCosts[subNumber]);
};
var customerNames = ["Ryan", "Bill", "Jack"];  // person's name of the car i will be working on
	customerName = customerNames[1];
var totalBill = []; // puts the total bill in one array 
var projectTools = ["Drill", "Wire Cutter", "Multimeter"];  // different tools i need
var findCarHead = false;  // true = I need to find a new head unit, false = I do not need a new head unit
var carSpeaker = 3;  // number of car speakers needed
var carSub = true;  // true = sub is needed, false = no sub needed
var carSubType = false;  // true = wooden box, false = fiberglass box



var headNames = ["Sony", "Kenwood", "Pioneer", "Pyle"];
var headCosts = [100, 120, 90, 60];

say("First I need to have " + customerName + " pick out a Head Unit. Here are his choices...");

for (var headNumber = 0; headNumber < headNames.length; headNumber++) { 
	pickOneHead();
};
headName = headNames[1];
headCost = headCosts[1];
totalBill.push(headCosts[1]);

say(customerName + " picked out the " + headName + " Head Unit, so $" + headCost + " will be added to his total.");


say("I now need to have " + customerName + " pick out a subwoofer from this list.");

var subNames = ['8" Sub', '10" Sub', '12" Sub', '15" Sub'];
var subCosts = [60, 90, 110, 140];

for (var subNumber = 0; subNumber < subNames.length; subNumber++) { 
	pickOneSub();
};

subName = subNames[2];
subCost = subCosts[2];
totalBill.push(subCosts[2]);

say("Since " + customerName + " picked out the " + subName + " from the list, $" + subCost + " will be added to his total.");







say("My next step is to put everything together.");




var screwsTotal = 8;
say("I need to put the subwoofer in the box with 8 screws.");
while ( screwsTotal > 0 ) {
	say(screwsTotal + " screws left to screw in.")
	screwsTotal-=2;
};
say("Now all the screws are screwed in!");



// scrtipt to show the number of items in an array
say("There are " + totalBill.length + " item(s) that are needed.");

// script to add all the units in the array tatalBill
var sum = 0;
for (var i = 0; i < totalBill.length ; i++) {
         sum = sum + totalBill[i];
};
say("the total bill was " + sum);







/*
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
*/


// Activity: Boolean Logic
//var p = true, q = false, r = false;
// Given: (p and q) or r
// if ((p && q) || r) {
//     console.log("The expression is true");
//  } else {
//     console.log("The expression is false");
// }
/*
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
*/