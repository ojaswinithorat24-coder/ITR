# Day 11 Internship Learning

Today, I learned about the Document Object Model (DOM) and how JavaScript interacts with HTML elements to create dynamic and interactive web pages.

## Introduction to DOM

The Document Object Model (DOM) represents an HTML document as a tree-like structure. Every HTML element becomes an object that JavaScript can access, modify, add, or remove.

### Example

HTML Elements:

* html

  * head
  * body

    * h1
    * p
    * button

This structure is called the DOM Tree.

## DOM Tree

I learned that HTML elements have relationships similar to a family tree.

### Types of Relationships

* Parent Element
* Child Element
* Sibling Element

### Example

A `div` containing a heading and paragraph acts as the parent, while the heading and paragraph are its child elements.

## Selecting Elements

JavaScript provides different methods to select elements from a webpage.

### Methods Learned

* getElementById()
* getElementsByClassName()
* getElementsByTagName()
* querySelector()
* querySelectorAll()

### Example

If an element has the id "heading", JavaScript can select it and perform operations on it.

## Manipulating Elements

After selecting an element, JavaScript can modify it.

### Operations

* Change text content
* Change styles
* Modify attributes
* Add new elements
* Remove existing elements

### Example

Original Text:

* Welcome

Updated Text:

* Welcome to JavaScript

## Working with Styles

JavaScript can dynamically change CSS properties.

### Example

Before:

* Text Color = Black

After:

* Text Color = Blue

This allows webpages to respond to user actions.

## Introduction to Events

Events occur when users interact with a webpage.

### Common Events

* Click
* Double Click
* Mouse Over
* Key Press
* Form Submit

### Example

Action:

* User clicks a button

Response:

* Display a message or change content on the page

## Why DOM is Important

The DOM acts as a bridge between HTML and JavaScript. It allows developers to create interactive websites where content can change without reloading the page.

## Outcome

Today’s learning helped me understand the structure of the DOM, methods for selecting elements, modifying webpage content and styles, and handling user interactions through events. These concepts are essential for building dynamic and interactive web applications.
