import React, { useState } from "react";
import styles from "./gametwo.module.css";
import Square from "./Square";
import Button from "./Button";
import { CalculateWinner, isBoardFull } from "./CalculateWinner";

// let squares = Array(9).fill(null);

const boardSize = ["3", "4", "5", "6"];

const Game = () => {
  const [selectBoardSize, setSelectBoardSize] = useState(3);

  const [squares, setSquares] = useState(Array(3).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextPlayer = isXNext ? "X" : "O";
  const winner = CalculateWinner(squares);

  const ChangeGrid = (e) => {
    setSelectBoardSize(Number(e.target.value));
    setSquares(selectBoardSize);
  };
  console.log(
    selectBoardSize,
    "==================================================Fruit Selected!!"
  );

  const getStatus = () => {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull(squares)) {
      // console.log(squares, "=================squares");
      return "Draw!";
    } else {
      return "Next player: " + nextPlayer;
    }
  };

  // const renderSquare = (row, column) => {
  //   return (
  //     <Square
  //       onClick={() => {
  //         const newBoard = Array(squares).slice();
  //         // newBoard[row] = [...newBoard[row],newBoard[row][column]]
  //         console.log(newBoard, '============new board');
  //         // if (newBoard[row][column]) {
  //         //   newBoard[row][column] = nextPlayer;
  //         // }
  //       }}
  //     />
  //   );
  // };

  const renderSquare = (index, subIndex) => {
    console.log(index, subIndex, "==============index, subIndex");
    return (
      <Square
        // value={Array(squares[index][subIndex])}
        onClick={() => {
          // if (squares[index][subIndex] != null || winner != null) {
          //   return;
          // }
          const nextSquares = Array(squares).slice();
          console.log(nextSquares, "==============nextSquares");
          nextSquares[index] = nextPlayer;

          setSquares(nextSquares);

          setIsXNext(!isXNext); // toggle turns
        }}
      />
    );
  };

  const restartButton = () => {
    return (
      <Button
        onClick={() => {
          setSquares(Array(3).fill(null));
          setIsXNext(true);
        }}
      />
    );
  };
  console.log(
    [...Array(boardSize).keys()],
    "====================================mmmmm"
  );

  return (
    <>
      <div className={styles.container}>
        {[...Array(selectBoardSize).keys()].map((itemOne) => (
          <div className={styles.game}>
            {[...Array(selectBoardSize).keys()].map((itemTwo) => (
              <div className={styles.board_row} key={itemTwo}>
                {renderSquare(itemOne, itemTwo)}
              </div>
            ))}
            {/* <div className={styles.board_row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className={styles.board_row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className={styles.board_row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div> */}
          </div>
        ))}
      </div>

      <button className={styles.restart_button}>{restartButton()}</button>
      <div>
        <button className={styles.game_info}>{getStatus()}</button>
      </div>

      <p>Choose board size:</p>
      <select value={selectBoardSize} onChange={ChangeGrid}>
        {boardSize.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Game;
