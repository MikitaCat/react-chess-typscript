import React, { useEffect } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { useState } from "react";
import { Cell } from "../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}
const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    hilightCells();
  }, [selectedCell]);

  function hilightCells() {
    board.hilightCell(selectedCell);
    updateBoard();
  }

  //Board rerendering
  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell) => {
              return (
                <CellComponent
                  cell={cell}
                  key={cell.id}
                  selected={
                    cell.x === selectedCell?.x && cell.y === selectedCell?.y
                  }
                  click={click}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BoardComponent;
