// for ... of
console.clear();
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
console.log('        Here is how "for ... of" works');
for (const cat of cats) {
	console.log(cat);
}
// map
console.log('         Here is how "map" works');
function toUpper(string) {
	return string.toUpperCase();
}
const upperCats = cats.map(toUpper);
for (const upperCat of upperCats) {
	console.log(upperCat);
}

// filter
console.log('         Here is how "filter" works');
function lCat(cat) {
	return cat.startsWith("L");
}
const filtered = cats.filter(lCat);
for (const filter of filtered) {
	console.log(filter);
}

// test for loop
console.log("         This is a test for loop");
for (let i = 1; i < 11; i++) {
	console.log(`${i} * ${i} = ${i * i}`);
}

// the for loop through an array
console.log("         For loop through an array");
const catNames = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCat = "My favorite cats are";
for (let i = 0; i < catNames.length; i++) {
	if (i === catNames.length - 1) {
		myFavoriteCat += ` and ${catNames[i]}.`;
	} else {
		myFavoriteCat += ` ${catNames[i]},`;
	}
}
console.log(myFavoriteCat);

console.clear(); // THIS LINE CLEARS THE CONSOLE

// Exit loop with break
console.log("         Exit loop with break");
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myChoice = 11;
myChoice = +myChoice;
for (i = 0; i < myNumbers.length; i++) {
	if (myChoice === myNumbers[i]) {
		console.log("Found");
		break;
	}
}
if (myChoice !== myNumbers[i]) {
	console.log("Not found");
}
