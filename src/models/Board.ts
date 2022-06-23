import { Figure } from "./figures/Figure";
import { Colors } from "./Colors";
import { Cell } from "./Cell";
import { Queen } from "./figures/Queen";
import { Pawn } from "./figures/Pawn";

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

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addKings() {}

  private addQueens() {}

  private addBishops() {}

  private addKnights() {}

  private addRook() {}

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addKnights();
    this.addRook();
  }
}
