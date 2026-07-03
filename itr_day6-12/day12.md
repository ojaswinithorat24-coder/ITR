**The Window Object**: The window  is a global browser object created by the browser (not JavaScript) that represents an open window
. It contains various properties and methods like alert(), prompt(), and the document object
.
**What is DOM?:** The DOM is a Document Object Model that allows JavaScript to access and manipulate HTML code
. When a web page is loaded, the browser creates a tree-like structure of the page where every element is an object called a node
.
**DOM Tree Structure:** The hierarchical structure consists of Parent, Child, and Sibling nodes
. For example, the <body> tag is a parent to elements like <div> or <script> inside it
. The source identifies three types of nodes: text nodes, comment nodes, and element nodes, though developers primarily work with element nodes
.
**Accessing Elements:** The lecture details several ways to select HTML elements using JavaScript:
getElementById: Selects a unique element by its ID
**getElementsByClassName:** Selects elements by their class name, returning an HTML Collection
**getElementsByTagName:** Selects elements by their tag (e.g., all <p> tags)
**querySelector & querySelectorAll:** These are the preferred methods as they can select by ID, class, or tag using CSS selectors. querySelector returns the first matching element, while querySelectorAll returns a NodeList of all matches

**Important DOM Properties:**
**tagName:** Returns the tag name of an element
**innerText:** Returns the text content of an element and all its children
**innerHTML**: Returns the plain text along with the HTML markup inside the element
**textContent**-Similar to innerText but can also retrieve text from hidden elements
**Dynamic Manipulation:** A core benefit of the DOM is the ability to change the page at runtime (dynamically) without altering the original source files
. This includes changing styles, such as background colors, or updating text content based on user interactions
.
**Script Placement**: The source emphasizes placing the <script> tag at the end of the body because if the script runs before the HTML elements are loaded (e.g., in the head), it may result in null when trying to access those elements
Logging Objects: For viewing the properties and methods of DOM objects, console.dir() is preferred over console.log(), as log often treats objects as HTML elements

1. Filter Fruits Project

This project allows users to search and filter a list of fruits dynamically.
**Description**
It takes user input and filters the fruit list in real-time using JavaScript.
 **Concepts Used:**
DOM manipulation
input event
filter() method
querySelectorAll()
**Working:**
When the user types in the search box, only matching fruits are displayed, and others are hidden.

 2. Getter-Setter Project

This project demonstrates the concept of encapsulation in JavaScript using getters and setters.

🔹 Description:

It controls access to object properties using special methods called getter and setter.

🔹 Concepts Used:
JavaScript Objects / Classes
get and set keywords
Encapsulation
🔹 Working:
Getter is used to retrieve values safely
Setter is used to update values with control/validation

 3. Tell Me Time Project

This project displays the current real-time clock on the webpage.

 Description:

It shows live time that updates every second.
 Concepts Used:
Date() object
setInterval()
DOM manipulation
Working:
JavaScript fetches current time using new Date() and updates it every 1 second.

4. Text Size Changer Project
This project allows users to increase or decrease text size dynamically.
 
 Description:
It changes font size of text using buttons.

 Concepts Used:
DOM manipulation
Event listeners
CSS style changes using JavaScript

Working:
Clicking buttons increases or decreases font-size dynamically
