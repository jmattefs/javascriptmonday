"use strict";

function reg(wage, hours) {
	var regResult
	regResult = wage * hours;
	var fortyResult
	fortyResult = wage * 40;
	if (hours <= 40) {
		return regResult;
	} else {
		return fortyResult;
		}
}
console.log(reg(17.24,34));
console.log(reg(23.43,47));

function ot(wage, hours) {
	var otResult;
	otResult = ((1.5 * wage) * (hours - 40));
	if (hours < 40) {
		otResult = 0;
		return otResult;
	} else {
		return otResult;
	}
}

console.log(ot(17.24,34));
console.log(ot(23.43,47));

console.log(reg(17.24,34) + ot(17.24,34));
console.log(reg(23.43,47) + ot(23.43,47));
