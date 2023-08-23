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

// copyWithin() copies array elements to another position in the array, \
// overwrites the existing values (does not add items to the array), and returns the changed array
