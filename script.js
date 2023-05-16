let age = prompt("What is your age?");
let message =
	age < 3
		? "Hi, baby!"
		: age < 18
		? "Hello"
		: age < 100
		? "Greetings"
		: "What an unusual age!";
alert(message);
console.log(age);
console.log(typeof age);
console.log(Boolean(age));
console.log(Boolean(message));
console.log(false < 3);
