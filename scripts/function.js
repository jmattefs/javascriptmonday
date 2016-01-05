"use strict";

function regEarnings(wage, hours) {
	var wageA = wage;
    var hoursA = hours;
	var earningsA = wageA * hoursA;
	var overtimeA = ((wageA * 1.5) * (hoursA - 40));
	var totalearningsA = (earningsA + overtimeA);
	
	
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
	return wage * hours;
}
console.log(regEarnings(17.24,34));


	