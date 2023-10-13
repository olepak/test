function moreConciseCount(input) {
	if (input === null || input.length === 0) {
		return [];
	}
	return input.reduce(
		(acc, value) => {
			if (value > 0) {
				acc[0] += 1;
			} else {
				acc[1] += value;
			}
			return acc;
		},
		[0, 0]
	);
}

console.log(moreConciseCount([1, 2, 3, 4, 5, 6, 7, 8, 10, -11, -12, -13, -14]));
console.log(moreConciseCount([]));
