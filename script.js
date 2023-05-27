alert(myFunction(prompt("What is your favorite animal?")));
function myFunction(animal) {
	return animal + "is my favorite animal";
}
// function expression
alert(
	(function (animal) {
		return animal + " " + "this is how function expression works";
	})(prompt("what is your func expression?"))
);
// arrow function
alert(
	((animal) => animal + " " + "is arrow function")(
		prompt("What is your favorite arrow")
	)
);
