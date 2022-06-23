import { Figure } from "./figures/Figure";
import { Colors } from "./Colors";
import { Cell } from "./Cell";
import { Queen } from "./figures/Queen";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //Black Cells
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); //White Cells
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    new Queen(Colors.BLACK, this.getCell(3, 3));
  }
}
