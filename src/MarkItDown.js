const fs = require('fs')
const generators = require('./generators')

class MarkItDown {
	constructor() {
		this.markdown = generators
		this.definitions = []
	}

	/**
	 * Push string into generated definitions
	 * @param {string} definition
	 */
	push(definition) {
		this.definitions.push(definition)
		return this
	}

	/**
	 *
	 * @param {string[]} definitions
	 */
	pushArray(definitions = []) {
		definitions.forEach(definition => this.push(definition))
		return this
	}

	/**
	 * Get .md as string
	 */
	stringify() {
		return this.definitions.join('\n\r')
	}

	/**
	 * Write documentation into file
	 * @param {string} path
	 */
	save(path) {
		fs.writeFileSync(
			path,
			this.stringify(),
			{ encoding: 'utf8', flag: 'w' },
		)
		return this
	}
}


module.exports = {
	MarkItDown,
}
