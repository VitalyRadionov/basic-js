const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	return str ? str.match(/(\w)\1*/g).map(e => e.length > 1 ? `${(e.length) + e[0]}` : e[0]).join('') : '';
}

module.exports = {
	encodeLine
};
