# MARK-IT-DOWN
This library will help with generating markodwn.md files easily within nodeJS.
# Usage
```javascript
const markitdown = new MarkItDown()

// Push multiple strings
md.pushArray([
 md.markdown.headings.h1('heading 1'),
 md.markdown.headings.h2('heading 2'),
])
// Push single string
md.push(md.markdown.headings.h3('heading 3'))

md.save(path.join(__dirname, 'readme.md'))
// or
const mdContent = md.stringify()
```
# Generators
## List of generators
* md.markdown.raw
* md.markdown.table
* md.markdown.script
* md.markdown.headings.h1
* md.markdown.headings.h2
* md.markdown.headings.h3
* md.markdown.headings.h4
* md.markdown.headings.h5
* md.markdown.headings.h6
* md.markdown.list
* md.markdown.link
## Raw
```javascript
Example: md.markdown.raw("Some raw text to push into **.md**")
```
#### Output
Some raw text to push into **.md**
## Links
```javascript
Example: md.markdown.link('url: string', 'name: string?', 'title?: string')
```
#### Output
* [https://www.google.ee](https://www.google.ee "") url
* [Google](https://www.google.ee "") url + name
* [Google](https://www.google.ee "Google's homepage") url + name + title
## List
```javascript
Example: md.markdown.list('List item')
```
#### Output
* List item #1
* List item #2
## Tables
```javascript
Example: md.markdown.table(['Name', 'Email'], [['John', 'john@doe.com']])
```
#### Output
| Name | Email         |
| ---- | ------------- |
| John | john@doe.com  |
| Snow | john@snow.com |
## Tables
```javascript
Example: md.markdown.table(['Name', 'Email'], [['John', 'john@doe.com']])
```
#### Output
| Name | Email         |
| ---- | ------------- |
| John | john@doe.com  |
| Snow | john@snow.com |
## Headings
```javascript
Example: md.markdown.h1("Lorem ipsum")
```
```javascript
Example: md.markdown.h2("Lorem ipsum")
```
```javascript
Example: md.markdown.h3("Lorem ipsum")
```
```javascript
Example: md.markdown.h4("Lorem ipsum")
```
```javascript
Example: md.markdown.h5("Lorem ipsum")
```
```javascript
Example: md.markdown.h6("Lorem ipsum")
```
## Script
```javascript
md.markdown.script('javascript', 'console.log("Hello World")')
```
#### Output
```javascript
console.log("Hello World")
```