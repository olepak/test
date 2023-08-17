"use strict";
function outputPrimeNumbers() {
	let n = parseInt(prompt("Enter any number"));
	if (isNaN(n)) {
		alert("Incorrect input");
	} else {
		const divArray = [];
		let primeNumbers = "";
		for (let i = 2; i <= n; i++) {
			for (let j = 1; j <= i; j++) {
				let divideResult = i % j;
				if (divideResult === 0) {
					divArray.push(j);
				} else {
					continue;
				}
				primeNumbers = +` ${i}`;
			}
		}
		console.log(primeNumbers);
	}
}

outputPrimeNumbers();
