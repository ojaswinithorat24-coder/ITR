# Day 3 Internship Learning

Today, I learned advanced CSS selectors and styling techniques.

## 1. Font Weight

The `font-weight` property is used to control the thickness of text.

Example:

```css
h1{
    font-weight: bold;
}

p{
    font-weight: 300;
}
```

## 2. Pseudo Classes

Pseudo classes are used to style elements in a particular state.

Example:

```css
button:hover{
    background-color: blue;
    color: white;
}
```

When the mouse pointer is placed over the button, its style changes.

## 3. First Child and First of Type

### first-child

```css
p:first-child{
    color: red;
}
```

Styles the first child element if it is a paragraph.

### first-of-type

```css
p:first-of-type{
    color: green;
}
```

Styles the first paragraph inside a parent element.

## 4. nth-child()

Used to select elements based on their position.

```css
li:nth-child(2){
    color: blue;
}
```

This styles the second list item.

## 5. More Pseudo Classes

Example:

```css
p:not(.special){
    color: gray;
}
```

This styles all paragraphs except those having the class `special`.

## 6. Pseudo Elements

### first-letter

```css
p::first-letter{
    font-size: 30px;
    color: red;
}
```

Styles the first letter of a paragraph.

### before

```css
h1::before{
    content: "★ ";
}
```

Adds a star before the heading text.

### after

```css
h1::after{
    content: " ✔";
}
```

Adds a check mark after the heading text.

## Outcome

I learned how to use CSS pseudo classes and pseudo elements to target specific elements and states, making web pages more interactive and visually appealing.
