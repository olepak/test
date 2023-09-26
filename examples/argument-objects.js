// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// arguments is an array-like object accessible inside functions that contains the values of the arguments
function func1(a, b, c) {
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
func1(5, 6, 7);
// i modern code, rest parameters should be preferred
// it is available within all non-arrow functions
// the arguments object is useful for functions called with more arguments than they are formally declared to accept, called variadic functions. This example function accepts any number of string arguments and returns the longest one
