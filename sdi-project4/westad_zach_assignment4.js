// Author: Zach Westad
// Created On: 03-1-2012
// Last Edit: 03-8-2012
// Deliverable 2

// Does a string follow a pattern like a phone number?.....
var myPhoneString = "507-330-2374",
    phoneNumberDisplay = myPhoneString;

var startArea = 0,
    endArea = myPhoneString.indexOf("-"),
    startMid = myPhoneString.indexOf("-") + 1,
    endMid = myPhoneString.lastIndexOf("-"),
    startLast = myPhoneString.lastIndexOf("-") + 1,
    endLast = myPhoneString.length;

var areaCode = myPhoneString.substring(0,endArea),
    midNumber = myPhoneString.substring(startMid,endMid),
    lastNumber = myPhoneString.substring(startLast,endLast),
    areaNumberCount = (endArea),
    midNumberCount = (endMid - startMid),
    lastNumberCount = (myPhoneString.length - (myPhoneString.lastIndexOf("-")+1));

console.log("The area code is " + areaCode)
console.log("The first three numbers after that are  " + midNumber)
console.log("The last four numbers after that are  " + lastNumber)

var checkNumber = function() {
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
    
      return areaCode, midNumber, lastNumber
};


checkNumber();


    if (areaCode, midNumber, lastNumber === true) {
    myPhoneString = "valid";
    } else myPhoneString = "invalid";
    
    
console.log("The phone number " + phoneNumberDisplay + " is " + myPhoneString);