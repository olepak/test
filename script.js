function findNeedle(haystack) {
	return "found the needle at position " + haystack.indexOf("needle");
}
console.log(
	findNeedle([
		"283497238987234",
		"a dog",
		"a cat",
		"some random junk",
		"a piece of hay",
		"needle",
		"something somebody lost a while ago",
	])
);
console.log(
	findNeedle(["3", "123124234", undefined, "world", "hay", 2, "3", true, false])
);
