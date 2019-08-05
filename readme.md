# MARK-IT-DOWN
This library will help with generating markodwn.md files easily within nodeJS.
# Usage
```javascript
const markitdown = new MarkItDown() 
markitdown.pushArray([
	markitdown.markdown.headings.h1('heading 1'),
	markitdown.markdown.headings.h2('heading 2')
]) 
markitdown.save(path.join(__dirname, '..', 'readme.md'))
```
# Generators
## Raw
```javascript
Example: markitdown.markdown.raw("Some raw text to push into **.md**")
```
Some raw text to push into **.md**
## Tables
```javascript
Example: markitdown.markdown.table(['Name', 'Email'], [['John', 'john@doe.com']])
```
| Name | Email         |
| ---- | ------------- |
| John | john@doe.com  |
| Snow | john@snow.com |
## Headings
```javascript
Example: markitdown.markdown.h1("Lorem ipsum")
```
```javascript
Example: markitdown.markdown.h2("Lorem ipsum")
```
```javascript
Example: markitdown.markdown.h3("Lorem ipsum")
```
```javascript
Example: markitdown.markdown.h4("Lorem ipsum")
```
```javascript
Example: markitdown.markdown.h5("Lorem ipsum")
```
```javascript
Example: markitdown.markdown.h6("Lorem ipsum")
```
## Script
```javascript
markitdown.markdown.script('javascript', 'console.log("Hello World")')
```
```javascript
console.log("Hello World")
```