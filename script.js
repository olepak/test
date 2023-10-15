const parentElement = document.createElement("div");
document.body.appendChild(parentElement);
parentElement.textContent = "Some text";

const nestedDiv = document.createElement("p");
parentElement.appendChild(nestedDiv);

const newParagraph = document.createElement("p");
document.body.appendChild(newParagraph);
newParagraph.textContent = "I am here! Look at me!!!";

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "Hey! I am another paragraph!";
document.body.insertBefore(anotherParagraph, newParagraph);

// removes element and returns a reference to removed element to the console
console.log(document.body.removeChild(newParagraph));
