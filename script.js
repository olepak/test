"use strict";
function outputPrimeNumbers() {
	let n = parseInt(prompt("Enter any number"));
	if (isNaN(n)) {
		alert("Incorrect input");
	} else {
		let accumulated = "";
		let divisorArray = [];
		for (let i = 2; i <= n; i++) {
			for (let j = 1; j <= i; j++) {
				if (i % j == 0) {
					divisorArray.push(j);
				} else {
					continue;
				}
			}
			if ((divisorArray.length = 2)) {
				accumulated += ` ${i}`;
			}

			console.log(accumulated);
		}
	}
	alert("done");
}

outputPrimeNumbers();
/*
n = 1 2 3 4 5 6 7 - given interval

take every number from an interval starting from i=2 and check against all numbers starting from j=1 to itself
whether or not it divides without reminder

*/
