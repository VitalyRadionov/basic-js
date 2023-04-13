const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	result: [],
	getLength() {
		return this.result.length;
	},
	addLink(value) {
		this.result.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (typeof position !== 'number' || position <= 0 || this.getLength() < position) {
			this.result = [];
			throw new Error('You can\'t remove incorrect link!');
		}
		else {
			return (this.result.splice(--position, 1), this);
		}
	},
	reverseChain() {
		return (this.result.reverse(), this);
	},
	finishChain() {
		return this.result.splice(0).join('~~');
	}
};

module.exports = {
	chainMaker
};
