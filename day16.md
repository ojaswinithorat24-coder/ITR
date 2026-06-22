**Day 16 Internship Diary**

Today I continued my internship learning in React.js and focused on two important topics: React Router (navigation between pages) and API calls (fetching data from server).

**1. React Router (Navigation)**
First, I learned how to create different pages in a React app using React Router DOM.

I used NavLink to create navigation buttons like Home, About Us, and Products.

Example:

<NavLink to="/">Home</NavLink>
<NavLink to="/about-us">About Us</NavLink>
<NavLink to="/product">Products</NavLink>

I understood that:

to="/" means Home page
to="/about-us" means About page
to="/product" means Product page

+ When we click on these links, the page changes without reloading the browser, like Instagram or YouTube.

**Routing Setup Example**

In App.jsx, I learned how routes are connected:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/product" element={<Product />} />
</Routes>

+ This means:
Home opens when / is clicked
About Us opens when /about-us is clicked
Product opens when /product is clicked

**2. API Calls (Fetching Data)**
After that, I learned about API calls.

 **API means we request data from a server and get response.**

 **Simple Example:**
Think like:
+ Shop = Server
+ You = React app
+Items = Data
You ask shopkeeper for items → he gives data.

**Code Example:**
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);

**Step-by-step understanding**
React sends request to API
Server sends data (JSON format)
React stores data in state (useState)
UI updates automatically
🧾 Simple Output Example:

If API returns:

[
  { "title": "Shirt", "price": 500 },
  { "title": "Shoes", "price": 1200 }
]

It will show on screen like:
Shirt – ₹500
Shoes – ₹1200

 Final Summary:
Today I learned how to:

Create navigation using React Router (NavLink, Route, Routes)
Move between pages without refreshing
Fetch data from server using API calls
Display dynamic data on webpage

This helped me understand how real-world React websites like e-commerce sites work.
