import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}
const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell) => {
              return <CellComponent cell={cell} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BoardComponent;
