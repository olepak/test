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
