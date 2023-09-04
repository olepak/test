// 1 at() returns an indexed element from an array
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

// 2 concat() joins two or more arrays and returns new joined array
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

// 3 constructor property returns the function that crated the Array prototype
function constructor() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let text = fruits.constructor;
	console.log(text);
}

// 4 copyWithin() copies array elements to another position in the array,
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

// 5 entries() method returns an Array iterator object with key/value pairs
// entries () method does not change the original array
function entries() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log("Here is the original array:");
	console.log(fruits);
	console.log(
		"Here is the iteration over key/value pair after entries() method being applied"
	);

	const f = fruits.entries();
	for (let x of f) {
		console.log(x);
	}
}

// 6 every() method executes function for each array element
// every() method returns true if the function returns true for all elements
// every() returns false if the function returns false for one element
// every() method does not execute the function for empty elements
// every() method does not change the original array
// return value is Boolean. true if all elements pass the test, otherwise false

// check if all values in ages[] are over 18:
function every() {
	const ages = [32, 33, 30, 19];
	function checkAge(age) {
		return age > 18;
	}
	const res = ages.every(checkAge);
	console.log(res);
}

// 7 fill() method fills specified elements in an array with a value
// fill() method overwrites the original array
// start and end position can be specified. If not , all elements will be filled
// syntax: array.fill (value, start, end)
// value  - Required. The value to fill in.
// start - Optional. The start index position. Default is 0.
// end - Optional. The stop index position. Not included. Default is array length.
function fill() {
	// fill all the elements with the value
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.fill("Kiwi");
	console.log(fruits);
	// fill the last two elements
	const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
	fruits2.fill("Kiwi", 2, 6);
	console.log(fruits2);
	// it always returns changed (filled) array
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numbers);
	const numbers2 = numbers.fill(1);
	console.log(numbers === numbers2);
	// filling the array with numbers
	function fillNumbers(n) {
		return Array(n)
			.fill(0)
			.map((_, idx) => idx + 1);
	}
	console.log(fillNumbers(10));
}

// 8 filter() method creates a new array filled with elements that pass a test provided by a function
// the filter() method does not execute the function for empty elements
// the filter() method does not change the original array
function filter() {
	// return an array of all values in ages[] that are over 18:
	const numbers = [775, 7, 985, 6, 9485, 11, 12, 85905, 47];
	function checkNumber(age) {
		return age < 18;
	}
	const numberLessThanEighteen = numbers.filter(checkNumber);
	console.log(numberLessThanEighteen);
}
// filtering unique numbers from an array https://www.youtube.com/watch?v=IXp06KekEjM&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2&index=4
function filter2() {
	const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
	const nums = numbers.filter((value, index, arr) => {
		return arr.indexOf(value) === index;
	});
	console.log(nums);
}

// 9 find() method returns the value  of the first element that passes the test
// find() method executes a function for each array element
// find() method returns undefined if no elements are found
// find() method does not change the original array
function find() {
	// find the value of the first element with a value over 18
	const ages = [3, 18, 12, 23, 10, 17, 33, 44, 55];
	console.log(
		ages.find((age) => {
			return age > 18;
		})
	);
}

// 10 findIndex() method executes a function for each array element
// findIndex() method returns the index(position) of the first element that passes the test
// findIndex() returns -1 if no match is found
// findIndex() does not change the original array
function findIndex() {
	// find the index of the first element that are over than specified
	const ages = [3, 18, 12, 23, 10, 17, 33, 44, 55];
	console.log(
		ages.findIndex((age) => {
			return age === 55;
		})
	);
}

// 11 flat() method concatenates sub-array elements
// flat() method does not change the original array
// syntax array.flat(depth)
// depth - optional, how deep a nested array should be flattened.Default is 1.
function flat() {
	const myArr = [
		[1, 2],
		[3, 4],
		[5, 6],
	];
	console.log(myArr.flat());
	const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
	console.log(myArr2.flat(2));
	// flat to infinity
	const myArr3 = [1, 2, [3, [4, 5, 6], 7], 8];
	console.log(myArr3.flat(Infinity));
}

// 12 flatMap() method maps all array elements and creates a new flat array only with depth of 1
// flatMap() creates a new array from calling a function for every array element
// flatMap() does not change the original array
function flatMap() {
	// acts like a map() in the most easy case
	const myArr = [1, 2, 3, 4, 5, 6];
	const newArray = myArr.flatMap((x) => x * 2);
	console.log(newArray);
	// it is useful when returned  mapped value is an array and there is a need to flatten it
	const newArray2 = myArr.flatMap((x) => [x, x * 2]);
	console.log(newArray2);
	const pairs = [
		[1, 2],
		[3, 4],
		[5, 6],
	];
	const result = pairs.flatMap(function (pair) {
		return [pair[0] + pair[1]];
	});
	console.log(result);
}

// 13 forEach() method calls a function for each element in an array
// return value - undefined
function forEach() {
	// compute the sum
	let sum = 0;
	const numbers = [33, 93, 94, 93];
	console.log(numbers);

	function sumItems(item) {
		sum += item;
	}
	numbers.forEach(sumItems);
	console.log(sum);
	// multiply each element
	function multiplyItems(item, index, arr) {
		arr[index] = item * 10;
	}
	numbers.forEach(multiplyItems);
	console.log(numbers);
}

// 14 from() method returns an array from any object with a length property
// from() method returns an array from any iterable object
// Array.from is a static property of the JavaScript Array object.
// it can be only used as Array.from().
// Using x.from(), where x is an array will return undefined
// syntax Array.from(object, mapFunction, thisValue):
// object - Required The object to convert to an array
// mapFunction Optional A map function to call on each item
function from() {
	// create an array from a string
	let text = "ABCDEF";
	const myArr = Array.from(text);
	console.log(myArr);
	// create an array from a string of numbers
	let num = "1234567";
	const res = Array.from(num, mapFn);
	function mapFn(x) {
		return (x = +x);
	}
	console.log(res);
}

// 15 includes() method returns true if an array contains a specified value.
// includes() method returns false if the value is not found
// includes method is case sensitive
// syntax array.includes(element, start)
// returned value - boolean
function includes() {
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	console.log(fruits.includes("Banana"));
	console.log(fruits.includes("Orange", 1));
	console.log(fruits.includes("Lemon"));
	console.log(fruits.includes("Mango", 4));
}
includes();
