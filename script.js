let answer = parseInt(
	prompt("Please enter the number you would like to FizzBuzz up to:")
);
for (let i = 1; i <= answer; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log("FizzBuzz");
	}
	if (i % 3 === 0) {
		console.log("Fizz");
		if (i % 5 === 0) {
			console.log("Fizz");
		} else {
			console.log(i);
		}
	}
}
