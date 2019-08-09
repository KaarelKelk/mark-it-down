const path = require('path')
const { MarkItDown, markdown } = require('./src')

const md = new MarkItDown()
const mdPath = path.join(__dirname, 'readme.md')

const { toList } = require('./src/generators')
/**
 * SECTIONS
 */

const SECTION_MAIN = [
	markdown.headings.h1('MARK-IT-DOWN'),
	markdown.raw('This library is a POC for generating markodwn.md files easily and dynamically within nodeJS.'),
]

const SECTION_USAGE = [
	markdown.headings.h1('Installation'),
	markdown.script('javascript', [
		'// Add following line to your package.json and specify version if needed',
		'"mark-it-down": "https://github.com/KaarelKelk/mark-it-down"',
	]),

	markdown.headings.h1('Usage'),
	markdown.p('Basic'),
	markdown.script('javascript', [
		'const { MarkItDown, markdown } = require(\'./src/MarkItDown\')',
		'',
		'const markitdown = new MarkItDown()',
		'',
		'// Push multiple strings',
		'md.pushArray([',
		' markdown.headings.h1(\'heading 1\'),',
		' markdown.headings.h2(\'heading 2\'),',
		'])',
		'// Push single string',
		'md.push(markdown.headings.h3(\'heading 3\'))',
		'',
		'md.save(path.join(__dirname, \'readme.md\'))',
		'// or',
		'const mdContent = md.stringify()',
	].join('\n')),
	'',
	markdown.p('Combined'),
	markdown.script('javascript', [
		'md.pushArray([',
		' markdown.list(markdown.headings.h6(\'heading inside list\')),',
		'])',
	].join('\n')),
	markdown.headings.h4('Output'),
	markdown.list(markdown.headings.h6('heading inside list')),
]

const SECTION_GENERATORS_LIST = [
	markdown.headings.h1('Generators'),
	markdown.headings.h2('List of generators'),
	...toList('markdown').map(item => md.markdown.list(item)),
]

/**
 * GENERATORS
 */

// RAW
const GENERATOR_RAW = [
	markdown.headings.h2('Raw'),
	markdown.script('javascript', 'Example: markdown.raw(\'Some raw text to push into **.md**\')'),
	markdown.headings.h4('Output'),
	markdown.raw('Some raw text to push into **.md**'),
]

// Paragraph
const GENERATOR_P = [
	markdown.headings.h2('Paragraph'),
	markdown.script('javascript', 'Example: markdown.p(\'Some paragraph text\')'),
	markdown.headings.h4('Output'),
	markdown.p('Some paragraph text'),
]

// Paragraph
const GENERATOR_BOLD = [
	markdown.headings.h2('Bold'),
	markdown.script('javascript', 'Example: markdown.bold(\'Some bold text\')'),
	markdown.headings.h4('Output'),
	markdown.bold('Some bold text'),
]

// LINK
const GENERATOR_LINK = [
	markdown.headings.h2('Links'),
	markdown.script('javascript', 'Example: markdown.link(\'url: string\', \'name: string?\', \'title?: string\')'),
	markdown.headings.h4('Output'),

	markdown.list(`${markdown.link('https://www.google.ee')} url`),
	markdown.list(`${markdown.link('https://www.google.ee', 'Google')} url + name`),
	markdown.list(`${markdown.link('https://www.google.ee', 'Google', 'Google\'s homepage')} url + name + title`),
]

// List
const GENERATOR_LIST = [
	markdown.headings.h2('List'),
	markdown.script('javascript', 'Example: markdown.list(\'List item\')'),
	markdown.headings.h4('Output'),
	markdown.list('List item #1'),
	markdown.list('List item #2'),
]

// TABLES
const GENERATOR_TABLES = [
	markdown.headings.h2('Tables'),
	markdown.script('javascript', 'Example: markdown.table([\'Name\', \'Email\'], [[\'John\', \'john@doe.com\']])'),
	markdown.headings.h4('Output'),
	markdown.table(['Name', 'Email'], [['John', 'john@doe.com'], ['Snow', 'john@snow.com']]),
]

// Headings
const GENERATOR_HEADINGS = [
	markdown.headings.h2('Headings'),
	markdown.script('javascript', 'Example: markdown.h1(\'Lorem ipsum\')'),
	markdown.script('javascript', 'Example: markdown.h2(\'Lorem ipsum\')'),
	markdown.script('javascript', 'Example: markdown.h3(\'Lorem ipsum\')'),
	markdown.script('javascript', 'Example: markdown.h4(\'Lorem ipsum\')'),
	markdown.script('javascript', 'Example: markdown.h5(\'Lorem ipsum\')'),
	markdown.script('javascript', 'Example: markdown.h6(\'Lorem ipsum\')'),
]

// Script
const GENERATOR_SCRIPT = [
	markdown.headings.h2('Script'),
	markdown.script('javascript', 'markdown.script(\'javascript\', \'console.log(\'Hello World\')\')'),
	markdown.headings.h4('Output'),
	markdown.script('javascript', 'console.log(\'Hello World\')'),
]

/**
 * Push all sections and generators into md
 */
md.pushArray([
	// Main
	...SECTION_MAIN,
	...SECTION_USAGE,

	// Generators
	...SECTION_GENERATORS_LIST,

	...GENERATOR_RAW,
	...GENERATOR_P,
	...GENERATOR_BOLD,
	...GENERATOR_LINK,
	...GENERATOR_LIST,
	...GENERATOR_TABLES,
	...GENERATOR_HEADINGS,
	...GENERATOR_SCRIPT,
]).save(mdPath)
