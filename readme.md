# MARK-IT-DOWN
This library is a POC for generating markodwn.md files easily and dynamically within nodeJS.
# Installation
```javascript
// Add following line to your package.json and specify version if needed,"mark-it-down": "https://github.com/KaarelKelk/mark-it-down"
```
# Usage

Basic

```javascript
const { MarkItDown, markdown } = require('./src/MarkItDown')

const markitdown = new MarkItDown()

// Push multiple strings
md.pushArray([
 markdown.headings.h1('heading 1'),
 markdown.headings.h2('heading 2'),
])
// Push single string
md.push(markdown.headings.h3('heading 3'))

md.save(path.join(__dirname, 'readme.md'))
// or
const mdContent = md.stringify()
```


Combined

```javascript
md.pushArray([
 markdown.list(markdown.headings.h6('heading inside list')),
])
```
#### Output
* ###### heading inside list
# Generators
## List of generators
* markdown.bold
* markdown.headings.h1
* markdown.headings.h2
* markdown.headings.h3
* markdown.headings.h4
* markdown.headings.h5
* markdown.headings.h6
* markdown.link
* markdown.list
* markdown.p
* markdown.raw
* markdown.script
* markdown.table
## Raw
```javascript
Example: markdown.raw('Some raw text to push into **.md**')
```
#### Output
Some raw text to push into **.md**
## Paragraph
```javascript
Example: markdown.p('Some paragraph text')
```
#### Output

Some paragraph text

## Bold
```javascript
Example: markdown.bold('Some bold text')
```
#### Output
**Some bold text**
## Links
```javascript
Example: markdown.link('url: string', 'name: string?', 'title?: string')
```
#### Output
* [https://www.google.ee](https://www.google.ee "") url
* [Google](https://www.google.ee "") url + name
* [Google](https://www.google.ee "Google's homepage") url + name + title
## List
```javascript
Example: markdown.list('List item')
```
#### Output
* List item #1
* List item #2
## Tables
```javascript
Example: markdown.table(['Name', 'Email'], [['John', 'john@doe.com']])
```
#### Output
| Name | Email         |
| ---- | ------------- |
| John | john@doe.com  |
| Snow | john@snow.com |
## Headings
```javascript
Example: markdown.h1('Lorem ipsum')
```
```javascript
Example: markdown.h2('Lorem ipsum')
```
```javascript
Example: markdown.h3('Lorem ipsum')
```
```javascript
Example: markdown.h4('Lorem ipsum')
```
```javascript
Example: markdown.h5('Lorem ipsum')
```
```javascript
Example: markdown.h6('Lorem ipsum')
```
## Script
```javascript
markdown.script('javascript', 'console.log('Hello World')')
```
#### Output
```javascript
console.log('Hello World')
```