**Day 13 – JavaScript in little advance**
**1. DOM Manipulation**
getElementById()
querySelector()
innerHTML
textContent
style
classList
**2. Events**
click
submit
keydown
mouseover
addEventListener()
**3. Event Flow**
Event Bubbling
Event Capturing
Event Delegation
**4. Async JavaScript**
Synchronous vs Asynchronous
setTimeout()
setInterval()
Callback Functions
5. Promises
let p = new Promise((resolve, reject)=>{
    resolve("Success");
});

p.then(result => console.log(result))
 .catch(error => console.log(error));
6. Async/Await
async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
**7. AJAX and Fetch API**
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data));
**8. JavaScript Modules**
Export
export function add(a,b){
    return a+b;
}
Import
import { add } from './script.js';
9. Error Handling
try{
    console.log(a);
}
catch(err){
    console.log(err);
}
finally{
    console.log("Done");
**}
10. Mini Projects for Practice**
Background Color Changer
Counter App
Digital Clock
To-Do List
Number Table Generator
Image Slider
Filter Fruits App
Responsive Navbar
Weather App (using API)
Add to Cart Sys
