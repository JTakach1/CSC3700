import TTTModel from "./TicTacToe";
import { Dispatch, SetStateAction, useState } from "react";

export default class ReactBoardView {
  private model: TTTModel | null;
  private setModel: Dispatch<SetStateAction<null | TTTModel>>;

  constructor() {
    // Initialize state for the model
    [this.model, this.setModel] = useState(null as null | TTTModel);
  }

  display(m: TTTModel) {
    this.setModel(m);
  }

  // This function renders the Tic-Tac-Toe board as JSX
  Board(props: any) {
    return (
      <table id="board">
        <tbody>
          {this.model?.board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => {
                    if (this.model?.isValidMove(rowIndex, colIndex)) {
                      this.model.makeMove(rowIndex, colIndex);
                      this.display(this.model);
                    }
                  }}
                  className={cell ? `cell ${cell}` : "cell"}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
