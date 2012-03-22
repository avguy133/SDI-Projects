// Author: Zach Westad
// Created On: 03-1-2012
// Last Edit: 03-8-2012
// Deliverable 2

// Does a string follow a pattern like a phone number?.....


// these are the variables that define the phone number to be checked
var myPhoneString = "507-330-2374",
    phoneNumberDisplay = myPhoneString;
// this is the function that checks for the correct # of digits and the value of them
    var checkNumber = function() {
    // this section relates the sections within the phone number
    var startArea = 0,
        endArea = myPhoneString.indexOf("-"),
        startMid = myPhoneString.indexOf("-") + 1,
        endMid = myPhoneString.lastIndexOf("-"),
        startLast = myPhoneString.lastIndexOf("-") + 1,
        endLast = myPhoneString.length;
    // this section takes the output from the last section and shortens the text and determines the # of digits in a section
    var areaCode = myPhoneString.substring(0,endArea),
        midNumber = myPhoneString.substring(startMid,endMid),
        lastNumber = myPhoneString.substring(startLast,endLast),
        areaNumberCount = (endArea),
        midNumberCount = (endMid - startMid),
        lastNumberCount = (myPhoneString.length - (myPhoneString.lastIndexOf("-")+1));  
        
        
        
        if(100 <= areaCode <= 999) {
        areaCode = true;   
        } else areaCode = false;
        if(areaNumberCount === 3) {
        areaCode = true;   
        } else areaCode = false;
        if(100 <= midNumber <= 999) {
        midNumber = true;   
        } else midNumber = false;
        if(midNumberCount === 3) {
        midNumber = true;   
        } else midNumber = false;
        if(0 <= lastNumber <= 9999) {
        lastNumber = true;   
        } else lastNumber = false;
        if(lastNumberCount === 4) {
        lastNumber = true;   
        } else lastNumber = false;
    // take the values in the function and decides if the phone Number is valid
        if (areaCode, midNumber, lastNumber === true) {
        myPhoneString = "valid";
        } else myPhoneString = "invalid";
        
        
          return areaCode, midNumber, lastNumber, myPhoneString
};
// runs the function
checkNumber();
// console log to display if the number is valid
console.log("The phone number " + phoneNumberDisplay + " is " + myPhoneString);