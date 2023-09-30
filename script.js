function getCount(str) {
	let result = str.match(/[aeiou]/gi) || [];
	console.log(result.length);
}
getCount("my pyx");
