const path = require('path')
const { MarkItDown } = require('./MarkItDown')

const markitdown = new MarkItDown()

markitdown.pushArray([
	markitdown.markdown.raw('# MARK-IT-DOWN'),
	markitdown.markdown.raw('This library will help with generating markodwn.md files easily within nodeJS.'),
	
	// Usage
	markitdown.markdown.headings.h1('Usage'),
	markitdown.markdown.script(
		'javascript',
		"const markitdown = new MarkItDown() \n" +
		"markitdown.pushArray([\n" + 
		"	markitdown.markdown.headings.h1('heading 1'),\n" +
		"	markitdown.markdown.headings.h2('heading 2')\n" +
		"]) \n" +
		"markitdown.save(path.join(__dirname, '..', 'readme.md'))"
	),

	// Generators
	markitdown.markdown.headings.h1('Generators'),

	// Raw
	markitdown.markdown.headings.h2('Raw'),
	markitdown.markdown.script('javascript', 'Example: markitdown.markdown.raw("Some raw text to push into **.md**")'),
	markitdown.markdown.raw("Some raw text to push into **.md**"),

	// Tables
	markitdown.markdown.headings.h2('Tables'),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.table(['Name', 'Email'], [['John', 'john@doe.com']])"),
	markitdown.markdown.table(['Name', 'Email'], [['John', 'john@doe.com'], ['Snow', 'john@snow.com']]),

	// Headings
	markitdown.markdown.headings.h2('Headings'),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.h1(\"Lorem ipsum\")"),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.h2(\"Lorem ipsum\")"),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.h3(\"Lorem ipsum\")"),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.h4(\"Lorem ipsum\")"),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.h5(\"Lorem ipsum\")"),
	markitdown.markdown.script('javascript', "Example: markitdown.markdown.h6(\"Lorem ipsum\")"),

	// Script
	markitdown.markdown.headings.h2('Script'),
	markitdown.markdown.script('javascript', 'markitdown.markdown.script(\'javascript\', \'console.log("Hello World")\')'),
	markitdown.markdown.script('javascript', 'console.log("Hello World")'),
])


markitdown.save(path.join(__dirname, '..', 'readme.md'))