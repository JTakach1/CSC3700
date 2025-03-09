// App.tsx
import React, { useEffect, useState } from "react";
import TicTacToe from "./TicTacToe";
import ReactBoardView from "./ReactBoardView";

const App = () => {
  const [model, setModel] = useState<TicTacToe | null>(null);
  const [view, setView] = useState<ReactBoardView | null>(null);

  // Initialize the game model and view when the component mounts
  useEffect(() => {
    const gameModel = new TicTacToe();
    const boardView = new ReactBoardView();
    gameModel.setView(boardView); // Set the view for the model
    boardView.display(gameModel); // Display the game model
    setModel(gameModel);
    setView(boardView);
  }, []);

  // Bind the Board method to render the game
  const Board = view?.Board.bind(view);

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      {Board && <Board />}
    </div>
  );
};

export default App;
