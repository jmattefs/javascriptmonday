"use strict";

function reg(wage, hours) {
	var regResult
	regResult = wage * hours;
	var maxRegHours
	maxRegHours = 40
	var fortyResult
	fortyResult = wage * maxRegHours;
	if (hours <= maxRegHours) {
		return regResult;
	} else {
		return fortyResult;
		}
}
console.log(reg(17.24,34));
console.log(reg(23.43,47));

function ot(wage, hours) {
	var hoursBeforeOT
	hoursBeforeOT = 40
	var otMultiplier;
	otMultiplier = 1.5
	var otPay
	otPay = wage * otMultiplier
	var otHours
	otHours = hours - hoursBeforeOT
	var otResult;
	otResult = otPay * otHours
	if (hours < hoursBeforeOT) {
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

