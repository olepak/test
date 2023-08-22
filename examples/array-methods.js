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

// concat () joins two or more arrays
function concat() {
	// 1 concatenate two or more arrays
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const names = ["John", "Mary", "Ivan"];
	const joinedArray = fruits.concat(names);
	console.log("1 - Concatenate two or more arrays: " + joinedArray);
	// 2 this method does not change initial array
	console.log("2 - Initial arrays were not changed: " + fruits + " " + "names");
	// 3 concatenate strings and numbers
	const arr1 = [1, 2, 3, 4];
	const arr2 = ["Cecile", "Leone"];
	const arr3 = arr1.concat(arr2);
	console.log("3 - Concatenates string an numbers: " + arr3);
	// 4 concatenate nested arrays
	const arr4 = [1, 2, [3, 4]];
	const arr5 = [[5, 6], 7, 8];
	const arr6 = arr4.concat(arr5);
	console.log("4 - Concatenate nested arrays:" + arr6);
	// 5 acts like push method
}
concat();
