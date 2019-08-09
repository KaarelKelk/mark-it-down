const fs = require('fs')
const path = require('path')

const GENERATORS = {}
fs.readdirSync(`${__dirname}`).forEach((dir) => {
	if (fs.lstatSync(path.join(__dirname, dir)).isDirectory()) {
		const barrelPath = path.join(__dirname, dir, 'index.js')
		if (fs.existsSync(barrelPath)) {
			// eslint-disable-next-line global-require, import/no-dynamic-require
			GENERATORS[dir] = require(path.join(__dirname, dir, 'index.js'))
		}
	}
})

/**
 * Returns deep list of keys in object
 * @param {any} object
 * @param {string} keyPrefix
 */
const getDeepObjectKeys = (object, keyPrefix = null) => {
	const keys = Object.keys(object)
	const mappedKeys = []
	keys.forEach((key) => {
		const keyName = keyPrefix ? `${keyPrefix}.${key}` : key
		if (typeof object[key] !== 'function') {
			mappedKeys.push(...getDeepObjectKeys(object[key], keyName))
		} else {
			mappedKeys.push(keyName)
		}
	})

	return mappedKeys
}

module.exports = {
	...GENERATORS,
	toList: (prefix = null) => getDeepObjectKeys(GENERATORS, prefix),
}
