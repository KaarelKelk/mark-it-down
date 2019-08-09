/* eslint-disable global-require */
const GENERATORS = {
	raw: require('./raw'),
	table: require('./table'),
	script: require('./script'),
	headings: require('./headings'),
	list: require('./list'),
	link: require('./link'),
}

const getListKeys = (object, keyPrefix = null) => {
	const keys = Object.keys(object)
	const mappedKeys = []
	keys.forEach((key) => {
		const keyName = keyPrefix ? `${keyPrefix}.${key}` : key
		if (typeof object[key] !== 'function') {
			mappedKeys.push(...getListKeys(object[key], keyName))
		} else {
			mappedKeys.push(keyName)
		}
	})

	return mappedKeys
}

module.exports = {
	...GENERATORS,
	toList: (prefix = null) => getListKeys(GENERATORS, prefix),
}
