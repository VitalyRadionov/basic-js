const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const array = [...n.toString()];
	let arrNum = 0;
	for (let i = 0; i < array.length; i++) {
		let a = [].concat(array);
		a.splice(i, 1);
		+a.join('') > arrNum ? arrNum = +a.join('') : arrNum;
	}

	return arrNum;
}

module.exports = {
	deleteDigit
};
