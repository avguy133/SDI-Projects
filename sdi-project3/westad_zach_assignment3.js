// Author: Zach Westad
// Created On: 03-10-2012
// Last Edit: 03-14-2012
// Deliverable 3
// Custom Car Audio



// this references the json_assignment3.js file and you change the number in the array
var customer = jsonCust.customers[3]

var stereo = jsonStereo.Products[2]

var speaker = jsonSpeaker.Products[1]

var subwoofer = jsonSub.Products[1]

// number of speakers needed
var speakerNumber = 4;

// object to keep the variables together
var projects = {
	timeUsed: [],
	cart: [],
	say: function(message) { console.log(message); }
}


// script to add all the units in the array tatalBill
var sum = 0;
for (var i = 0; i < projects.cart.length ; i++) {
         sum = sum + projects.cart[i];
};












projects.say("Today I received a phone call from " + customer.name + " wanting me to work on his " + customer.vehicleYear + " " + customer.vehicleMake + " " + customer.vehicleModel + ".");
projects.say("So I had him come over so I can get it started.");
projects.say(customer.name + " wanted the " + stereo.name + " stereo, so I installed it in the " + customer.vehicleModel);
projects.say("I then asked what " + customer.name + " wanted for the speakers. " + " The response was " + speaker.name + " speakers.");



projects.say("The total bill was $" + sum + ".");