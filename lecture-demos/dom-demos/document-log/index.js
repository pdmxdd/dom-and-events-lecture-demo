// let's look at the entire document object
console.log(document);

// let's look at the URL property
// console.log(document.URL);

// let's look at the body property
// console.log(document.body);

// let's look at all the nodes of the document.body property:
// console.log(document.body.childNodes);

// let's grab the text of our h1 tag
// console.log(document.body.childNodes[1].innerText);

// let headerElement = document.body.childNodes[1];

// now let's do something even cooler:
// headerElement.addEventListener("click", function(event) {
//     console.log(event); // log out to the console just what the event object was
//     headerElement.innerText = "We changed this with JS";
// });

// we added an event listener to the headerElement, but this is getting ahead of ourselves

// how we got our headerElement was a little wonky, if our webpage changed at all, we would probably be getting a different element with the line document.body.childNodes[1].innerText