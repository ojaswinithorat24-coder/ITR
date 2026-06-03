**itr day2 learning -mostly focuses on css**
# CSS Learning Journey

During this session, I learned various CSS concepts and explored how websites are designed and styled.

### Topics Covered

* CSS Styling Methods

  * Inline CSS
  * Internal CSS
  * External CSS

* CSS Fonts

  * font-family
  * font-size
  * font-weight
  * font-style

* CSS Colors

  * Color Names
  * HEX Colors
  * RGB Colors

* CSS Selectors

  * Element Selector
  * Class Selector (`.`)
  * ID Selector (`#`)
  * Universal Selector (`*`)
  * Group Selector

* Difference between Class and ID Selectors

* Utility Classes

* Advanced CSS Selectors

* CSS Attribute Selectors

* CSS Specificity

### Chrome Developer Tools Learning

To understand how websites work in real life, I explored websites like **Bewakoof** and **capitalbedrooms.uk** using Chrome Developer Tools.

Things I checked:

* Inspect Element
* Website HTML Structure
* Applied CSS Styles
* Console
* Cookies
* Browser Storage
* Live CSS Changes

This helped me understand how websites are structured, how styles are applied, and how developers inspect and debug websites.

### Tools Used

* HTML
* CSS
* VS Code
* Chrome Developer Tools
* GitHub

### Outcome

This session helped me build a strong foundation in CSS, understand selectors and specificity, and learn how to inspect and analyze real websites using Developer Tools.

### Important Concepts & Examples

#### 1. Class Selector (.)

Used when the same style is needed for multiple elements.

```css
.heading{
    color: blue;
}
```

```html
<h1 class="heading">Welcome</h1>
```

#### 2. ID Selector (#)

Used for a unique element.

```css
#title{
    color: red;
}
```

```html
<h1 id="title">Hello</h1>
```

#### 3. External CSS

Most commonly used in projects.

```html
<link rel="stylesheet" href="style.css">
```

#### 4. Descendant Selector

```css
div p{
    color: green;
}
```

Targets all paragraph tags inside a div.

#### 5. Child Selector

```css
div > p{
    color: purple;
}
```

Targets only direct child paragraphs.

#### 6. Attribute Selector

```css
input[type="text"]{
    border: 1px solid black;
}
```

Targets text input fields.

#### 7. CSS Specificity Priority

```text
Inline CSS > ID Selector > Class Selector > Element Selector
```

#### 8. Chrome Developer Tools

Used:

* Inspect Element
* Console
* Cookies
* Browser Storage
* Live CSS Editing

Practical exploration was done on:

* Bewakoof Website
* capitalbedrooms.uk Website

#### 9. GitHub Workflow Learned

```bash
git status
git add .
git commit -m "message"
git push
```

These commands are used to check changes, save them locally, and push the project to GitHub.

