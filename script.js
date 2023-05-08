let time = prompt("what time is now");
let greetings;
if (time < 18) {
	greetings = "Good day";
} else if (time > 20) {
	greetings = "Good night!";
} else {
	greetings = "Good evening";
}
console.log(greetings);
