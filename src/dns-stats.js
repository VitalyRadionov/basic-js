const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let domObj = {};
	domains.forEach(e => {
		e.split('.').reverse().forEach((_, l, arr2) => {
			let prop = '.' + arr2.slice(0, l + 1).join('.');
			domObj[prop] = 1 + (domObj[prop] ?? 0);
		});
	});
	return domObj;
}

module.exports = {
	getDNSStats
};
