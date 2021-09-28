// Query Selectors
var boardContainer = document.querySelector('.board-container');
var playerTurn = document.getElementById('playerTurn');
var winner = document.querySelector('.winner');
var player1Wins = document.getElementById('player1Wins');
var player2wins = document.getElementById('player2wins');
var sections = document.querySelectorAll('.board');
// Event Listeners
window.addEventListener('load', function() {
  startNewGame();
  showTurn();
  displayWins();
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
  var sectionClickedId = parseInt(event.target.id);
  if (sectionClicked.innerText === '') {
    sectionClicked.innerText = `${currentGame.turn.token}`;
    currentGame.updateBoardSections(sectionClickedId);
    currentGame.switchTurns();
    showTurn();
  }
  checkCurrentGameStatus();
};

function declareWinner() {
  if (currentGame.player1.winner) {
    winner.innerText = `${currentGame.player1.token} wins!`;
    hide(playerTurn);
    show(winner);
    currentGame.player1.saveWinsToStorage();
    setTimeout(resetBoard, 1500);
  } else if (currentGame.player2.winner) {
    winner.innerText = `${currentGame.player2.token} wins!`;
    hide(playerTurn);
    show(winner);
    currentGame.player2.saveWinsToStorage();
    setTimeout(resetBoard, 1500);
  }
};

function displayWins() {
  player1Wins.innerText = currentGame.player1.retrieveWinsFromStorage();
  player2wins.innerText = currentGame.player2.retrieveWinsFromStorage();
};

function declareDraw() {
  if (currentGame.draw) {
    winner.innerText = 'It\s a draw!';
    hide(playerTurn);
    show(winner);
    setTimeout(resetBoard, 1500);
  }
};

function resetBoard() {
  for (var i = 0; i < sections.length; i++) {
    sections[i].innerText = '';
  }
  currentGame.player1.winner = false;
  currentGame.player2.winner = false;
  currentGame.turnCounter = 0
  currentGame.draw = false;
  currentGame.boardSections = ['', '', '', '', '', '', '', '', ''];
  hide(winner);
  show(playerTurn);
  displayWins();
};

function checkCurrentGameStatus() {
  currentGame.checkForDraw();
  currentGame.checkForWinner();
  declareDraw();
  declareWinner();
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};
