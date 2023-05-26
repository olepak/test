const myArray = [1, 2, 3];
const doubledArray = myArray.map((item) => item * 2);
console.log("it was arrow function", doubledArray);
// My favorite animal function

function myFavoriteAnimal(animal) {
	return animal + " " + "is my favorite animal";
}
alert(myFavoriteAnimal(prompt("What is your favorite animal?")));
