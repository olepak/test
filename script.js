const container = document.querySelector("#container");
container.style.border = "2px solid red";
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text content";
container.appendChild(content);
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I am red!";
container.appendChild(paragraph);
const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm  a blue h3!";
container.appendChild(header3);
const anotherDiv = document.createElement("div");
const anotherDivH1 = document.createElement("h1");
anotherDivH1.textContent = "I'm a div";
const anotherDivP = document.createElement("p");
anotherDivP.textContent = "ME TOO!";
anotherDiv.appendChild(anotherDivH1);
anotherDiv.appendChild(anotherDivP);
container.appendChild(anotherDiv);
const btn = document.querySelector("#btn");
function alertFunction() {
	alert("YAY! YOU DID IT!");
}
btn.addEventListener("click", function (e) {
	e.target.style.background = "blue";
});
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		alert(button.id);
	});
});
console.log(document.styleSheets);
console.log(document.nodeType);
console.log(Node.ELEMENT_NODE);
console.log(document.nodeType === Node.DOCUMENT_NODE);
