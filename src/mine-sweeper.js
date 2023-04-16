const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const column = matrix[0].length;
	const row = matrix.length;
	let setup = matrix.map(e => e.map(a => a = 0));

	for (let j = 0; j < column; j++) {
		for (let i = 0; i < row; i++) {
			if (matrix[i][j]) {
				if (j + 1 < column) {
					setup[i][j + 1] += 1;
				}
				if (i + 1 < row && j + 1 < column) {
					setup[i + 1][j + 1] += 1;
				}
				if (i + 1 < row) {
					setup[i + 1][j] += 1;
				}
				if (i + 1 < row && j - 1 >= 0) {
					setup[i + 1][j - 1] += 1;
				}
				if (j - 1 >= 0) {
					setup[i][j - 1] += 1;
				}
				if (i - 1 >= 0 && j - 1 >= 0) {
					setup[i - 1][j - 1] += 1;
				}
				if (i - 1 >= 0) {
					setup[i - 1][j] += 1;
				}
				if (i - 1 >= 0 && j + 1 < column) {
					setup[i - 1][j + 1] += 1;
				}
			}
		}
	}
	return setup;
}

module.exports = {
	minesweeper
};
