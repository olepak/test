String.prototype.toJadenCase = function () {
	return this.split(" ").map((item) => (item[0] = 1) + item.slice(1));
};
console.log("here is some kind of a text".toJadenCase());
