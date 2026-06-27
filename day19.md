**day-19**

on day 19 of my intership i learn about-
# Understanding the Backend: My First Steps with Node.js, PostgreSQL & Postman

After learning React and building user interfaces, I wanted to understand what happens behind the scenes when a user clicks a button. During my internship, I got introduced to backend development using **Node.js**, **PostgreSQL**, and **Postman**, and it completely changed the way I look at web applications.

## What is Backend Development?

The backend is responsible for handling requests, processing data, communicating with the database, and sending responses back to the frontend.

For example, when you log in to an application:

* React sends the login request.
* Node.js receives and processes it.
* PostgreSQL verifies the user details.
* The server sends a response back to React.

## Tools I Learned

### Node.js

Node.js allows JavaScript to run outside the browser. It is widely used to build fast and scalable backend applications.

### PostgreSQL

PostgreSQL is a powerful relational database used to store application data such as users, products, orders, and much more.

### Postman

Postman is an API testing tool that lets developers test backend APIs without creating a frontend.

## Understanding REST APIs

REST APIs enable communication between the frontend and backend using HTTP methods.

The most commonly used methods are:

* GET – Retrieve data
* POST – Add new data
* PUT – Update existing data
* DELETE – Remove data

## API Endpoints

Every API has its own endpoint.

Examples:

GET /users

POST /login

GET /products

Each endpoint performs a specific task.

## Query Parameters

Query parameters help send additional information through the URL.

Example:

/search?name=John

Here, **name** is the query parameter.

## Path Parameters

Path parameters are part of the URL itself.

Example:

/users/101

Here, **101** is the user ID.

## Backend Workflow

A simple backend request flows like this:

React Frontend

↓

HTTP Request

↓

Node.js Server

↓

PostgreSQL Database

↓

Node.js Server

↓

HTTP Response

↓

React Frontend

## What I Learned

During my internship, I learned:

* Setting up Node.js
* Working with npm
* Understanding package.json
* Creating backend APIs
* Testing APIs using Postman
* Working with REST APIs
* Using GET and POST requests
* Understanding query and path parameters
* Connecting with PostgreSQL
* Writing basic SQL queries

## Final Thoughts

Learning backend development helped me understand how modern web applications actually work. From handling API requests to storing data in PostgreSQL, every component plays an important role in building reliable and scalable applications.

This is just the beginning of my backend journey, and I'm excited to continue learning and building more.

*Special thanks to my company for providing this wonderful learning opportunity.*
