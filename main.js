// Query Selectors
var boardContainer = document.querySelector('.board-container');
var playerTurn = document.getElementById('playerTurn');
var winner = document.querySelector('.winner');
var player1Wins = document.getElementById('player1Wins');
var player2wins = document.getElementById('player2wins');
var sections = document.querySelectorAll('.board');
console.log(sections)
// Event Listeners
window.addEventListener('load', function() {
  startNewGame();
  showTurn();
});
boardContainer.addEventListener('click', addToken);
// Event Handlers
function startNewGame() {
  player1 = new Player('player1', '👻');
  player2 = new Player('player2', '🎃');
  newGame = new Game(player1, player2);
  currentGame = newGame;
};

function showTurn() {
  if (currentGame.turn) {
    playerTurn.innerText = `It's ${currentGame.turn.token} turn!`;
  }
};

function addToken() {
  var sectionClicked = event.target;
  if (sectionClicked.innerText === '') {
    sectionClicked.innerText = `${currentGame.turn.token}`
    currentGame.switchTurns();
  }
};
