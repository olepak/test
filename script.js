function sumTwoNumbers(a, b, positive, negative) {
	if (a && b) {
		a = +a;
		b = +b;
		let sum = a + b;
		positive(sum);
	} else negative();
}
function checkIfNumber(Number) {
	if (!isNaN(Number)) {
		return Number;
	} else return false;
}
function showSum(result) {
	alert("Here is the result: " + result);
}
function showNotaNumber() {
	alert("You are fucking idiot");
}
sumTwoNumbers(
	checkIfNumber(prompt("Enter first nunber")),
	checkIfNumber(prompt("Enter second number")),
	showSum,
	showNotaNumber
);
