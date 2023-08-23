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

// concat() joins two or more arrays and returns new joined array
function concat() {
	// 1 merges two or more arrays
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const names = ["John", "Mary", "Ivan"];
	const joinedArray = fruits.concat(names);
	console.log("1 - Merges two or more arrays: " + joinedArray);
	// 2 this method does not change initial array
	console.log("2 - Initial arrays were not changed: " + fruits + " " + "names");
	// 3 merges strings and numbers
	const arr1 = [1, 2, 3, 4];
	const arr2 = ["Cecile", "Leone"];
	const arr3 = arr1.concat(arr2);
	console.log("3 - Merges string and numbers: " + arr3);
	// 4 merges nested arrays
	const arr4 = [1, 2, [3, 4]];
	const arr5 = [[5, 6], 7, 8];
	const arr6 = arr4.concat(arr5);
	console.log("4 - Merges nested arrays:" + arr6);
	// 5 acts like push method i.e appends any values to the end
	const arr7 = fruits.concat(1, 2, "anyvalue");
	console.log(
		`5 - Acts like push method i.e appends any values to the end: ${arr7} `
	);
	// 6 creates copy of an array if no argument provided
	const arr8 = fruits.concat();
	console.log(`6 - Creates copy of an array if no argument provided: ${arr8}`);
}

// constructor property returns the function that crated the Array prototype
function constructor() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let text = fruits.constructor;
	console.log(text);
}

// copyWithin() copies array elements to another position in the array,
// overwrites the existing values (does not add items to the array), and returns the changed array
// syntax: array.copyWithin (target, start, end)
// target - required. The index position to copy the elements to.
// start - optional. Index of the first element of copied row. Default is 0
// end - optional. (end-1) is the index of the last element of copied row. Default is the array length
// 1 - copy the first two elements to the last two array elements
function copyWithin() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.copyWithin(2);
	console.log(
		"1 - Copy the first two elements to the last two array elements:"
	);
	console.log(fruits);
	// 2 - copy the first two array elements to the third and fourth position
	const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
	fruits2.copyWithin(2, 0, 2);
	console.log(
		"2 - Copy the first two array elements to the third and fourth position"
	);
	console.log(fruits2);
	// 3 - it can take negative values and always returns changed array
	// if the value is negative it treats like length + negative value
	const myArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
	const myArray2 = myArray.copyWithin(0, -4, -1);
	console.log(
		"3 - It can take negative values and always returns modified array"
	);
	console.log(myArray);
	console.log(myArray2);
	console.log(myArray === myArray2);
}

// entries()
function entries() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits);
	const f = fruits.entries();
	for (let x of f) {
		console.log(x);
	}
	for (let fruit of fruits) {
		console.log(fruit);
	}
}
entries();
