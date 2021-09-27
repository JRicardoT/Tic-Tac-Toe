class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this.draw = false;
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
    console.log(this.boardSections);
  }
  checkForWinConditions(boardSections, token) {
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
      var player1 = this.checkForWinConditions(this.boardSections, this.player1.token);
      var player2 = this.checkForWinConditions(this.boardSections, this.player2.token);
    }
    if (player1) {
      this.player1.winner = true;
      console.log('PLayer1 wins;',this.player1.winner)
      this.player1.wins += 1;
      console.log('Player 1 #wins;',this.player1.wins)
      return true;
    } else if (player2) {
      this.player2.winner = true;
      console.log('PLayer2 wins;', this.player2.winner)
      this.player2.wins += 1;
      console.log('Player 2 #wins;', this.player2.wins)
      return true;
    } else {
      return false;
    }
  }
};
