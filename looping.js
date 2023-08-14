// for ... of
console.clear();
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
console.log('        Here is how "for ... of" works');
for (const cat of cats) {
	console.log(cat);
}
// map
console.log('         Here is how "map" works');
function toUpper(string) {
	return string.toUpperCase();
}
const upperCats = cats.map(toUpper);
for (const upperCat of upperCats) {
	console.log(upperCat);
}
// filter
console.log('         Here is how "filter" works');
function lCat(cat) {
	return cat.startsWith("L");
}
const filtered = cats.filter(lCat);
for (const filter of filtered) {
	console.log(filter);
}
