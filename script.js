function showSquaredNumbers(square, output) {
	output(square);
}

function squareNumbers(numbers) {
	return numbers.reduce(function (sum, n) {
		return sum + n * n;
	}, 0);
}
function showResult(result) {
	console.log(result);
}
showSquaredNumbers(squareNumbers([1, 450, 4, 5, 6]), showResult); //?
