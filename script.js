const numbers = [1, 2, 4, 5, 3, 2, 6, 7, 2];
const numbers2 = [1, 6, 8, 5, 9, 3, 5, 7, 3];
const numbers3 = numbers.concat(numbers2);
const nums = numbers3.filter((value, index, arr) => {
	return arr.indexOf(value) === index;
});
console.log(nums);
