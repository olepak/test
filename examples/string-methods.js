// at() method returns an indexed character from a string
// it returns the same as []
// string.at(index)
// index - optional. The index of the character to be returned. Default is 0. -1 returns the last character
// return value - the character in given position
function at() {
	let text = "W3Schools";
	let char = text.at(0);
	console.log(char);
	// returns the same as []
	let char2 = text[3];
	console.log(char2);
}

// charAt method returns the character at a specified index(position) in a string
// string.charAt(index)
// index - optional. default = 0
// return value - the character at a specified position. empty string ("") if the index is out of range
function charAt() {
	// get the second character of a string
	let text = "Hello World";
	let letter = text.charAt(1);
	console.log(letter);
	// get the last character in a string
	let letter1 = text.charAt(text.length - 1);
	console.log(letter1);
}

// charCodeAt() method returns the Unicode of the character
// charCodeAt() is UTF-16 and returns values only between 0 and 65535
// the index of the last character is string length -1
// return value - unicode value of the character. NaN if the index is invalid
// string.charCodeAt(index)
// index - Optional. Position of a character. default is 0
// https://www.youtube.com/watch?v=x16Z_U1tGrc&t=3472s
function charCodeAt() {
	// get the Unicode of the first character in a string
	let text = "Hello word";
	let code = text.charCodeAt(0);
	console.log(code);
	// get the unicode of the 15th character (shows NaN)
	let text2 = "Hello world";
	let code2 = text2.charCodeAt(15);
	console.log(code2);
}

// codePointAt() returns the Unicode value at an index(position) in a string
// generally the same as charCodeAt() method except two differences:
// 1- can return the full value of a Unicode value greater than 0xFFFF (65536)
// 2 - returned undefined if the index is invalid
// https://www.youtube.com/watch?v=x16Z_U1tGrc&t=3472s
function codePointAt() {
	// get code point value at the first position in a string
	let text = "Hello world";
	let code = text.codePointAt(0);
	console.log(code);
	// get the code point value at the last position
	let code2 = text.codePointAt(text.length - 1);
	console.log(code2);
	// get the code point value at the 15th position
	let code3 = text.codePointAt(15);
	console.log(code3);
}

// concat() method joins two or more strings
// it does not change the existing string
// it returns a new string
//string.concat(string1, string2,...., stringX)
// string1 - required
// string2, ..., stringX - the strings to be joined
// it is strongly recommended to use assignment operator (+, +=) instead of the concat() method, because it is way faster
function concat() {
	// join two strings
	let text1 = "sea";
	let text2 = "food";
	let result = text1.concat(text2);
	console.log(result);
	// join two strings
	let text3 = "Hello";
	let text4 = "World!";
	console.log(text3.concat(" ", text4));
	// join three strings
	let text5 = "Have a nice day!";
	console.log(text3.concat(" ", text4, " ", text5));
	// it is strongly recommended to use assignment operator (+, +=) instead of the concat() method, because it is way faster
	let result3 = text1 + text2;
	console.log(result3);
}

// constructor property returns the function that created the String prototype
function constructor() {
	let text = "Hello world";
	let message = text.constructor;
	console.log(message);
}

// endsWith() method returns true if a string ends with a specified string.
// otherwise it returns false
// it is case sensitive
// return value - boolean
// string.endsWith(searchvalue, length)
// searchvalue - required. the string to search for
// length - optional. the length of the string to search. default - string length
function endsWith() {
	let text = "Hello world";
	console.log(text.endsWith("world"));
	console.log(text.endsWith("World"));
	// check if the first 11  characters of a string ends with "world"
	let text2 = "Hello world, welcome to the universe.";
	console.log(text2.endsWith("world", 11));
}

// String.fromCharCode() method converts Unicode values to characters
// it is a static method of the String object
// the syntax is always String.fromCharCode()
// you cannot use myString.fromCharCode()
// there is a String.fromCodePoint() method.
// Explanation of both methods https://youtu.be/x16Z_U1tGrc?t=3906
function fromCharCode() {
	// convert Unicode values to characters
	let char = String.fromCharCode(65);
	console.log(char);
	let text = String.fromCharCode(72, 69, 76, 79);
	console.log(text);
	// difference between fromCharCode and fromCodePoint is that fromCodePoint() method can take the full value of a Unicode value greater than 0xFFFF (65536)
	// fromCharCode() method cannot take values greater than 65535. it results in a broken character
	let char1 = String.fromCharCode(128007);
	console.log(char1); // broken value
	// fromCodePoint() method can take the full value of a Unicode value greater than 0xFFFF (65536)
	let char2 = String.fromCodePoint(128077);
	console.log(char2);
	// fromCharCode() method cannot take values greater than 65536
	let char3 = String.fromCharCode(79, 107, 32, 55357, 56397);
	console.log(char3);
	let char4 = String.fromCodePoint(79, 107, 32, 128077);
	console.log(char4);
}

// includes() method returns true if a string contains a specified string.
// otherwise it returns false
// it is case sensitive
// string.includes (searchvalue, start)
// searchvalue - required. the string to search for
// start - optional. the position to start from. default value - 0
// return value - boolean
function includes() {
	// check if a string includes "world"
	let text = "Hello world, welcome to the universe.";
	console.log(text.includes("world"));
	// start at position 12
	let text2 = "Hello world, welcome to the universe.";
	console.log(text2.includes("world", 12));
}

// indexOf() method returns the position of the first occurrence in a string
// it returns -1 i the value was not found
// it is case sensitive
// string.indexOf(searchvalue, start)
// searchvalue - required. the string to search for
// start - optional. the position to start from
// return value - a number, the first position where the value occurs, -1 if it never occurs
function indexOf() {
	// search a string for welcome
	let text = "Hello world, welcome to the universe.";
	let result = text.indexOf("welcome");
	console.log(result);
	// search a string for "Welcome"
	let result2 = text.indexOf("Welcome");
	console.log(result2);
	// find the first occurrence of "o"
	console.log(text.indexOf("o"));
	// find the first occurrence of "e", starting at position 5
	console.log(text.indexOf("e", 5));
	// negative start value is always considered as 0
	console.log(text.indexOf("world", -5));
	// empty string as a searchvalue always returns 0
	console.log(text.indexOf(""));
}

// lastIndexOf() method returns the position of the last occurrence in a string
// starting position by default +Infinity
// it searches from right to left
function lastIndexOf() {
	let text = "Hello world, welcome to the universe.";
	console.log(text.lastIndexOf("e"));
	// searching from the position 23
	let s = "The code undefined code code !";
	console.log(s.lastIndexOf("code", 23));
	// negative start value is always considered as 0 and therefore returns -1
	console.log(s.lastIndexOf(-5));
	// empty string as a searchvalue always returns string length
	console.log(s.length);
	console.log(s.lastIndexOf(""));
}

// length() property returns the length of a string
// the length property of an empty string is 0
function length() {
	let text = "Hello world";
	console.log(text.length);
}
length();
