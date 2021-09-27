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
      playerTurn.innerText = `It's ${this.turn.token} turn!`
    }
  }
};
