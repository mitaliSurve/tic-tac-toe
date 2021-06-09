import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default Board;
