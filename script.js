let login = prompt("enter login", "");

if (login === "Admin") {
	let pass = prompt("enter password");
	if (pass === "TheMaster") {
		alert("Welcome");
	} else if (pass === null || pass === "") {
		alert("Canceled");
	} else {
		alert("Wrong password");
	}
} else if (login === null || login === "") {
	alert("Canceled");
} else {
	alert("I do not know you");
}
