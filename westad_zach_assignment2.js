// Author: Zach Westad
// Created On: 03-1-2012
// Last Edit: 03-8-2012
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

// This function determines mow much money i need to collect or give change for.
var buyAllParts = function(givenMoney) {
	var projectCost = sum, 
		wholeDollars;
	if (givenMoney < projectCost) {
		wholeDollars = sum - givenMoney;
		{ return say("Hey! You still need to give me $" + wholeDollars + "!!!"); }
	}

	else {
		(givenMoney > sum)
		wholeDollars = givenMoney - sum
		{return say("Thank you for giving me $" + givenMoney + ". Now here is $" + wholeDollars + " back as change.");
	} }
};

var customerNames = ["Ryan", "Bill", "Jack"];  // person's name of the car i will be working on
var customerName = customerNames[1]; // select the customer from the array above and put the choive in the array here.
var totalBill = []; // puts the total bill in one array 
var projectTools = true;  // true = I have all the tools,  false = i am missing some of my tools
var carSpeaker = 3;  // number of car speakers needed
var carSubType = false;  // true = wooden box, false = fiberglass box
var totalMoneyGiven = 300;


// Intro to the story / project
say("I received a phone call from " + customerName + " today wanting me to work on his car's stereo system.");
say("So I have him come over and pick out the parts he wants installed.");


// this is the section for the head unit
var headNames = ["Sony", "Kenwood", "Pioneer", "Pyle"];
var headCosts = [100, 120, 90, 60];

say("First I need to have " + customerName + " pick out a Head Unit. Here are his choices...");

for (var headNumber = 0; headNumber < headNames.length; headNumber++) { 
	pickOneHead();
};
// this area here you change the number in the three arrays to corespond with the correct ead unit
headName = headNames[1];
headCost = headCosts[1];
totalBill.push(headCosts[1]);

say(customerName + " picked out the " + headName + " Head Unit, so $" + headCost + " will be added to his total.");


// this determines the number of speakers needed for the install
if (carSpeaker > 0)  {
	var speakerAnswer = ("I need to purchase " + carSpeaker + " speakers for this car. So $" );
	var speakerCost = ( carSpeaker * 45);
} else {
	var speakerAnswer = ("and all the speakers are good, so $");
	var speakerCost = 0;
}
say(speakerAnswer + speakerCost + " will be added to the total.")
totalBill.push(speakerCost);


// this is the subwoofer section
say("I now need to have " + customerName + " pick out a subwoofer from this list.");

var subNames = ['8" Sub', '10" Sub', '12" Sub', '15" Sub'];
var subCosts = [60, 90, 110, 140];

for (var subNumber = 0; subNumber < subNames.length; subNumber++) { 
	pickOneSub();
};
// this area here you change the number in the three arrays to corespond with the correct ead unit
subName = subNames[2];
subCost = subCosts[2];
totalBill.push(subCosts[2]);

if (carSubType === true)  {
	var boxAnswer = ("wooden");
	var boxCost = 30;
	} else {
	var boxAnswer = ("fiberglass");
	var boxCost = 80;
};
totalBill.push(boxCost);

say("Since " + customerName + " picked out the " + subName + " from the list, $" + subCost + " will be added to his total.");
say(customerName + " also had the option of a wooden box or a fiberglass box, and he chose " + boxAnswer + " box, so $" + boxCost + " will be added to his total.");



// Now I am done with the first section and am moving on to the second half.

say("Now that I have had " + customerName + " pick his stuff out, I can start to get my hands dirty!");

if (projectTools === true)  {
	var toolsAnswer = ("I have all the tools I need to get started, so lets start out with the sub.");
} else {
	var toolsAnswer = ("I need to find my tools before I work on his car. Oops! :)");
}
// says if i have all my tools or not
say(toolsAnswer);

var screwsTotal = 8;
say("I need to put the subwoofer in the box with 8 screws.");
while ( screwsTotal > 0 ) {
	say(screwsTotal + " screws left to screw in.")
	screwsTotal-=2;
};
say("Now all the screws are screwed in!");

// final install messages
say("Well, I finished putting all the components in your car " + customerName + ", so you should be ready to go!");
say("Here is your bill, " + customerName + ".");



// scrtipt to show the number of items in an array
say("There were " + totalBill.length + " item(s) that are needed.");

// script to add all the units in the array tatalBill
var sum = 0;
for (var i = 0; i < totalBill.length ; i++) {
         sum = sum + totalBill[i];
};
say("The total bill was $" + sum + ".");

say("He gave me $" + totalMoneyGiven + ".");
// this uses a function to display what he owes / receives as change.
buyAllParts(totalMoneyGiven);
