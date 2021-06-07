let headerOne = document.getElementById("first-header");
let buttonOne = document.getElementById("first-button");

const originalText = headerOne.innerText; // grabbing the original text of the header element
const newText = "A <b>fantastic</b> header!"; // defining the new HTML for the header element

const originalColor = headerOne.style.color; // grabbing the original color of the header element
const newColor = "blue"; // defining the new color of the header element

// let's add a click event listener to buttonOne:
// buttonOne.addEventListener('click', function() {
//     if(headerOne.innerText === originalText) {
//         headerOne.innerHTML = newText;
//     }
//     else {
//         headerOne.innerHTML = originalText;
//     }
// });

// let's add a hover event listener to our header:
// headerOne.addEventListener('mouseover', function() {
//     headerOne.style.color = newColor;
// });

// let's add a mouseout listener to our header:
// headerOne.addEventListener('mouseout', function() {
//     headerOne.style.color = originalColor;
// });