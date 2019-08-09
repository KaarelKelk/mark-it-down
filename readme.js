const path = require('path')
const { MarkItDown } = require('./src/MarkItDown')

const md = new MarkItDown()
const mdPath = path.join(__dirname, 'readme.md')

const { toList } = require('./src/generators')
/**
 * SECTIONS
 */

const SECTION_MAIN = [
	md.markdown.raw('This library will help with generating markodwn.md files easily within nodeJS.'),
]

const SECTION_USAGE = [
	md.markdown.headings.h1('Usage'),
	md.markdown.script(
		'javascript',
		[
			'const markitdown = new MarkItDown()',
			'',
			'// Push multiple strings',
			'md.pushArray([',
			' md.markdown.headings.h1(\'heading 1\'),',
			' md.markdown.headings.h2(\'heading 2\'),',
			'])',
			'// Push single string',
			'md.push(md.markdown.headings.h3(\'heading 3\'))',
			'',
			'md.save(path.join(__dirname, \'readme.md\'))',
			'// or',
			'const mdContent = md.stringify()',
		].join('\n'),
	),
]

const SECTION_GENERATORS_LIST = [
	md.markdown.headings.h1('List of generators'),
	...toList('md.markdown').map(item => md.markdown.list(item)),
]

/**
 * GENERATORS
 */

// RAW
const GENERATOR_RAW = [
	md.markdown.headings.h2('Raw'),
	md.markdown.script('javascript', 'Example: md.markdown.raw("Some raw text to push into **.md**")'),
	md.markdown.headings.h4('Output'),
	md.markdown.raw('Some raw text to push into **.md**'),
]

// LINK
const GENERATOR_LINK = [
	md.markdown.headings.h2('Links'),
	md.markdown.script('javascript', 'Example: md.markdown.link(\'url: string\', \'name: string?\', \'title?: string\')'),
	md.markdown.headings.h4('Output'),

	md.markdown.list(`${md.markdown.link('https://www.google.ee')} url`),
	md.markdown.list(`${md.markdown.link('https://www.google.ee', 'Google')} url + name`),
	md.markdown.list(`${md.markdown.link('https://www.google.ee', 'Google', 'Google\'s homepage')} url + name + title`),
]

// List
const GENERATOR_LIST = [
	md.markdown.headings.h2('List'),
	md.markdown.script('javascript', 'Example: md.markdown.list(\'List item\')'),
	md.markdown.headings.h4('Output'),
	md.markdown.list('List item #1'),
	md.markdown.list('List item #2'),
]

// TABLES
const GENERATOR_TABLES = [
	md.markdown.headings.h2('Tables'),
	md.markdown.script('javascript', 'Example: md.markdown.table([\'Name\', \'Email\'], [[\'John\', \'john@doe.com\']])'),
	md.markdown.headings.h4('Output'),
	md.markdown.table(['Name', 'Email'], [['John', 'john@doe.com'], ['Snow', 'john@snow.com']]),
]

// Headings
const GENERATOR_HEADINGS = [
	md.markdown.headings.h2('Headings'),
	md.markdown.script('javascript', 'Example: md.markdown.h1("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h2("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h3("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h4("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h5("Lorem ipsum")'),
	md.markdown.script('javascript', 'Example: md.markdown.h6("Lorem ipsum")'),
]

// Script
const GENERATOR_SCRIPT = [
	md.markdown.headings.h2('Script'),
	md.markdown.script('javascript', 'md.markdown.script(\'javascript\', \'console.log("Hello World")\')'),
	md.markdown.headings.h4('Output'),
	md.markdown.script('javascript', 'console.log("Hello World")'),
]

/**
 * Push all sections and generators into md
 */
md.pushArray([
	// Main
	md.markdown.headings.h1('MARK-IT-DOWN'),
	...SECTION_MAIN,
	...SECTION_USAGE,

	// Generators
	md.markdown.headings.h1('Generators'),
	...SECTION_GENERATORS_LIST,

	...GENERATOR_RAW,
	...GENERATOR_LINK,
	...GENERATOR_LIST,
	...GENERATOR_TABLES,
	...GENERATOR_TABLES,
	...GENERATOR_HEADINGS,
	...GENERATOR_SCRIPT,
])


md.save(mdPath)
