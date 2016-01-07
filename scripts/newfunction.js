"use strict";
function acquireData(message) {
	var acquire;
	acquire = prompt(message);
	return acquire;
}

function regCalc(wage, hours) {
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

function otCalc(wage, hours) {
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


function addRegOT(reg, ot) {
	var result;
	result = reg + ot;
	return result;
}

function calcMessage(userName, userHours, userTotal) {
	var finalMessage;
	finalMessage = userName + ", you worked " + userHours + " hours, and earned $" + userTotal + " this week. ";
	return finalMessage;
}

function main () {
	var nameMessage;
	var hoursMessage;
	var wageMessage;
	var name;
	var hours;
	var wage;
	var total;
	var reg;
	var ot;
	var message;

	
	nameMessage = "What is your name?";
	hoursMessage = "How many hours did you work this week?";
	wageMessage = "What is your hourly wage?";
	name = acquireData(nameMessage);
	hours = acquireData(hoursMessage);
	wage = acquireData(wageMessage);
	reg = regCalc(wage, hours);
	ot = otCalc(hours, wage);
	total = addRegOT(reg, ot);
	message = calcMessage(name, hours, total);
	document.write(message);
	
	
}
main()

