# Day 3 - CSS Pseudo Classes and Pseudo Elements

### 1_CSS_FontWeight

In this folder, I learned about the `font-weight` property in CSS. It is used to control how thick or bold text appears on a webpage.

**Example:**

```css
h1{
    font-weight:bold;
}
```

Using this property, I was able to make headings and important text stand out from normal content.

---

### 2_CSS_Pseudo_Classes

In this folder, I practiced different CSS pseudo-classes such as `:hover`, `:active`, and `:focus`. These are used to apply styles when a user interacts with an element.

**Example:**

```css
button:hover{
    background-color:blue;
}
```

When the mouse pointer is placed on the button, its background color changes.

---

### 3_CSS_FirstChild&firstoftypePsuedoClasses

In this folder, I learned how to select specific elements using `:first-child` and `:first-of-type`.

**Example:**

```css
li:first-child{
    color:red;
}
```

This styles only the first list item. These selectors help apply styles without adding extra classes in HTML.

---

### 4_CSS_nthChild

In this folder, I learned about the `:nth-child()` selector. It is used to select elements based on their position inside a parent element.

**Example:**

```css
li:nth-child(2){
    color:green;
}
```

This styles the second list item. It can also be used with odd and even values.

---

### 5_pseudo_more

In this folder, I explored additional pseudo-classes such as `:last-child`, `:empty`, `:only-child`, and `:not()`.

**Example:**

```css
li:last-child{
    color:blue;
}
```

This selector styles only the last item in a list. These pseudo-classes provide more flexibility in styling web pages.

---

### 6_CSS_PseudoElements

In this folder, I learned about pseudo-elements that allow styling specific parts of an element.

**Example:**

```css
p::first-letter{
    font-size:30px;
}
```

This increases the size of the first letter of a paragraph. I also practiced `::before`, `::after`, `::first-line`, and `::selection`.

---

### Content.txt

This file contains sample text used for testing and practicing different CSS properties and pseudo-element effects.

---

### index.html

This is the main HTML file where I created different elements such as headings, paragraphs, lists, buttons, and links to test CSS selectors and pseudo-classes.

---

### style.css

This file contains all the CSS code used in the project. It includes font weight properties, pseudo-classes, pseudo-elements, and other styling rules.

---

### Conclusion

In this practical, I learned how to use CSS pseudo-classes and pseudo-elements to create interactive and attractive web pages. I also understood how selectors such as `:first-child`, `:nth-child()`, and `:hover` can be used to target specific elements without modifying the HTML structure.
