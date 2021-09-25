// query selectors
var boardContainer = document.querySelector('.board-container');
var playerTurn = document.getElementById('playerTurn');
// event listeners
window.addEventListener('load', function() {
  startNewGame();
  showTurn();
});
boardContainer.addEventListener('click', addToken);





function startNewGame() {
  console.log('page is fully loaded');
  player1 = new Player('player1', '👻');
  player2 = new Player('player2', '🎃');
  newGame = new Game(player1, player2)
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
