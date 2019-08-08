const markdownTable = require('markdown-table')

module.exports = (
	headings = [], data = [], options = {},
) => markdownTable([headings, ...data], options)
