// at() returns an indexed element from an array
function at() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let index = 2;
	let fruit = fruits.at(index);
	console.log(fruit);
	let fruit1 = fruits.at(3);
	console.log(fruit1);
	// the at() method returns the same as []
	let fruit3 = fruits[3];
	console.log(fruit3);
}
