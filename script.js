function countPositivesSumNegatives(input) {
	const positive = input
		.filter((value) => value > 0)
		.reduce((sum, value) => sum + value);
	const negative = input
		.filter((value) => value < 0)
		.reduce((sum, value) => sum + value);
	const arr = [];
	arr[0] = positive;
	arr[1] = negative;
	return arr;
}
console.log(
	countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13])
);

function moreConciseCount(input) {
	const arr = input.reduce(
		(acc, value) => {
			if (value > 0) {
				acc[0] += value;
			} else {
				acc[1] += value;
			}
			return acc;
		},
		[0, 0]
	);
	return arr;
}

console.log(moreConciseCount([1, 2, 3, 4, 5, 6, 7, 8, 10, -11, -12, -13, -14]));
