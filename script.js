let a = prompt("Enter value");
// a = +a;
switch (a) {
	case 4:
		alert("Exactly");
		break;
	case 3:
	case 5:
		alert("Wrong!");
		alert("Why dont't you take a math class?");
		break;
	default:
		alert("Your result is strange. Really");
}
console.log(a);

console.log(typeof a);
