// Author: Zach Westad
// Created On: 03-10-2012
// Last Edit: 03-14-2012
// Deliverable 3
// Custom Car Audio

// These variables are arrays that keep the total bill and hours together
var cart = [];
var timeUsed = [];


// this references the json_assignment3.js file and you change the number in the array
var customer = jsonCust.customers[3]

var stereo = jsonStereo.Products[2]

var speaker = jsonSpeaker.Products[1]

var subwoofer = jsonSub.Products[1]

// number of each component needed
var headNumber = 1;
var speakerNumber = 4;
var subNumber = 1;

// object for the say function
var projects = {
	say: function(message) { console.log(message); }
}


// this area adds the hours of everything to the projects.timeUsed array
timeUsed.push(stereo.timeConsumed * headNumber);
timeUsed.push(speaker.timeConsumed * speakerNumber);
timeUsed.push(subwoofer.timeConsumed * subNumber);

// this area adds the cost of everything to the cart array
cart.push(stereo.price * headNumber);
cart.push(speaker.price * speakerNumber);
cart.push(subwoofer.price * subNumber);

// adds the total hours of labor
var laborSum = 0;
for (var i = 0; i < timeUsed.length ; i++) {
         laborSum = laborSum + timeUsed[i];
};

// calculates the labor costs
var totalLaborCost = laborSum * 15;
cart.push(totalLaborCost);

// script to add all the units in the array tatalBill
var sum = 0;
for (var i = 0; i < cart.length ; i++) {
         sum = sum + cart[i];
};






// this section controls all the output in the log

projects.say("Today I received a phone call from " + customer.name + " wanting me to work on his " + customer.vehicleYear + " " + customer.vehicleMake + " " + customer.vehicleModel + ".");
projects.say("So I had him come over so I can get it started.");
projects.say(customer.name + " wanted the " + stereo.name + " stereo, so I installed it in the " + customer.vehicleModel);
projects.say("I then asked what " + customer.name + " wanted for the speakers. " + " The response was " + speaker.name + " speakers.");
projects.say(customer.name + " also wanted a subwoofer. So I showed " + customer.name + " the different subs available and the " + subwoofer.name + " was chosen.");
projects.say("Since I now know what i need to install, I can get the wiring diagram for the " + customer.vehicleYear + " " + customer.vehicleMake + " " + customer.vehicleModel + "."  );
projects.say("After all the components and the labor, the bill comes to $" + sum + ".");
projects.say("I give " + customer.name + " the bill and they pay me for the job!");



projects.say(laborSum);