const game = document.getElementById('game');
const status = document.getElementById('status');
const randomModeButton = document.getElementById('randomMode');
const smartModeButton = document.getElementById('smartMode');

let field = Array.from({ length: 3 }, () => Array(3).fill(null)); // մատրիցա 3x3
let currentPlayer = 'X'; // Խաղը սկսում է մարդը
let botMode = 'random'; // Ստանդարտ: թույլ բոտ

// Խաղային տախտակի ստեղծում
function createGame() {
	game.innerHTML = ''; // Նախքան սկիզբը մաքրում ենք տախտակը
	field = Array.from({ length: 3 }, () => Array(3).fill(null)); // Թարմացնում ենք մատրիցան
	currentPlayer = 'X'; // Անկախ ում քայլն է եել վերջում, սկսում է խաղացողը
	status.textContent = '';

	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			const cell = document.createElement('div');
			cell.classList.add('cell');
			cell.setAttribute('data-row', row);
			cell.setAttribute('data-col', col);
			cell.addEventListener('click', () => makeMove(row, col));
			game.appendChild(cell);
		}
	}
}

// Խաղացողի քայլը
function makeMove(row, col) {
	if (field[row][col] !== null || currentPlayer !== 'X') return;

	field[row][col] = 'X';
	updateBoard();
	if (checkWinner('X')) {
		status.textContent = 'Вы выиграли!';
		return;
	}

	currentPlayer = 'O';
	setTimeout(botMove, 500); // Դադար բոթի համար
}

// Բոթի քայլը
function botMove() {
	if (botMode === 'random') {
		makeRandomMove();
	} else if (botMode === 'smart') {
		makeSmartMove();
	}

	updateBoard();
	if (checkWinner('O')) {
		status.textContent = 'Бот выиграл!';
		return;
	}

	currentPlayer = 'X';
}

// Պատահական բոտի քայլ
function makeRandomMove() {
	const availableMoves = [];
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (field[row][col] === null) {
				availableMoves.push([row, col]);
			}
		}
	}

	if (availableMoves.length > 0) {
		const [row, col] = availableMoves[Math.floor(Math.random() * availableMoves.length)];
		field[row][col] = 'O';
	}
}

// Իդեալական բոտի քայլ (մինմաքս ալգորիթմ)
function makeSmartMove() {
	let bestScore = -Infinity;
	let move;

	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (field[row][col] === null) {
				field[row][col] = 'O';
				const score = minimax(field, 0, false);
				field[row][col] = null;

				if (score > bestScore) {
					bestScore = score;
					move = { row, col };
				}
			}
		}
	}

	if (move) {
		field[move.row][move.col] = 'O';
	}
}

// մինմաքս ալգորիթմ
/**
 * Սա մինմաքս ալգորիթմի իրականացումն է
 * @param {*} board Խաղատախտակը
 * @param {*} depth Հեռավորությունը մինմաքս ծառի արմատից
 * @param {*} isMaximizing Սա մաքսիմալացում է, թե մինիմալացում
 * @returns Վերադարձնում է գնահատականը
 */
function minimax(board, depth, isMaximizing) {
	if (checkWinner('O')) return 10 - depth;
	if (checkWinner('X')) return depth - 10;
	if (isDraw()) return 0;
	if (depth >= 6) return evaluateBoard(board);

	if (isMaximizing) {
		let bestScore = -Infinity;
		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				if (board[row][col] === null) {
					board[row][col] = 'O';
					const score = minimax(board, depth + 1, false);
					board[row][col] = null;
					bestScore = Math.max(score, bestScore);
				}
			}
		}
		return bestScore;
	} else {
		let bestScore = Infinity;
		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				if (board[row][col] === null) {
					board[row][col] = 'X';
					const score = minimax(board, depth + 1, true);
					board[row][col] = null;
					bestScore = Math.min(score, bestScore);
				}
			}
		}
		return bestScore;
	}
}

// Հաղթանակի ստուգում
function checkWinner(player) {
	const winningCombos = [
		[[0, 0], [0, 1], [0, 2]],
		[[1, 0], [1, 1], [1, 2]],
		[[2, 0], [2, 1], [2, 2]],
		[[0, 0], [1, 0], [2, 0]],
		[[0, 1], [1, 1], [2, 1]],
		[[0, 2], [1, 2], [2, 2]],
		[[0, 0], [1, 1], [2, 2]],
		[[0, 2], [1, 1], [2, 0]],
	];

	return winningCombos.some(combo =>
		combo.every(([r, c]) => field[r][c] === player)
	);
}

// Ոչ ոչքյի ստուգում
function isDraw() {
	return field.flat().every(cell => cell !== null);
}

// Խաղային դաշտի թարմացում
function updateBoard() {
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
			cell.textContent = field[row][col];
			if (field[row][col]) {
				cell.classList.add('taken');
			}
		}
	}
}

// Խաղի ռեժիմների փոփոխություն
randomModeButton.addEventListener('click', () => {
	botMode = 'random';
	createGame();
});

smartModeButton.addEventListener('click', () => {
	botMode = 'smart';
	createGame();
});

// Խաղի մեկնարկ
createGame();
