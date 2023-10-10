// The Odin project. DOM manipulation and events https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#dom-methods

// targeting nodes with selectors
const container = document.querySelector("#container"); // selects the #container div
console.dir(container.firstElementChild); // selects the first child of #container
const controls = document.querySelector(".controls"); // selects the .controls div
console.dir(controls.previousElementSibling); // selects the prior sibling

// query selectors
element.querySelector(selector); // returns a reference to the first match of selector
element.querySelectorAll(selectors); // returns a "nodelist" containing references to all of the matches of the selectors

// element creation
