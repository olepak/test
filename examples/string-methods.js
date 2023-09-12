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
	let text = "Hello world";
	let code = text.charCodeAt(0);
	console.log(code);
	// get the unicode of the 15th character (shows NaN)
	let text2 = "Hello world";
	let code2 = text2.charCodeAt(15);
	console.log(code2);
}
charCodeAt();
