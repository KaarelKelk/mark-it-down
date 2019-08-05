const fs = require('fs')
const generators = require('./generators')

class MarkItDown {
	constructor() {
		this.markdown = generators
		this.definitions = []
	}

	push(definition) {
		this.definitions.push(definition)
	}

	pushArray(definitions = []) {
		definitions.forEach(definition => this.push(definition))
	}

	stringify() {
		return this.definitions.join(`\n\r`)
	}

	save(path) {
		fs.writeFileSync(
			path,
			this.stringify(),
			{ encoding: 'utf8', flag: 'w' },
		);
	}
}


module.exports = {
	MarkItDown
}
