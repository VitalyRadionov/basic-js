const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	return [...s1].reduce((s, e, i, arr) => {
		if (!s[1].includes(e)) {
			return s = [
				s[0] + Math.min(arr.filter(a => a === e).length, [...s2].filter(b => b === e).length),
				s[1] + e];
		}
		return s;
	}, [0, ''])[0];
}

module.exports = {
	getCommonCharacterCount
};
