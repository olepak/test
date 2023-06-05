/* task 1
function add7(a) {
	return +a + 7;
}
console.log(add7(prompt("Enter your number")));
*/
/*
function multiply(c, d) {
	return c * d;
}
console.log(
	multiply(prompt("Enter the first argument"), prompt("Enter second argument"))
);
*/

/* task 3
function capitalize(text, callback) {
	const firstCharacter = text.charAt(0).toUpperCase();
	const allLowered = text.slice(1).toLowerCase();
	let transformed = firstCharacter + allLowered;
	callback(transformed);
}
function display(result) {
	console.log("Here is transformed text:", result);
}
capitalize(prompt("Enter your text"), display);
*/
//task 4
function lastletter(text) {
	let i = text.charAt(text.length - 1);
	return i;
}
console.log(lastletter(prompt("Enter string")));
