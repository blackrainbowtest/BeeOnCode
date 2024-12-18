const board = document.getElementById("gameBoard");
const winnerDisplay = document.getElementById("winner");

let currentPlayer = "X"; // Սկսում է X-ն
let cells = Array(9).fill(null); // 3x3 դաշտը

// Ստեղծում ենք վանդակները
cells.forEach((_, index) => {
  const cell = document.createElement("div");
  cell.dataset.index = index; // Վանդակի ինդեքսը
  board.appendChild(cell);

  cell.addEventListener("click", () => makeMove(index, cell));
});

function makeMove(index, cell) {
  if (!cells[index] && !winnerDisplay.textContent) {
    cells[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      winnerDisplay.textContent = `Հաղթեց՝ ${currentPlayer}!`;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X"; // Փոխում ենք խաղացողին
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some(pattern =>
    pattern.every(index => cells[index] === currentPlayer)
  );
}
