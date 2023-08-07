// function which sums two numbers
function sumTwoNumbers(a, b, positive, negative) {
	if (a && b) {
		a = +a;
		b = +b;
		let sum = a + b;
		positive(sum);
	} else negative();
}
//function which checks if the input is a number
function checkIfNumber(number) {
	if (!isNaN(number)) {
		return number;
	} else return false;
}
// function which shows result
function showResult(result) {
	alert("Result is: " + result);
}
// function which shows that the input is not a number
function showNotaNumber() {
	alert("The input is incorrect");
}
sumTwoNumbers(
	checkIfNumber(prompt("Enter number")),
	checkIfNumber(prompt("Enter another number")),
	showResult,
	showNotaNumber
);
