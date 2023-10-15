// The Odin project. DOM manipulation and events https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#dom-methods

// TARGETING NODES WITH SELECTORS
const container = document.querySelector("#container"); // selects the #container div
console.dir(container.firstElementChild); // selects the first child of #container
const controls = document.querySelector(".controls"); // selects the .controls div
console.dir(controls.previousElementSibling); // selects the prior sibling

// QUERY SELECTORS
element.querySelector(selector); // returns a reference to the first match of selector
element.querySelectorAll(selectors); // returns a "nodelist" containing references to all of the matches of the selectors

// ELEMENT CREATION
// document.createElement(tagName, [options]); // creates a new element of tag type tagName. [options] means you can add some optional parameters.
const parentElement = document.createElement("div");
document.body.appendChild(parentElement);
parentElement.textContent = "Some text";
// it does not put a new element into the DOM - it simply creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page.

// APPEND ELEMENTS
// You can place the element into the DOM with one of the following methods:
// parentNode.appendChild(childNode); // appends "childNode" as the last child of "parentNode"
// parentNode.insertBefore(newNode, referenceNode); // inserts "newNode" into "parentNode" before reference node
const nestedDiv = document.createElement("p");
parentElement.appendChild(nestedDiv);
const newParagraph = document.createElement("p");
document.body.appendChild(newParagraph);
newParagraph.textContent = "I am here! Look at me!!!";
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "Hey! I am another paragraph!";
document.body.insertBefore(anotherParagraph, newParagraph);

// REMOVE ELEMENTS
// removes "child"from "parentNOde" on the DOM ant returns a reference to "child"
// parentNode.removeChild(child);
console.log(document.body.removeChild(newParagraph)); // removes element and returns a reference to removed element to the console

// ALTERING ELEMENTS
//
