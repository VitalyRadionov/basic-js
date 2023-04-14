const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(reverse = true) {
		this.a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		this.reverse = reverse;
	}

	encrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		message = message.toUpperCase();
		key = key.toUpperCase();
		let r = '';
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			let mi = this.a.indexOf(message[i]);
			if (mi >= 0) {
				let ki_s = key[(j >= key.length) ? j = 0 : j];
				let ki = this.a.indexOf(ki_s);
				j++;
				r += this.a[(this.a.length + (mi + ki)) % this.a.length];
			} else {
				r += message[i];
			}
		}
		return this.reverse ? r : r.split('').reverse().join('');
	}
	decrypt(encryptedMessage, key) {
		if (encryptedMessage === undefined || key === undefined) {
			throw new Error('Incorrect arguments!');
		}

		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();

		let r = '';
		let j = 0;
		for (let i = 0; i < encryptedMessage.length; i++) {
			let mi = this.a.indexOf(encryptedMessage[i]);
			if (mi >= 0) {
				let ki_s = key[(j >= key.length) ? j = 0 : j];
				let ki = -this.a.indexOf(ki_s);
				j++;
				r += this.a[(this.a.length + (mi + ki)) % this.a.length];
			} else {
				r += encryptedMessage[i];
			}
		}
		return this.reverse ? r : r.split('').reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine
};
