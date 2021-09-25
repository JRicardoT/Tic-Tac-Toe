class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.winner = false;
  }
  saveWinsToStorage() {
    var wins = JSON.stringify(this.wins)
    localStorage.setItem(`${this.id}-wins`, wins)
  }
  retrieveWinsFromStorage() {

  }
}
