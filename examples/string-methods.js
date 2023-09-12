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
}
concat();
