const game = document.getElementById('game');
const rows = 8; // Размер поля
const cols = 8;
const mines = 1; // Количество мин

// Խաղային դաշտի գեներացիա
function createGame() {
	for (let i = 0; i < rows * cols; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		cell.setAttribute('data-mine', 'false');
		game.appendChild(cell);
	}

	placeMines();
}

// Ականների պատահական տեղադրում
function placeMines() {
	let placedMines = 0;
	while (placedMines < mines) {
		const cells = document.querySelectorAll('.cell');
		const randomIndex = Math.floor(Math.random() * cells.length);
		const cell = cells[randomIndex];
		if (cell.getAttribute('data-mine') === 'false') {
			cell.setAttribute('data-mine', 'true');
			placedMines++;
		}
	}
}

// Հարևան դաշտերում ականների քանակի հաշվարկում
function countMines(cell) {
	const cells = Array.from(document.querySelectorAll('.cell'));
	const index = cells.indexOf(cell);
	const neighbors = [
		cells[index - cols - 1], cells[index - cols], cells[index - cols + 1],
		cells[index - 1], cells[index + 1],
		cells[index + cols - 1], cells[index + cols], cells[index + cols + 1]
	];

	const validNeighbors = neighbors.filter(neighbor => neighbor !== undefined);
	return validNeighbors.reduce((count, neighbor) => {
		if (neighbor && neighbor.getAttribute('data-mine') === 'true') {
			count++;
		}
		return count;
	}, 0);
}

// Դաշտի բացում
function openCell(cell) {
	console.log(cell);

	if (cell.classList.contains('open') || cell.classList.contains('flag')) return;

	cell.classList.add('open');
	if (cell.getAttribute('data-mine') === 'true') {
		cell.textContent = '💣';
		alert('Вы проиграли!');
		return;
	}

	const mineCount = countMines(cell);
	if (mineCount > 0) {
		cell.textContent = mineCount;
	} else {
		// Открываем соседние клетки, если мин рядом нет
		const cells = Array.from(document.querySelectorAll('.cell'));
		const index = cells.indexOf(cell);
		const neighbors = [
			cells[index - cols - 1], cells[index - cols], cells[index - cols + 1],
			cells[index - 1], cells[index + 1],
			cells[index + cols - 1], cells[index + cols], cells[index + cols + 1]
		];

		neighbors.forEach(neighbor => {
			if (neighbor && !neighbor.classList.contains('open')) {
				openCell(neighbor);
			}
		});
	}
}

// Դրոշակի տեղադրում/հեռացում
function toggleFlag(cell) {
	if (cell.classList.contains('open')) return;

	if (cell.classList.contains('flag')) {
		cell.classList.remove('flag');
		cell.textContent = '';
	} else {
		cell.classList.add('flag');
		cell.textContent = '🚩';
	}
}

// Իրադարձությունների մշակիչներ
game.addEventListener('click', (event) => {
	if (event.target.classList.contains('cell')) {
		openCell(event.target);
	}
});

game.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	if (event.target.classList.contains('cell')) {
		toggleFlag(event.target);
	}
});

// Խաղի սկիզբ
createGame();
