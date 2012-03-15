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

// this area adds the hours of everything to the projects.timeUsed array
projects.timeUsed.push(stereo.timeConsumed);
projects.timeUsed.push(speaker.timeConsumed * speakerNumber);
projects.timeUsed.push(subwoofer.timeConsumed);



// adds the total hours of labor
var laborSum = 0;
for (var i = 0; i < projects.timeUsed.length ; i++) {
         laborSum = laborSum + projects.timeUsed[i];
};

// calculates the labor costs
var totalLaborCost = projects.timeUsed * 15

// this area adds the cost of everything to the cart array
projects.cart.push(stereo.cost);
projects.cart.push(speaker.cost * speakerNumber);
projects.cart.push(subwoofer.cost);
projects.cart.push(totalLaborCost);










// this section controls all the output in the log

projects.say("Today I received a phone call from " + customer.name + " wanting me to work on his " + customer.vehicleYear + " " + customer.vehicleMake + " " + customer.vehicleModel + ".");
projects.say("So I had him come over so I can get it started.");
projects.say(customer.name + " wanted the " + stereo.name + " stereo, so I installed it in the " + customer.vehicleModel);
projects.say("I then asked what " + customer.name + " wanted for the speakers. " + " The response was " + speaker.name + " speakers.");
projects.say(customer.name + " also wanted a subwoofer. So I showed " + customer.name + " the different subs available and the " + subwoofer.name + " was chosen.");
projects.say("Since I now know what i need to install, I can get the wiring diagram for the " + customer.vehicleYear + " " + customer.vehicleMake + " " + customer.vehicleModel + "."  );
projects.say("The components are now installed and I have spent " +  + " hours working on this vehicle.");
projects.say("After all the components and the labor, the bill comes to $" + sum + ".");
projects.say("I give " + customer.name + " the bill and they pay me for the job!");



projects.say("The total bill was $" + sum + ".");