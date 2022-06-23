import React from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
}

const CellComponent: React.FC<CellProps> = ({ cell }) => {
  console.log(cell.figure?.logo);

  return (
    <div className={["cell", cell.color].join(" ")}>
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};

export default CellComponent;
