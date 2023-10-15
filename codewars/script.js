function findShort(s) {
	return s.split(" ").reduce((acc, value) => {
		if (value.length < acc) {
			acc = value.length;
		}
		return acc;
	}, Infinity);
}

console.log(findShort("this one is the longest word"));
