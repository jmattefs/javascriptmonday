"use strict";

function regEarnings(wage, hours) {
	var wageA = wage;
    var hoursA = hours;
	var earningsA = wageA * hoursA;
	var overtimeA = ((wageA * 1.5) * (hoursA - 40));
	var totalearningsA = (earningsA + overtimeA);
	var wageB = wage;
	var hoursB = hours;
	var earningsB = wageB * hoursB;
	var overtimeB = (wageB * 1.5) * (hoursB-40);
	var totalearningsB = (earningsB + overtimeB);
	
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
	
	return wage * hours;
}
console.log(regEarnings(17.24,34));
console.log(regEarnings(23.43,47));


	