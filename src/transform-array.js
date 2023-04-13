const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	let a = [];
	if (Array.isArray(arr)) {
		for (let index = 0; index < arr.length; index++) {
			switch (arr[index]) {
				case '--discard-prev':
					if (a.length) {a.length = a.length - 1;}
					break;
				case '--double-prev':
					if (arr[index - 1]) {a.push(arr[index - 1]);}
					break;
				case '--double-next':
					if (arr[index + 1]) {a.push(arr[index + 1]);}
					break;
				case '--discard-next':
					index = index + 2;
					break;

				default:
					a.push(arr[index]);
					break;
			}
		}
		return a;
	} else {
		throw new Error('\'arr\' parameter must be an instance of the Array!');
	}
}

module.exports = {
	transform
};
