const parentElement = document.createElement("div");
document.body.appendChild(parentElement);
parentElement.textContent = "Some text";

const nestedDiv = document.createElement("p");
parentElement.appendChild(nestedDiv);
nestedDiv.textContent = "Hello, I am a nested div";

const newParagraph = document.createElement("p");
document.body.appendChild(newParagraph);
newParagraph.textContent = "I am here! Look at me!!!";

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "Hey! I am another paragraph!";
document.body.insertBefore(anotherParagraph, newParagraph);

// removes element and returns a reference to removed element to the console
// console.log(document.body.removeChild(newParagraph));
anotherParagraph.style.color = "red";
anotherParagraph.style.cssText = "color: blue; background:white";
anotherParagraph.setAttribute("style", "color: green; background: pink");
let anParStyle = anotherParagraph.style;
anParStyle.backgroundColor = "violet";
anParStyle.border = "10px solid red";
anParStyle.outline = "10px dashed green";
console.log(anParStyle.border);
anParStyle.outline = "";
anotherParagraph.classList.add("new");
console.log(anotherParagraph.getAttribute("class"));
anotherParagraph.innerHTML = "<p>Hello World!</p>";
