"use strict";

var wageA;
var hoursA;
var earningsA;
wageA = 17.24;
hoursA = 34;
earningsA = wageA * hoursA;

console.log("wageA= ", wageA);
console.log("hoursA= ", hoursA);
console.log("earningsA= ", earningsA);
console.log("totalearningsA=", totalearningsA);

var overtimeA;
overtimeA = ((wageA * 1.5) * (hoursA - 40));
var totalearningsA;
totalearningsA = earningsA + overtimeA;

var wageB;
var hoursB;
var earningsB;
wageB = 23.43;
hoursB = 47;
earningsB = wageB * hoursB;

console.log("wageB= ", wageB);
console.log("hoursB= ", hoursB);
console.log("earningsB= ", earningsB);
console.log("totalearningsB=", totalearningsB);

var overtimeB;
overtimeB = (wageB * 1.5) * (hoursB - 40);
var totalearningsB;
totalearningsB = earningsB + overtimeB;

if (hoursA > 40) {
    earningsA = (wageA * 40);
    overtimeA = ((wageA * 1.5) * (hoursA - 40));
    totalearningsA = (earningsA + overtimeA);
}
 else{
    earningsA = wageA * hoursA;
    overtimeA = 0;
    totalearningsA = earningsA;
	}

if (hoursB > 40){
    earningsB = (wageB * 40);
    overtimeB = ((wageB * 1.5) * (hoursB - 40));
    totalearningsB = (earningsB + overtimeB);
}
 else{
    earningsB = wageB * hoursB;
    overtimeB = 0;
    totalearningsB = earningsB};