console.dir(document); (prints object representation of element), console.log();
document.title, document.body
<h1 id="id"> -> const h1 = document.getElementById("id"); -> returns tag with id
h1.id, h1.innerText, h1.className, h1.autofocus
<h1 class="class"> -> const h1List = document.getElementsByClassName("class"); -> returns an array
const h1List = document.getElementsByTagName("h1"); -> returns an array
const h1List = document.getElementsByName("name"); -> returns an array
const h1 = document.querySelector(".class h1:first-child"); -> (write CSS selector) returns only the first element
const h1List = document.querySelectorAll("#id:first-child"); -> returns an array

h1.style.color = "blue";
h1.addEventListener("click", handleTitleClick); (function handleTitleClick())
console.dir(h1); -> "on event name" is an event listener
("mouseenter", handleMouseEnter), ("mouseleave", handleMouseLeave)
h1.onclick = handleTitleClick;, h1.onmouseenter = handleMouseEnter;
h1.removeEventListener();
window.addEventListener("resize", handleWindowResize);, window.addEventListener("copy", handleWindowCopy);
document.body.style.backgroundColor = "tomato";
document.body, document.title, document.head is given by default
window.addEventListener("offline", handleWindowOffline);, ("online", handleWindowOnline);
window.innerWidth excludes border & margin; window.outerWidth includes border & margin, and also includes scroll length
"===" : strict equality, "==" : weak equality
const : constant, let : variable
when using the same string multiple times, always create a variable

create class in CSS -> h1.className = "class"; : adds (or replaces) a class name
h1.className = ""; : removes the class name
h1.classList.contains(class), h1.classList.remove(class);, h1.classList.add(class);
h1.classList.toggle(class); : adds a class if it doesn't exist, and removes the class if it exists

HTML : form element can perform validation (required, maxlength, etc.) and is submitted every time the user clicks the button or input (type="submit"), or presses enter -> refreshes page
input.value : returns the string given to the input
string.length : returns length of string
eventHandler(event_info); -> stores information of event in variable event_info
event_info.preventDefault(); -> stops default behavior of any event
`Hello ${username}` replaces ${} with string variable
localStorage.setItem(key, value) : saves data in browser's local storage
localStorage.getItem(key) : gets item from local storage
localStorage.removeItem(key) : removes item from local storage

setInterval(function, interval_in_ms) : executes the function on a periodic basis
setTimeout(function, delay_in_ms) : executes the function after a certain amount of time has passed
const date = new Date() : Date() object is used to collect information on day, hour, seconds, month, year, etc.
string.padStart(maxlength, fillchar) : fills start of string with fillchar until maxlength
string.padEnd(maxlength, fillchar) : fills end of string with fillchar until maxlength
parseInt(string) : changes string to integer
String(int) : changes integer to 

array.length : returns length of array
Math.floor(num) : returns the floor function value of num
Math.random() : returns a random number between 0 and 1
document.createImange(tag) : creates an element of the provided tag
document.body.appendChild(element) : append the given element to the document body (can also use prepend)
event.target.parentElement : the parent of the target of the event
element.remove() : removes the element
JSON.stringify(obj) : changes any js code into a string
JSON.parse(str) : changes a string into a corresponding js object
array.push(e) : appends element e to the array
array.forEach(function) : executes the function for each element of the array
array.forEach((item) => {...}) : a shorthand for above (called the arrow function)

Date.now() : returns current time in milliseconds
array.filter(function) : creates a new array that only contains elements for which the function returns true (arrow function is also possible)
