const { MarkItDown } = require('./MarkItDown')
const generators = require('./generators')

module.exports = {
	MarkItDown,
	markdown: generators,
}
