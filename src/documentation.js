const path = require('path')
const { MarkItDown } = require('./MarkItDown')

const md = new MarkItDown()
const mdPath = path.join(__dirname, '..', 'readme.md')


md.pushArray([
	md.markdown.raw('# MARK-IT-DOWN'),
	md.markdown.raw('This library will help with generating markodwn.md files easily within nodeJS.'),

	// Usage
	md.markdown.headings.h1('Usage'),
	md.markdown.script(
		'javascript',
		[
			'const markitdown = new MarkItDown()',
			'',
			'// Push multiple strings',
			'md.pushArray([',
			' md.markdown.headings.h1(\'heading 1\')',
			' md.markdown.headings.h2(\'heading 2\')',
			'])',
			'// Push single string',
			'md.push(md.markdown.headings.h3(\'heading 3\'))',
			'',
			'md.save(path.join(__dirname, \'readme.md\'))',
			'or',
			'const mdContent = md.stringify()',
		].join('\n'),
	),

	// Generators
	md.markdown.headings.h1('Generators'),

	// Raw
	md.markdown.headings.h2('Raw'),
	md.markdown.script('javascript', 'Example: md.markdown.raw("Some raw text to push into **.md**")'),
	md.markdown.headings.h4('Output'),
	md.markdown.raw('Some raw text to push into **.md**'),

	// Link
	md.markdown.headings.h2('Links'),
	md.markdown.script('javascript', 'Example: md.markdown.link(\'url: string\', \'name: string?\', \'title?: string\')'),
	md.markdown.headings.h4('Output'),

	md.markdown.list(`${md.markdown.link('https://www.google.ee')} url`),
	md.markdown.list(`${md.markdown.link('https://www.google.ee', 'Google')} url + name`),
	md.markdown.list(`${md.markdown.link('https://www.google.ee', 'Google', 'Google\'s homepage')} url + name + title`),

	// List
	md.markdown.headings.h2('List'),
	md.markdown.script('javascript', 'Example: md.markdown.list(\'List item\')'),
	md.markdown.headings.h4('Output'),
	md.markdown.list('List item #1'),
	md.markdown.list('List item #2'),


	// Tables
	md.markdown.headings.h2('Tables'),
	md.markdown.script('javascript', 'Example: md.markdown.table([\'Name\', \'Email\'], [[\'John\', \'john@doe.com\']])'),
	md.markdown.headings.h4('Output'),
	md.markdown.table(['Name', 'Email'], [['John', 'john@doe.com'], ['Snow', 'john@snow.com']]),

	// Headings
	md.markdown.headings.h2('Headings'),
	md.markdown.script('javascript', 'Example: md.markdown.h1("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h2("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h3("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h4("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h5("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h6("Lorem ipsum")'),

	// Script
	md.markdown.headings.h2('Script'),
	md.markdown.script('javascript', 'md.markdown.script(\'javascript\', \'console.log("Hello World")\')'),
	md.markdown.headings.h4('Output'),
	md.markdown.script('javascript', 'console.log("Hello World")'),
])


md.save(mdPath)
