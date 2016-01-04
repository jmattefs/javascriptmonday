"use strict";

var wageA;
var wageB;
var hoursA;
var hoursB;
var OTwageA;
var OTwageB;
var earningsA;
var earningsB;
var OTearningsA;
var OTearningsB;
var totalearningsA;
var totalearningsB;
var earnings40A;
var earnings40B;

wageA = 17.24;
wageB = 23.43;
hoursA = 34;
hoursB = 47;
OTwageA = 25.86;
OTwageB = 35.15;
earningsA = wageA * hoursA;
earningsB = wageB * hoursB;
OTearningsA = OTwageA * (hoursA - 40);
OTearningsB = OTwageB * (hoursB - 40);
totalearningsA = earnings40A + OTearningsA;
totalearningsB = earnings40B + OTearningsB;
earnings40A = wageA * 40;
earnings40B = wageB * 40;

if (hoursA > 40){
    console.log("totalearningsA=", totalearningsA);
} else {
	console.log("earningsA=", earningsA);
}
if (hoursB > 40){
    console.log("totalearningsB=", totalearningsB);	
} else{
    console.log("earningsB=", earningsB);	
}