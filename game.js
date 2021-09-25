class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this.draw = false;
    this.boardSections = ['', '', '', '', '', '', '', ''];
    this.winConditions = [
      [0, 1, 2], [3, 4, 5],
      [6, 7, 8], [0, 4, 8],
      [2, 4, 6], [0, 3, 6],
      [1, 4, 7], [2, 5, 8]
    ];
  }

  switchTurns() {
    if (this.turn === player1) {
      this.turn = player2;
    } else {
      this.turn = player1;
    }
  }
  // makeMove() {
  //   for (var i = 0; i < this.boardSections.length; i++) {
  //     this.boardSections[i] = this.turn.token;
  //     this.switchTurns();
  //     if (this.boardSections[i]) {
  //       return;
  //     }
  //   }
  // }
};
