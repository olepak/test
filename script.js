let login = prompt("Enter login", "");
// check login
if (login === "Admin") {
	// enter password
	let pass = prompt("Enter password", "");
	// check password
	if (pass === "TheMaster") {
		alert("Welcome!");
	}
	// show "Canceled" on pressing ESC or empty input
	else if (pass === null || pass === "") {
		alert("Canceled");
	}
	// show "Canceled" on another string input
	else {
		alert("Wrong password");
	}
}
// show "Canceled" on pressing ESC or empty input
else if (login === null || login === "") {
	alert("Canceled");
}
// show "I don't know you" on another string input
else {
	alert("I don't know you");
}
