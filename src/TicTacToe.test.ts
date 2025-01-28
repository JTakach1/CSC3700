import TicTacToe from "./TicTacToe";

describe("TicTacToe", () => {
  let game: TicTacToe;

  beforeEach(() => {
    game = new TicTacToe();
  });

  test("Empty Board and Start with X", () => {
    expect(game.getPlayer(0, 0)).toBe("");
    expect(game.getPlayer(1, 1)).toBe("");
    expect(game.getPlayer(2, 2)).toBe("");
    expect(game["currentPlayer"]).toBe("X");
  });

  test("Switch Players", () => {
    game.makeMove(0, 0);
    expect(game.getPlayer(0, 0)).toBe("X");
    expect(game["currentPlayer"]).toBe("O");

    game.makeMove(1, 1);
    expect(game.getPlayer(1, 1)).toBe("O");
    expect(game["currentPlayer"]).toBe("X");
  });

  test("Validate Moves", () => {
    expect(game.isValidMove(0, 0)).toBe(true);
    game.makeMove(0, 0);
    expect(game.isValidMove(0, 0)).toBe(false);
    expect(game.isValidMove(1, 1)).toBe(true);
  });

  test("Error For Invalid Moves", () => {
    expect(() => game.makeMove(0, 0)).not.toThrow();
    expect(() => game.makeMove(0, 0)).toThrow("Invalid move.");
  });

  test("Win for X", () => {
    game.makeMove(0, 0); // X
    game.makeMove(1, 0); // O
    game.makeMove(0, 1); // X
    game.makeMove(1, 1); // O
    game.makeMove(0, 2); // X
    expect(game.playerWin()).toBe("X");
  });

  //  O X
  //  X
  //X O

  test("Draw", () => {
    game.makeMove(0, 0); // X
    game.makeMove(1, 1); // O
    game.makeMove(0, 2); // X
    game.makeMove(0, 1); // O
    game.makeMove(2, 1); // X
    game.makeMove(2, 0); // O
    game.makeMove(2, 2); // X
    game.makeMove(1, 2); // O
    game.makeMove(1, 0); // X
    expect(game.isDraw()).toBe(true);
  });

  //O X X
  //X O O
  //X X O

  test("No Winner", () => {
    game.makeMove(0, 0); // X
    game.makeMove(1, 0); // O
    game.makeMove(2, 0); // X
    expect(game.playerWin()).toBe("");
  });

  test("Reset Game", () => {
    game.makeMove(0, 0); // X
    expect(game.getPlayer(0, 0)).toBe("X");
    game.newGame();
    expect(game.getPlayer(0, 0)).toBe("");
    expect(game["currentPlayer"]).toBe("X");
  });
});
