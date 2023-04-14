const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str);
	const repeatTimes = options?.repeatTimes ?? 1;
	const separator = options?.separator ?? '+';
	const addition = String(options.addition === undefined ? '' : options.addition);
	const additionRepeatTimes = options?.additionRepeatTimes ?? 1;
	const additionSeparator = options?.additionSeparator ?? '|';
	let strRepeat = '';
	let additionRepeat = '';

	for (let j = 1; j <= additionRepeatTimes; j++) {
		if (j === additionRepeatTimes) {
			additionRepeat += addition;
		} else {
			additionRepeat += addition + additionSeparator;
		}
	}

	for (let i = 1; i <= repeatTimes; i++) {
		if (i === repeatTimes) {
			strRepeat += str + additionRepeat;
		} else {

			strRepeat += str + additionRepeat + separator;
		}
	}

	return strRepeat
}

module.exports = {
	repeater
};
