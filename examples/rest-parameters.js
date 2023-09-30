// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// the rest parameter syntax allows a function to accept an indefinite  number of an arguments as an array, providing a way to represent variadic functions in javascript
function sum(...theArgs) {
	let total = 0;
	for (const arg of theArgs) {
		total += arg;
	}
	return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// syntax:
function f(a, b, ...theArgs) {}

// DESCRIPTION
// a function definition's last parameter can be prefixed with "..." which will cause all remaining (user supplied) parameters to be placed within an Array object
function myFun(a, b, ...manyMoreArgs) {
	console.log("a", a);
	console.log("b", b);
	console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");
