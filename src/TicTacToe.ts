class TicTacToe {
  private board: string[][];
  private currentPlayer: string;

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.currentPlayer = "X";
  }

  // is this what the addplayer should look like?
  addPlayer(player: string) {
    if (player !== "X" && player !== "O") {
      throw new Error('Player must be "X" or "O".');
    }
    this.currentPlayer = player;
  }

  isValidMove(row: number, col: number): boolean {
    return (
      row >= 0 && row < 3 && col >= 0 && col < 3 && this.board[row][col] === ""
    );
  }

  playerWin(): string {
    for (let i = 0; i < 3; i++) {
      //. X .
      //. X .
      //. X .
      if (
        this.board[i][0] !== "" &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        return this.board[i][0];
      }

      //. . .
      //X X X
      //. . .
      if (
        this.board[0][i] !== "" &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        return this.board[0][i];
      }
    }

    //. . X
    //. X .
    //X . .
    if (
      this.board[0][0] !== "" &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      return this.board[0][0];
    }

    //X . .
    //. X .
    //. . X
    if (
      this.board[0][2] !== "" &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      return this.board[0][2];
    }
    return "";
  }

  isDraw(): boolean {
    return this.board.every(
      (row) => row.every((cell) => cell !== "") && this.playerWin() === ""
    );
  }

  makeMove(row: number, col: number) {
    if (!this.isValidMove(row, col)) {
      throw new Error("Invalid move.");
    }
    this.board[row][col] = this.currentPlayer;

    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }

  getPlayer(row: number, col: number): string {
    return this.board[row][col];
  }

  newGame(): void {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.currentPlayer = "X";
  }
}

export default TicTacToe;
