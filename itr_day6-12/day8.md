# Day 8 Internship Learning

Today, I learned about Arrays and the difference between Primitive and Reference Data Types in JavaScript.

## Introduction to Arrays

Arrays are used to store multiple values in a single variable. Instead of creating separate variables for each value, an array allows related data to be stored together.

### Examples

* ["HTML", "CSS", "JavaScript"]
* [10, 20, 30, 40]

I learned how to access array elements using indexes and how array indexing starts from 0.

## Array Methods

I explored commonly used array methods such as:

* push() – adds an element to the end of an array.
* pop() – removes the last element.
* shift() – removes the first element.
* unshift() – adds an element at the beginning.

## Primitive and Reference Data Types

### Primitive Data Types

Primitive data types store the actual value directly in memory.
Examples:

* String
* Number
* Boolean
* Undefined
* Null

### Reference Data Types

Reference data types store a reference to a memory location rather than the actual value.
Examples:

* Arrays
* Objects
* Functions
**Methods to Clone Arrays in JavaScript**

**1. Using slice()**

let arr1 = ["HTML", "CSS"];
let arr2 = arr1.slice(0);

**2. Using concat()**

let arr1 = ["HTML", "CSS"];
let arr2 = [].concat(arr1);

**3. Using Spread Operator (...)**

let arr1 = ["HTML", "CSS"];
let arr2 = [...arr1];

Why Array Cloning is Needed

If we directly assign one array to another:

let arr1 = ["HTML", "CSS"];
let arr2 = arr1;

arr2.push("JavaScript");

Both arr1 and arr2 will become:

["HTML", "CSS", "JavaScript"]

This happens because both variables refer to the same array in memory.

Array Cloning Methods Learned
slice()
concat()
spread operator (...)
Example

Original Array:

["HTML", "CSS"]

Cloned Array:

["HTML", "CSS"]

The cloned array is stored separately in memory, so changes in one array do not affect the other.
.

## Outcome

Today’s learning helped me understand how data is stored in JavaScript and how arrays are used to manage multiple values efficiently.
