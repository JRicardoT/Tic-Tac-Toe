class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this.draw = false;
    this.turnCounter = 0
    this.boardSections = ['', '', '', '', '', '', '', '', ''];
  }

  switchTurns() {
    if (this.turn === player1) {
      this.turn = player2;
    } else {
      this.turn = player1;
    }
  }
  updateBoardSections(sectionClickedId) {
    this.boardSections[sectionClickedId] = this.turn.token;
    this.turnCounter += 1;
  }
  checkForWinConditions(boardSections, token) {
    // This is a BEAST of an if statement, I'm sure there's an easier way to do this.
    // Can't think of one off the top of my head but we can slightly simplify it by doing this
    // (boardSections[0] && boardSections[1] && boardSections[2]) === token
    // ...etc/
    // That way you don't need to type token more than once on each line
    if (
      boardSections[0] === token && boardSections[1] === token && boardSections[2] === token ||
      boardSections[3] === token && boardSections[4] === token && boardSections[5] === token ||
      boardSections[6] === token && boardSections[7] === token && boardSections[8] === token ||
      boardSections[0] === token && boardSections[3] === token && boardSections[6] === token ||
      boardSections[1] === token && boardSections[4] === token && boardSections[7] === token ||
      boardSections[2] === token && boardSections[5] === token && boardSections[8] === token ||
      boardSections[0] === token && boardSections[4] === token && boardSections[8] === token ||
      boardSections[2] === token && boardSections[4] === token && boardSections[6] === token
    ) {
      return true;
    } else {
      return false;
    }
  }
  checkForWinner() {
    for (var i = 0; i < this.boardSections.length; i++) {
      // The naming is confusing here. It's indicating a player when it's actually a
      // boolean value. Rename to something like 'player1Won' makes it easier to read
      var player1 = this.checkForWinConditions(this.boardSections, this.player1.token);
      console.log("winner is", player1)
      var player2 = this.checkForWinConditions(this.boardSections, this.player2.token);
    }
    // This reads as if player1 exists instead update to:
    // if 'player1Won'
    if (player1) {
      this.player1.winner = true;
      this.player1.wins += 1;
      return true;
      // otherwise if 'player2won'
    } else if (player2) {
      this.player2.winner = true;
      this.player2.wins += 1;
      return true;
    } else {
      return false;
    }
  }
  checkForDraw() {
    if (currentGame.turnCounter === 9 && !this.checkForWinner()) {
      this.draw = true;
    }
  }
};
